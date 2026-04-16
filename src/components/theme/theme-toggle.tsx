"use client";

import { useEffect, useState } from "react";

import { pageStyles } from "@/lib/page-styles";
import {
  applyResolvedTheme,
  resolveTheme,
  sanitizeThemePreference,
  THEME_STORAGE_KEY,
  themeOptions,
  type ThemePreference,
} from "@/lib/theme";

const readPreference = (): ThemePreference => {
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

const applyTheme = (preference: ThemePreference) => {
  const resolved = resolveTheme(
    preference,
    window.matchMedia("(prefers-color-scheme: dark)").matches,
  );
  const root = document.documentElement;

  root.dataset.themePreference = preference;
  applyResolvedTheme(root, resolved);
};

const SunIcon = () => (
  <svg
    fill="none"
    height="13"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2.5"
    viewBox="0 0 24 24"
    width="13"
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
    fill="none"
    height="13"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2.5"
    viewBox="0 0 24 24"
    width="13"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
  </svg>
);

const MonitorIcon = () => (
  <svg
    fill="none"
    height="13"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2.5"
    viewBox="0 0 24 24"
    width="13"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect height="14" rx="2" width="20" x="2" y="3" />
    <line x1="8" x2="16" y1="21" y2="21" />
    <line x1="12" x2="12" y1="17" y2="21" />
  </svg>
);

const themeIcons: Record<ThemePreference, React.ReactNode> = {
  system: <MonitorIcon />,
  light: <SunIcon />,
  dark: <MoonIcon />,
};

export const ThemeToggle = () => {
  const [preference, setPreference] = useState<ThemePreference>("system");

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const syncFromStorage = () => {
      const nextPreference = readPreference();

      applyTheme(nextPreference);
      setPreference(nextPreference);
    };

    const handleSystemChange = () => {
      if (readPreference() === "system") {
        applyTheme("system");
        setPreference("system");
      }
    };

    const handleStorage = (event: StorageEvent) => {
      if (event.key === THEME_STORAGE_KEY) {
        syncFromStorage();
      }
    };

    syncFromStorage();
    window.addEventListener("storage", handleStorage);

    media.addEventListener("change", handleSystemChange);

    return () => {
      window.removeEventListener("storage", handleStorage);
      media.removeEventListener("change", handleSystemChange);
    };
  }, []);

  const updateTheme = (nextPreference: ThemePreference) => {
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, nextPreference);
    } catch {
      // Ignore storage failures and still apply the theme for this session.
    }

    applyTheme(nextPreference);
    setPreference(nextPreference);
  };

  return (
    <div className={pageStyles.themeControl}>
      <div aria-label="Theme" className={pageStyles.themeOptions} role="group">
        {themeOptions.map((option) => (
          <button
            aria-label={option.label}
            aria-pressed={preference === option.value}
            className={`${pageStyles.themeButton} ${
              preference === option.value ? pageStyles.themeButtonActive : ""
            }`}
            key={option.value}
            onClick={() => updateTheme(option.value)}
            title={option.label}
            type="button"
          >
            {themeIcons[option.value]}
          </button>
        ))}
      </div>
    </div>
  );
};
