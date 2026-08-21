"use client";

import Link from "next/link";
import type { MouseEvent } from "react";

import { OverlayDetails } from "@/components/overlay-details";
import { pageStyles } from "@/lib/page-styles";
import { resumeData } from "@/lib/resume-data";
import { siteConfig } from "@/lib/site-config";

const { uiStrings, resumeDownloads, links } = resumeData;

const sectionLinks = [
  { href: "/#impact", label: uiStrings.navImpact },
  { href: "/#work", label: uiStrings.navWork },
  { href: "/#experience", label: uiStrings.navExperience },
  { href: "/#contact", label: uiStrings.navContact },
] as const;

const closeMenu = (event: MouseEvent<HTMLElement>) => {
  event.currentTarget.closest("details")?.removeAttribute("open");
};

export const MobileSectionNav = () => (
  <OverlayDetails className={pageStyles.mobileNav}>
    <summary
      aria-haspopup="true"
      aria-label={uiStrings.navMenuLabel}
      className={pageStyles.mobileNavTrigger}
    >
      {uiStrings.navMenuLabel}
    </summary>
    <span
      aria-hidden
      className={pageStyles.overlayBackdrop}
      onClick={closeMenu}
    />
    <nav aria-label="Page sections" className={pageStyles.mobileNavPanel}>
      {sectionLinks.map((link) => (
        <Link
          className={pageStyles.mobileNavLink}
          href={link.href}
          key={link.href}
          onClick={closeMenu}
        >
          {link.label}
        </Link>
      ))}
      <div className={pageStyles.mobileNavDivider} role="presentation" />
      <a
        className={pageStyles.mobileNavAccent}
        href={siteConfig.linkedinUrl ?? links.linkedin.href}
        onClick={closeMenu}
        rel="noreferrer noopener"
        target="_blank"
      >
        {uiStrings.linkedinCtaLabel}
      </a>
      <a
        className={pageStyles.mobileNavLink}
        download={resumeDownloads.formats.pdf.fileName}
        href={resumeDownloads.formats.pdf.href}
        onClick={closeMenu}
      >
        {resumeDownloads.formats.pdf.menuLabel} resume
      </a>
    </nav>
  </OverlayDetails>
);
