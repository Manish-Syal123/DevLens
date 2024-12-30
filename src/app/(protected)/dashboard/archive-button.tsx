"use client";
import { Button } from "@/components/ui/button";
import { api } from "@/trpc/react";
import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import useProject from "@/hooks/use-project";
import { toast } from "sonner";
import useRefetch from "@/hooks/use-refetch";
import { Archive, Loader2 } from "lucide-react";

const ArchiveButton = () => {
  const archiveProject = api.project.archiveProject.useMutation();
  const { projectId } = useProject();
  const refetch = useRefetch();
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Button
          size={"sm"}
          disabled={archiveProject.isPending}
          variant={"destructive"}
        >
          {archiveProject.isPending ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" /> Archiving
            </>
          ) : (
            <>
              <Archive className="h-4 w-4" /> Archive
            </>
          )}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action will archive your project. Please proceed with caution.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={() =>
              archiveProject.mutate(
                { projectId },
                {
                  onSuccess: () => {
                    toast.success("Project archived successfully!");
                    refetch();
                  },
                  onError: () => {
                    toast.error("Failed to archive project!");
                  },
                },
              )
            }
            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ArchiveButton;
