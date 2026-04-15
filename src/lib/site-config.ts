const trimEnv = (value: string | undefined): string | undefined => {
  if (!value) {
    return undefined;
  }

  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : undefined;
};

export const siteConfig = {
  name: "Vivek Mankonda",
  role: "Software Engineer",
  summary:
    "A resume website built to show the work clearly and keep the implementation equally sharp.",
  siteUrl: trimEnv(process.env.NEXT_PUBLIC_SITE_URL),
  githubUrl: trimEnv(process.env.NEXT_PUBLIC_GITHUB_URL),
  linkedinUrl: trimEnv(process.env.NEXT_PUBLIC_LINKEDIN_URL),
  resumePath: "/resume/vivek-mankonda-resume.pdf",
} as const;
