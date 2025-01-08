"use client";
import React from "react";
import { api } from "@/trpc/react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { toast } from "sonner";
import useRefetch from "@/hooks/use-refetch";
import Link from "next/link";
import {
  ArchiveRestore,
  ExternalLink,
  Github,
  Loader2,
  LoaderCircle,
  Rabbit,
  Trash2,
} from "lucide-react";
import useProject from "@/hooks/use-project";

const ArchiveProjects = () => {
  const [loading, setLoading] = React.useState(false);
  const {
    data: archieProjects,
    isLoading,
    error,
  } = api.project.getArchivedProjects.useQuery();
  if (error) {
    toast.error(error.message);
  }
  const DeleteProject = api.project.deleteArchivedProject.useMutation({
    onSuccess: () => {
      toast.success("Project deleted successfully!");
      setLoading(false);
      refetch();
    },
    onError: (error) => {
      toast.error("Failed to delete project!");
      setLoading(false);
    },
  });

  const RestoreArchivedProject = api.project.restoreArchivedProject.useMutation(
    {
      onSuccess: () => {
        toast.success("Project restored successfully!");
        setLoading(false);
        refetch();
      },
      onError: (error) => {
        toast.error("Failed to restore project!");
        setLoading(false);
      },
    },
  );
  const refetch = useRefetch();
  return (
    <>
      <h1 className="text-xl font-semibold">Archive Projects</h1>
      <div className="h-2"></div>
      {isLoading && (
        <div className="mt-[6.5rem] flex flex-col items-center justify-center gap-3">
          <LoaderCircle size={40} className="animate-spin text-primary" />
          <h1 className="text-xl text-gray-600">Fetching Archived Projects</h1>
          <h1 className="animate-pulse text-lg text-gray-500">
            Please wait...
          </h1>
        </div>
      )}
      {archieProjects?.length === 0 && !isLoading && (
        <div className="mt-[6rem] flex flex-col items-center gap-2">
          <Rabbit size={90} />
          <span className="text-xl font-bold text-gray-500">
            Archive is empty !
          </span>
        </div>
      )}
      <ul className="divide-y divide-gray-200">
        {archieProjects?.map((project) => (
          <li
            key={project.id}
            className="my-4 flex items-center justify-between gap-x-6 rounded-lg border px-4 pb-2 shadow-sm hover:bg-gray-100"
          >
            <div>
              <div className="min-w-0">
                <div className="flex flex-col gap-x-4">
                  <h2 className="text-base font-semibold">{project.name}</h2>
                  <div className="w-fit rounded-lg bg-primary px-4 py-3">
                    <div className="flex items-center">
                      <Github className="size-5 text-white" />
                      <div className="ml-2">
                        <p className="text-sm font-medium text-white">
                          This project is linked to{" "}
                          <Link
                            href={project?.githubUrl ?? ""}
                            target="_blank"
                            className="inline-flex items-center text-white/80 hover:underline"
                          >
                            {project?.githubUrl}
                            <ExternalLink className="ml-1 size-4" />
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-none items-center gap-x-8">
              {/* Dates */}
              <div className="flex items-center gap-x-2 text-sm text-gray-500">
                <p className="whitespace-nowrap">
                  <span className="text-sm text-gray-800">Created at :</span>{" "}
                  {project?.createdAt.toLocaleDateString()}
                </p>
                <span className="md:hidden">|</span>
                <p className="whitespace-nowrap">
                  <span className="text-sm text-gray-800">Archived on :</span>{" "}
                  {project?.deletedAt?.toLocaleDateString()}
                </p>
              </div>
              {/* Action buttons */}
              <TooltipProvider>
                <Tooltip delayDuration={100}>
                  {/* Restore Archived Project */}
                  <TooltipTrigger
                    disabled={loading}
                    onClick={() => {
                      RestoreArchivedProject.mutate({
                        projectId: project.id,
                      });
                      setLoading(true);
                    }}
                  >
                    {loading ? (
                      <Loader2 size={20} color="green" />
                    ) : (
                      <ArchiveRestore size={20} color="green" />
                    )}
                  </TooltipTrigger>
                  <TooltipContent>
                    {loading ? <p>Restoring...</p> : <p>Restore project</p>}
                  </TooltipContent>
                </Tooltip>
                <Tooltip delayDuration={100}>
                  {/* Delete Archived Project */}
                  <TooltipTrigger
                    disabled={loading}
                    onClick={() => {
                      DeleteProject.mutate({
                        projectId: project.id,
                      });
                      setLoading(true);
                    }}
                  >
                    {loading ? (
                      <Loader2 size={20} color="red" />
                    ) : (
                      <Trash2 size={20} color="red" />
                    )}
                  </TooltipTrigger>

                  <TooltipContent>
                    {loading ? <p>Deleting...</p> : <p>Delete project</p>}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ArchiveProjects;
