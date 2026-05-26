"use client";

import { useEffect, useState } from "react";

import { pageStyles } from "@/lib/page-styles";
import {
  applyResolvedTheme,
  readThemePreference,
  resolveTheme,
  THEME_STORAGE_KEY,
  toggleThemePreference,
  type ThemePreference,
} from "@/lib/theme";

const SunIcon = () => (
  <svg
    aria-hidden="true"
    fill="none"
    height="15"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2.5"
    viewBox="0 0 24 24"
    width="15"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2" />
    <path d="M12 20v2" />
    <path d="m4.93 4.93 1.41 1.41" />
    <path d="m17.66 17.66 1.41 1.41" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
    <path d="m6.34 17.66-1.41 1.41" />
    <path d="m19.07 4.93-1.41 1.41" />
  </svg>
);

const MoonIcon = () => (
  <svg
    aria-hidden="true"
    fill="none"
    height="15"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2.5"
    viewBox="0 0 24 24"
    width="15"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
  </svg>
);

const AutoIcon = () => (
  <svg
    aria-hidden="true"
    fill="none"
    height="15"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2.5"
    viewBox="0 0 24 24"
    width="15"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect height="14" rx="2" width="20" x="2" y="3" />
    <line x1="8" x2="16" y1="21" y2="21" />
    <line x1="12" x2="12" y1="17" y2="21" />
  </svg>
);

const applyTheme = (preference: ThemePreference) => {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const resolved = resolveTheme(preference, prefersDark);

  applyResolvedTheme(document.documentElement, preference, resolved);
};

export const ThemeToggle = () => {
  const [preference, setPreference] = useState<ThemePreference>("system");
  const [resolved, setResolved] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const syncTheme = () => {
      const nextPreference = readThemePreference();
      const nextResolved = resolveTheme(nextPreference, media.matches);

      applyResolvedTheme(document.documentElement, nextPreference, nextResolved);
      setPreference(nextPreference);
      setResolved(nextResolved);
    };

    const handleSystemChange = () => {
      if (readThemePreference() === "system") {
        syncTheme();
      }
    };

    const handleStorage = (event: StorageEvent) => {
      if (event.key === THEME_STORAGE_KEY) {
        syncTheme();
      }
    };

    syncTheme();
    window.addEventListener("storage", handleStorage);
    media.addEventListener("change", handleSystemChange);

    return () => {
      window.removeEventListener("storage", handleStorage);
      media.removeEventListener("change", handleSystemChange);
    };
  }, []);

  const handleToggle = () => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const nextPreference = toggleThemePreference(preference, prefersDark);

    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, nextPreference);
    } catch {
      // Ignore storage failures and still apply the theme for this session.
    }

    applyTheme(nextPreference);
    setPreference(nextPreference);
    setResolved(resolveTheme(nextPreference, prefersDark));
  };

  const isSystem = preference === "system";
  const label = isSystem
    ? `Color theme follows system (${resolved} mode). Switch to pinned ${resolved === "dark" ? "light" : "dark"} mode.`
    : `Color theme pinned to ${preference} mode. Switch back to system preference.`;

  return (
    <div className={pageStyles.themeControl}>
      <button
        aria-label={label}
        aria-pressed={!isSystem}
        className={pageStyles.themeToggleButton}
        onClick={handleToggle}
        title={label}
        type="button"
      >
        {isSystem ? <AutoIcon /> : resolved === "dark" ? <MoonIcon /> : <SunIcon />}
        <span className={pageStyles.themeToggleLabel}>
          {isSystem ? "Use system theme" : resolved === "dark" ? "Dark theme" : "Light theme"}
        </span>
      </button>
    </div>
  );
};
