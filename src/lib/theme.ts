export const THEME_STORAGE_KEY = "vivek-tech-resume-theme";

export type ThemePreference = "system" | "light" | "dark";
export type ResolvedTheme = "light" | "dark";

export const isThemePreference = (
  value: string | null | undefined,
): value is ThemePreference =>
  value === "light" || value === "dark" || value === "system";

export const sanitizeThemePreference = (
  value: string | null | undefined,
): ThemePreference => (isThemePreference(value) ? value : "system");

export const readThemePreference = (): ThemePreference => {
  if (typeof window === "undefined") {
    return "system";
  }

  try {
    return sanitizeThemePreference(
      window.localStorage.getItem(THEME_STORAGE_KEY),
    );
  } catch {
    return "system";
  }
};

export const resolveTheme = (
  preference: ThemePreference,
  prefersDark: boolean,
): ResolvedTheme =>
  preference === "system" ? (prefersDark ? "dark" : "light") : preference;

export const getOppositeTheme = (prefersDark: boolean): ResolvedTheme =>
  prefersDark ? "light" : "dark";

export const toggleThemePreference = (
  preference: ThemePreference,
  prefersDark: boolean,
): ThemePreference => {
  if (preference === "system") {
    return getOppositeTheme(prefersDark);
  }
  return "system";
};

const updateColorSchemeMeta = (preference: ThemePreference): void => {
  const meta = document.querySelector('meta[name="color-scheme"]');
  if (!meta) return;

  meta.setAttribute(
    "content",
    preference === "system" ? "light dark" : preference,
  );
};

export const applyResolvedTheme = (
  root: HTMLElement,
  preference: ThemePreference,
  resolvedTheme: ResolvedTheme,
): void => {
  root.dataset.themePreference = preference;
  root.dataset.theme = resolvedTheme;
  root.style.colorScheme = resolvedTheme;
  updateColorSchemeMeta(preference);
};

export const getThemeScript = () => `
(() => {
  const storageKey = "${THEME_STORAGE_KEY}";
  const root = document.documentElement;
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
  const readPreference = () => {
    try {
      const value = window.localStorage.getItem(storageKey);
      return value === "light" || value === "dark" || value === "system"
        ? value
        : "system";
    } catch {
      return "system";
    }
  };
  const preference = readPreference();
  const resolved = preference === "system"
    ? (prefersDark.matches ? "dark" : "light")
    : preference;
  const meta = document.querySelector('meta[name="color-scheme"]');
  if (meta) {
    meta.content = preference === "system" ? "light dark" : preference;
  }
  root.dataset.themePreference = preference;
  root.dataset.theme = resolved;
  root.style.colorScheme = resolved;
})();
`;
