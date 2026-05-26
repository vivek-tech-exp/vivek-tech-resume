"use client";

import { useEffect, useRef } from "react";

import {
  readMotionEnvironment,
  shouldEnableHeroAtmosphere,
} from "@/lib/motion-preferences";

type HeroAtmosphereProps = {
  label: string;
};

const scheduleIdle = (callback: () => void) => {
  if (typeof window.requestIdleCallback === "function") {
    const id = window.requestIdleCallback(callback, { timeout: 2200 });
    return () => window.cancelIdleCallback(id);
  }

  const timeoutId = window.setTimeout(callback, 1200);
  return () => window.clearTimeout(timeoutId);
};

export const HeroAtmosphere = ({ label }: HeroAtmosphereProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const environment = readMotionEnvironment();
    if (!shouldEnableHeroAtmosphere(environment)) {
      return;
    }

    const container = containerRef.current;
    if (!container) {
      return;
    }

    let cleanup: (() => void) | undefined;
    let cancelled = false;

    const idleCancel = scheduleIdle(() => {
      void import("@/features/home/hero-atmosphere-scene").then(
        ({ mountHeroAtmosphere }) => {
          if (cancelled || !containerRef.current) {
            return;
          }

          cleanup = mountHeroAtmosphere(containerRef.current, label);
        },
      );
    });

    return () => {
      cancelled = true;
      idleCancel();
      cleanup?.();
    };
  }, [label]);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="hero-atmosphere-host pointer-events-none absolute inset-0 overflow-hidden"
    />
  );
};
