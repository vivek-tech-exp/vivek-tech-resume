import Link from "next/link";

import { getResumeMeta } from "@/lib/resume";
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
  const resume = getResumeMeta();
  const externalLinks = buildExternalLinks();

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className="site-chrome">
        <div className="topbar">
          <p className="topbar-note">Backend · Distributed Systems · Platform</p>
          <nav aria-label="Section navigation" className="topbar-nav">
            <a href="#impact">Impact</a>
            <a href="#experience">Experience</a>
            <a href="#stack">Stack</a>
            <a href="#systems">Systems</a>
            <a href="#links">Links</a>
          </nav>
        </div>
      </header>

      <main className="page-shell" id="main-content">
        <section className="hero-panel">
          <div className="hero-copy">
            <p className="eyebrow">{resumeData.basics.title}</p>
            <h1 className="hero-title">{resumeData.basics.name}</h1>
            <p className="hero-specialization">
              Java • Distributed Systems • Workflow Automation • Cloud
              Infrastructure
            </p>
            <p className="hero-summary">{resumeData.positioningLine}</p>
            <div className="hero-actions" aria-label="Primary actions">
              <a
                className="action action-primary"
                href={resume.href}
                download={resume.downloadName}
              >
                Download resume
                {resume.fileSizeLabel ? (
                  <span className="action-meta">PDF, {resume.fileSizeLabel}</span>
                ) : null}
              </a>
              <Link className="action" href="/resume">
                PDF details
              </Link>
            </div>
          </div>

          <aside className="hero-aside" aria-label="Profile details">
            <ul className="meta-list">
              <li>
                <span className="meta-label">Base</span>
                <span>{resumeData.basics.locations.join(" · ")}</span>
              </li>
              <li>
                <span className="meta-label">Email</span>
                <a href={`mailto:${resumeData.basics.email}`}>
                  {resumeData.basics.email}
                </a>
              </li>
              <li>
                <span className="meta-label">Phone</span>
                <a href={resumeData.basics.phoneHref}>
                  {resumeData.basics.phoneDisplay}
                </a>
              </li>
            </ul>
            <p className="hero-note">
              Java, TypeScript, and Python across backend services, workflow
              engines, integrations, and production infrastructure.
            </p>
            <ul className="profile-links" aria-label="External profiles">
              {externalLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} rel="noreferrer" target="_blank">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        </section>

        <section
          className="section-block"
          id="impact"
          aria-labelledby="impact-heading"
        >
          <div className="section-heading">
            <p className="section-kicker">Selected Impact</p>
            <h2 id="impact-heading">Concrete outcomes, not broad claims.</h2>
          </div>
          <ul className="proof-list" aria-label="Selected proof points">
            {resumeData.proofPoints.map((item) => (
              <li className="proof-chip" key={item.statement}>
                <p>{item.statement}</p>
              </li>
            ))}
          </ul>
        </section>

        <section
          className="section-block"
          id="experience"
          aria-labelledby="experience-heading"
        >
          <div className="section-heading">
            <p className="section-kicker">Experience Snapshot</p>
            <h2 id="experience-heading">
              Seven years across backend, platform, and delivery.
            </h2>
          </div>
          <ol className="snapshot-list">
            {resumeData.experience.map((item) => (
              <li
                className="snapshot-item"
                key={`${item.company}-${item.period}`}
              >
                <article className="snapshot-card">
                  <p className="snapshot-period">{item.period}</p>
                  <h3>{item.role}</h3>
                  <p className="snapshot-company">
                    {item.company} · {item.location}
                  </p>
                  <p className="snapshot-summary">{item.summary}</p>
                </article>
              </li>
            ))}
          </ol>
        </section>

        <section
          className="section-block"
          id="stack"
          aria-labelledby="stack-heading"
        >
          <div className="section-heading">
            <p className="section-kicker">Core Stack</p>
            <h2 id="stack-heading">
              Core runtime, workflow, and platform tools.
            </h2>
          </div>
          <div className="capability-grid">
            {resumeData.coreStack.map((group) => (
              <section className="capability-item" key={group.label}>
                <h3>{group.label}</h3>
                <p>{group.items.join(", ")}</p>
              </section>
            ))}
          </div>
        </section>

        <section
          className="section-block"
          id="systems"
          aria-labelledby="systems-heading"
        >
          <div className="section-heading">
            <p className="section-kicker">Selected Systems</p>
            <h2 id="systems-heading">
              A few systems where the engineering work is concrete.
            </h2>
          </div>
          <div className="systems-grid">
            {resumeData.caseStudies.map((study) => (
              <article className="system-card" key={study.title}>
                <p className="system-context">{study.context}</p>
                <h3>{study.title}</h3>
                <p>{study.focus}</p>
                <p className="system-outcome">{study.outcome}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          className="section-block"
          id="links"
          aria-labelledby="links-heading"
        >
          <div className="section-heading">
            <p className="section-kicker">Links</p>
            <h2 id="links-heading">
              Resume PDF, LinkedIn, GitHub, and direct contact.
            </h2>
          </div>
          <div className="links-panel">
            <div className="links-actions">
              <a
                className="action action-primary"
                href={resume.href}
                download={resume.downloadName}
              >
                Download resume
                {resume.fileSizeLabel ? (
                  <span className="action-meta">PDF, {resume.fileSizeLabel}</span>
                ) : null}
              </a>
              {externalLinks.map((link) => (
                <a
                  className="action"
                  href={link.href}
                  key={link.label}
                  rel="noreferrer"
                  target="_blank"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="links-meta">
              <p>
                <span className="meta-label">Email</span>
                <a href={`mailto:${resumeData.basics.email}`}>
                  {resumeData.basics.email}
                </a>
              </p>
              <p>
                <span className="meta-label">Phone</span>
                <a href={resumeData.basics.phoneHref}>
                  {resumeData.basics.phoneDisplay}
                </a>
              </p>
              <p>
                <span className="meta-label">Education</span>
                <span>
                  {resumeData.education.degree}, {resumeData.education.institution}
                </span>
              </p>
            </div>
            <p className="links-note">
              The site and code stay public. Clear writing and clean
              implementation both matter.
            </p>
          </div>
        </section>
      </main>
    </>
  );
};
