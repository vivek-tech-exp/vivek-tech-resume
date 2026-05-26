import { resumeData } from "@/lib/resume-data";
import { siteConfig } from "@/lib/site-config";

export type ExternalLink = {
  href: string;
  label: string;
};

export const buildExternalLinks = (): ExternalLink[] => {
  const links: ExternalLink[] = [
    {
      href: resumeData.links.linkedin.href,
      label: resumeData.links.linkedin.label,
    },
    {
      href: resumeData.links.github.href,
      label: resumeData.links.github.label,
    },
  ];

  if (siteConfig.linkedinUrl !== resumeData.links.linkedin.href) {
    links[0] = {
      href: siteConfig.linkedinUrl,
      label: resumeData.links.linkedin.label,
    };
  }

  if (siteConfig.githubUrl !== resumeData.links.github.href) {
    links[1] = {
      href: siteConfig.githubUrl,
      label: resumeData.links.github.label,
    };
  }

  return links;
};

export const formatYearOnly = (period: string) => {
  const years = period.match(/\b\d{4}\b/g);
  if (!years) return period;
  if (years.length === 1) return years[0];
  if (years[0] === years[1]) return years[0];
  return `${years[0]} – ${years[1]}`;
};

export const getCaseStudyTags = (title: string): string[] => {
  const t = title.toLowerCase();
  if (t.includes("cloud") || t.includes("provisioning")) {
    return ["Terraform", "AWS", "IaC", "Telemetry"];
  }
  if (t.includes("health") || t.includes("workflow")) {
    return ["Camunda", "BPMN", "DMN", "Microservices"];
  }
  if (t.includes("finchmoney") || t.includes("investing")) {
    return ["FIX 2.0", "Brokerage", "GraphQL", "Java"];
  }
  return ["Backend", "Cloud"];
};
