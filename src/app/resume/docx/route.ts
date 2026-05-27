import { buildResumeFileResponse } from "@/lib/resume-downloads";

export const dynamic = "force-dynamic";

export const GET = (request: Request) =>
  buildResumeFileResponse("docx", request);
