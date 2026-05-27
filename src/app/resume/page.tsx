import Link from "next/link";

import { StructuredData } from "@/components/structured-data";
import { HomeHeader } from "@/features/home/home-header";
import { pageStyles } from "@/lib/page-styles";
import { resumeData } from "@/lib/resume-data";
import { buildResumeMetadata } from "@/lib/seo";

export const metadata = buildResumeMetadata();

export default function ResumeDownloadPage() {
  const { formats, menuLabel } = resumeData.resumeDownloads;
  const { resumePageIntro, resumePageBack } = resumeData.uiStrings;

  return (
    <>
      <StructuredData page="resume" />
      <HomeHeader />
      <main className={pageStyles.shell} id="main-content">
        <div className="mx-auto max-w-lg space-y-6">
          <div className="space-y-2">
            <p className={pageStyles.siteLabel}>{resumeData.basics.name}</p>
            <h1 className={pageStyles.sectionTitle}>{menuLabel}</h1>
            <p className={pageStyles.sectionIntro}>{resumePageIntro}</p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              className={pageStyles.buttonPrimary}
              download={formats.pdf.fileName}
              href={formats.pdf.href}
            >
              {formats.pdf.menuLabel}
            </a>
            <a
              className={pageStyles.buttonSecondary}
              download={formats.docx.fileName}
              href={formats.docx.href}
            >
              {formats.docx.menuLabel}
            </a>
          </div>

          <p className="text-sm text-[var(--text-soft)]">
            <Link className={pageStyles.textLink} href="/">
              {resumePageBack}
            </Link>
          </p>
        </div>
      </main>
    </>
  );
}
