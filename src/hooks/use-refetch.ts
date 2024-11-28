import { useQueryClient } from "@tanstack/react-query";
import React, { use } from "react";

const useRefetch = () => {
  const queryClient = useQueryClient();
  return async () => {
    await queryClient.refetchQueries({
      type: "active",
    });
  };
};

export default useRefetch;

// whenever this useRefetch hook is called, it will refetch all "active queries"(An active query is one currently in use by your React components (i.e., being watched). )
// for example, when you create a new project, it will refetch the list of projects
// it will go to use-project.ts and call api.project.getProjects.useQuery(); which will update the frontend component (app-sidebar.tsx)
