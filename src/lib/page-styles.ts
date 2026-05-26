export const pageStyles = {
  skipLink:
    "sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:border focus:border-[var(--inverse-surface)] focus:bg-[var(--inverse-surface)] focus:px-4 focus:py-3 focus:font-mono focus:text-[0.72rem] focus:uppercase focus:tracking-[0.22em] focus:text-[var(--inverse-text)]",
  chrome: "mx-auto w-full max-w-7xl px-4 pt-4 sm:px-6 sm:pt-6 lg:px-8 relative z-20",
  topBar:
    "flex items-center justify-end gap-4 border border-[var(--border)] glassmorphic-card px-4 py-3 sm:justify-between sm:px-6 sm:py-4 transition-all duration-300 shadow-lg",
  topBarNav: "hidden flex-wrap gap-x-6 gap-y-2 sm:flex",
  topBarLink:
    "inline-flex min-h-11 items-center font-mono text-[0.7rem] uppercase tracking-[0.22em] text-[var(--text-subtle)] no-underline transition-all duration-300 hover:text-[var(--accent-cyan)] hover:translate-y-[-1px]",
  pageShell:
    "mx-auto w-full max-w-7xl px-4 pb-20 pt-6 sm:px-6 sm:pb-24 sm:pt-10 lg:px-8 lg:pb-32 lg:pt-12 relative z-10",
  heroPanel:
    "opacity-0 animate-reveal grid gap-8 border border-[var(--border)] glassmorphic-card px-6 py-8 sm:px-8 sm:py-10 lg:grid-cols-[minmax(0,1.35fr)_22rem] lg:gap-14 lg:px-12 lg:py-12 shadow-xl",
  heroCopy: "space-y-4 sm:space-y-6 flex flex-col justify-center",
  eyebrow:
    "font-mono text-[0.75rem] uppercase tracking-[0.3em] text-[var(--accent-cyan)] font-bold",
  heroTitle:
    "max-w-[12ch] text-balance text-[clamp(2.75rem,1.5rem+4vw,5.25rem)] font-bold leading-[0.95] tracking-tighter text-[var(--text)] bg-clip-text text-transparent bg-gradient-to-r from-[var(--text)] via-[var(--text)] to-[var(--accent-violet)]",
  heroSpecialization:
    "max-w-3xl font-mono text-[0.7rem] uppercase leading-6 tracking-[0.2em] text-[var(--text-soft)] sm:text-xs border-s-2 border-[var(--accent-cyan)] ps-3 py-1",
  heroSummary:
    "prose-width text-pretty text-base leading-relaxed text-[var(--text-muted)] sm:text-xl sm:leading-relaxed",
  actionSecondary:
    "group inline-flex min-h-11 items-center gap-3 border border-[var(--border)] bg-transparent px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] font-mono text-[var(--text)] no-underline transition-all duration-300 hover:border-[var(--accent-cyan)] hover:bg-[var(--surface-hover)] hover:text-[var(--accent-cyan)] hover:shadow-[0_0_15px_-5px_var(--glow-cyan)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus)]",
  heroAside:
    "grid gap-6 border-t border-[var(--border)] pt-6 lg:border-s lg:border-t-0 lg:ps-10 lg:pt-0 justify-stretch items-center",
  metaList: "m-0 grid list-none gap-4 p-0",
  metaItem:
    "grid gap-1 bg-[var(--border)]/10 p-3 border border-[var(--border)]/50 hover:border-[var(--accent-cyan)]/30 transition-all duration-300",
  metaLabel:
    "font-mono text-[0.55rem] uppercase tracking-[0.25em] text-[var(--text-subtle)] font-bold",
  metaValue:
    "text-sm font-semibold leading-tight text-[var(--text-muted)] break-all hover:text-[var(--accent-cyan)] transition-colors duration-300",
  heroNote:
    "hidden border-t border-[var(--border)] pt-6 text-[0.72rem] leading-relaxed text-[var(--text-soft)] lg:block italic font-sans",
  section:
    "defer-section grid gap-8 border-t border-[var(--border)] py-14 sm:py-20 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-12 lg:py-20 scroll-reveal",
  sectionHeading: "space-y-3 lg:sticky lg:top-24 h-fit",
  sectionKicker:
    "font-mono text-[0.75rem] uppercase tracking-[0.3em] text-[var(--accent-cyan)] font-bold",
  sectionTitle:
    "max-w-md text-balance text-2xl font-bold leading-[1.1] tracking-tight text-[var(--text)] sm:text-3xl lg:text-4xl",
  sectionCopy: "prose-width text-pretty space-y-5 text-base leading-relaxed text-[var(--text-muted)]",
  proofList: "m-0 grid list-none gap-4 p-0 sm:grid-cols-3 shadow-sm",
  proofChip:
    "defer-card glassmorphic-card glow-card-container p-6 flex flex-col justify-between h-full relative overflow-hidden group shadow-md",
  proofText:
    "text-base font-semibold leading-relaxed text-[var(--text)] relative z-10 transition-colors duration-300 group-hover:text-[var(--text)]",
  snapshotList:
    "m-0 grid list-none gap-6 p-0 relative ps-6 border-s border-[var(--border)]",
  snapshotCard:
    "defer-card grid gap-4 glassmorphic-card p-6 hover:shadow-lg transition-all duration-400 sm:grid-cols-[10rem_minmax(0,1fr)] sm:gap-6 sm:p-7 group relative border border-[var(--border)]",
  snapshotPeriod:
    "font-mono text-[0.7rem] uppercase tracking-[0.25em] text-[var(--accent-cyan)] font-semibold",
  snapshotBody: "space-y-2.5",
  snapshotTitle:
    "text-xl font-bold tracking-tight text-[var(--text)] group-hover:text-[var(--accent-cyan)] group-hover:translate-x-0.5 transition-all duration-300",
  snapshotCompany:
    "font-mono text-[0.68rem] uppercase tracking-[0.2em] text-[var(--text-subtle)] font-bold",
  snapshotSummary: "prose-width text-pretty text-sm leading-relaxed text-[var(--text-muted)]",
  capabilityGrid: "grid gap-4 p-0 sm:grid-cols-2 lg:grid-cols-3",
  capabilityItem:
    "defer-card glassmorphic-card glow-card-container p-5 transition-all duration-300 shadow-md",
  capabilityLabel:
    "font-mono text-[0.68rem] uppercase tracking-[0.25em] text-[var(--accent-cyan)] font-bold border-b border-[var(--border)] pb-2 mb-3",
  capabilityText: "text-pretty text-sm leading-relaxed text-[var(--text-muted)] font-medium",
  systemsGrid: "grid gap-6 sm:grid-cols-1 lg:grid-cols-3",
  systemCard:
    "defer-card grid gap-5 glassmorphic-card glow-card-container p-6 border border-[var(--border)] transition-all duration-400 hover:shadow-2xl sm:p-7 group flex flex-col justify-between h-full",
  systemContext:
    "font-mono text-[0.65rem] uppercase tracking-[0.25em] text-[var(--text-subtle)] font-bold border-b border-[var(--border)]/60 pb-2",
  systemBody: "space-y-3 flex-1 flex flex-col justify-between",
  systemTitle:
    "text-lg font-bold tracking-tight text-[var(--text)] group-hover:text-[var(--accent-cyan)] transition-colors duration-300 flex items-center justify-between gap-3",
  systemText: "text-pretty text-xs leading-relaxed text-[var(--text-muted)] mt-1.5 flex-1",
  systemLink:
    "w-fit border-t border-[var(--border)]/60 pt-4 font-mono text-[0.6rem] uppercase tracking-[0.25em] text-[var(--text-soft)] no-underline transition-all duration-300 group-hover:text-[var(--accent-cyan)] group-hover:tracking-[0.28em] group-hover:border-[var(--accent-cyan)]/40 font-bold",
  linksPanel:
    "grid gap-6 border border-[var(--border)] glassmorphic-card p-6 sm:p-8 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-12 shadow-xl",
  linksActions: "flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap self-center",
  linksMeta:
    "grid gap-4 border-t border-[var(--border)] pt-6 lg:border-t-0 lg:pt-0 lg:border-s lg:ps-10",
  linksMetaItem: "grid gap-1 bg-[var(--border)]/10 p-3.5 border border-[var(--border)]/50",
  linksNote:
    "border-t border-[var(--border)] pt-4 text-[0.72rem] leading-relaxed text-[var(--text-soft)] italic",
  themeControl: "flex items-center",
  themeToggleButton:
    "inline-flex min-h-11 items-center gap-2 rounded-full border border-[var(--border)] bg-black/20 px-3 py-1.5 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-[var(--text-soft)] shadow-md backdrop-blur-md transition-all duration-300 hover:border-[var(--accent-cyan)] hover:text-[var(--accent-cyan)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus)] cursor-pointer",
  themeToggleLabel: "hidden sm:inline",
  specializationSection:
    "defer-section grid gap-8 border-t border-[var(--border)] py-10 sm:py-12 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-12 lg:py-14 scroll-reveal",
  specializationText:
    "prose-width text-pretty text-lg font-medium leading-relaxed text-[var(--text-muted)] sm:text-xl italic opacity-95 max-w-3xl border-s-4 border-[var(--accent-violet)] ps-4 py-2",
  detailsSummary:
    "group inline-flex min-h-11 items-center gap-2.5 px-6 py-3 border border-[var(--border)] bg-black/10 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-[var(--text-soft)] hover:text-[var(--accent-cyan)] hover:border-[var(--accent-cyan)] hover:bg-[var(--accent-cyan)]/5 transition-all duration-300 shadow-md cursor-pointer hover:shadow-[0_0_15px_-5px_var(--glow-cyan)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus)] font-bold select-none",
} as const;
