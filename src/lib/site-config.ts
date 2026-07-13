import { resumeData } from "@/lib/resume-data";

import { getSiteUrl } from "@/lib/site-url";

const trimEnv = (value: string | undefined): string | undefined => {
  if (!value) {
    return undefined;
  }

  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : undefined;
};

/** Keep a profile URL even if env points at a repository path. */
const toGithubProfileUrl = (url: string): string => {
  try {
    const { hostname, pathname } = new URL(url);
    if (!hostname.endsWith("github.com")) {
      return url;
    }

    const [username] = pathname.split("/").filter(Boolean);
    return username ? `https://github.com/${username}` : url;
  } catch {
    return url;
  }
};

export const siteConfig = {
  name: resumeData.basics.name,
  role: resumeData.basics.title,
  summary: resumeData.positioningLine,
  siteUrl: getSiteUrl()?.href,
  githubUrl: toGithubProfileUrl(
    trimEnv(process.env.NEXT_PUBLIC_GITHUB_URL) ?? resumeData.links.github.href,
  ),
  linkedinUrl:
    trimEnv(process.env.NEXT_PUBLIC_LINKEDIN_URL) ??
    resumeData.links.linkedin.href,
} as const;
