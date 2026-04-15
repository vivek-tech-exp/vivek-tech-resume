import Link from "next/link";

import { pageStyles } from "@/lib/page-styles";
import { getResumeMeta } from "@/lib/resume";
import { resumeData } from "@/lib/resume-data";

export default function ResumePage() {
  const resume = getResumeMeta();

  return (
    <main className={pageStyles.pageShell}>
      <section className={pageStyles.heroPanelCompact}>
        <div className={pageStyles.heroCopy}>
          <p className={pageStyles.eyebrow}>Resume</p>
          <h1 className={pageStyles.heroTitleCompact}>
            A concise view before the PDF.
          </h1>
          <div className={pageStyles.resumeSummaryList}>
            {resumeData.resumePageSummary.map((line) => (
              <p className={pageStyles.resumeSummaryText} key={line}>
                {line}
              </p>
            ))}
          </div>
          <div className={pageStyles.heroActions}>
            <a
              className={pageStyles.actionPrimary}
              href={resume.href}
              download={resume.downloadName}
            >
              Download resume
              {resume.fileSizeLabel ? (
                <span className={pageStyles.actionMeta}>
                  PDF, {resume.fileSizeLabel}
                </span>
              ) : null}
            </a>
            <Link className={pageStyles.actionSecondary} href="/">
              Back home
            </Link>
          </div>
        </div>

        <aside className={pageStyles.heroAside}>
          <ul className={pageStyles.metaList}>
            <li className={pageStyles.metaItem}>
              <span className={pageStyles.metaLabel}>Email</span>
              <a
                className={pageStyles.metaValue}
                href={`mailto:${resumeData.basics.email}`}
              >
                {resumeData.basics.email}
              </a>
            </li>
            <li className={pageStyles.metaItem}>
              <span className={pageStyles.metaLabel}>Phone</span>
              <a
                className={pageStyles.metaValue}
                href={resumeData.basics.phoneHref}
              >
                {resumeData.basics.phoneDisplay}
              </a>
            </li>
            <li className={pageStyles.metaItem}>
              <span className={pageStyles.metaLabel}>Source</span>
              <span className={pageStyles.metaValue}>{resumeData.source}</span>
            </li>
          </ul>
          <ul className={pageStyles.profileLinks} aria-label="External profiles">
            <li>
              <a
                className={pageStyles.profileLink}
                href={resumeData.links.linkedin.href}
                rel="noreferrer"
                target="_blank"
              >
                {resumeData.links.linkedin.label}
              </a>
            </li>
            <li>
              <a
                className={pageStyles.profileLink}
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
        className={pageStyles.section}
        aria-labelledby="resume-wins-heading"
      >
        <div className={pageStyles.sectionHeading}>
          <p className={pageStyles.sectionKicker}>Key Wins</p>
          <h2 className={pageStyles.sectionTitle} id="resume-wins-heading">
            Quick proof before the download.
          </h2>
        </div>
        <ul className={pageStyles.proofList} aria-label="Key wins">
          {resumeData.proofPoints.map((item) => (
            <li className={pageStyles.proofChip} key={item.statement}>
              <p className={pageStyles.proofText}>{item.statement}</p>
            </li>
          ))}
        </ul>
      </section>

      <section
        className={pageStyles.section}
        aria-labelledby="resume-experience-heading"
      >
        <div className={pageStyles.sectionHeading}>
          <p className={pageStyles.sectionKicker}>Experience</p>
          <h2 className={pageStyles.sectionTitle} id="resume-experience-heading">
            Concise experience list.
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
        aria-labelledby="resume-stack-heading"
      >
        <div className={pageStyles.sectionHeading}>
          <p className={pageStyles.sectionKicker}>Core Stack</p>
          <h2 className={pageStyles.sectionTitle} id="resume-stack-heading">
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
        aria-labelledby="resume-download-heading"
      >
        <div className={pageStyles.sectionHeading}>
          <p className={pageStyles.sectionKicker}>PDF</p>
          <h2 className={pageStyles.sectionTitle} id="resume-download-heading">
            Download the full resume.
          </h2>
        </div>
        <div className={pageStyles.sectionCopy}>
          <p>
            The PDF remains the shortest version for applications, forwarding,
            and offline review.
          </p>
          <div className={pageStyles.heroActions}>
            <a
              className={pageStyles.actionPrimary}
              href={resume.href}
              download={resume.downloadName}
            >
              Download resume
              {resume.fileSizeLabel ? (
                <span className={pageStyles.actionMeta}>
                  PDF, {resume.fileSizeLabel}
                </span>
              ) : null}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
