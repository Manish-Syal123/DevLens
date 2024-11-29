import { db } from "@/server/db";
import { Octokit } from "octokit";

export const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

const githubUrl = "https://github.com/docker/genai-stack";

type Response = {
  commitMessage: String;
  commitHash: String;
  commitAuthorName: String;
  commitAuthorAvatar: String;
  commitDate: String;
};

// fetching the latest commits from the input github url using octokit // here we are only fetching the latest 10 commits
export const getCommitHashes = async (
  githubUrl: string,
): Promise<Response[]> => {
  //eg: https://github.com/docker/genai-stack
  const [owner, repo] = githubUrl.split("/").slice(-2); //last two elements => docker:owner, genai-stack:repo
  if (!owner || !repo) {
    throw new Error("Invalid github url");
  }

  const { data } = await octokit.rest.repos.listCommits({
    owner,
    repo,
  });

  const sortedCommits = data.sort(
    (a: any, b: any) =>
      new Date(b.commit.author.date).getTime() -
      new Date(a.commit.author.date).getTime(),
  ) as any;

  return sortedCommits.slice(0, 10).map((commit: any) => ({
    commitHash: commit.sha as string,
    commitMessage: commit.commit.message ?? "",
    commitAuthorName: commit.commit?.author?.name ?? "",
    commitAuthorAvatar: commit?.author?.avatar_url ?? "",
    commitDate: commit.commit?.author?.date ?? "",
  }));
};

export const pollCommits = async (projectId: string) => {
  const { project, githubUrl } = await fetchProjectGithubUrl(projectId);
  const commitHashes = await getCommitHashes(githubUrl);
  const unprocessedCommits = await filterUnprocessedCommits(
    projectId,
    commitHashes,
  );
  return unprocessedCommits;
};

async function summarizeCommits(githubUrl: string, commitHash: string) {}

// getting the specific project github url from database from Project Tabel based on projectId
async function fetchProjectGithubUrl(projectId: string) {
  const project = await db.project.findUnique({
    where: {
      id: projectId,
    },
    select: {
      githubUrl: true,
    },
  });
  if (!project?.githubUrl) throw new Error("Project has no Github URL");
  return { project, githubUrl: project?.githubUrl };
}

// getting the commits which are not saved into the database
async function filterUnprocessedCommits(
  projectId: string,
  commitHashes: Response[],
) {
  // commits which are already saved(processed) into the database
  const processedCommits = await db.commit.findMany({
    where: { projectId },
  });
  // commits which are not saved into the database
  const unprocessedCommits = commitHashes.filter((commit) => {
    return !processedCommits.some(
      (processedCommit) => processedCommit.commitHash === commit.commitHash,
    );
  });

  return unprocessedCommits;
}

await pollCommits("cm3zwa0xj0003fh9j441o7zwp").then((res) => console.log(res));
