import { resumeData } from "@/lib/resume-data";
import { siteConfig } from "@/lib/site-config";
import { getSiteUrl } from "@/lib/site-url";

export const buildLlmsTxt = (): string => {
  const siteUrl = getSiteUrl()?.href ?? "https://example.com";
  const stack = resumeData.coreStack
    .map((group) => `- ${group.label}: ${group.items.join(", ")}`)
    .join("\n");

  const experience = resumeData.experience
    .map(
      (role) =>
        `- ${role.role} at ${role.company} (${role.period}, ${role.location}): ${role.highlight}`,
    )
    .join("\n");

  const projects = resumeData.personalProjects
    .map(
      (project) =>
        `- ${project.title} (${project.period}): ${project.teaser} Links: ${project.links.map((link) => link.href).join(", ")}`,
    )
    .join("\n");

  return `# ${siteConfig.name}

> ${siteConfig.summary}

Canonical URL: ${siteUrl}
Role: ${siteConfig.role}
Email: ${resumeData.basics.email}
LinkedIn: ${siteConfig.linkedinUrl}
GitHub: ${siteConfig.githubUrl}
Locations: ${resumeData.basics.locations.join(", ")}

## Summary

${resumeData.positioningLine}

${resumeData.specializationSummary}

## Core stack

${stack}

## Experience

${experience}

## Personal projects

${projects}

## Proof points

${resumeData.proofPoints.map((point) => `- ${point.statement} (${point.href})`).join("\n")}

## Indexable sections on the site

- /#work
- /#experience
- /#impact
- /#tools
- /#contact
`;
};
