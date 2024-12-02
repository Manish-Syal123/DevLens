import { GithubRepoLoader } from "@langchain/community/document_loaders/web/github";
import { Document } from "@langchain/core/documents";
import { summariseCode } from "./gemini";

// this github-loader is a function that takes a githubUrl and returns back a list of files in the repository
// Doc reference: https://js.langchain.com/docs/integrations/document_loaders/web_loaders/github/
export const loadGithubRepo = async (
  githubUrl: string,
  githubToken?: string,
) => {
  const loader = new GithubRepoLoader(githubUrl, {
    accessToken: githubToken || "",
    branch: "main",
    ignoreFiles: [
      "package-lock.json",
      "yarn.lock",
      "pnpm-lock.yaml",
      "npm-lock.yaml",
      "bun.lockb",
    ],
    recursive: true, // include submodules => if you want every file in the repo set it to true. And if you want only the top level files set it to false
    unknown: "warn",
    maxConcurrency: 5,
  });
  const doc = await loader.load();
  return doc;
};

console.log(
  await loadGithubRepo("https://github.com/Manish-Syal123/AI-Mock-Interviewer"),
);

// main function
export const indexGithubRepo = async (
  githubUrl: string,
  githubToken?: string,
) => {
  const docs = await loadGithubRepo(githubUrl, githubToken);
  const allEmbeddings = await generateEmbeddings(docs);
};

const generateEmbeddings = async (docs: Document[]) => {
  return await Promise.all(
    docs.map(async (doc) => {
      const summary = await summariseCode(doc); // first generate the summary of the code for each file(document)
    }),
  );
};
