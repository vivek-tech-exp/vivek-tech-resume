"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const InteractiveCanvas = dynamic(
  () =>
    import("@/components/interactive-canvas").then(
      (mod) => mod.InteractiveCanvas,
    ),
  { ssr: false, loading: () => null },
);

const scheduleIdle = (callback: () => void) => {
  if (typeof window.requestIdleCallback === "function") {
    const id = window.requestIdleCallback(callback, { timeout: 2500 });
    return () => window.cancelIdleCallback(id);
  }

  const timeoutId = window.setTimeout(callback, 1800);
  return () => window.clearTimeout(timeoutId);
};

export const HomeEffects = () => {
  const [effectsReady, setEffectsReady] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const coarsePointer = window.matchMedia(
      "(hover: none), (pointer: coarse)",
    ).matches;
    const network = navigator as Navigator & {
      connection?: { saveData?: boolean };
    };
    const saveData = network.connection?.saveData === true;

    if (prefersReducedMotion || coarsePointer || saveData) {
      return;
    }

    return scheduleIdle(() => setEffectsReady(true));
  }, []);

  if (!effectsReady) {
    return null;
  }

  return (
    <>
      <div
        aria-hidden="true"
        className="cyber-grid fixed inset-0 pointer-events-none z-0 opacity-15"
      />
      <InteractiveCanvas />
    </>
  );
};
