import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../trpc";
import { pollCommits } from "@/lib/github";

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
      // if this function is called means the user is authenticated and the input type(datatype) is correct(valid)
      //creating the project in the database
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
      await pollCommits(project.id);
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
        deletedAt: null,
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
});

// so this "protectedProcedure" is used to check if the user is authenticated or not
//if he is not authenticated then he will be redirected to the login page
//and if he is authenticated then he will be allowed to access the api and the input will be passed to the createProject function from the frontend(create/page.tsx) like name, githubUrl and githubToken using "api.project.createProject.useMutation();"
// this projectRouter(function) route is registered in the api/root.ts file
