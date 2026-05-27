import {
  externalLinkAriaSuffix,
  externalLinkProps,
} from "@/lib/link-behavior";
import { pageStyles } from "@/lib/page-styles";
import { resumeData, type PersonalProject } from "@/lib/resume-data";

const { uiStrings } = resumeData;

const pickProjectLinks = (project: PersonalProject) => {
  const live = project.links.find((link) => /live|site|app/i.test(link.label));
  const code = project.links.find((link) =>
    /repo|github|code|backend|native/i.test(link.label),
  );

  if (live && code && live.href !== code.href) {
    return [live, code];
  }

  if (live) {
    return [live];
  }

  if (code) {
    return [code];
  }

  return project.links.slice(0, 1);
};

const ProjectLinks = ({ project }: { project: PersonalProject }) => (
  <div className={pageStyles.projectLinks}>
    {pickProjectLinks(project).map((link) => (
      <a
        aria-label={`${project.title} ${link.label}${externalLinkAriaSuffix(link.href, uiStrings.externalLinkSuffix)}`}
        className={pageStyles.textLink}
        href={link.href}
        key={link.href}
        {...externalLinkProps(link.href)}
      >
        {link.label}
      </a>
    ))}
  </div>
);

export const FeaturedProject = ({ project }: { project: PersonalProject }) => {
  return (
    <article className={pageStyles.featuredProject}>
      <div className="space-y-1">
        <p className={pageStyles.projectMeta}>{project.period}</p>
        <h3 className="text-xl font-semibold text-[var(--text)] sm:text-2xl">
          {project.title}
        </h3>
      </div>
      <p className={pageStyles.projectTeaser}>{project.teaser}</p>
      <ProjectLinks project={project} />
    </article>
  );
};

export const ProjectRow = ({ project }: { project: PersonalProject }) => {
  return (
    <li className={pageStyles.projectRow}>
      <div className="space-y-1.5">
        <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
          <h3 className={pageStyles.projectTitle}>{project.title}</h3>
          <span className={pageStyles.projectMeta}>{project.period}</span>
        </div>
        <p className={pageStyles.projectTeaser}>{project.teaser}</p>
      </div>
      <ProjectLinks project={project} />
    </li>
  );
};
