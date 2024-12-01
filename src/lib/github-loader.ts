// Doc reference: https://js.langchain.com/docs/integrations/document_loaders/web_loaders/github/
import { GithubRepoLoader } from "@langchain/community/document_loaders/web/github";

// this github-loader is a function that takes a githubUrl and returns back a list of files in the repository
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
