export const THEME_STORAGE_KEY = "vivek-tech-resume-theme";

export type ThemePreference = "light" | "dark" | "system";
export type ResolvedTheme = "light" | "dark";

export const themeOptions: Array<{
  label: string;
  value: ThemePreference;
}> = [
  { label: "Light", value: "light" },
  { label: "Dark", value: "dark" },
  { label: "Auto", value: "system" },
];

export const isThemePreference = (
  value: string | null | undefined,
): value is ThemePreference =>
  value === "light" || value === "dark" || value === "system";

export const sanitizeThemePreference = (
  value: string | null | undefined,
): ThemePreference => (isThemePreference(value) ? value : "system");

export const resolveTheme = (
  preference: ThemePreference,
  prefersDark: boolean,
): ResolvedTheme =>
  preference === "system" ? (prefersDark ? "dark" : "light") : preference;

const themeTokens: Record<ResolvedTheme, Record<string, string>> = {
  light: {
    "--page": "#fbfbfa",
    "--page-end": "#ffffff",
    "--surface": "#ffffff",
    "--surface-hover": "#f5f5f4",
    "--surface-raised": "rgba(255, 255, 255, 0.8)",
    "--border": "rgba(0, 0, 0, 0.08)",
    "--text": "#111111",
    "--text-muted": "#444444",
    "--text-soft": "#666666",
    "--text-subtle": "#888888",
    "--inverse-surface": "#111111",
    "--inverse-text": "#ffffff",
    "--focus": "#111111",
    "--selection": "rgba(0, 0, 0, 0.08)",
    "--glow": "rgba(0, 0, 0, 0.04)",
    "--accent": "#000000",
  },
  dark: {
    "--page": "#050505",
    "--page-end": "#000000",
    "--surface": "#0a0a0a",
    "--surface-hover": "#141414",
    "--surface-raised": "rgba(10, 10, 10, 0.8)",
    "--border": "rgba(255, 255, 255, 0.08)",
    "--text": "#fdfdfd",
    "--text-muted": "#bcbcbc",
    "--text-soft": "#888888",
    "--text-subtle": "#555555",
    "--inverse-surface": "#fdfdfd",
    "--inverse-text": "#050505",
    "--focus": "#fdfdfd",
    "--selection": "rgba(255, 255, 255, 0.12)",
    "--glow": "rgba(255, 255, 255, 0.06)",
    "--accent": "#ffffff",
  },
};

export const applyResolvedTheme = (
  root: HTMLElement,
  resolvedTheme: ResolvedTheme,
): void => {
  const tokens = themeTokens[resolvedTheme];

  root.dataset.theme = resolvedTheme;
  root.style.colorScheme = resolvedTheme;

  Object.entries(tokens).forEach(([property, value]) => {
    root.style.setProperty(property, value);
  });
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
  const tokens = ${
    JSON.stringify(themeTokens)
  };
  root.dataset.themePreference = preference;
  root.dataset.theme = resolved;
  root.style.colorScheme = resolved;

  Object.entries(tokens[resolved]).forEach(([property, value]) => {
    root.style.setProperty(property, value);
  });
})();
`;
