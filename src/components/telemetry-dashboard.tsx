"use client";

import { useEffect, useRef } from "react";

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

const STATIC_LOGS = terminalLogs.slice(-4);
const MAX_VISIBLE_LOGS = 6;

const createLogRow = (log: string) => {
  const row = document.createElement("div");
  row.className = "truncate";

  if (
    log.includes("completed") ||
    log.includes("operational") ||
    log.includes("fully optimized")
  ) {
    row.className += " text-[var(--accent-cyan)] font-medium";
  } else if (log.includes("init") || log.includes("sequence")) {
    row.className += " text-slate-400";
  } else if (log.includes("loaded")) {
    row.className += " text-[var(--accent-violet)]";
  }

  const prompt = document.createElement("span");
  prompt.setAttribute("aria-hidden", "true");
  prompt.className = "text-[var(--accent-cyan)]/50 select-none me-1.5";
  prompt.textContent = ">";

  row.append(prompt, document.createTextNode(log));
  return row;
};

const createCaret = () => {
  const caret = document.createElement("div");
  caret.className = "caret-blink text-[var(--text-subtle)]";
  const prompt = document.createElement("span");
  prompt.setAttribute("aria-hidden", "true");
  prompt.className = "text-[var(--accent-cyan)]/50 select-none me-1.5";
  prompt.textContent = ">";
  caret.append(prompt);
  return caret;
};

export const TelemetryDashboard = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  const uptimeRef = useRef<HTMLElement>(null);
  const trafficRef = useRef<HTMLElement>(null);
  const logContainerRef = useRef<HTMLDivElement>(null);
  const liveRegionRef = useRef<HTMLDivElement>(null);
  const statusRef = useRef<HTMLSpanElement>(null);
  const pulseRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const motionMedia = window.matchMedia("(prefers-reduced-motion: reduce)");
    let reducedMotion = motionMedia.matches;
    let visible = true;
    let uptime = 99.9984;
    let activeRequests = 142;
    let logIndex = 0;
    let logs: string[] = [];
    let logTimer: ReturnType<typeof setTimeout> | undefined;
    let metricTimer: ReturnType<typeof setInterval> | undefined;

    const renderLogs = () => {
      const container = logContainerRef.current;
      if (!container) return;

      const lines = reducedMotion ? STATIC_LOGS : logs;
      const fragment = document.createDocumentFragment();

      for (const log of lines) {
        fragment.append(createLogRow(log));
      }

      if (!reducedMotion) {
        fragment.append(createCaret());
      }

      container.replaceChildren(fragment);
    };

    const appendLog = (log: string) => {
      const container = logContainerRef.current;
      if (!container) return;

      const caret = container.querySelector(".caret-blink");
      caret?.remove();

      while (container.childElementCount >= MAX_VISIBLE_LOGS) {
        container.firstElementChild?.remove();
      }

      container.append(createLogRow(log));

      if (!reducedMotion) {
        container.append(createCaret());
      }
    };

    const scheduleNextLog = () => {
      if (reducedMotion || !visible) return;

      if (logIndex >= terminalLogs.length) {
        logTimer = setTimeout(() => {
          logs = [];
          logIndex = 0;
          renderLogs();
          scheduleNextLog();
        }, 8000);
        return;
      }

      logTimer = setTimeout(() => {
        const nextLog = terminalLogs[logIndex];
        if (nextLog !== undefined) {
          logs = [...logs, nextLog].slice(-MAX_VISIBLE_LOGS);
          if (liveRegionRef.current) {
            liveRegionRef.current.textContent = nextLog;
          }
          appendLog(nextLog);
        }
        logIndex += 1;
        scheduleNextLog();
      }, logIndex === 0 ? 500 : Math.random() * 900 + 500);
    };

    const updateMetrics = () => {
      if (!visible || reducedMotion) return;

      uptime = Math.min(
        100,
        Math.max(99.998, uptime + (Math.random() - 0.5) * 0.0001),
      );
      activeRequests = Math.min(
        250,
        Math.max(80, activeRequests + Math.floor((Math.random() - 0.5) * 6)),
      );

      if (uptimeRef.current) {
        uptimeRef.current.textContent = `${uptime.toFixed(4)}%`;
      }
      if (trafficRef.current) {
        trafficRef.current.textContent = `${activeRequests} req/s`;
      }
    };

    const start = () => {
      clearTimeout(logTimer);
      clearInterval(metricTimer);

      if (statusRef.current) {
        statusRef.current.textContent = reducedMotion ? "STATIC" : "ACTIVE";
      }
      if (pulseRef.current) {
        pulseRef.current.classList.toggle("animate-pulse", !reducedMotion);
      }

      renderLogs();

      if (reducedMotion || !visible) return;

      scheduleNextLog();
      metricTimer = setInterval(updateMetrics, 3000);
    };

    const stop = () => {
      clearTimeout(logTimer);
      clearInterval(metricTimer);
    };

    const syncMotion = () => {
      reducedMotion = motionMedia.matches;
      stop();
      start();
    };

    const observer = new IntersectionObserver(
      (entries) => {
        visible = entries.some((entry) => entry.isIntersecting);
        if (visible) {
          start();
        } else {
          stop();
        }
      },
      { threshold: 0.05, rootMargin: "100px" },
    );

    observer.observe(root);
    motionMedia.addEventListener("change", syncMotion);
    start();

    return () => {
      stop();
      observer.disconnect();
      motionMedia.removeEventListener("change", syncMotion);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className="glassmorphic-card p-5 font-mono text-[0.7rem] leading-relaxed select-none relative overflow-hidden flex flex-col h-[280px] lg:h-[300px] border border-[var(--border)] shadow-md"
    >
      <div className="flex items-center justify-between border-b border-[var(--border)] pb-3 mb-3 relative z-10">
        <div aria-hidden="true" className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/85" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/85" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/85" />
        </div>
        <div className="flex items-center gap-2">
          <span
            ref={pulseRef}
            aria-hidden="true"
            className="w-1.5 h-1.5 rounded-full bg-[var(--accent-cyan)]"
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
          <dd
            ref={uptimeRef}
            className="m-0 text-sm font-bold text-[var(--accent-cyan)] tracking-tight"
          >
            99.9984%
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
          <dd
            ref={trafficRef}
            className="m-0 text-sm font-bold text-[var(--text)] tracking-tight"
          >
            142 req/s
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
          <span
            ref={statusRef}
            className="text-[0.55rem] text-[var(--accent-cyan)] tracking-wider"
          >
            ACTIVE
          </span>
        </div>
        <div
          aria-live="polite"
          aria-atomic="true"
          className="sr-only"
          ref={liveRegionRef}
        />
        <div
          ref={logContainerRef}
          aria-label="Recent console output"
          className="flex-1 overflow-hidden flex flex-col justify-end text-[var(--text-soft)] font-mono text-[0.62rem] leading-5"
          role="log"
        />
      </div>
    </div>
  );
};
