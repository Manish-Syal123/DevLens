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
      console.log("input", input);
      return true;
    }),
});

// so this "protectedProcedure" is used to check if the user is authenticated or not
//if he is not authenticated then he will be redirected to the login page
//and if he is authenticated then he will be allowed to access the api and the input will be passed to the createProject function from the frontend(create/page.tsx) like name, githubUrl and githubToken using "api.project.createProject.useMutation();"
// this projectRouter(function) route is registered in the api/root.ts file
