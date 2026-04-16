export const pageStyles = {
  skipLink:
    "sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:border focus:border-[var(--inverse-surface)] focus:bg-[var(--inverse-surface)] focus:px-4 focus:py-3 focus:font-mono focus:text-[0.72rem] focus:uppercase focus:tracking-[0.22em] focus:text-[var(--inverse-text)]",
  chrome: "mx-auto w-full max-w-7xl px-4 pt-3 sm:px-6 sm:pt-4 lg:px-8",
  topBar:
    "flex items-center justify-end gap-4 border border-[var(--border)] bg-[var(--surface-raised)] px-4 py-3 backdrop-blur-md sm:justify-between sm:px-5 sm:py-4 transition-all duration-300",
  topBarNav: "hidden flex-wrap gap-x-6 gap-y-2 sm:flex",
  topBarLink:
    "font-mono text-[0.7rem] uppercase tracking-[0.22em] text-[var(--text-subtle)] no-underline transition-colors duration-200 hover:text-[var(--text)]",
  pageShell:
    "mx-auto w-full max-w-7xl px-4 pb-20 pt-6 sm:px-6 sm:pb-24 sm:pt-10 lg:px-8 lg:pb-32 lg:pt-16",
  heroPanel:
    "opacity-0 animate-reveal grid gap-8 border border-[var(--border)] bg-[var(--surface-raised)] backdrop-blur-md px-5 py-6 sm:px-8 sm:py-10 lg:grid-cols-[minmax(0,1.35fr)_20rem] lg:gap-12 lg:px-12 lg:py-14 shadow-sm",
  heroCopy: "space-y-4 sm:space-y-6",
  eyebrow:
    "font-mono text-[0.7rem] uppercase tracking-[0.28em] text-[var(--text-subtle)]",
  heroTitle:
    "max-w-[12ch] text-[3.5rem] font-medium leading-[0.9] tracking-tighter text-[var(--text)] sm:text-7xl lg:text-[6rem]",
  heroSpecialization:
    "max-w-3xl font-mono text-[0.75rem] uppercase leading-7 tracking-[0.2em] text-[var(--text-muted)] sm:text-sm",
  heroSummary:
    "max-w-3xl text-lg leading-relaxed text-[var(--text-muted)] sm:text-2xl sm:leading-relaxed",
  actionSecondary:
    "group inline-flex min-h-12 self-start items-center gap-3 border border-[var(--border)] bg-transparent px-4 py-3 text-left text-sm font-medium tracking-tight text-[var(--text)] no-underline transition-colors duration-200 hover:border-[var(--text-soft)] hover:bg-[var(--surface-hover)] hover:text-[var(--text)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--page)]",
  heroAside:
    "grid gap-6 border-t border-[var(--border)] pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0",
  metaList: "m-0 grid list-none gap-5 p-0",
  metaItem: "grid gap-1.5",
  metaLabel:
    "font-mono text-[0.6rem] uppercase tracking-[0.3em] text-[var(--text-subtle)]",
  metaValue: "text-base font-medium leading-tight text-[var(--text-muted)]",
  heroNote:
    "hidden border-t border-[var(--border)] pt-6 text-sm leading-relaxed text-[var(--text-soft)] lg:block italic",
  section:
    "grid gap-8 border-t border-[var(--border)] py-14 sm:py-20 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-12 lg:py-24",
  sectionHeading: "space-y-3",
  sectionKicker:
    "font-mono text-[0.7rem] uppercase tracking-[0.3em] text-[var(--text-subtle)]",
  sectionTitle:
    "max-w-md text-[2.25rem] font-medium leading-[1.05] tracking-tight text-[var(--text)] sm:text-4xl",
  sectionCopy: "max-w-2xl space-y-5 text-lg leading-relaxed text-[var(--text-muted)]",
  proofList:
    "m-0 grid list-none gap-px border border-[var(--border)] bg-[var(--border)] p-0 sm:grid-cols-2 xl:grid-cols-5 shadow-sm",
  proofChip:
    "bg-[var(--surface-raised)] backdrop-blur-sm p-6 transition-all duration-300 hover:bg-[var(--surface-hover)] group relative overflow-hidden",
  proofText: "text-lg font-medium leading-relaxed text-[var(--text)] relative z-10",
  snapshotList:
    "m-0 grid list-none gap-px border border-[var(--border)] bg-[var(--border)] p-0 shadow-sm",
  snapshotCard:
    "grid gap-4 bg-[var(--surface-raised)] backdrop-blur-sm p-6 transition-all duration-300 hover:bg-[var(--surface-hover)] sm:grid-cols-[12rem_minmax(0,1fr)] sm:gap-8 sm:p-8 group",
  snapshotPeriod:
    "font-mono text-[0.7rem] uppercase tracking-[0.25em] text-[var(--text-subtle)]",
  snapshotBody: "space-y-3",
  snapshotTitle: "text-2xl font-medium tracking-tight text-[var(--text)] group-hover:translate-x-1 transition-transform duration-300",
  snapshotCompany:
    "font-mono text-[0.7rem] uppercase tracking-[0.22em] text-[var(--text-soft)]",
  snapshotSummary:
    "max-w-2xl text-base leading-relaxed text-[var(--text-muted)] sm:text-lg",
  capabilityGrid:
    "grid gap-px border border-[var(--border)] bg-[var(--border)] sm:grid-cols-2 xl:grid-cols-3",
  capabilityItem:
    "bg-[var(--surface)] p-5 transition-colors duration-200 hover:bg-[var(--surface-hover)]",
  capabilityLabel:
    "font-mono text-[0.7rem] uppercase tracking-[0.25em] text-[var(--text-soft)]",
  capabilityText: "mt-4 text-base leading-relaxed text-[var(--text-muted)]",
  systemsGrid:
    "grid gap-4 sm:gap-6 lg:grid-cols-2",
  systemCard:
    "grid gap-5 bg-[var(--surface-raised)] backdrop-blur-md p-6 border border-[var(--border)] transition-all duration-300 hover:bg-[var(--surface-hover)] hover:border-[var(--text-subtle)] hover:shadow-xl hover:-translate-y-1 sm:p-8 group",
  systemContext:
    "font-mono text-[0.7rem] uppercase tracking-[0.28em] text-[var(--text-subtle)]",
  systemBody: "space-y-4",
  systemTitle: "text-2xl font-medium tracking-tight text-[var(--text)] flex items-baseline justify-between gap-4 transition-colors duration-300",
  systemText: "text-base leading-relaxed text-[var(--text-muted)]",
  systemLink:
    "w-fit border-t border-[var(--border)] pt-5 font-mono text-[0.65rem] uppercase tracking-[0.3em] text-[var(--text-muted)] no-underline transition-colors duration-300 group-hover:text-[var(--text)] group-hover:tracking-[0.35em] group-hover:border-[var(--text-subtle)]",
  linksPanel:
    "grid gap-6 border border-[var(--border)] bg-[var(--surface)] p-5 sm:p-8 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-10",
  linksActions: "flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap",
  linksMeta: "grid gap-4",
  linksMetaItem: "grid gap-1",
  linksNote:
    "border-t border-[var(--border)] pt-4 text-sm leading-7 text-[var(--text-soft)]",
  themeControl: "flex items-center gap-2",
  themeOptions:
    "inline-flex items-center gap-0.5 rounded-full border border-[var(--border)] bg-[var(--surface-raised)] p-0.5 shadow-sm backdrop-blur-sm",
  themeButton:
    "flex h-7 w-7 items-center justify-center rounded-full text-[var(--text-soft)] transition-all duration-300 hover:text-[var(--text)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--focus)] focus-visible:ring-offset-1 focus-visible:ring-offset-[var(--page)]",
  themeButtonActive: "bg-[var(--surface-hover)] text-[var(--text)] shadow-sm",
  specializationSection: "grid gap-8 border-t border-[var(--border)] py-10 sm:py-12 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-12 lg:py-14",
  specializationText: "text-xl font-medium leading-relaxed text-[var(--text)] sm:text-2xl italic opacity-90 max-w-3xl",
} as const;
