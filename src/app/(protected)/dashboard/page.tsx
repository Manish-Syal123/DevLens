"use client";
import useProject from "@/hooks/use-project";
import { ExternalLink, Github, PlusIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import CommitLog from "./commit-log";
import AskQuestionCard from "./ask-question-card";
import MeetingCard from "./meeting-card";
import ArchiveButton from "./archive-button";
const InviteButton = dynamic(() => import("./invite-button"), { ssr: false });
import TeamMembers from "./team-members";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";
import Lottie from "lottie-react";
import lottieworkspace from "../../../../public/lottieworkspace.json";
import { Button } from "@/components/ui/button";

const DashboardPage = () => {
  const { project } = useProject();

  if (!project) {
    return (
      <div className="mb-10 flex flex-col items-center justify-center">
        <Lottie
          animationData={lottieworkspace}
          loop={true}
          alt="workspace"
          className="h-96 w-svw"
        />
        <h2 className="my-6 text-xl font-bold">
          ⚡ Create New Project to Get Started ⚡
        </h2>
        <Link href="/create">
          <Button className="my-3">
            <PlusIcon className="mr-1" /> New Project
          </Button>
        </Link>
      </div>
    );
  }
  return (
    <div className={cn(!project && "hidden")}>
      {/* {project?.id} */}
      <div className="flex flex-wrap items-center justify-between gap-y-4">
        {/* Github Link */}
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
        <div className="h-4"></div>
        <div className="flex items-center gap-4">
          <TeamMembers />
          <InviteButton />
          <ArchiveButton />
        </div>
      </div>
      <div className="mt-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-5">
          <AskQuestionCard />
          <MeetingCard />
        </div>
      </div>
      <div className="mt-8"></div>
      <CommitLog />
    </div>
  );
};

export default DashboardPage;
