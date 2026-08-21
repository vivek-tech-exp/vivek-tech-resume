import type { Metadata } from "next";

import { resumeData } from "@/lib/resume-data";
import { siteConfig } from "@/lib/site-config";
import { getSiteUrl } from "@/lib/site-url";

const MAX_DESCRIPTION_LENGTH = 160;

const truncate = (text: string, max = MAX_DESCRIPTION_LENGTH) =>
  text.length <= max ? text : `${text.slice(0, max - 1).trimEnd()}…`;

export const seoCopy = {
  homeTitle:
    "Vivek Mankonda | Senior Software Engineer | Distributed Systems | Product Engineering",
  homeDescription: truncate(
    "Senior Software Engineer with 8+ years across distributed systems, high-scale services, Java, Spring Boot, AWS, Kafka, fintech, workflow orchestration, observability, and 0-to-1 product engineering. Based in India | Open to Relocation.",
  ),
  resumeTitle: "Download Resume | PDF & Word",
  resumeDescription: truncate(
    `Download ${resumeData.basics.name}'s resume as PDF or Word. Senior Software Engineer with 8+ years across distributed systems, Java, Spring Boot, AWS, and cloud infrastructure.`,
  ),
} as const;

/** Curated terms for discoverability; not the full skills dump. */
export const buildSeoKeywords = (): string[] => {
  const primaryTerms = [
    resumeData.basics.name,
    resumeData.basics.title,
    "Senior Software Engineer",
    "Distributed Systems",
    "Product Engineering",
    "Java",
    "Spring Boot",
    "Spring Cloud",
    "AWS",
    "Kafka",
    "Fintech",
    "Workflow Orchestration",
    "Camunda",
    "Observability",
    "New Relic",
    "Terraform",
    "TypeScript",
    "Backend Engineer",
    "High Scale Systems",
    "System Design",
    "Based in India",
    "Open to Relocation",
  ];
  const employerTerms = resumeData.experience.map((role) => role.company);

  return [...new Set([...primaryTerms, ...employerTerms])];
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
