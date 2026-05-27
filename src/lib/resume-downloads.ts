import { readFile } from "node:fs/promises";
import path from "node:path";

import { NextResponse } from "next/server";

import { notifyResumeDownload } from "@/lib/ntfy";
import { resumeData } from "@/lib/resume-data";

export type ResumeDownloadFormat = keyof typeof resumeData.resumeDownloads.formats;

export const getResumeDownloadAsset = (format: ResumeDownloadFormat) =>
  resumeData.resumeDownloads.formats[format];

export const buildResumeFileResponse = async (format: ResumeDownloadFormat) => {
  const asset = getResumeDownloadAsset(format);

  try {
    const body = await readFile(
      path.join(process.cwd(), "public", asset.publicFile),
    );

    // Must await: serverless exits when the response is sent; fire-and-forget never runs.
    await notifyResumeDownload(format);

    return new NextResponse(body, {
      headers: {
        "Content-Type": asset.mimeType,
        "Content-Disposition": `attachment; filename="${asset.fileName}"`,
        // No CDN cache — each download must hit the function so ntfy fires.
        "Cache-Control": "private, no-store",
      },
    });
  } catch {
    return new NextResponse("Resume not found.", { status: 404 });
  }
};
