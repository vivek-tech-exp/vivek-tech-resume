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
      <span className={pageStyles.themeLabel}>Theme</span>
      <div
        aria-label="Theme"
        className={pageStyles.themeOptions}
        role="group"
      >
        {themeOptions.map((option) => (
          <button
            aria-pressed={preference === option.value}
            className={`${pageStyles.themeButton} ${
              preference === option.value ? pageStyles.themeButtonActive : ""
            }`}
            key={option.value}
            onClick={() => updateTheme(option.value)}
            type="button"
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};
