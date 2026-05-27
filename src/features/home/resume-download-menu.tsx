import { pageStyles } from "@/lib/page-styles";
import { resumeData } from "@/lib/resume-data";

type ResumeDownloadMenuProps = {
  variant?: "header" | "primary" | "secondary";
};

export const ResumeDownloadMenu = ({
  variant = "primary",
}: ResumeDownloadMenuProps) => {
  const { menuLabel, formats } = resumeData.resumeDownloads;
  const { resumeMenuLabel } = resumeData.uiStrings;

  const triggerClassName =
    variant === "header"
      ? pageStyles.headerButton
      : variant === "primary"
        ? pageStyles.buttonPrimary
        : pageStyles.buttonSecondary;

  const panelClassName =
    variant === "header" ? pageStyles.headerMenuPanel : pageStyles.downloadMenuPanel;

  return (
    <details className={pageStyles.downloadMenu}>
      <summary className={triggerClassName}>{menuLabel}</summary>
      <div
        aria-label={resumeMenuLabel}
        className={panelClassName}
        role="menu"
      >
        <a
          className={pageStyles.downloadMenuItem}
          download={formats.pdf.fileName}
          href={formats.pdf.href}
          role="menuitem"
        >
          {formats.pdf.menuLabel}
        </a>
        <a
          className={pageStyles.downloadMenuItem}
          download={formats.docx.fileName}
          href={formats.docx.href}
          role="menuitem"
        >
          {formats.docx.menuLabel}
        </a>
      </div>
    </details>
  );
};
