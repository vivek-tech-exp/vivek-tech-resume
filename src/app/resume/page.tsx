import { getResumeMeta } from "@/lib/resume";

export default function ResumePage() {
  const resume = getResumeMeta();

  return (
    <main className="page-shell">
      <section className="section-grid section-grid-compact">
        <div className="section-heading">
          <p className="section-kicker">Resume</p>
          <h1>Download the PDF.</h1>
        </div>
        <div className="section-copy">
          <p>
            The PDF version stays available for applications, forwarding, and
            offline review.
          </p>
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
      </section>
    </main>
  );
}
