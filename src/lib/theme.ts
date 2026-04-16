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
    "--page": "#f5f5f4",
    "--page-end": "#ffffff",
    "--surface": "#ffffff",
    "--surface-hover": "#f0f0ef",
    "--surface-raised": "rgba(255, 255, 255, 0.92)",
    "--border": "#d4d4d8",
    "--text": "#18181b",
    "--text-muted": "#3f3f46",
    "--text-soft": "#52525b",
    "--text-subtle": "#71717a",
    "--inverse-surface": "#18181b",
    "--inverse-text": "#fafafa",
    "--focus": "#18181b",
    "--selection": "rgba(24, 24, 27, 0.16)",
    "--glow": "rgba(24, 24, 27, 0.06)",
  },
  dark: {
    "--page": "#09090b",
    "--page-end": "#050505",
    "--surface": "#09090b",
    "--surface-hover": "#18181b",
    "--surface-raised": "rgba(9, 9, 11, 0.9)",
    "--border": "#27272a",
    "--text": "#fafafa",
    "--text-muted": "#d4d4d8",
    "--text-soft": "#a1a1aa",
    "--text-subtle": "#71717a",
    "--inverse-surface": "#fafafa",
    "--inverse-text": "#18181b",
    "--focus": "#fafafa",
    "--selection": "rgba(250, 250, 250, 0.18)",
    "--glow": "rgba(255, 255, 255, 0.08)",
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
