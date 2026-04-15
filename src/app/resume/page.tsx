import Link from "next/link";

import { getResumeMeta } from "@/lib/resume";
import { resumeData } from "@/lib/resume-data";

export default function ResumePage() {
  const resume = getResumeMeta();

  return (
    <main className="page-shell">
      <section className="hero-panel hero-panel-compact">
        <div className="hero-copy">
          <p className="eyebrow">Resume</p>
          <h1 className="hero-title hero-title-compact">
            A concise view before the PDF.
          </h1>
          <div className="resume-summary-list">
            {resumeData.resumePageSummary.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <div className="hero-actions">
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
            <Link className="action" href="/">
              Back home
            </Link>
          </div>
        </div>

        <aside className="hero-aside">
          <ul className="meta-list">
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
            <li>
              <span className="meta-label">Source</span>
              <span>{resumeData.source}</span>
            </li>
          </ul>
          <ul className="profile-links" aria-label="External profiles">
            <li>
              <a
                href={resumeData.links.linkedin.href}
                rel="noreferrer"
                target="_blank"
              >
                {resumeData.links.linkedin.label}
              </a>
            </li>
            <li>
              <a
                href={resumeData.links.github.href}
                rel="noreferrer"
                target="_blank"
              >
                {resumeData.links.github.label}
              </a>
            </li>
          </ul>
        </aside>
      </section>

      <section
        className="section-block"
        aria-labelledby="resume-wins-heading"
      >
        <div className="section-heading">
          <p className="section-kicker">Key Wins</p>
          <h2 id="resume-wins-heading">Quick proof before the download.</h2>
        </div>
        <ul className="proof-list" aria-label="Key wins">
          {resumeData.proofPoints.map((item) => (
            <li className="proof-chip" key={item.statement}>
              <p>{item.statement}</p>
            </li>
          ))}
        </ul>
      </section>

      <section
        className="section-block"
        aria-labelledby="resume-experience-heading"
      >
        <div className="section-heading">
          <p className="section-kicker">Experience</p>
          <h2 id="resume-experience-heading">Concise experience list.</h2>
        </div>
        <ol className="snapshot-list">
          {resumeData.experience.map((item) => (
            <li className="snapshot-item" key={`${item.company}-${item.period}`}>
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
        aria-labelledby="resume-stack-heading"
      >
        <div className="section-heading">
          <p className="section-kicker">Core Stack</p>
          <h2 id="resume-stack-heading">Core runtime, workflow, and platform tools.</h2>
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
        aria-labelledby="resume-download-heading"
      >
        <div className="section-heading">
          <p className="section-kicker">PDF</p>
          <h2 id="resume-download-heading">Download the full resume.</h2>
        </div>
        <div className="section-copy">
          <p>
            The PDF remains the shortest version for applications, forwarding,
            and offline review.
          </p>
          <div className="hero-actions">
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
          </div>
        </div>
      </section>
    </main>
  );
}
