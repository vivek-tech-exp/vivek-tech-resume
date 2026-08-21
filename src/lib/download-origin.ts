/** Coarse geo from Vercel edge headers only - no IP, city, or client identifiers. */
export type DownloadOrigin = {
  countryCode: string;
  countryName: string;
  regionName?: string;
};

const countryDisplay =
  typeof Intl !== "undefined"
    ? new Intl.DisplayNames(["en"], { type: "region" })
    : null;

const regionDisplay =
  typeof Intl !== "undefined"
    ? new Intl.DisplayNames(["en"], { type: "region" })
    : null;

const trimHeader = (value: string | null) => value?.trim() || undefined;

const displayCountry = (code: string) => {
  try {
    return countryDisplay?.of(code.toUpperCase()) ?? code;
  } catch {
    return code;
  }
};

const displayRegion = (countryCode: string, regionCode: string) => {
  const key = `${countryCode.toUpperCase()}-${regionCode.toUpperCase()}`;
  try {
    return regionDisplay?.of(key) ?? regionCode;
  } catch {
    return regionCode;
  }
};

export const getDownloadOrigin = (request: Request): DownloadOrigin | null => {
  const countryCode = trimHeader(request.headers.get("x-vercel-ip-country"));
  if (!countryCode) {
    return null;
  }

  const regionCode = trimHeader(request.headers.get("x-vercel-ip-country-region"));

  return {
    countryCode: countryCode.toUpperCase(),
    countryName: displayCountry(countryCode),
    ...(regionCode
      ? { regionName: displayRegion(countryCode, regionCode) }
      : {}),
  };
};

export const formatDownloadOrigin = (origin: DownloadOrigin | null) => {
  if (!origin) {
    return null;
  }

  if (origin.regionName) {
    return `${origin.countryName} · ${origin.regionName}`;
  }

  return origin.countryName;
};
