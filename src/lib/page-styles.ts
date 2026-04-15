export const pageStyles = {
  skipLink:
    "sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:border focus:border-zinc-50 focus:bg-zinc-50 focus:px-4 focus:py-3 focus:font-mono focus:text-[0.72rem] focus:uppercase focus:tracking-[0.22em] focus:text-zinc-950",
  chrome: "mx-auto w-full max-w-7xl px-4 pt-4 sm:px-6 lg:px-8",
  topBar:
    "flex flex-col gap-4 border border-zinc-800 bg-zinc-950/90 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-5",
  topBarNote:
    "font-mono text-[0.7rem] uppercase tracking-[0.24em] text-zinc-500",
  topBarNav: "flex flex-wrap gap-x-5 gap-y-2",
  topBarLink:
    "font-mono text-[0.72rem] uppercase tracking-[0.2em] text-zinc-400 transition-colors duration-200 hover:text-zinc-50",
  pageShell:
    "mx-auto w-full max-w-7xl px-4 pb-20 pt-8 sm:px-6 sm:pb-24 sm:pt-10 lg:px-8 lg:pb-32 lg:pt-16",
  heroPanel:
    "grid gap-10 border border-zinc-800 bg-zinc-950 px-6 py-8 sm:px-8 sm:py-10 lg:grid-cols-[minmax(0,1.35fr)_20rem] lg:gap-12 lg:px-12 lg:py-14",
  heroPanelCompact:
    "grid gap-10 border border-zinc-800 bg-zinc-950 px-6 py-8 sm:px-8 sm:py-10 lg:grid-cols-[minmax(0,1.2fr)_18rem] lg:gap-12 lg:px-12 lg:py-14",
  heroCopy: "space-y-4",
  eyebrow:
    "font-mono text-[0.72rem] uppercase tracking-[0.24em] text-zinc-500",
  heroTitle:
    "max-w-[10ch] text-5xl font-medium tracking-tight text-zinc-50 sm:text-6xl lg:text-[5.5rem]",
  heroTitleCompact:
    "max-w-[13ch] text-4xl font-medium tracking-tight text-zinc-50 sm:text-5xl lg:text-6xl",
  heroSpecialization:
    "max-w-3xl font-mono text-sm uppercase tracking-[0.18em] text-zinc-300",
  heroSummary:
    "max-w-3xl text-lg leading-8 text-zinc-300 sm:text-xl sm:leading-9",
  heroActions: "flex flex-wrap gap-3 pt-4",
  actionPrimary:
    "group inline-flex min-h-12 items-center gap-3 border border-zinc-50 bg-zinc-50 px-4 py-3 text-left text-sm font-medium tracking-tight text-zinc-950 transition-colors duration-200 hover:border-zinc-200 hover:bg-zinc-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-50 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950",
  actionSecondary:
    "group inline-flex min-h-12 items-center gap-3 border border-zinc-700 bg-transparent px-4 py-3 text-left text-sm font-medium tracking-tight text-zinc-100 transition-colors duration-200 hover:border-zinc-500 hover:bg-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-50 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950",
  actionMeta:
    "block font-mono text-[0.64rem] uppercase tracking-[0.22em] opacity-70",
  heroAside:
    "grid gap-6 border-t border-zinc-800 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0",
  metaList: "m-0 grid list-none gap-5 p-0",
  metaItem: "grid gap-1",
  metaLabel:
    "font-mono text-[0.64rem] uppercase tracking-[0.22em] text-zinc-500",
  metaValue: "text-sm leading-7 text-zinc-200",
  heroNote: "border-t border-zinc-800 pt-5 text-sm leading-7 text-zinc-400",
  profileLinks: "m-0 grid list-none gap-2 p-0",
  profileLink:
    "w-fit font-mono text-[0.72rem] uppercase tracking-[0.2em] text-zinc-300 transition-colors duration-200 hover:text-zinc-50",
  section:
    "grid gap-8 border-t border-zinc-800 py-16 sm:py-20 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-12 lg:py-24",
  sectionHeading: "space-y-3",
  sectionKicker:
    "font-mono text-[0.72rem] uppercase tracking-[0.24em] text-zinc-500",
  sectionTitle:
    "max-w-sm text-2xl font-medium tracking-tight text-zinc-50 sm:text-3xl",
  sectionCopy: "max-w-2xl space-y-4 text-base leading-7 text-zinc-300",
  proofList:
    "m-0 grid list-none gap-px border border-zinc-800 bg-zinc-800 p-0 sm:grid-cols-2 xl:grid-cols-3",
  proofChip: "bg-zinc-950 p-5 transition-colors duration-200 hover:bg-zinc-900",
  proofText: "text-base font-medium leading-7 text-zinc-100",
  snapshotList:
    "m-0 grid list-none gap-px border border-zinc-800 bg-zinc-800 p-0",
  snapshotCard:
    "grid gap-4 bg-zinc-950 p-5 transition-colors duration-200 hover:bg-zinc-900 sm:grid-cols-[11rem_minmax(0,1fr)] sm:gap-6 sm:p-6",
  snapshotPeriod:
    "font-mono text-[0.72rem] uppercase tracking-[0.22em] text-zinc-500",
  snapshotBody: "space-y-2",
  snapshotTitle: "text-xl font-medium tracking-tight text-zinc-50",
  snapshotCompany:
    "font-mono text-[0.72rem] uppercase tracking-[0.18em] text-zinc-400",
  snapshotSummary: "max-w-2xl text-sm leading-7 text-zinc-300 sm:text-base",
  capabilityGrid:
    "grid gap-px border border-zinc-800 bg-zinc-800 sm:grid-cols-2 xl:grid-cols-3",
  capabilityItem:
    "bg-zinc-950 p-5 transition-colors duration-200 hover:bg-zinc-900",
  capabilityLabel:
    "font-mono text-[0.72rem] uppercase tracking-[0.22em] text-zinc-400",
  capabilityText: "mt-3 text-sm leading-7 text-zinc-200",
  systemsGrid: "grid gap-px border border-zinc-800 bg-zinc-800 lg:grid-cols-2",
  systemCard:
    "grid gap-4 bg-zinc-950 p-5 transition-colors duration-200 hover:bg-zinc-900 sm:p-6",
  systemContext:
    "font-mono text-[0.72rem] uppercase tracking-[0.22em] text-zinc-500",
  systemBody: "space-y-3",
  systemTitle: "text-xl font-medium tracking-tight text-zinc-50",
  systemText: "text-sm leading-7 text-zinc-300",
  systemOutcome: "border-t border-zinc-800 pt-4 text-sm leading-7 text-zinc-100",
  linksPanel:
    "grid gap-8 border border-zinc-800 bg-zinc-950 p-6 sm:p-8 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-10",
  linksActions: "flex flex-wrap gap-3",
  linksMeta: "grid gap-4",
  linksMetaItem: "grid gap-1",
  linksNote: "border-t border-zinc-800 pt-4 text-sm leading-7 text-zinc-400",
  resumeSummaryList: "space-y-3",
  resumeSummaryText: "max-w-3xl text-base leading-7 text-zinc-300 sm:text-lg",
} as const;
