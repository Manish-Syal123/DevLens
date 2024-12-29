import { AssemblyAI } from "assemblyai";

const client = new AssemblyAI({ apiKey: process.env.ASSEMBLYAI_API_KEY! });

function msToTime(ms: number) {
  const seconds = Math.floor(ms / 1000);
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
}

//Doc-reference: https://www.assemblyai.com/docs/audio-intelligence/auto-chapters
export const processMeeting = async (meetingUrl: string) => {
  const transcript = await client.transcripts.transcribe({
    audio: meetingUrl,
    auto_chapters: true, //this means it will automatically analyze the meeting and split it into chapters/issues and summarize them.
  });

  const summaries =
    transcript.chapters?.map((chapter) => ({
      start: msToTime(chapter.start),
      end: msToTime(chapter.end),
      gist: chapter.gist,
      headline: chapter.headline,
      summary: chapter.summary,
    })) || [];

  if (!transcript.text) throw new Error("No text found in transcript");

  return {
    summaries,
  };
};

// //Testting
// const FILE_URL = "https://assembly.ai/sports_injuries.mp3";
// const response = await processMeeting(FILE_URL);
// console.log(response);
