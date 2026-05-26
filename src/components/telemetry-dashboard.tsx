"use client";

import { useEffect, useRef, useState } from "react";

const terminalLogs = [
  "Initializing v-mankonda boot sequence...",
  "Loading systems core dependencies...",
  "IaC: terraform init & apply -auto-approve",
  "IaC: aws_telemetry_pipeline: active [100%]",
  "BPMN: camunda_engine cluster active",
  "BPMN: medical_checkup_workflow loaded [17d -> 3d]",
  "Protocol: fix_2.0_trading_handshake completed",
  "Fintech: pooled_brokerage_ledger reconciled [ok]",
  "Obs: new_relic alert_suppression: running",
  "Obs: mean_time_to_resolution minimized [mttr: 0]",
  "System fully optimized. Listening on port :8080",
];

export const TelemetryDashboard = () => {
  const [logs, setLogs] = useState<string[]>([]);
  const [uptime, setUptime] = useState(99.9984);
  const [activeRequests, setActiveRequests] = useState(142);
  const [currentLogIndex, setCurrentLogIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const liveRegionRef = useRef<HTMLDivElement>(null);
  const lastAnnouncedRef = useRef("");

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotion = () => setReducedMotion(media.matches);

    syncMotion();
    media.addEventListener("change", syncMotion);

    return () => media.removeEventListener("change", syncMotion);
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      return;
    }

    if (currentLogIndex >= terminalLogs.length) {
      const interval = setTimeout(() => {
        setLogs([]);
        setCurrentLogIndex(0);
      }, 8000);
      return () => clearTimeout(interval);
    }

    const timer = setTimeout(() => {
      const nextLog = terminalLogs[currentLogIndex];
      if (nextLog !== undefined) {
        setLogs((prev) => [...prev, nextLog].slice(-6));
      }
      setCurrentLogIndex((prev) => prev + 1);
    }, currentLogIndex === 0 ? 500 : Math.random() * 800 + 400);

    return () => clearTimeout(timer);
  }, [currentLogIndex, reducedMotion]);

  useEffect(() => {
    if (reducedMotion) return;

    const metricInterval = setInterval(() => {
      setUptime((prev) => {
        const delta = (Math.random() - 0.5) * 0.0001;
        return Math.min(100, Math.max(99.998, prev + delta));
      });
      setActiveRequests((prev) => {
        const delta = Math.floor((Math.random() - 0.5) * 8);
        return Math.min(250, Math.max(80, prev + delta));
      });
    }, 1500);

    return () => clearInterval(metricInterval);
  }, [reducedMotion]);

  useEffect(() => {
    const latest = logs.at(-1);
    if (!latest || latest === lastAnnouncedRef.current) return;

    lastAnnouncedRef.current = latest;
    if (liveRegionRef.current) {
      liveRegionRef.current.textContent = latest;
    }
  }, [logs]);

  const displayLogs = reducedMotion ? terminalLogs.slice(-4) : logs;

  return (
    <div className="glassmorphic-card p-5 font-mono text-[0.7rem] leading-relaxed select-none relative overflow-hidden flex flex-col h-[280px] lg:h-[300px] border border-[var(--border)] shadow-md">
      <div aria-hidden="true" className="absolute inset-0 cyber-grid z-0" />

      <div className="flex items-center justify-between border-b border-[var(--border)] pb-3 mb-3 relative z-10">
        <div aria-hidden="true" className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/85" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/85" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/85" />
        </div>
        <div className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className={`w-1.5 h-1.5 rounded-full bg-[var(--accent-cyan)] ${reducedMotion ? "" : "animate-pulse"}`}
          />
          <span className="text-[0.6rem] tracking-[0.1em] text-[var(--text-subtle)] font-bold uppercase">
            LIVE SYSTEMS TELEMETRY
          </span>
        </div>
      </div>

      <dl className="grid grid-cols-2 gap-3 mb-4 relative z-10 m-0">
        <div className="bg-[color-mix(in_oklab,var(--accent-cyan)_3%,transparent)] border border-[var(--border)] px-3 py-2">
          <dt className="text-[0.55rem] text-[var(--text-subtle)] uppercase tracking-wider mb-0.5">
            Core Uptime
          </dt>
          <dd className="m-0 text-sm font-bold text-[var(--accent-cyan)] tracking-tight">
            {uptime.toFixed(4)}%
          </dd>
        </div>
        <div className="bg-[color-mix(in_oklab,var(--accent-violet)_3%,transparent)] border border-[var(--border)] px-3 py-2">
          <dt className="text-[0.55rem] text-[var(--text-subtle)] uppercase tracking-wider mb-0.5">
            BPMN Engine Latency
          </dt>
          <dd className="m-0 text-sm font-bold text-[var(--accent-violet)] tracking-tight">
            3.0 ms
          </dd>
        </div>
        <div className="bg-[var(--border)]/10 border border-[var(--border)] px-3 py-2">
          <dt className="text-[0.55rem] text-[var(--text-subtle)] uppercase tracking-wider mb-0.5">
            Traffic Rate
          </dt>
          <dd className="m-0 text-sm font-bold text-[var(--text)] tracking-tight">
            {activeRequests} req/s
          </dd>
        </div>
        <div className="bg-[var(--border)]/10 border border-[var(--border)] px-3 py-2">
          <dt className="text-[0.55rem] text-[var(--text-subtle)] uppercase tracking-wider mb-0.5">
            Active Systems
          </dt>
          <dd className="m-0 text-sm font-bold text-[var(--text)] tracking-tight">
            4 / 4 operational
          </dd>
        </div>
      </dl>

      <div className="flex-1 bg-black/40 border border-[var(--border)] rounded px-3 py-2 flex flex-col overflow-hidden relative z-10">
        <div className="flex items-center justify-between border-b border-[var(--border)]/30 pb-1 mb-1.5">
          <span className="text-[0.55rem] text-[var(--text-soft)] uppercase tracking-widest font-semibold">
            CONSOLE_LOG.SH
          </span>
          <span className="text-[0.55rem] text-[var(--accent-cyan)] tracking-wider">
            STATUS: {reducedMotion ? "STATIC" : "ACTIVE"}
          </span>
        </div>
        <div
          aria-live="polite"
          aria-atomic="true"
          className="sr-only"
          ref={liveRegionRef}
        />
        <div
          aria-label="Recent console output"
          className="flex-1 overflow-hidden flex flex-col justify-end text-[var(--text-soft)] font-mono text-[0.62rem] leading-5"
          role="log"
        >
          {displayLogs.map((log) => (
            <div
              key={log}
              className={`truncate ${
                log.includes("completed") ||
                log.includes("operational") ||
                log.includes("fully optimized")
                  ? "text-[var(--accent-cyan)] font-medium"
                  : log.includes("init") || log.includes("sequence")
                    ? "text-slate-400"
                    : log.includes("loaded")
                      ? "text-[var(--accent-violet)]"
                      : ""
              }`}
            >
              <span aria-hidden="true" className="text-[var(--accent-cyan)]/50 select-none me-1.5">
                &gt;
              </span>
              {log}
            </div>
          ))}
          {!reducedMotion && (
            <div className="caret-blink text-[var(--text-subtle)]">
              <span aria-hidden="true" className="text-[var(--accent-cyan)]/50 select-none me-1.5">
                &gt;
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
