import Link from "next/link";

import { getResumeMeta } from "@/lib/resume";
import { siteConfig } from "@/lib/site-config";

type ExternalLink = {
  href: string;
  label: string;
};

const buildExternalLinks = (): ExternalLink[] => {
  const links: ExternalLink[] = [];

  if (siteConfig.githubUrl) {
    links.push({ href: siteConfig.githubUrl, label: "GitHub" });
  }

  if (siteConfig.linkedinUrl) {
    links.push({ href: siteConfig.linkedinUrl, label: "LinkedIn" });
  }

  return links;
};

const selectedWork = [
  {
    title: "Project writing from Notion",
    body: "Long-form project pages will be sourced from Notion and rendered as native site pages.",
  },
  {
    title: "Public code quality",
    body: "The repository stays public so the implementation is part of the resume, not hidden behind it.",
  },
  {
    title: "Fast by default",
    body: "Server-first rendering, small client bundles, and minimal dependencies set the baseline.",
  },
] as const;

export const HomePage = () => {
  const resume = getResumeMeta();
  const externalLinks = buildExternalLinks();

  return (
    <main className="page-shell">
      <section className="hero">
        <p className="eyebrow">{siteConfig.role}</p>
        <h1 className="hero-title">{siteConfig.name}</h1>
        <p className="hero-summary">{siteConfig.summary}</p>
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
            Resume details
          </Link>
        </div>
      </section>

      <section
        className="section-grid"
        aria-labelledby="approach-heading"
      >
        <div className="section-heading">
          <p className="section-kicker">Approach</p>
          <h2 id="approach-heading">Actions over claims.</h2>
        </div>
        <div className="section-copy">
          <p>
            This site is a web version of a resume. It should stay readable,
            fast, accessible, and technically clean.
          </p>
          <p>
            The public repository matters because the code is part of the
            evaluation, not just the content.
          </p>
        </div>
      </section>

      <section className="section-grid" aria-labelledby="work-heading">
        <div className="section-heading">
          <p className="section-kicker">Work</p>
          <h2 id="work-heading">Structure first, content next.</h2>
        </div>
        <div className="work-list">
          {selectedWork.map((item) => (
            <article className="work-item" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      {externalLinks.length > 0 ? (
        <section className="section-grid" aria-labelledby="profiles-heading">
          <div className="section-heading">
            <p className="section-kicker">Profiles</p>
            <h2 id="profiles-heading">External links.</h2>
          </div>
          <ul className="profile-links">
            {externalLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} rel="noreferrer" target="_blank">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </main>
  );
};
