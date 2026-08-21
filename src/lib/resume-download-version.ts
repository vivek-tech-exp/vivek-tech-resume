/** Bump when resume files change - busts browser/CDN cache for download URLs. */
export const RESUME_DOWNLOAD_CACHE_BUST = "3";

export const withResumeDownloadCacheBust = (path: string) =>
  `${path}?v=${RESUME_DOWNLOAD_CACHE_BUST}`;
