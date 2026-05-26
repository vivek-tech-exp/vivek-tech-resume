import { HomeEffects } from "@/features/home/home-effects";
import { HomeHeader } from "@/features/home/home-header";
import { TelemetrySlot } from "@/features/home/telemetry-slot";
import {
  buildExternalLinks,
  formatYearOnly,
  getCaseStudyTags,
} from "@/features/home/home-utils";
import {
  FootstepsShowcase,
  SubordinateProjectCard,
} from "@/features/home/project-cards";
import { pageStyles } from "@/lib/page-styles";
import { resumeData } from "@/lib/resume-data";

export const HomePage = () => {
  const externalLinks = buildExternalLinks();
  const { uiStrings } = resumeData;

  return (
    <div className="relative min-h-dvh overflow-x-hidden">
      <HomeEffects />

      <a className={pageStyles.skipLink} href="#main-content">
        {uiStrings.skipToContent}
      </a>

      <HomeHeader />

      <main className={pageStyles.pageShell} id="main-content" tabIndex={-1}>
        <section className={pageStyles.heroPanel}>
          <div className={pageStyles.heroCopy}>
            <p className={pageStyles.eyebrow}>{resumeData.basics.title}</p>
            <h1 className={pageStyles.heroTitle}>{resumeData.basics.name}</h1>
            <p className={pageStyles.heroSpecialization}>
              {uiStrings.heroSpecialization}
            </p>
            <p className={pageStyles.heroSummary}>
              {resumeData.positioningLine}
            </p>
          </div>

          <aside
            className={pageStyles.heroAside}
            aria-label={uiStrings.telemetryLabel}
          >
            <TelemetrySlot />
          </aside>
        </section>

        <section
          className={pageStyles.section}
          id="projects"
          aria-labelledby="projects-heading"
        >
          <div className={pageStyles.sectionHeading}>
            <p className={pageStyles.sectionKicker}>
              {uiStrings.projectsKicker}
            </p>
            <h2 className={pageStyles.sectionTitle} id="projects-heading">
              {uiStrings.projectsTitle}
            </h2>
          </div>

          <div className="space-y-12">
            <p className="prose-width text-sm leading-relaxed text-[var(--text-muted)] font-medium italic border-s-2 border-[var(--accent-cyan)] ps-3">
              {uiStrings.projectsSubtitle}
            </p>

            {resumeData.personalProjects
              .filter((project) => project.featured)
              .map((project) => (
                <FootstepsShowcase key={project.title} project={project} />
              ))}

            <details className="details-expand space-y-8">
              <summary
                className={`${pageStyles.detailsSummary} mx-auto w-fit list-none`}
              >
                <span>{uiStrings.expandProjectsShow}</span>
                <span aria-hidden="true" className="details-chevron">
                  ↓
                </span>
              </summary>

              <div className="space-y-6">
                <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--text-subtle)] font-bold pb-2 border-b border-[var(--border)]">
                  {uiStrings.otherBuilds}
                </h3>
                <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
                  {resumeData.personalProjects
                    .filter((project) => !project.featured)
                    .map((project) => (
                      <SubordinateProjectCard
                        key={project.title}
                        project={project}
                      />
                    ))}
                </div>
              </div>
            </details>
          </div>
        </section>

        <section className={pageStyles.specializationSection}>
          <div className={pageStyles.sectionHeading}>
            <p className={pageStyles.sectionKicker}>
              {uiStrings.specializationKicker}
            </p>
          </div>
          <div className="max-w-3xl">
            <p className={pageStyles.specializationText}>
              {resumeData.specializationSummary}
            </p>
          </div>
        </section>

        <section
          className={pageStyles.sectionBelowFold}
          id="experience"
          aria-labelledby="experience-heading"
        >
          <div className={pageStyles.sectionHeading}>
            <p className={pageStyles.sectionKicker}>
              {uiStrings.experienceKicker}
            </p>
            <h2 className={pageStyles.sectionTitle} id="experience-heading">
              {uiStrings.experienceTitle}
            </h2>
          </div>

          <ol className={pageStyles.snapshotList}>
            {resumeData.experience.map((item) => (
              <li
                key={`${item.company}-${item.period}`}
                className="relative ps-2"
              >
                <div
                  aria-hidden="true"
                  className="absolute -start-[31px] top-6.5 w-4 h-4 rounded-full bg-[var(--page)] border-2 border-[var(--accent-cyan)] flex items-center justify-center z-10"
                >
                  <div className="status-dot w-1.5 h-1.5 rounded-full bg-[var(--accent-cyan)]" />
                </div>

                <article className={pageStyles.snapshotCard}>
                  <p className={pageStyles.snapshotPeriod}>
                    {formatYearOnly(item.period)}
                  </p>
                  <div className={pageStyles.snapshotBody}>
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h3 className={pageStyles.snapshotTitle}>{item.role}</h3>
                      <span className="text-xs font-semibold font-mono tracking-widest text-[var(--accent-violet)] uppercase">
                        @{item.company}
                      </span>
                    </div>
                    <p className={pageStyles.snapshotCompany}>
                      {item.location} · {item.period}
                    </p>
                    <p className={pageStyles.snapshotSummary}>{item.summary}</p>
                    <ul className="mt-4 space-y-2 list-none p-0">
                      {item.points.map((point) => (
                        <li
                          key={point}
                          className="text-xs leading-relaxed text-[var(--text-soft)] flex items-start gap-2.5"
                        >
                          <span className="text-[var(--accent-cyan)]/70 select-none font-bold mt-0.5">
                            ▪
                          </span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </li>
            ))}
          </ol>
        </section>

        <section
          className={pageStyles.sectionBelowFold}
          id="stack"
          aria-labelledby="stack-heading"
        >
          <div className={pageStyles.sectionHeading}>
            <p className={pageStyles.sectionKicker}>{uiStrings.stackKicker}</p>
            <h2 className={pageStyles.sectionTitle} id="stack-heading">
              {uiStrings.stackTitle}
            </h2>
          </div>
          <div className={pageStyles.capabilityGrid}>
            {resumeData.coreStack.map((group) => (
              <section className={pageStyles.capabilityItem} key={group.label}>
                <h3 className={pageStyles.capabilityLabel}>{group.label}</h3>
                <div className="flex flex-wrap gap-2 mt-4">
                  {group.items.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-[0.68rem] font-semibold font-mono tracking-wide border border-[var(--border)] bg-black/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </section>

        <section
          className={pageStyles.sectionBelowFold}
          id="case-studies"
          aria-labelledby="systems-heading"
        >
          <div className={pageStyles.sectionHeading}>
            <p className={pageStyles.sectionKicker}>
              {uiStrings.caseStudiesKicker}
            </p>
            <h2 className={pageStyles.sectionTitle} id="systems-heading">
              {uiStrings.caseStudiesTitle}
            </h2>
          </div>
          <div className={pageStyles.systemsGrid}>
            {resumeData.caseStudies.map((study) => {
              const tags = getCaseStudyTags(study.title);
              return (
                <article className={pageStyles.systemCard} key={study.title}>
                  <div className="flex items-center justify-between border-b border-[var(--border)] pb-3 relative z-10">
                    <div aria-hidden="true" className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[var(--border)]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[var(--border)]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[var(--border)]" />
                    </div>
                    <span className={pageStyles.systemContext}>
                      {study.context}
                    </span>
                  </div>

                  <div className={pageStyles.systemBody}>
                    <h3 className={pageStyles.systemTitle}>
                      <a
                        href={study.href}
                        rel="noreferrer noopener"
                        aria-label={`${study.title} (${uiStrings.externalLinkSuffix})`}
                        target="_blank"
                        className="hover:text-[var(--accent-cyan)] flex items-baseline justify-between w-full"
                      >
                        <span>{study.title}</span>
                        <span aria-hidden="true">{"↗"}</span>
                      </a>
                    </h3>
                    <p className={pageStyles.systemText}>{study.description}</p>
                    <div className="flex flex-wrap gap-1.5 py-1.5">
                      {tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[0.6rem] font-semibold font-mono tracking-wider text-[var(--accent-violet)] bg-[var(--accent-violet)]/5 border border-[var(--accent-violet)]/10 px-2 py-0.5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="mt-2 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-[var(--accent-cyan)] font-bold">
                      {study.outcome}
                    </p>
                  </div>
                  <a
                    className={pageStyles.systemLink}
                    href={study.href}
                    rel="noreferrer noopener"
                    aria-label={`${uiStrings.viewCaseStudy}: ${study.title} (${uiStrings.externalLinkSuffix})`}
                    target="_blank"
                  >
                    {uiStrings.viewCaseStudy}
                  </a>
                </article>
              );
            })}
          </div>
        </section>

        <section
          className={pageStyles.sectionBelowFold}
          id="contact"
          aria-labelledby="links-heading"
        >
          <div className={pageStyles.sectionHeading}>
            <p className={pageStyles.sectionKicker}>
              {uiStrings.contactKicker}
            </p>
            <h2 className={pageStyles.sectionTitle} id="links-heading">
              {uiStrings.contactTitle}
            </h2>
          </div>
          <div className={pageStyles.linksPanel}>
            <div className={pageStyles.linksActions}>
              {externalLinks.map((link) => (
                <a
                  className={pageStyles.actionSecondary}
                  href={link.href}
                  key={link.label}
                  rel="noreferrer noopener"
                  aria-label={`${link.label} (${uiStrings.externalLinkSuffix})`}
                  target="_blank"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className={pageStyles.linksMeta}>
              <p className={pageStyles.linksMetaItem}>
                <span className="font-mono text-[0.55rem] uppercase tracking-[0.25em] text-[var(--text-subtle)] font-bold">
                  {uiStrings.emailLabel}
                </span>
                <a
                  className="text-sm font-semibold text-[var(--text-soft)] hover:text-[var(--accent-cyan)]"
                  href={`mailto:${resumeData.basics.email}`}
                >
                  {resumeData.basics.email}
                </a>
              </p>
              <p className={pageStyles.linksMetaItem}>
                <span className="font-mono text-[0.55rem] uppercase tracking-[0.25em] text-[var(--text-subtle)] font-bold">
                  {uiStrings.educationLabel}
                </span>
                <span className="text-sm leading-relaxed text-[var(--text-soft)] font-medium">
                  {resumeData.education.degree}, {resumeData.education.institution}
                </span>
              </p>
              <p className={pageStyles.linksNote}>{uiStrings.footerNote}</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
