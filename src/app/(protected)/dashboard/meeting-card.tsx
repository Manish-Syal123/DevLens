"use client";
import React, { use, useState } from "react";
import { Card } from "@/components/ui/card";
import { useDropzone } from "react-dropzone";
import { uploadFile } from "@/lib/cloudinary";
import { Presentation, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { toast } from "sonner";
import { api } from "@/trpc/react";
import useProject from "@/hooks/use-project";
import { useRouter } from "next/navigation";

const MeetingCard = () => {
  const { project } = useProject();
  const [progress, setProgress] = useState<number>(0);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const router = useRouter();
  const uploadMeeting = api.project.uploadMeeting.useMutation();

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "audio/*": [".mp3", ".wav", ".m4a", ".flac"],
    },
    multiple: false,
    maxSize: 50_000_000,
    onDrop: async (acceptedFiles) => {
      if (!project) return;
      setIsUploading(true);
      const file = acceptedFiles[0];
      if (!file) return;

      const downloadURL = (await uploadFile(
        file as File,
        setProgress,
      )) as string;

      uploadMeeting.mutate(
        {
          projectId: project.id,
          meetingUrl: downloadURL,
          name: file.name,
        },
        {
          onSuccess: () => {
            toast.success("Meeting uploaded successfully");
            router.push("/meetings");
          },
          onError: () => {
            toast.error("Failed to upload meeting");
          },
        },
      );

      setIsUploading(false);
    },
  });
  return (
    <Card
      className="col-span-2 flex flex-col items-center justify-center border-2 border-dashed border-gray-400 p-10"
      {...getRootProps()}
    >
      {!isUploading && (
        <>
          <Presentation className="h-10 w-10 animate-bounce" />
          <h3 className="mt-2 text-sm font-semibold text-gray-900">
            Create a New Meeting
          </h3>
          <p className="mt-t text-center text-sm text-gray-500">
            Analyse your meeting with DevLens <br /> Powered by AI
          </p>
          <div className="mt-6">
            <Button
              disabled={isUploading}
              className="flex items-center text-wrap"
            >
              <Upload className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
              Upload Meeting
              <input className="hidden" {...getInputProps()} />
            </Button>
          </div>
        </>
      )}
      {isUploading && (
        <div>
          <CircularProgressbar
            value={progress}
            text={`${progress}%`}
            className="size-20"
            styles={buildStyles({
              textColor: "#7c3aed",
              pathColor: "#7c3aed",
            })}
          />
          <p className="text-center text-sm text-gray-500">
            Uploading your meeting...
          </p>
        </div>
      )}
    </Card>
  );
};

export default MeetingCard;

//https://res.cloudinary.com/dap5tgvky/video/upload/v1735287219/fojuhhhbfmt94gvn2oa8.mp3
