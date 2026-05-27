import { buildResumeFileResponse } from "@/lib/resume-downloads";

export const GET = () => buildResumeFileResponse("docx");
