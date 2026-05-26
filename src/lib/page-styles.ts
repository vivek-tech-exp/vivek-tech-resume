export const pageStyles = {
  skipLink:
    "sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-[var(--text)] focus:px-4 focus:py-2 focus:text-sm focus:text-[var(--page)]",
  shell: "mx-auto w-full max-w-3xl px-5 pb-24 pt-6 sm:px-8 sm:pb-32 sm:pt-10",
  header:
    "sticky top-0 z-20 border-b border-[var(--border)] bg-[color-mix(in_oklab,var(--page)_92%,transparent)] backdrop-blur-sm",
  headerInner:
    "mx-auto flex max-w-3xl items-center justify-between gap-4 px-5 py-4 sm:px-8",
  brand:
    "text-sm font-medium text-[var(--text)] no-underline hover:text-[var(--accent)]",
  nav: "hidden items-center gap-5 sm:flex",
  navLink:
    "text-sm text-[var(--text-soft)] no-underline hover:text-[var(--text)]",
  hero: "relative space-y-6 border-b border-[var(--border)] pb-12 sm:pb-16",
  siteLabel: "text-sm text-[var(--text-subtle)]",
  heroTitle:
    "text-balance text-[clamp(2.5rem,2rem+2.5vw,3.75rem)] font-semibold leading-[1.05] tracking-tight text-[var(--text)]",
  heroRole: "text-lg text-[var(--text-muted)] sm:text-xl",
  heroPitch:
    "text-pretty max-w-2xl text-lg leading-relaxed text-[var(--text-muted)] sm:text-[1.35rem] sm:leading-relaxed",
  heroMeta: "text-sm text-[var(--text-soft)]",
  proofList: "m-0 grid list-none gap-2.5 p-0",
  proofItem:
    "flex items-start gap-2 text-pretty text-base leading-relaxed text-[var(--text-muted)] before:shrink-0 before:text-[var(--accent)] before:content-['•']",
  proofLink:
    "text-[var(--text-muted)] no-underline hover:text-[var(--accent)] hover:underline",
  heroActions: "flex flex-wrap items-center gap-3 pt-1",
  buttonPrimary:
    "inline-flex min-h-11 items-center rounded-full bg-[var(--text)] px-5 py-2.5 text-sm font-medium text-[var(--page)] no-underline hover:opacity-90",
  buttonSecondary:
    "inline-flex min-h-11 items-center rounded-full border border-[var(--border)] px-5 py-2.5 text-sm font-medium text-[var(--text)] no-underline hover:border-[var(--text-soft)] hover:bg-[var(--surface)]",
  section: "space-y-8 border-b border-[var(--border)] py-12 sm:py-16",
  sectionHeader: "space-y-2",
  sectionTitle:
    "text-balance text-2xl font-semibold tracking-tight text-[var(--text)] sm:text-[1.75rem]",
  sectionIntro: "text-pretty max-w-2xl text-base leading-relaxed text-[var(--text-soft)]",
  featuredProject:
    "space-y-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-7",
  projectList: "m-0 grid list-none gap-0 divide-y divide-[var(--border)] border-y border-[var(--border)] p-0",
  projectRow: "grid gap-3 py-5 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start sm:gap-6",
  projectTitle: "text-lg font-medium text-[var(--text)]",
  projectMeta: "text-sm text-[var(--text-subtle)]",
  projectTeaser: "text-pretty text-base leading-relaxed text-[var(--text-muted)]",
  projectLinks: "flex flex-wrap gap-x-4 gap-y-2 sm:justify-end",
  textLink:
    "text-sm font-medium text-[var(--accent)] no-underline hover:underline",
  detailsButton:
    "inline-flex min-h-11 items-center text-sm font-medium text-[var(--text-soft)] no-underline hover:text-[var(--text)]",
  impactList: "m-0 grid list-none gap-4 p-0",
  impactItem:
    "rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 sm:p-6",
  impactOutcome: "text-base font-medium leading-snug text-[var(--text)]",
  impactMeta: "mt-1 text-sm text-[var(--text-subtle)]",
  impactText: "mt-3 text-pretty text-sm leading-relaxed text-[var(--text-muted)]",
  experienceList: "m-0 grid list-none gap-8 p-0",
  experienceItem: "space-y-1.5",
  experienceHeading: "flex flex-wrap items-baseline gap-x-2 gap-y-1",
  experienceRole: "text-base font-medium text-[var(--text)]",
  experienceCompany: "text-base text-[var(--text-muted)]",
  experiencePeriod: "w-full text-sm text-[var(--text-subtle)] sm:w-auto sm:ms-auto",
  experienceHighlight:
    "text-pretty ps-0 text-sm leading-relaxed text-[var(--text-muted)] before:me-2 before:text-[var(--accent)] before:content-['•']",
  toolsWrap: "space-y-4",
  toolsGroup: "space-y-2",
  toolsLabel: "text-sm font-medium text-[var(--text)]",
  toolsItems: "text-pretty text-sm leading-relaxed text-[var(--text-muted)]",
  contactPanel: "space-y-6",
  contactActions: "flex flex-wrap gap-3",
  contactMeta: "space-y-4 text-sm leading-relaxed text-[var(--text-muted)]",
  footerNote: "border-t border-[var(--border)] pt-8 text-sm text-[var(--text-subtle)]",
  themeToggleButton:
    "inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-[var(--border)] text-[var(--text-soft)] hover:border-[var(--text-soft)] hover:text-[var(--text)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus)] cursor-pointer",
  themeToggleLabel: "sr-only",
  themeControl: "flex items-center",
} as const;
