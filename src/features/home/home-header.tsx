"use client";

import { ThemeToggle } from "@/components/theme/theme-toggle";
import { ResumeDownloadMenu } from "@/features/home/resume-download-menu";
import { pageStyles } from "@/lib/page-styles";
import { resumeData } from "@/lib/resume-data";

export const HomeHeader = () => (
  <header className={pageStyles.header}>
    <div className={pageStyles.headerInner}>
      <a className={pageStyles.brand} href="#top">
        {resumeData.basics.name}
      </a>
      <nav aria-label="Page sections" className={pageStyles.nav}>
        <a className={pageStyles.navLink} href="#work">
          {resumeData.uiStrings.navWork}
        </a>
        <a className={pageStyles.navLink} href="#experience">
          {resumeData.uiStrings.navExperience}
        </a>
        <a className={pageStyles.navLink} href="#contact">
          {resumeData.uiStrings.navContact}
        </a>
      </nav>
      <div className={pageStyles.headerActions}>
        <ResumeDownloadMenu variant="header" />
        <ThemeToggle />
      </div>
    </div>
  </header>
);
