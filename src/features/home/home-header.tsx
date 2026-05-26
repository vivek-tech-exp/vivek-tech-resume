"use client";

import { ThemeToggle } from "@/components/theme/theme-toggle";
import { pageStyles } from "@/lib/page-styles";
import { resumeData } from "@/lib/resume-data";

export const HomeHeader = () => (
  <header className={pageStyles.chrome}>
    <div className={pageStyles.topBar}>
      <nav aria-label="Section navigation" className={pageStyles.topBarNav}>
        <a className={pageStyles.topBarLink} href="#projects">
          {resumeData.uiStrings.navProjects}
        </a>
        <a className={pageStyles.topBarLink} href="#experience">
          {resumeData.uiStrings.navExperience}
        </a>
        <a className={pageStyles.topBarLink} href="#stack">
          {resumeData.uiStrings.navStack}
        </a>
        <a className={pageStyles.topBarLink} href="#case-studies">
          {resumeData.uiStrings.navCaseStudies}
        </a>
        <a className={pageStyles.topBarLink} href="#contact">
          {resumeData.uiStrings.navContact}
        </a>
      </nav>
      <ThemeToggle />
    </div>
  </header>
);
