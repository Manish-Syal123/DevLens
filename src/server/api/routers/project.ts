import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../trpc";

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
      return project;
    }),
});

// so this "protectedProcedure" is used to check if the user is authenticated or not
//if he is not authenticated then he will be redirected to the login page
//and if he is authenticated then he will be allowed to access the api and the input will be passed to the createProject function from the frontend(create/page.tsx) like name, githubUrl and githubToken using "api.project.createProject.useMutation();"
// this projectRouter(function) route is registered in the api/root.ts file
