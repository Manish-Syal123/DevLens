"use client";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import useProject from "@/hooks/use-project";
import { api } from "@/trpc/react";
import React from "react";
import AskQuestionCard from "../dashboard/ask-question-card";
import MDEditor from "@uiw/react-md-editor";
import CodeReferences from "../dashboard/code-references";
import { LoaderCircle, Rabbit } from "lucide-react";

const QAPage = () => {
  const { projectId } = useProject();
  const { data: questions, isLoading } = api.project.getQuestions.useQuery({
    projectId,
  });

  const [questionIndex, setQuestionIndex] = React.useState<number>(0);
  const question = questions?.[questionIndex]; // get the question/data at the index
  return (
    <Sheet>
      <AskQuestionCard />
      <div className="h-4"></div>
      <h1 className="text-xl font-semibold">Saved Questions</h1>
      <div className="h-2"></div>
      <div className="flex flex-col gap-2">
        {isLoading && (
          <div className="mt-[6.5rem] flex flex-col items-center justify-center gap-3">
            <LoaderCircle size={40} className="animate-spin text-primary" />
            <h1 className="text-xl text-gray-600">
              DevLens is fetching your saved Questions.
            </h1>
            <h1 className="animate-pulse text-lg text-gray-500">
              Please wait...
            </h1>
          </div>
        )}
        {questions?.length === 0 && !isLoading && (
          <div className="mt-[6.5rem] flex flex-col items-center gap-2">
            <Rabbit size={90} />
            <span className="text-xl font-bold text-gray-500">
              No Questions found !
            </span>
          </div>
        )}
        {questions?.map((question, index) => {
          return (
            <React.Fragment key={question.id}>
              <SheetTrigger onClick={() => setQuestionIndex(index)}>
                <div className="flex items-center gap-4 rounded-lg border bg-white p-4 shadow hover:shadow-lg">
                  <img
                    src={question.user.imageUrl ?? ""}
                    alt="question"
                    width={30}
                    height={30}
                    className="rounded-full"
                  />
                  <div className="flex flex-col text-left">
                    <div className="flex items-center gap-2">
                      <p className="line-clamp-1 text-lg font-medium text-gray-700">
                        {question?.question}
                      </p>
                      <span className="whitespace-nowrap text-xs text-gray-400">
                        {question.createdAt.toLocaleDateString()}
                      </span>
                    </div>
                    <p className="line-clamp-1 text-sm text-gray-500">
                      {question.answer}
                    </p>
                  </div>
                </div>
              </SheetTrigger>
            </React.Fragment>
          );
        })}
      </div>
      {question && (
        <SheetContent className="sm:max-w-[80vw]">
          <SheetHeader>
            <SheetTitle>{question.question}</SheetTitle>
            <MDEditor.Markdown
              source={question.answer}
              className="custom-markdown max-h-[35vh] max-w-[70vw] overflow-y-auto p-1"
              style={{
                backgroundColor: "white",
                color: "black",
                borderRadius: "0.5rem",
              }}
            />
            <hr className="border-2" />
            <CodeReferences
              filesReferences={(question.filesReferences ?? []) as any}
            />
          </SheetHeader>
        </SheetContent>
      )}
    </Sheet>
  );
};

export default QAPage;
