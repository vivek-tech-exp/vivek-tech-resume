export const pageStyles = {
  skipLink:
    "sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:border focus:border-[var(--inverse-surface)] focus:bg-[var(--inverse-surface)] focus:px-4 focus:py-3 focus:font-mono focus:text-[0.72rem] focus:uppercase focus:tracking-[0.22em] focus:text-[var(--inverse-text)]",
  chrome: "mx-auto w-full max-w-7xl px-4 pt-3 sm:px-6 sm:pt-4 lg:px-8",
  topBar:
    "flex items-center justify-end gap-4 border border-[var(--border)] bg-[var(--surface-raised)] px-4 py-3 backdrop-blur-sm sm:justify-between sm:px-5 sm:py-4",
  topBarNav: "hidden flex-wrap gap-x-5 gap-y-2 sm:flex",
  topBarLink:
    "font-mono text-[0.72rem] uppercase tracking-[0.2em] text-[var(--text-subtle)] no-underline transition-colors duration-200 hover:text-[var(--text)]",
  pageShell:
    "mx-auto w-full max-w-7xl px-4 pb-20 pt-6 sm:px-6 sm:pb-24 sm:pt-10 lg:px-8 lg:pb-32 lg:pt-16",
  heroPanel:
    "grid gap-8 border border-[var(--border)] bg-[var(--surface)] px-5 py-6 sm:px-8 sm:py-10 lg:grid-cols-[minmax(0,1.35fr)_20rem] lg:gap-12 lg:px-12 lg:py-14",
  heroCopy: "space-y-3 sm:space-y-4",
  eyebrow:
    "font-mono text-[0.72rem] uppercase tracking-[0.24em] text-[var(--text-subtle)]",
  heroTitle:
    "max-w-[10ch] text-[3.35rem] font-medium leading-[0.92] tracking-tight text-[var(--text)] sm:text-6xl lg:text-[5.5rem]",
  heroSpecialization:
    "max-w-3xl font-mono text-[0.78rem] uppercase leading-6 tracking-[0.16em] text-[var(--text-muted)] sm:text-sm",
  heroSummary:
    "max-w-3xl text-base leading-8 text-[var(--text-muted)] sm:text-xl sm:leading-9",
  actionSecondary:
    "group inline-flex min-h-12 self-start items-center gap-3 border border-[var(--border)] bg-transparent px-4 py-3 text-left text-sm font-medium tracking-tight text-[var(--text)] no-underline transition-colors duration-200 hover:border-[var(--text-soft)] hover:bg-[var(--surface-hover)] hover:text-[var(--text)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--page)]",
  heroAside:
    "grid gap-5 border-t border-[var(--border)] pt-5 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0",
  metaList: "m-0 grid list-none gap-4 p-0",
  metaItem: "grid gap-1",
  metaLabel:
    "font-mono text-[0.64rem] uppercase tracking-[0.22em] text-[var(--text-subtle)]",
  metaValue: "text-sm leading-7 text-[var(--text-muted)]",
  heroNote:
    "hidden border-t border-[var(--border)] pt-5 text-sm leading-7 text-[var(--text-soft)] lg:block",
  section:
    "grid gap-8 border-t border-[var(--border)] py-14 sm:py-20 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-12 lg:py-24",
  sectionHeading: "space-y-3",
  sectionKicker:
    "font-mono text-[0.72rem] uppercase tracking-[0.24em] text-[var(--text-subtle)]",
  sectionTitle:
    "max-w-md text-[2rem] font-medium leading-[1.1] tracking-tight text-[var(--text)] sm:text-3xl",
  sectionCopy: "max-w-2xl space-y-4 text-base leading-7 text-[var(--text-muted)]",
  proofList:
    "m-0 grid list-none gap-px border border-[var(--border)] bg-[var(--border)] p-0 sm:grid-cols-2 xl:grid-cols-5",
  proofChip:
    "bg-[var(--surface)] p-5 transition-colors duration-200 hover:bg-[var(--surface-hover)]",
  proofText: "text-base font-medium leading-7 text-[var(--text)]",
  snapshotList:
    "m-0 grid list-none gap-px border border-[var(--border)] bg-[var(--border)] p-0",
  snapshotCard:
    "grid gap-4 bg-[var(--surface)] p-5 transition-colors duration-200 hover:bg-[var(--surface-hover)] sm:grid-cols-[11rem_minmax(0,1fr)] sm:gap-6 sm:p-6",
  snapshotPeriod:
    "font-mono text-[0.72rem] uppercase tracking-[0.22em] text-[var(--text-subtle)]",
  snapshotBody: "space-y-2",
  snapshotTitle: "text-xl font-medium tracking-tight text-[var(--text)]",
  snapshotCompany:
    "font-mono text-[0.72rem] uppercase tracking-[0.18em] text-[var(--text-soft)]",
  snapshotSummary:
    "max-w-2xl text-sm leading-7 text-[var(--text-muted)] sm:text-base",
  capabilityGrid:
    "grid gap-px border border-[var(--border)] bg-[var(--border)] sm:grid-cols-2 xl:grid-cols-3",
  capabilityItem:
    "bg-[var(--surface)] p-5 transition-colors duration-200 hover:bg-[var(--surface-hover)]",
  capabilityLabel:
    "font-mono text-[0.72rem] uppercase tracking-[0.22em] text-[var(--text-soft)]",
  capabilityText: "mt-3 text-sm leading-7 text-[var(--text-muted)]",
  systemsGrid:
    "grid gap-px border border-[var(--border)] bg-[var(--border)] lg:grid-cols-2",
  systemCard:
    "grid gap-4 bg-[var(--surface)] p-5 transition-colors duration-200 hover:bg-[var(--surface-hover)] sm:p-6",
  systemContext:
    "font-mono text-[0.72rem] uppercase tracking-[0.22em] text-[var(--text-subtle)]",
  systemBody: "space-y-3",
  systemTitle: "text-xl font-medium tracking-tight text-[var(--text)]",
  systemText: "text-sm leading-7 text-[var(--text-muted)]",
  systemLink:
    "w-fit border-t border-[var(--border)] pt-4 font-mono text-[0.68rem] uppercase tracking-[0.22em] text-[var(--text-muted)] no-underline transition-colors duration-200 hover:text-[var(--text)]",
  linksPanel:
    "grid gap-6 border border-[var(--border)] bg-[var(--surface)] p-5 sm:p-8 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-10",
  linksActions: "flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap",
  linksMeta: "grid gap-4",
  linksMetaItem: "grid gap-1",
  linksNote:
    "border-t border-[var(--border)] pt-4 text-sm leading-7 text-[var(--text-soft)]",
  themeControl: "flex items-center gap-3",
  themeLabel:
    "hidden font-mono text-[0.68rem] uppercase tracking-[0.18em] text-[var(--text-subtle)] sm:block",
  themeOptions:
    "inline-grid grid-cols-3 gap-1 border border-[var(--border)] bg-[var(--surface)] p-1",
  themeButton:
    "min-h-9 px-3 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-[var(--text-soft)] transition-colors duration-200 hover:bg-[var(--surface-hover)] hover:text-[var(--text)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--page)]",
  themeButtonActive: "bg-[var(--inverse-surface)] text-[var(--inverse-text)]",
} as const;
