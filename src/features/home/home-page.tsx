import { pageStyles } from "@/lib/page-styles";
import { resumeData } from "@/lib/resume-data";
import { siteConfig } from "@/lib/site-config";

type ExternalLink = {
  href: string;
  label: string;
};

const buildExternalLinks = (): ExternalLink[] => {
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

export const HomePage = () => {
  const externalLinks = buildExternalLinks();

  return (
    <>
      <a className={pageStyles.skipLink} href="#main-content">
        Skip to content
      </a>
      <header className={pageStyles.chrome}>
        <div className={pageStyles.topBar}>
          <p className={pageStyles.topBarNote}>
            Backend · Distributed Systems · Platform
          </p>
          <nav aria-label="Section navigation" className={pageStyles.topBarNav}>
            <a className={pageStyles.topBarLink} href="#impact">
              Impact
            </a>
            <a className={pageStyles.topBarLink} href="#experience">
              Experience
            </a>
            <a className={pageStyles.topBarLink} href="#stack">
              Stack
            </a>
            <a className={pageStyles.topBarLink} href="#systems">
              Systems
            </a>
            <a className={pageStyles.topBarLink} href="#links">
              Links
            </a>
          </nav>
        </div>
      </header>

      <main className={pageStyles.pageShell} id="main-content">
        <section className={pageStyles.heroPanel}>
          <div className={pageStyles.heroCopy}>
            <p className={pageStyles.eyebrow}>{resumeData.basics.title}</p>
            <h1 className={pageStyles.heroTitle}>{resumeData.basics.name}</h1>
            <p className={pageStyles.heroSpecialization}>
              Java • Distributed Systems • Workflow Automation • Cloud
              Infrastructure
            </p>
            <p className={pageStyles.heroSummary}>{resumeData.positioningLine}</p>
          </div>

          <aside className={pageStyles.heroAside} aria-label="Profile details">
            <ul className={pageStyles.metaList}>
              <li className={pageStyles.metaItem}>
                <span className={pageStyles.metaLabel}>Base</span>
                <span className={pageStyles.metaValue}>
                  {resumeData.basics.locations.join(" · ")}
                </span>
              </li>
              <li className={pageStyles.metaItem}>
                <span className={pageStyles.metaLabel}>Email</span>
                <a
                  className={pageStyles.metaValue}
                  href={`mailto:${resumeData.basics.email}`}
                >
                  {resumeData.basics.email}
                </a>
              </li>
            </ul>
            <p className={pageStyles.heroNote}>
              Java, TypeScript, and Python across backend services, workflow
              engines, integrations, and production infrastructure.
            </p>
          </aside>
        </section>

        <section
          className={pageStyles.section}
          id="impact"
          aria-labelledby="impact-heading"
        >
          <div className={pageStyles.sectionHeading}>
            <p className={pageStyles.sectionKicker}>Selected Impact</p>
            <h2 className={pageStyles.sectionTitle} id="impact-heading">
              Concrete outcomes, not broad claims.
            </h2>
          </div>
          <ul className={pageStyles.proofList} aria-label="Selected proof points">
            {resumeData.proofPoints.map((item) => (
              <li className={pageStyles.proofChip} key={item.statement}>
                <p className={pageStyles.proofText}>{item.statement}</p>
              </li>
            ))}
          </ul>
        </section>

        <section
          className={pageStyles.section}
          id="experience"
          aria-labelledby="experience-heading"
        >
          <div className={pageStyles.sectionHeading}>
            <p className={pageStyles.sectionKicker}>Experience Snapshot</p>
            <h2 className={pageStyles.sectionTitle} id="experience-heading">
              Seven years across backend, platform, and delivery.
            </h2>
          </div>
          <ol className={pageStyles.snapshotList}>
            {resumeData.experience.map((item) => (
              <li key={`${item.company}-${item.period}`}>
                <article className={pageStyles.snapshotCard}>
                  <p className={pageStyles.snapshotPeriod}>{item.period}</p>
                  <div className={pageStyles.snapshotBody}>
                    <h3 className={pageStyles.snapshotTitle}>{item.role}</h3>
                    <p className={pageStyles.snapshotCompany}>
                      {item.company} · {item.location}
                    </p>
                    <p className={pageStyles.snapshotSummary}>{item.summary}</p>
                  </div>
                </article>
              </li>
            ))}
          </ol>
        </section>

        <section
          className={pageStyles.section}
          id="stack"
          aria-labelledby="stack-heading"
        >
          <div className={pageStyles.sectionHeading}>
            <p className={pageStyles.sectionKicker}>Core Stack</p>
            <h2 className={pageStyles.sectionTitle} id="stack-heading">
              Core runtime, workflow, and platform tools.
            </h2>
          </div>
          <div className={pageStyles.capabilityGrid}>
            {resumeData.coreStack.map((group) => (
              <section className={pageStyles.capabilityItem} key={group.label}>
                <h3 className={pageStyles.capabilityLabel}>{group.label}</h3>
                <p className={pageStyles.capabilityText}>
                  {group.items.join(", ")}
                </p>
              </section>
            ))}
          </div>
        </section>

        <section
          className={pageStyles.section}
          id="systems"
          aria-labelledby="systems-heading"
        >
          <div className={pageStyles.sectionHeading}>
            <p className={pageStyles.sectionKicker}>Selected Systems</p>
            <h2 className={pageStyles.sectionTitle} id="systems-heading">
              A few systems where the engineering work is concrete.
            </h2>
          </div>
          <div className={pageStyles.systemsGrid}>
            {resumeData.caseStudies.map((study) => (
              <article className={pageStyles.systemCard} key={study.title}>
                <p className={pageStyles.systemContext}>{study.context}</p>
                <div className={pageStyles.systemBody}>
                  <h3 className={pageStyles.systemTitle}>{study.title}</h3>
                  <p className={pageStyles.systemText}>{study.description}</p>
                </div>
                <a
                  className={pageStyles.systemLink}
                  href={study.href}
                  rel="noreferrer"
                  target="_blank"
                >
                  Read full doc
                </a>
              </article>
            ))}
          </div>
        </section>

        <section
          className={pageStyles.section}
          id="links"
          aria-labelledby="links-heading"
        >
          <div className={pageStyles.sectionHeading}>
            <p className={pageStyles.sectionKicker}>Links</p>
            <h2 className={pageStyles.sectionTitle} id="links-heading">
              LinkedIn, GitHub, and direct contact.
            </h2>
          </div>
          <div className={pageStyles.linksPanel}>
            <div className={pageStyles.linksActions}>
              {externalLinks.map((link) => (
                <a
                  className={pageStyles.actionSecondary}
                  href={link.href}
                  key={link.label}
                  rel="noreferrer"
                  target="_blank"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className={pageStyles.linksMeta}>
              <p className={pageStyles.linksMetaItem}>
                <span className={pageStyles.metaLabel}>Email</span>
                <a
                  className={pageStyles.metaValue}
                  href={`mailto:${resumeData.basics.email}`}
                >
                  {resumeData.basics.email}
                </a>
              </p>
              <p className={pageStyles.linksMetaItem}>
                <span className={pageStyles.metaLabel}>Education</span>
                <span className={pageStyles.metaValue}>
                  {resumeData.education.degree}, {resumeData.education.institution}
                </span>
              </p>
              <p className={pageStyles.linksNote}>
                The site and code stay public. Clear writing and clean
                implementation both matter.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
