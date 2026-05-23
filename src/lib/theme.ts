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
    "--page": "#f8fafc",
    "--page-end": "#ffffff",
    "--surface": "#ffffff",
    "--surface-hover": "#f1f5f9",
    "--surface-raised": "rgba(255, 255, 255, 0.75)",
    "--border": "rgba(15, 23, 42, 0.08)",
    "--text": "#0f172a",
    "--text-muted": "#334155",
    "--text-soft": "#475569",
    "--text-subtle": "#64748b",
    "--inverse-surface": "#0f172a",
    "--inverse-text": "#ffffff",
    "--focus": "#0284c7",
    "--selection": "rgba(14, 165, 233, 0.12)",
    "--glow": "rgba(14, 165, 233, 0.03)",
    "--accent": "#0f172a",
    "--accent-cyan": "#0ea5e9",
    "--accent-violet": "#6366f1",
    "--accent-rgb": "14, 165, 233",
    "--card-bg": "rgba(255, 255, 255, 0.7)",
    "--card-border": "rgba(15, 23, 42, 0.05)",
    "--glow-cyan": "rgba(14, 165, 233, 0.06)",
    "--glow-violet": "rgba(99, 102, 241, 0.06)",
  },
  dark: {
    "--page": "#030712",
    "--page-end": "#000000",
    "--surface": "#0b0f19",
    "--surface-hover": "#161b26",
    "--surface-raised": "rgba(11, 15, 25, 0.7)",
    "--border": "rgba(255, 255, 255, 0.06)",
    "--text": "#f9fafb",
    "--text-muted": "#d1d5db",
    "--text-soft": "#9ca3af",
    "--text-subtle": "#6b7280",
    "--inverse-surface": "#f9fafb",
    "--inverse-text": "#030712",
    "--focus": "#06b6d4",
    "--selection": "rgba(6, 182, 212, 0.16)",
    "--glow": "rgba(6, 182, 212, 0.04)",
    "--accent": "#06b6d4",
    "--accent-cyan": "#06b6d4",
    "--accent-violet": "#8b5cf6",
    "--accent-rgb": "6, 182, 212",
    "--card-bg": "rgba(11, 15, 25, 0.65)",
    "--card-border": "rgba(255, 255, 255, 0.05)",
    "--glow-cyan": "rgba(6, 182, 212, 0.12)",
    "--glow-violet": "rgba(139, 92, 246, 0.12)",
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
