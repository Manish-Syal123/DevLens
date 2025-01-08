import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../trpc";
import { pollCommits } from "@/lib/github";
import { checkCredits, indexGithubRepo } from "@/lib/github-loader";
import { TRPCError } from "@trpc/server";

export const projectRouter = createTRPCRouter({
  createProject: protectedProcedure
    .input(
      z.object({
        name: z.string(),
        githubUrl: z.string(),
        githubToken: z.string().optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const user = await ctx.db.user.findUnique({
        where: {
          id: ctx.user.userId!,
        },
        select: {
          credits: true,
        },
      });

      if (!user) {
        throw new Error("User not found");
      }
      const currentCredits = user.credits || 0;
      const fileCount = await checkCredits(input.githubUrl, input.githubToken);

      if (fileCount > currentCredits) {
        throw new Error("Not enough credits");
      }
      const project = await ctx.db.project.create({
        data: {
          name: input.name,
          githubUrl: input.githubUrl,
          userToProjects: {
            create: {
              userId: ctx.user.userId!,
            },
          },
        },
      });
      await indexGithubRepo(project.id, input.githubUrl, input.githubToken);
      await pollCommits(project.id);
      await ctx.db.user.update({
        where: {
          id: ctx.user.userId!,
        },
        data: {
          credits: currentCredits - fileCount,
        },
      });
      return project;
    }),

  // getting all the projects from the project table based on the userId from the userToProjects table
  getProjects: protectedProcedure.query(async ({ ctx }) => {
    const projects = await ctx.db.project.findMany({
      where: {
        userToProjects: {
          some: {
            userId: ctx.user.userId!,
          },
        },
        deletedAt: null, // only return projects that are not deleted, means projects whose deletedAt is null
      },
    });
    return projects;
  }),
  getCommits: protectedProcedure
    .input(z.object({ projectId: z.string() }))
    .query(async ({ ctx, input }) => {
      const commits = await ctx.db.commit.findMany({
        where: {
          projectId: input.projectId,
        },
      });
      pollCommits(input.projectId)
        .then()
        .catch((err) => console.log(err)); // every time we fetch the comit from the db, we check if there are any new commit in github
      return commits;
    }),
  saveAnswer: protectedProcedure
    .input(
      z.object({
        projectId: z.string(),
        question: z.string(),
        answer: z.string(),
        filesReferences: z.any(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return await ctx.db.question.create({
        data: {
          answer: input.answer,
          filesReferences: input.filesReferences,
          projectId: input.projectId,
          question: input.question,
          userId: ctx.user.userId!,
        },
      });
    }),
  getQuestions: protectedProcedure
    .input(z.object({ projectId: z.string() }))
    .query(async ({ ctx, input }) => {
      return await ctx.db.question.findMany({
        where: {
          projectId: input.projectId,
        },
        include: {
          user: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      });
    }),
  uploadMeeting: protectedProcedure
    .input(
      z.object({
        projectId: z.string(),
        meetingUrl: z.string(),
        name: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const meeting = await ctx.db.meeting.create({
        data: {
          meetingUrl: input.meetingUrl,
          name: input.name,
          projectId: input.projectId,
          status: "PROCESSING",
        },
      });

      return meeting;
    }),
  getMeetings: protectedProcedure
    .input(z.object({ projectId: z.string() }))
    .query(async ({ ctx, input }) => {
      return await ctx.db.meeting.findMany({
        where: {
          projectId: input.projectId,
        },
        include: {
          issues: true,
        },
      });
    }),
  deleteMeeting: protectedProcedure
    .input(z.object({ meetingId: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return await ctx.db.meeting.delete({
        where: {
          id: input.meetingId,
        },
      });
    }),
  getMeetingById: protectedProcedure
    .input(z.object({ meetingId: z.string() }))
    .query(async ({ ctx, input }) => {
      return await ctx.db.meeting.findUnique({
        where: {
          id: input.meetingId,
        },
        include: {
          issues: true,
        },
      });
    }),
  archiveProject: protectedProcedure
    .input(z.object({ projectId: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return await ctx.db.project.update({
        where: {
          id: input.projectId,
        },
        data: {
          deletedAt: new Date(), //read the getProjects route comment above, as there deletedAt field is null
        },
      });
    }),
  getArchivedProjects: protectedProcedure.query(async ({ ctx }) => {
    return await ctx.db.project.findMany({
      where: {
        deletedAt: {
          not: null,
        },
      },
    });
  }),
  getTeamMembers: protectedProcedure
    .input(z.object({ projectId: z.string() }))
    .query(async ({ ctx, input }) => {
      return await ctx.db.userToProject.findMany({
        where: {
          projectId: input.projectId,
        },
        include: {
          user: true,
        },
      });
    }),
  getMyCredits: protectedProcedure.query(async ({ ctx }) => {
    return await ctx.db.user.findUnique({
      where: {
        id: ctx.user.userId!,
      },
      select: {
        credits: true,
      },
    });
  }),
  checkCredits: protectedProcedure
    .input(
      z.object({ githubUrl: z.string(), githubToken: z.string().optional() }),
    )
    .mutation(async ({ ctx, input }) => {
      const fileCount = await checkCredits(input.githubUrl, input.githubToken);
      const userCredits = await ctx.db.user.findUnique({
        where: {
          id: ctx.user.userId!,
        },
        select: {
          credits: true,
        },
      });
      return { fileCount, userCredits: userCredits?.credits || 0 };
    }),
  getPaymentHistory: protectedProcedure.query(async ({ ctx }) => {
    return await ctx.db.stripeTransaction.findMany({
      where: {
        userId: ctx.user.userId!,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }),
  deleteArchivedProject: protectedProcedure
    .input(
      z.object({
        projectId: z.string().min(1, "Project ID is required"),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const { projectId } = input;

      // Verify the project exists and is archived
      const project = await ctx.db.project.findUnique({
        where: { id: projectId },
      });

      if (!project) {
        throw new Error("Project not found");
      }

      if (!project.deletedAt) {
        throw new Error("Project is not archived");
      }

      // Delete related records (e.g., UserToProject, Commits, SourceCodeEmbeddings, etc.)
      await ctx.db.userToProject.deleteMany({
        where: { projectId },
      });

      await ctx.db.commit.deleteMany({
        where: { projectId },
      });

      await ctx.db.sourceCodeEmbedding.deleteMany({
        where: { projectId },
      });

      await ctx.db.question.deleteMany({
        where: { projectId },
      });

      await ctx.db.meeting.deleteMany({
        where: { projectId },
      });

      // Finally, delete the project itself
      await ctx.db.project.delete({
        where: { id: projectId },
      });

      return { message: "Project deleted successfully" };
    }),
  restoreArchivedProject: protectedProcedure
    .input(
      z.object({
        projectId: z.string().min(1, "Project ID is required"),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const { projectId } = input;

      // // Verify the project exists and is archived
      // const project = await ctx.db.project.findUnique({
      //   where: { id: projectId },
      // });

      // if (!project) {
      //   throw new Error("Project not found");
      // }

      // if (project.deletedAt) {
      //   throw new Error("Project is not archived");
      // }

      // Restore the project

      return await ctx.db.project.update({
        where: { id: projectId },
        data: {
          deletedAt: null,
        },
      });
    }),
});

// so this "protectedProcedure" is used to check if the user is authenticated or not
//if he is not authenticated then he will be redirected to the login page
//and if he is authenticated then he will be allowed to access the api and the input will be passed to the createProject function from the frontend(create/page.tsx) like name, githubUrl and githubToken using "api.project.createProject.useMutation();"
// this projectRouter(function) route is registered in the api/root.ts file
