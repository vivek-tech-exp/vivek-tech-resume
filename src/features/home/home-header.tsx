"use client";

import Link from "next/link";

import { ThemeToggle } from "@/components/theme/theme-toggle";
import { ResumeDownloadMenu } from "@/features/home/resume-download-menu";
import { pageStyles } from "@/lib/page-styles";
import { resumeData } from "@/lib/resume-data";

export const HomeHeader = () => (
  <header className={pageStyles.header}>
    <div className={pageStyles.headerInner}>
      <Link className={pageStyles.brand} href="/">
        {resumeData.basics.name}
      </Link>
      <nav aria-label="Page sections" className={pageStyles.nav}>
        <Link className={pageStyles.navLink} href="/#work">
          {resumeData.uiStrings.navWork}
        </Link>
        <Link className={pageStyles.navLink} href="/#experience">
          {resumeData.uiStrings.navExperience}
        </Link>
        <Link className={pageStyles.navLink} href="/#contact">
          {resumeData.uiStrings.navContact}
        </Link>
      </nav>
      <div className={pageStyles.headerActions}>
        <ResumeDownloadMenu variant="header" />
        <ThemeToggle />
      </div>
    </div>
  </header>
);
