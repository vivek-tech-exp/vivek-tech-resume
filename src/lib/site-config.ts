import { resumeData } from "@/lib/resume-data";

import { getSiteUrl } from "@/lib/site-url";

const trimEnv = (value: string | undefined): string | undefined => {
  if (!value) {
    return undefined;
  }

  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : undefined;
};

export const siteConfig = {
  name: resumeData.basics.name,
  role: resumeData.basics.title,
  summary: resumeData.positioningLine,
  siteUrl: getSiteUrl()?.href,
  githubUrl:
    trimEnv(process.env.NEXT_PUBLIC_GITHUB_URL) ?? resumeData.links.github.href,
  linkedinUrl:
    trimEnv(process.env.NEXT_PUBLIC_LINKEDIN_URL) ??
    resumeData.links.linkedin.href,
} as const;
