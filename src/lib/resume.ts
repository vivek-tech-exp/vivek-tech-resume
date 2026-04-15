import { statSync } from "node:fs";
import { join } from "node:path";

const RESUME_FILE_NAME = "vivek-mankonda-resume.pdf";
const RESUME_PUBLIC_PATH = `/resume/${RESUME_FILE_NAME}`;

const formatFileSize = (bytes: number): string => {
  if (bytes < 1024) {
    return `${bytes} B`;
  }

  if (bytes < 1024 * 1024) {
    return `${(bytes / 1024).toFixed(0)} KB`;
  }

  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
};

export const getResumeMeta = (): {
  href: string;
  downloadName: string;
  fileSizeLabel?: string;
} => {
  try {
    const filePath = join(process.cwd(), "public", "resume", RESUME_FILE_NAME);
    const fileSize = statSync(filePath).size;

    return {
      href: RESUME_PUBLIC_PATH,
      downloadName: RESUME_FILE_NAME,
      fileSizeLabel: formatFileSize(fileSize),
    };
  } catch {
    return {
      href: RESUME_PUBLIC_PATH,
      downloadName: RESUME_FILE_NAME,
    };
  }
};
