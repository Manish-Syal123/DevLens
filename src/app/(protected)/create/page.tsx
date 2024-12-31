"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useRefetch from "@/hooks/use-refetch";
import { api } from "@/trpc/react";
import { HandCoins, Info, Loader } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

type FormInput = {
  repoUrl: string;
  projectName: string;
  githubToken?: string;
};
const CreatePage = () => {
  const { register, handleSubmit, reset } = useForm<FormInput>();
  const createProject = api.project.createProject.useMutation();
  const checkCredits = api.project.checkCredits.useMutation();

  const refetch = useRefetch();

  const onSubmit = (data: FormInput) => {
    if (!!checkCredits.data) {
      createProject.mutate(
        {
          name: data.projectName,
          githubUrl: data.repoUrl,
          githubToken: data.githubToken,
        },
        {
          onSuccess: () => {
            toast.success("Project created successfully");
            refetch();
            reset();
          },
          onError: (error) => {
            // if (error.data?.code === "BAD_REQUEST") {
            //   toast.error(error.message);
            // } else {
            toast.error("Failed to create project");
            //}
          },
        },
      );
    } else {
      checkCredits.mutate({
        githubUrl: data.repoUrl,
        githubToken: data.githubToken,
      });
    }
  };

  const hasEnoughCredits = checkCredits?.data?.userCredits
    ? checkCredits.data?.fileCount <= checkCredits.data?.userCredits
    : true;

  return (
    <div className="flex h-full items-center justify-center gap-12">
      {/* <img src="/create-proj.jpg" alt="create-proj" className="h-50 w-auto"/> */}
      {/* <img src="/create-proj.jpg" alt="create-proj" className="h-40 w-40" /> */}
      <img src="/logoSymbol.png" alt="create-proj" className="h-40 w-40" />
      <div>
        <div>
          <h1 className="text-2xl font-semibold">
            Link your Github Repository
          </h1>
          <p className="text-sm text-muted-foreground">
            Enter the URL of your Github Repository to link it with DevLens
          </p>
        </div>
        <div className="h-4"></div>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              {...register("projectName", { required: true })}
              type="text"
              placeholder="Project Name"
              required
            />
            <div className="h-2"></div>
            <Input
              {...register("repoUrl", { required: true })}
              type="url"
              placeholder="Github Repo URL"
              required
            />
            <div className="h-2"></div>
            <Input
              {...register("githubToken")}
              type="text"
              placeholder="Github Token (Optional)"
            />
            {!!checkCredits.data && (
              <>
                <div className="mt-4 rounded-lg border border-orange-200 bg-orange-50 px-4 py-2 text-orange-700">
                  <div className="flex items-center gap-2">
                    <Info className="size-4" />
                    <p className="text-sm">
                      You will be charged{" "}
                      <strong>{checkCredits.data?.fileCount}</strong> credits
                      for this repository
                    </p>
                  </div>
                  <p className="ml-6 text-sm text-blue-600">
                    You have <strong>{checkCredits.data?.userCredits}</strong>{" "}
                    credits left.
                  </p>
                </div>
              </>
            )}
            <div className="h-4"></div>
            <Button
              type="submit"
              disabled={
                createProject.isPending ||
                checkCredits.isPending ||
                !hasEnoughCredits
              }
            >
              {createProject.isPending && (
                <Loader className="mr-2 animate-spin" />
              )}
              {!!checkCredits.data ? (
                "Create Project"
              ) : (
                <>
                  Check Credits
                  <HandCoins className="ml-1" />
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatePage;
