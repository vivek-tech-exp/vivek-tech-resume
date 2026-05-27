import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { withResumeDownloadCacheBust } from "@/lib/resume-download-version";

const publicFileRedirects: Record<string, string> = {
  "/vivek-mankonda-resume.pdf": withResumeDownloadCacheBust("/resume/pdf"),
  "/vivek-mankonda-resume.docx": withResumeDownloadCacheBust("/resume/docx"),
};

export const middleware = (request: NextRequest) => {
  const target = publicFileRedirects[request.nextUrl.pathname];
  if (!target) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL(target, request.url), 307);
};

export const config = {
  matcher: ["/vivek-mankonda-resume.pdf", "/vivek-mankonda-resume.docx"],
};
