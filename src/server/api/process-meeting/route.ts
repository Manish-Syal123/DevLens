import { processMeeting } from "@/lib/assembly";
import { db } from "@/server/db";
import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const bodyParser = z.object({
  meetingUrl: z.string(),
  projectId: z.string(),
  meetingId: z.string(),
});

// when we deploy it on versel this function will timeout like after 10 seconds, to avoid that we set the maxDuration(timeout) to 5 minutes so the function won't timeout until 5 minutes
export const maxDuration = 300; // 5 minutes

// /api/process-meeting
export async function POST(req: NextRequest) {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await req.json();
    const { meetingUrl, projectId, meetingId } = bodyParser.parse(body);
    const { summaries } = await processMeeting(meetingUrl);
    await db.issue.createMany({
      data: summaries.map((summary) => ({
        start: summary.start,
        end: summary.end,
        gist: summary.gist,
        headline: summary.headline,
        summary: summary.summary,
        projectId,
        meetingId,
      })),
    });

    // updating the meeting status to processing & setting the name to the first headline
    await db.meeting.update({
      where: {
        id: meetingId,
      },
      data: {
        status: "COMPLETED",
        name: summaries[0]!.headline,
      },
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
