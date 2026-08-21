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

  const engineeringWork = resumeData.selectedEngineeringWork
    .map(
      (work) =>
        `- ${work.title} (${work.context}): ${work.problemContext} ${work.builtDesigned} Result: ${work.measurableResult} Stack: ${work.tags.join(", ")} ${work.link ? `Link: ${work.link.isExternal ? work.link.href : path(work.link.href)}` : ""}`,
    )
    .join("\n");

  return `# ${siteConfig.name}

> ${siteConfig.summary}

Canonical URL: ${siteUrl}
Role: ${siteConfig.role}
Positioning: ${resumeData.positioningLine}
Experience: 8+ years | Senior Software Engineer | Distributed Systems | Product Engineering | Backend | AWS | Kafka | Camunda | Terraform | Fintech | Observability | India | Open to Relocation
LinkedIn: ${siteConfig.linkedinUrl}
GitHub: ${siteConfig.githubUrl}
Location: ${resumeData.basics.location}

## Summary

${resumeData.positioningLine}

${resumeData.specializationSummary}

## Selected engineering work

${engineeringWork}

## Core stack

${stack}

## Experience

${experience}

## Other personal projects

${projects}

## Resume download

- ${path("/resume")} (PDF or Word)
- ${path("/resume/pdf")}
- ${path("/resume/docx")}

## Indexable sections on the site

- /#impact
- /#work
- /#experience
- /#side-projects
- /#tools
- /#contact
`;
};
