import { resumeData } from "@/lib/resume-data";

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
  siteUrl: trimEnv(process.env.NEXT_PUBLIC_SITE_URL),
  githubUrl:
    trimEnv(process.env.NEXT_PUBLIC_GITHUB_URL) ?? resumeData.links.github.href,
  linkedinUrl:
    trimEnv(process.env.NEXT_PUBLIC_LINKEDIN_URL) ??
    resumeData.links.linkedin.href,
  resumePath: "/vivek-mankonda-resume.pdf",
} as const;
