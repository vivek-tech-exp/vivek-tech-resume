import { pageStyles } from "@/lib/page-styles";
import { resumeData, type PersonalProject } from "@/lib/resume-data";

const { uiStrings } = resumeData;

const isLiveLink = (label: string) => /live|site|app/i.test(label);
const isCodeLink = (label: string) =>
  /repo|github|code|backend|native/i.test(label);

const pickLinks = (project: PersonalProject) => {
  const live = project.links.find((link) => isLiveLink(link.label));
  const code = project.links.find((link) => isCodeLink(link.label));

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
    {pickLinks(project).map((link) => (
      <a
        aria-label={`${project.title} ${link.label} (${uiStrings.externalLinkSuffix})`}
        className={pageStyles.textLink}
        href={link.href}
        key={link.href}
        rel="noreferrer noopener"
        target="_blank"
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
