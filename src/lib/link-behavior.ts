export const isExternalHref = (href: string) =>
  href.startsWith("http://") ||
  href.startsWith("https://") ||
  href.startsWith("mailto:");

export const externalLinkProps = (href: string) =>
  isExternalHref(href)
    ? { rel: "noreferrer noopener" as const, target: "_blank" as const }
    : {};

export const externalLinkAriaSuffix = (
  href: string,
  externalSuffix: string,
) => (isExternalHref(href) ? ` (${externalSuffix})` : "");
