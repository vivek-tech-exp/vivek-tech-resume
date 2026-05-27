import { buildResumeFileResponse } from "@/lib/resume-downloads";

export const dynamic = "force-dynamic";

export const GET = () => buildResumeFileResponse("pdf");
