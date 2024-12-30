"use client";
import useProject from "@/hooks/use-project";
import { api } from "@/trpc/react";
import React from "react";
import MeetingCard from "../dashboard/meeting-card";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { CheckCheck, CircleCheck, Loader2, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { toast } from "sonner";
import useRefetch from "@/hooks/use-refetch";

const MeetingsPage = () => {
  const { projectId } = useProject();
  const { data: meetings, isLoading } = api.project.getMeetings.useQuery(
    { projectId },
    {
      refetchInterval: 4000,
    },
  );

  const deleteMeeting = api.project.deleteMeeting.useMutation();
  const refetch = useRefetch();
  return (
    <>
      <MeetingCard />
      <div className="h-6"></div>
      <h1 className="text-2xl font-semibold">Meetings</h1>
      {meetings && meetings.length === 0 && <div>No meetings found</div>}
      {isLoading && <div>Loading...</div>}
      <ul className="divide-y divide-gray-200">
        {meetings?.map((meeting) => (
          <li
            key={meeting.id}
            className="flex items-center justify-between gap-x-6 px-4 py-5"
          >
            <div>
              <div className="min-w-0">
                <div className="flex items-center gap-x-5">
                  <Link
                    href={`/meetings/${meeting.id}`}
                    className="text-sm font-semibold"
                  >
                    {meeting.name}
                  </Link>
                  {meeting.status === "PROCESSING" && (
                    <Badge
                      className="gap-2 rounded-full bg-yellow-500 text-white"
                      variant={"outline"}
                    >
                      Processing
                      <Loader2 size={15} className="animate-spin" />
                    </Badge>
                  )}
                  {meeting.status === "COMPLETED" && (
                    <CheckCheck
                      size={20}
                      color="green"
                      className="sm:h-10 sm:w-10 lg:h-5 lg:w-5"
                    />
                  )}
                </div>
              </div>

              <div className="flex items-center gap-x-2 text-xs text-gray-500">
                <p className="whitespace-nowrap">
                  {meeting?.createdAt.toLocaleDateString()}
                </p>
                <p className="truncate">{meeting.issues.length} issues</p>
              </div>
            </div>
            <div className="flex flex-none items-center gap-x-4">
              <Link href={`/meetings/${meeting.id}`}>
                <Button
                  variant={"secondary"}
                  className="rounded-lg bg-white text-black ring-1 ring-black hover:rounded-full hover:bg-primary hover:text-white"
                >
                  View Meeting
                </Button>
              </Link>
              <TooltipProvider>
                <Tooltip delayDuration={100}>
                  <TooltipTrigger
                    disabled={deleteMeeting.isPending}
                    onClick={() =>
                      deleteMeeting.mutate(
                        { meetingId: meeting.id },
                        {
                          onSuccess: () => {
                            toast.success("Meeting deleted successfully");
                            refetch();
                          },
                          onError: () => {
                            toast.error("Failed to delete meeting");
                          },
                        },
                      )
                    }
                  >
                    <Trash2 size={20} color="red" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Delete Meeting</p>
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

export default MeetingsPage;
