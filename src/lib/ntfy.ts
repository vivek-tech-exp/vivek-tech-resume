import {
  formatDownloadOrigin,
  getDownloadOrigin,
} from "@/lib/download-origin";
import type { ResumeDownloadFormat } from "@/lib/resume-downloads";

const trimEnv = (value: string | undefined) => value?.trim() || undefined;

const ntfyConfig = () => {
  const topic = trimEnv(process.env.NTFY_TOPIC);
  if (!topic) {
    return null;
  }

  return {
    topic,
    baseUrl: trimEnv(process.env.NTFY_URL) ?? "https://ntfy.sh",
    token: trimEnv(process.env.NTFY_TOKEN),
  };
};

const buildNotifyBody = (
  format: ResumeDownloadFormat,
  request: Request,
) => {
  const label = format === "pdf" ? "PDF" : "Word";
  const location = formatDownloadOrigin(getDownloadOrigin(request));
  const lines = [`Format: ${label}`];

  if (location) {
    lines.push(`Approx. location: ${location}`);
  }

  return lines.join("\n");
};

export const notifyResumeDownload = async (
  format: ResumeDownloadFormat,
  request: Request,
) => {
  const config = ntfyConfig();
  if (!config) {
    return;
  }

  const url = `${config.baseUrl.replace(/\/$/, "")}/${config.topic}`;

  try {
    await fetch(url, {
      method: "POST",
      headers: {
        Title: "Resume downloaded",
        Tags: `resume,${format}`,
        ...(config.token ? { Authorization: `Bearer ${config.token}` } : {}),
      },
      body: buildNotifyBody(format, request),
      signal: AbortSignal.timeout(5000),
    });
  } catch {
    // Never block the download if ntfy is down or misconfigured.
  }
};
