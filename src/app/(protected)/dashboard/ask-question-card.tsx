"use client";
import MDEditor from "@uiw/react-md-editor";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import useProject from "@/hooks/use-project";
import Image from "next/image";
import React, { useState } from "react";
import { askQuestion } from "./actions";
import { readStreamableValue } from "ai/rsc";
import CodeReferences from "./code-references";
import { Loader } from "lucide-react";

const AskQuestionCard = () => {
  const { project } = useProject();
  const [open, setOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const [filesReferences, setFilesReferences] = useState<
    { fileName: string; sourceCode: string; summary: string }[]
  >([]);
  const [answer, setAnswer] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setAnswer(""); // Clear the previous answer
    setFilesReferences([]); // Clear the previous files references
    e.preventDefault();
    if (!project?.id || !question) return;
    setLoading(true);
    setOpen(true);

    try {
      const { output, filesReferences } = await askQuestion(
        question,
        project.id,
      );

      setFilesReferences(filesReferences);

      // Stream the answer incrementally
      for await (const delta of readStreamableValue(output)) {
        if (delta) {
          setAnswer((prev) => prev + delta);
        }
      }
    } catch (error) {
      console.error("Error asking question:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="h-lvh w-[73vw] content-center items-center justify-center align-middle sm:max-w-[80vw]">
          <DialogHeader>
            <DialogTitle className="-mt-6 flex items-center justify-center">
              <Image
                src="/logoSymbol.png"
                alt="DevLens Logo"
                width={40}
                height={40}
              />
            </DialogTitle>
          </DialogHeader>
          {loading ? (
            <div className="flex items-center justify-center">
              <Loader size={40} className="animate-spin" />
            </div>
          ) : (
            <>
              <MDEditor.Markdown
                source={answer}
                className="max-h-[35vh] max-w-[70vw] overflow-y-auto p-1"
                style={{
                  backgroundColor: "white",
                  color: "black",
                  borderRadius: "0.5rem",
                }}
              />
              <hr className="border-2" />
              <CodeReferences filesReferences={filesReferences} />
            </>
          )}

          {/* <div className="h-4"></div> */}
          <Button
            type="button"
            onClick={() => setOpen(false)}
            className="-mb-3"
          >
            Close
          </Button>
        </DialogContent>
      </Dialog>
      <Card className="relative col-span-3">
        <CardHeader>
          <CardTitle>Ask a Question</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={onSubmit}>
            <Textarea
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Which file should I edit to change the home page?"
            />
            <div className="h-4"></div>
            <Button type="submit" disabled={loading}>
              {loading ? (
                <Loader size={4} className="animate-spin" />
              ) : (
                "Ask DevLens!"
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </>
  );
};

export default AskQuestionCard;
