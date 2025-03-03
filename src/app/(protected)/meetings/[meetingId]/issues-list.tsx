"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { api, RouterOutputs } from "@/trpc/react";
import { LoaderCircle, Rabbit, VideoIcon } from "lucide-react";
import React from "react";

type Props = {
  meetingId: string;
};

const IssuesList = ({ meetingId }: Props) => {
  const { data: meeting, isLoading } = api.project.getMeetingById.useQuery(
    { meetingId },
    {
      refetchInterval: 4000,
    },
  );
  if (isLoading || !meeting)
    return (
      <div className="mt-[6.5rem] flex flex-col items-center justify-center gap-3">
        <LoaderCircle size={40} className="animate-spin text-primary" />
        <h1 className="text-xl text-gray-600">
          DevLens is fetching details of This Meeting.
        </h1>
        <h1 className="animate-pulse text-lg text-gray-500">Please wait...</h1>
      </div>
    );
  if (!meeting.issues.length && !isLoading)
    return (
      <div className="mt-[6.5rem] flex flex-col items-center gap-2">
        <Rabbit size={90} />
        <span className="text-xl font-bold text-gray-500">
          No Issues found !
        </span>
      </div>
    );
  return (
    <>
      <div className="p-8">
        <div className="max-auto flex max-w-2xl items-center justify-between gap-x-8 border-b-2 pb-6 lg:mx-0 lg:max-w-none">
          <div className="flex items-center gap-x-6">
            <div
              className="rounded-full border bg-white p-3"
              style={{ boxShadow: "0 0 10px 2px rgba(0, 0, 0, 0.1)" }}
            >
              <VideoIcon className="h-6 w-6" />
            </div>
            <h1>
              <div className="text-sm leading-6 text-gray-600">
                Meeting on {meeting.createdAt.toDateString()}
              </div>
              <div className="mt-1 text-base font-semibold leading-6 text-gray-900">
                {meeting.name}
              </div>
            </h1>
          </div>
        </div>
        <div className="h-4"></div>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
          {meeting.issues.map((issue) => (
            <IssueCard key={issue.id} issue={issue} />
          ))}
        </div>
      </div>
    </>
  );
};

function IssueCard({
  issue,
}: {
  issue: NonNullable<
    RouterOutputs["project"]["getMeetingById"]
  >["issues"][number];
}) {
  const [open, setOpen] = React.useState<boolean>(false);
  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{issue.gist}</DialogTitle>
            <DialogDescription>
              {issue.createdAt.toLocaleDateString()}
            </DialogDescription>
            <p className="text-gray-600">{issue.headline}</p>
            <blockquote className="mt-2 border-l-4 border-gray-300 bg-gray-50 p-4">
              <span className="text-sm text-gray-600">
                {issue.start} - {issue.end}
              </span>
              <p className="font-medium italic leading-relaxed text-gray-900">
                {issue.summary}
              </p>
            </blockquote>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      <Card
        className="relative"
        style={{ boxShadow: "0 0 5px 2px rgba(0, 0, 0, 0.1)" }}
      >
        <CardHeader>
          <CardTitle className="text-xl">{issue.gist}</CardTitle>
          <div className="border-b"></div>
          <CardDescription>{issue.headline}</CardDescription>
        </CardHeader>
        <CardContent>
          <Button onClick={() => setOpen(true)}>Details</Button>
        </CardContent>
      </Card>
    </>
  );
}
export default IssuesList;
