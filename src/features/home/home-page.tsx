import { HomeHeader } from "@/features/home/home-header";
import { HeroScene } from "@/features/home/hero-scene";
import {
  FeaturedProject,
  ProjectRow,
} from "@/features/home/project-cards";
import { buildExternalLinks } from "@/features/home/home-utils";
import { pageStyles } from "@/lib/page-styles";
import { resumeData } from "@/lib/resume-data";

export const HomePage = () => {
  const externalLinks = buildExternalLinks();
  const { uiStrings } = resumeData;
  const featuredProject = resumeData.personalProjects.find(
    (project) => project.featured,
  );
  const otherProjects = resumeData.personalProjects.filter(
    (project) => !project.featured,
  );
  const previewProjects = otherProjects.slice(0, 2);
  const hiddenProjects = otherProjects.slice(2);

  return (
    <div id="top">
      <a className={pageStyles.skipLink} href="#main-content">
        {uiStrings.skipToContent}
      </a>

      <HomeHeader />

      <main className={pageStyles.shell} id="main-content" tabIndex={-1}>
        <HeroScene label={uiStrings.heroAtmosphereLabel}>
          <section aria-labelledby="hero-heading" className={pageStyles.hero}>
            <p className={pageStyles.siteLabel}>{uiStrings.siteLabel}</p>
            <div className="space-y-3">
              <h1 className={pageStyles.heroTitle} id="hero-heading">
                {resumeData.basics.name}
              </h1>
              <p className={pageStyles.heroRole}>{uiStrings.heroRoleLine}</p>
            </div>
            <p className={pageStyles.heroPitch}>{resumeData.positioningLine}</p>
            <p className={pageStyles.heroMeta}>{uiStrings.heroAvailability}</p>

            <div className="space-y-3">
              <h2 className="sr-only">{uiStrings.proofHeading}</h2>
              <ul className={pageStyles.proofList}>
                {resumeData.proofPoints.map((point) => (
                  <li className={pageStyles.proofItem} key={point.statement}>
                    <a
                      aria-label={`${point.statement} ${uiStrings.readCaseStudy}: ${point.caseStudyTitle} (${uiStrings.externalLinkSuffix})`}
                      className={pageStyles.proofLink}
                      href={point.href}
                      rel="noreferrer noopener"
                      target="_blank"
                    >
                      {point.statement}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className={pageStyles.heroActions}>
              <a
                aria-label={`${resumeData.links.linkedin.label} (${uiStrings.externalLinkSuffix})`}
                className={pageStyles.buttonPrimary}
                href={externalLinks[0]?.href}
                rel="noreferrer noopener"
                target="_blank"
              >
                {resumeData.links.linkedin.label}
              </a>
              <a
                className={pageStyles.buttonSecondary}
                href={`mailto:${resumeData.basics.email}`}
              >
                Email
              </a>
              <a
                aria-label={`${resumeData.links.github.label} (${uiStrings.externalLinkSuffix})`}
                className={pageStyles.buttonSecondary}
                href={externalLinks[1]?.href}
                rel="noreferrer noopener"
                target="_blank"
              >
                {resumeData.links.github.label}
              </a>
            </div>
          </section>
        </HeroScene>

        <section
          aria-labelledby="work-heading"
          className={pageStyles.section}
          id="work"
        >
          <div className={pageStyles.sectionHeader}>
            <h2 className={pageStyles.sectionTitle} id="work-heading">
              {uiStrings.workTitle}
            </h2>
            <p className={pageStyles.sectionIntro}>{uiStrings.workIntro}</p>
          </div>

          {featuredProject ? (
            <FeaturedProject project={featuredProject} />
          ) : null}

          <ul className={pageStyles.projectList}>
            {previewProjects.map((project) => (
              <ProjectRow key={project.title} project={project} />
            ))}
          </ul>

          {hiddenProjects.length > 0 ? (
            <details className="details-expand">
              <summary className={pageStyles.detailsButton}>
                {uiStrings.showAllProjects}
              </summary>
              <ul className={pageStyles.projectList}>
                {hiddenProjects.map((project) => (
                  <ProjectRow key={project.title} project={project} />
                ))}
              </ul>
            </details>
          ) : null}
        </section>

        <section
          aria-labelledby="experience-heading"
          className={`${pageStyles.section} defer-section`}
          id="experience"
        >
          <div className={pageStyles.sectionHeader}>
            <h2 className={pageStyles.sectionTitle} id="experience-heading">
              {uiStrings.experienceTitle}
            </h2>
            <p className={pageStyles.sectionIntro}>{uiStrings.experienceIntro}</p>
          </div>

          <ol className={pageStyles.experienceList}>
            {resumeData.experience.map((item) => (
              <li className={pageStyles.experienceItem} key={`${item.company}-${item.period}`}>
                <div className={pageStyles.experienceHeading}>
                  <span className={pageStyles.experienceRole}>{item.role}</span>
                  <span className={pageStyles.experienceCompany}>
                    {item.company}
                  </span>
                  <span className={pageStyles.experiencePeriod}>{item.period}</span>
                </div>
                <p className={pageStyles.experienceHighlight}>
                  {item.highlight}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section
          aria-labelledby="impact-heading"
          className={`${pageStyles.section} defer-section`}
          id="impact"
        >
          <div className={pageStyles.sectionHeader}>
            <h2 className={pageStyles.sectionTitle} id="impact-heading">
              {uiStrings.impactTitle}
            </h2>
            <p className={pageStyles.sectionIntro}>{uiStrings.impactIntro}</p>
          </div>

          <ul className={pageStyles.impactList}>
            {resumeData.caseStudies.map((study) => (
              <li className={pageStyles.impactItem} key={study.title}>
                <p className={pageStyles.impactOutcome}>{study.outcome}</p>
                <p className={pageStyles.impactMeta}>
                  {study.context} · {study.title}
                </p>
                <p className={pageStyles.impactText}>{study.description}</p>
                <a
                  aria-label={`${uiStrings.readCaseStudy}: ${study.title} (${uiStrings.externalLinkSuffix})`}
                  className={`${pageStyles.textLink} mt-4 inline-flex`}
                  href={study.href}
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  {uiStrings.readCaseStudy}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section
          aria-labelledby="tools-heading"
          className={`${pageStyles.section} defer-section`}
          id="tools"
        >
          <div className={pageStyles.sectionHeader}>
            <h2 className={pageStyles.sectionTitle} id="tools-heading">
              {uiStrings.toolsTitle}
            </h2>
          </div>

          <div className={pageStyles.toolsWrap}>
            {resumeData.coreStack.map((group) => (
              <div className={pageStyles.toolsGroup} key={group.label}>
                <h3 className={pageStyles.toolsLabel}>{group.label}</h3>
                <p className={pageStyles.toolsItems}>{group.items.join(", ")}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="contact-heading"
          className={pageStyles.section}
          id="contact"
        >
          <div className={pageStyles.sectionHeader}>
            <h2 className={pageStyles.sectionTitle} id="contact-heading">
              {uiStrings.contactTitle}
            </h2>
            <p className={pageStyles.sectionIntro}>{uiStrings.contactIntro}</p>
          </div>

          <div className={pageStyles.contactPanel}>
            <div className={pageStyles.contactActions}>
              {externalLinks.map((link) => (
                <a
                  aria-label={`${link.label} (${uiStrings.externalLinkSuffix})`}
                  className={pageStyles.buttonSecondary}
                  href={link.href}
                  key={link.label}
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  {link.label}
                </a>
              ))}
              <a
                className={pageStyles.buttonPrimary}
                href={`mailto:${resumeData.basics.email}`}
              >
                Email
              </a>
            </div>

            <div className={pageStyles.contactMeta}>
              <p>
                <span className="font-medium text-[var(--text)]">
                  {uiStrings.emailLabel}:{" "}
                </span>
                <a
                  className={pageStyles.textLink}
                  href={`mailto:${resumeData.basics.email}`}
                >
                  {resumeData.basics.email}
                </a>
              </p>
              <p>
                <span className="font-medium text-[var(--text)]">
                  {uiStrings.educationLabel}:{" "}
                </span>
                {resumeData.education.degree},{" "}
                {resumeData.education.institution}
              </p>
              <p>{resumeData.basics.locations.join(" · ")}</p>
            </div>
          </div>

          <p className={pageStyles.footerNote}>{uiStrings.footerNote}</p>
        </section>
      </main>
    </div>
  );
};
