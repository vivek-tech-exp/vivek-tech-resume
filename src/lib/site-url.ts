const trimEnv = (value: string | undefined): string | undefined => {
  if (!value) {
    return undefined;
  }

  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : undefined;
};

const toAbsoluteSiteUrl = (value: string): URL | undefined => {
  try {
    const normalized = value.startsWith("http") ? value : `https://${value}`;
    const url = new URL(normalized);

    if (url.pathname !== "/") {
      url.pathname = "/";
    }

    return url;
  } catch {
    return undefined;
  }
};

export const getSiteUrl = (): URL | undefined => {
  const candidates = [
    trimEnv(process.env.NEXT_PUBLIC_SITE_URL),
    trimEnv(process.env.VERCEL_PROJECT_PRODUCTION_URL),
    trimEnv(process.env.VERCEL_URL),
  ].filter(Boolean) as string[];

  for (const candidate of candidates) {
    const url = toAbsoluteSiteUrl(candidate);
    if (url) {
      return url;
    }
  }

  return undefined;
};

export const getSiteOrigin = (): string | undefined => getSiteUrl()?.origin;
