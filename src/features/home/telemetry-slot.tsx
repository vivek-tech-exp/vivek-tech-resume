"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const TelemetryDashboard = dynamic(
  () =>
    import("@/components/telemetry-dashboard").then(
      (mod) => mod.TelemetryDashboard,
    ),
  {
    ssr: false,
    loading: () => (
      <div
        aria-hidden="true"
        className="h-[280px] lg:h-[300px] border border-[var(--border)] bg-[var(--card-bg)]"
      />
    ),
  },
);

const placeholder = (
  <div
    aria-hidden="true"
    className="h-[280px] lg:h-[300px] border border-[var(--border)] bg-[var(--card-bg)]"
  />
);

export const TelemetrySlot = () => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (typeof window.requestIdleCallback === "function") {
      const id = window.requestIdleCallback(() => setReady(true), {
        timeout: 3200,
      });
      return () => window.cancelIdleCallback(id);
    }

    const timeoutId = window.setTimeout(() => setReady(true), 1400);
    return () => window.clearTimeout(timeoutId);
  }, []);

  return ready ? <TelemetryDashboard /> : placeholder;
};
