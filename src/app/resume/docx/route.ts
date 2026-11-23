import { withRequestLogging } from "@/lib/new-relic-server";
import { buildResumeFileResponse } from "@/lib/resume-downloads";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export const GET = withRequestLogging("/resume/docx", (request: Request) =>
  buildResumeFileResponse("docx", request),
);
