"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { api } from "@/trpc/react";
import { Loader } from "lucide-react";
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

  const onSubmit = (data: FormInput) => {
    // window.alert(JSON.stringify(data));
    createProject.mutate(
      {
        name: data.projectName,
        githubUrl: data.repoUrl,
        githubToken: data.githubToken,
      },
      {
        onSuccess: () => {
          toast.success("Project created successfully");
          reset();
        },
        onError: (error) => {
          toast.error("Failed to create project");
        },
      },
    );
    return true;
  };

  return (
    <div className="flex h-full items-center justify-center gap-12">
      {/* <img src="/create-proj.jpg" alt="create-proj" className="h-50 w-auto"/> */}
      <img src="/create-proj.jpg" alt="create-proj" className="h-40 w-40" />
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
            <div className="h-4"></div>
            <Button type="submit" disabled={createProject.isPending}>
              {createProject.isPending && (
                <Loader className="mr-2 animate-spin" />
              )}
              Create Project
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatePage;
