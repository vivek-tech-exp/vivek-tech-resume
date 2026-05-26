"use client";

import { useEffect, useState } from "react";

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

  // Animate Terminal Logs
  useEffect(() => {
    if (currentLogIndex >= terminalLogs.length) {
      // Loop logs or show blinking cursor after completion
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
  }, [currentLogIndex]);

  // Animate dynamic metrics
  useEffect(() => {
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
  }, []);

  return (
    <div className="glassmorphic-card p-5 font-mono text-[0.7rem] leading-relaxed select-none relative overflow-hidden flex flex-col h-[280px] lg:h-[300px] border border-[var(--border)] shadow-md">
      {/* Decorative Matrix Grid */}
      <div className="absolute inset-0 cyber-grid z-0" />

      {/* Header bar */}
      <div className="flex items-center justify-between border-b border-[var(--border)] pb-3 mb-3 relative z-10">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/85" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/85" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/85" />
        </div>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-cyan)] animate-pulse" />
          <span className="text-[0.6rem] tracking-[0.1em] text-[var(--text-subtle)] font-bold uppercase">
            LIVE SYSTEMS TELEMETRY
          </span>
        </div>
      </div>

      {/* Grid of live parameters */}
      <div className="grid grid-cols-2 gap-3 mb-4 relative z-10">
        <div className="bg-[rgba(6,182,212,0.03)] border border-[var(--border)] px-3 py-2">
          <p className="text-[0.55rem] text-[var(--text-subtle)] uppercase tracking-wider mb-0.5">
            Core Uptime
          </p>
          <p className="text-sm font-bold text-[var(--accent-cyan)] tracking-tight">
            {uptime.toFixed(4)}%
          </p>
        </div>
        <div className="bg-[rgba(139,92,246,0.03)] border border-[var(--border)] px-3 py-2">
          <p className="text-[0.55rem] text-[var(--text-subtle)] uppercase tracking-wider mb-0.5">
            BPMN Engine Latency
          </p>
          <p className="text-sm font-bold text-[var(--accent-violet)] tracking-tight">
            3.0 ms
          </p>
        </div>
        <div className="bg-[var(--border)]/10 border border-[var(--border)] px-3 py-2">
          <p className="text-[0.55rem] text-[var(--text-subtle)] uppercase tracking-wider mb-0.5">
            Traffic Rate
          </p>
          <p className="text-sm font-bold text-[var(--text)] tracking-tight">
            {activeRequests} req/s
          </p>
        </div>
        <div className="bg-[var(--border)]/10 border border-[var(--border)] px-3 py-2">
          <p className="text-[0.55rem] text-[var(--text-subtle)] uppercase tracking-wider mb-0.5">
            Active Systems
          </p>
          <p className="text-sm font-bold text-[var(--text)] tracking-tight">
            4 / 4 operational
          </p>
        </div>
      </div>

      {/* Terminal log panel */}
      <div className="flex-1 bg-black/40 border border-[var(--border)] rounded px-3 py-2 flex flex-col overflow-hidden relative z-10">
        <div className="flex items-center justify-between border-b border-[var(--border)]/30 pb-1 mb-1.5">
          <span className="text-[0.55rem] text-[var(--text-soft)] uppercase tracking-widest font-semibold">
            CONSOLE_LOG.SH
          </span>
          <span className="text-[0.55rem] text-[var(--accent-cyan)] tracking-wider">
            STATUS: ACTIVE
          </span>
        </div>
        <div className="flex-1 overflow-hidden flex flex-col justify-end text-[var(--text-soft)] font-mono text-[0.62rem] leading-5">
          {logs.map((log, index) => (
            <div
              key={index}
              className={`truncate ${
                log.includes("completed") || log.includes("operational") || log.includes("fully optimized")
                  ? "text-[var(--accent-cyan)] font-medium"
                  : log.includes("init") || log.includes("sequence")
                  ? "text-slate-400"
                  : log.includes("loaded")
                  ? "text-[var(--accent-violet)]"
                  : ""
              }`}
            >
              <span className="text-[var(--accent-cyan)]/50 select-none mr-1.5">&gt;</span>
              {log}
            </div>
          ))}
          <div className="caret-blink text-[var(--text-subtle)]">
            <span className="text-[var(--accent-cyan)]/50 select-none mr-1.5">&gt;</span>
          </div>
        </div>
      </div>
    </div>
  );
};
