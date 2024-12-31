"use client";
import useProject from "@/hooks/use-project";
import { cn } from "@/lib/utils";
import { api } from "@/trpc/react";
import { ExternalLink, LoaderCircle, Rabbit } from "lucide-react";
import Link from "next/link";
import React from "react";

const CommitLog = () => {
  const { project, projectId } = useProject();
  const { data: commits, isLoading } = api.project.getCommits.useQuery({
    projectId,
  });

  return (
    <>
      <ul className="space-y-6">
        {isLoading && (
          <div className="mt-[6.5rem] flex flex-col items-center justify-center gap-3">
            <LoaderCircle size={40} className="animate-spin text-primary" />
            <h1 className="text-xl text-gray-600">
              DevLens is fetching commits-log for this project.
            </h1>
            <h1 className="animate-pulse text-lg text-gray-500">
              Please wait...
            </h1>
          </div>
        )}
        {commits?.length === 0 && !isLoading && (
          <div className="mt-[6.5rem] flex flex-col items-center gap-2">
            <Rabbit size={90} />
            <span className="text-xl font-bold text-gray-500">
              No Questions found !
            </span>
          </div>
        )}
        {commits?.map((commit, commitIdx) => {
          return (
            <li key={commitIdx} className="relative flex gap-x-4">
              <div
                className={cn(
                  commitIdx === commits.length - 1 ? "h-6" : "-bottom-6",
                  "absolute left-0 top-0 flex w-6 justify-center",
                )}
              >
                <div className="w-px translate-x-1 bg-gray-300"></div>
              </div>
              <>
                <img
                  src={commit.commitAuthorAvatar}
                  alt={commit.commitAuthorName}
                  className="relative mt-4 size-8 flex-none rounded-full bg-gray-50"
                />
                <div className="flex-auto rounded-xl bg-white p-3 ring-1 ring-inset ring-gray-200 hover:shadow-md hover:ring-gray-300">
                  <div className="flex justify-between gap-x-4">
                    <Link
                      href={`${project?.githubUrl}/commits/${commit.commitHash}`}
                      target="_blank"
                      className="py-0.5 text-xs leading-5 text-gray-500"
                    >
                      <span className="font-medium text-gray-900">
                        {commit.commitAuthorName}
                      </span>{" "}
                      <span className="inline-flex items-center hover:font-bold hover:text-primary">
                        commited <ExternalLink className="ml-1 size-4" />{" "}
                      </span>
                    </Link>
                  </div>
                  <span className="font-semibold">{commit.commitMessage}</span>
                  <pre className="mt-2 whitespace-pre-wrap text-sm leading-6 text-gray-500">
                    {commit.summary}
                  </pre>
                </div>
              </>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default CommitLog;
