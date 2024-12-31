import { api } from "@/trpc/react";
import { set } from "date-fns";
import React from "react";
import { useLocalStorage } from "usehooks-ts";

const useProject = () => {
  const { data: projects, isLoading } = api.project.getProjects.useQuery(); // {data: project} => data is returened by useQuery from TCRP and :project is just an alias(rename) of data for better readability, useQuery() returns => data:[], isLoading, isError, refetch
  const [projectId, setProjectId] = useLocalStorage("devlens-projectId", "");
  const project = projects?.find((project) => project.id === projectId);
  return {
    projects, // return all the projects of logged in user
    project, // return the selected project based on the projectId
    projectId,
    setProjectId,
    isLoading,
  };
};

export default useProject;
