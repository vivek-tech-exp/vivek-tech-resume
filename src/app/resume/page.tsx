import Link from "next/link";

import { StructuredData } from "@/components/structured-data";
import { pageStyles } from "@/lib/page-styles";
import { resumeData } from "@/lib/resume-data";
import { buildResumeMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata = buildResumeMetadata();

export default function ResumeDownloadPage() {
  const { formats, menuLabel } = resumeData.resumeDownloads;

  return (
    <>
      <StructuredData page="resume" />
      <main className={`${pageStyles.shell} pt-16`} id="main-content">
      <div className="mx-auto max-w-lg space-y-6">
        <div className="space-y-2">
          <p className={pageStyles.siteLabel}>{resumeData.basics.name}</p>
          <h1 className={pageStyles.sectionTitle}>{menuLabel}</h1>
          <p className={pageStyles.sectionIntro}>
            Pick a format below. Both files are ATS-friendly and match the site
            content.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <a className={pageStyles.buttonPrimary} href={formats.pdf.href}>
            {formats.pdf.menuLabel}
          </a>
          <a className={pageStyles.buttonSecondary} href={formats.docx.href}>
            {formats.docx.menuLabel}
          </a>
        </div>

        <p className="text-sm text-[var(--text-soft)]">
          <Link className={pageStyles.textLink} href="/">
            Back to {siteConfig.name}
          </Link>
        </p>
      </div>
    </main>
    </>
  );
}
