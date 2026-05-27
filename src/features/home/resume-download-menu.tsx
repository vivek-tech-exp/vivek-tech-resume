"use client";

import { OverlayDetails } from "@/components/overlay-details";
import { pageStyles } from "@/lib/page-styles";
import { resumeData } from "@/lib/resume-data";

type ResumeDownloadMenuProps = {
  variant?: "header" | "primary" | "secondary";
};

export const ResumeDownloadMenu = ({
  variant = "primary",
}: ResumeDownloadMenuProps) => {
  const { menuLabel, headerMenuLabel, formats } = resumeData.resumeDownloads;
  const { resumeMenuLabel } = resumeData.uiStrings;

  const triggerClassName =
    variant === "header"
      ? pageStyles.headerButton
      : variant === "primary"
        ? pageStyles.buttonPrimary
        : pageStyles.buttonSecondary;

  const panelClassName =
    variant === "header" ? pageStyles.headerMenuPanel : pageStyles.downloadMenuPanel;

  const closeMenu = () => {
    document.querySelectorAll<HTMLDetailsElement>("[data-overlay-menu]").forEach(
      (details) => {
        details.open = false;
      },
    );
  };

  return (
    <OverlayDetails className={pageStyles.downloadMenu}>
      <summary className={triggerClassName}>
        {variant === "header" ? (
          <>
            <span className="sm:hidden">{headerMenuLabel}</span>
            <span className="hidden sm:inline">{menuLabel}</span>
          </>
        ) : (
          menuLabel
        )}
      </summary>
      <span aria-hidden className={pageStyles.overlayBackdrop} />
      <div aria-label={resumeMenuLabel} className={panelClassName} role="menu">
        <a
          className={pageStyles.downloadMenuItem}
          download={formats.pdf.fileName}
          href={formats.pdf.href}
          onClick={closeMenu}
          role="menuitem"
        >
          {formats.pdf.menuLabel}
        </a>
        <a
          className={pageStyles.downloadMenuItem}
          download={formats.docx.fileName}
          href={formats.docx.href}
          onClick={closeMenu}
          role="menuitem"
        >
          {formats.docx.menuLabel}
        </a>
      </div>
    </OverlayDetails>
  );
};
