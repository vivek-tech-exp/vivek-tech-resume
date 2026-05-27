import type { Metadata } from "next";

import { resumeData } from "@/lib/resume-data";
import { siteConfig } from "@/lib/site-config";
import { getSiteUrl } from "@/lib/site-url";

const MAX_DESCRIPTION_LENGTH = 160;

const truncate = (text: string, max = MAX_DESCRIPTION_LENGTH) =>
  text.length <= max ? text : `${text.slice(0, max - 1).trimEnd()}…`;

export const seoCopy = {
  homeTitle:
    "Vivek Mankonda | Senior Software Engineer · Backend, AWS, Fintech",
  homeDescription: truncate(
    "Vivek Mankonda is a Senior Software Engineer with 7 years building backend systems, workflow platforms, and cloud infrastructure at New Relic, Acko, and fintech teams. India and remote.",
  ),
  resumeTitle: "Download Resume · PDF & Word",
  resumeDescription: truncate(
    `Download ${resumeData.basics.name}'s resume as PDF or Word. Senior Software Engineer focused on backend systems, AWS, and product delivery.`,
  ),
} as const;

/** Curated terms for discoverability — not the full skills dump. */
export const buildSeoKeywords = (): string[] => {
  const roleTerms = [
    resumeData.basics.name,
    resumeData.basics.title,
    "Software Engineer",
    "Backend Engineer",
    "Senior Software Engineer",
    "Platform Engineer",
  ];
  const domainTerms = [
    "fintech",
    "insurance technology",
    "observability",
    "workflow automation",
    "India remote",
    ...resumeData.basics.locations,
  ];
  const stackTerms = resumeData.coreStack.flatMap((group) => group.items).slice(0, 24);
  const employerTerms = resumeData.experience.map((role) => role.company);

  return [...new Set([...roleTerms, ...domainTerms, ...stackTerms, ...employerTerms])];
};

const sharedOpenGraph = (title: string, description: string, path: string) => {
  const siteUrl = getSiteUrl();

  return {
    title,
    description,
    type: "website" as const,
    url: path,
    siteName: siteConfig.name,
    locale: "en_IN",
    ...(siteUrl ? { images: [{ url: new URL("/opengraph-image", siteUrl).href }] } : {}),
  };
};

export const buildBaseMetadata = (): Metadata => {
  const siteUrl = getSiteUrl();

  return {
    metadataBase: siteUrl,
    authors: [{ name: siteConfig.name, url: siteConfig.linkedinUrl }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    category: "technology",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    formatDetection: {
      telephone: false,
      email: false,
      address: false,
    },
  };
};

export const buildHomeMetadata = (): Metadata => ({
  ...buildBaseMetadata(),
  title: {
    absolute: seoCopy.homeTitle,
  },
  description: seoCopy.homeDescription,
  keywords: buildSeoKeywords(),
  alternates: {
    canonical: "/",
    types: {
      "text/plain": [{ url: "/llms.txt", title: "LLM-readable site summary" }],
    },
  },
  openGraph: sharedOpenGraph(
    seoCopy.homeTitle,
    seoCopy.homeDescription,
    "/",
  ),
  twitter: {
    card: "summary_large_image",
    title: seoCopy.homeTitle,
    description: seoCopy.homeDescription,
  },
});

export const buildResumeMetadata = (): Metadata => {
  const title = `${seoCopy.resumeTitle} | ${siteConfig.name}`;

  return {
    ...buildBaseMetadata(),
    title,
    description: seoCopy.resumeDescription,
    keywords: [
      ...buildSeoKeywords().slice(0, 12),
      "resume PDF",
      "resume download",
      "resume Word",
    ],
    alternates: {
      canonical: resumeData.resumeDownloads.sharePath,
    },
    openGraph: sharedOpenGraph(
      title,
      seoCopy.resumeDescription,
      resumeData.resumeDownloads.sharePath,
    ),
    twitter: {
      card: "summary_large_image",
      title,
      description: seoCopy.resumeDescription,
    },
  };
};
