import { caseStudyHref } from "@/lib/case-study-links";
import { resumeData } from "@/lib/resume-data";
import { siteConfig } from "@/lib/site-config";
import { getSiteUrl, joinSitePath } from "@/lib/site-url";

export const buildLlmsTxt = (): string => {
  const siteUrl = getSiteUrl()?.href ?? "https://example.com";
  const path = (route: string) => joinSitePath(siteUrl, route);
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
Experience: 7 years · Senior Software Engineer · Backend · AWS · Camunda · Terraform · Fintech · Insurance · India (remote)
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

${resumeData.proofPoints
    .map((point) => `- ${point.statement} (${path(point.href)})`)
    .join("\n")}

## Case studies

- Cloud onboarding automation (${path(caseStudyHref("cloud-onboarding"))})
- Health insurance workflow platform (${path(caseStudyHref("health-insurance-workflow"))})
- FinchMoney consumer investing backend (${path(caseStudyHref("finchmoney"))})

## Resume download

- ${path("/resume")} (PDF or Word)
- ${path("/resume/pdf")}
- ${path("/resume/docx")}

## Indexable sections on the site

- /#work
- /#experience
- /#side-projects
- /#impact
- /#tools
- /#contact
`;
};
