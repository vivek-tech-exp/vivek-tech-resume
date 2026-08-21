export const pageStyles = {
  skipLink:
    "sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-[var(--text)] focus:px-4 focus:py-2 focus:text-sm focus:text-[var(--page)]",
  shell:
    "mx-auto w-full max-w-3xl pt-5 pb-[max(6rem,env(safe-area-inset-bottom))] pl-[max(1.25rem,env(safe-area-inset-left))] pr-[max(1.25rem,env(safe-area-inset-right))] sm:px-8 sm:pb-32 sm:pt-10",
  header:
    "sticky top-0 z-20 border-b border-[var(--border)] bg-[color-mix(in_oklab,var(--page)_92%,transparent)] backdrop-blur-sm pt-[env(safe-area-inset-top)]",
  headerInner:
    "mx-auto grid max-w-3xl grid-cols-[minmax(0,1fr)_auto_auto] items-center gap-x-2 py-3 pl-[max(1.25rem,env(safe-area-inset-left))] pr-[max(1.25rem,env(safe-area-inset-right))] sm:flex sm:gap-4 sm:py-4 sm:px-8",
  headerResumeSlot: "col-start-2 row-start-1 justify-self-center sm:hidden",
  headerActions:
    "col-start-3 row-start-1 ms-0 flex shrink-0 items-center gap-1.5 justify-self-end sm:ms-auto sm:gap-2.5",
  brand:
    "min-w-0 shrink truncate text-sm font-medium text-[var(--text)] no-underline hover:text-[var(--accent)] sm:max-w-none sm:overflow-visible sm:whitespace-normal",
  nav: "hidden flex-1 items-center justify-center gap-5 sm:flex",
  navLink:
    "text-sm text-[var(--text-soft)] no-underline hover:text-[var(--text)]",
  headerResumeDesktop: "hidden sm:block",
  headerButton:
    "inline-flex min-h-10 min-w-10 cursor-pointer list-none items-center justify-center rounded-full bg-[var(--text)] px-3 py-2 text-xs font-medium text-[var(--page)] no-underline hover:opacity-90 open:opacity-95 sm:min-h-10 sm:min-w-0 sm:px-4 sm:text-sm [&::-webkit-details-marker]:hidden",
  mobileNav: "relative sm:hidden",
  mobileNavTrigger:
    "inline-flex min-h-10 min-w-10 cursor-pointer list-none items-center justify-center rounded-full border border-[var(--border)] px-3 text-xs font-medium text-[var(--text)] hover:border-[var(--text-soft)] hover:bg-[var(--surface)] open:border-[var(--text-soft)] open:bg-[var(--surface)] [&::-webkit-details-marker]:hidden",
  overlayBackdrop: "overlay-backdrop",
  mobileNavPanel:
    "overlay-menu-panel absolute right-0 top-[calc(100%+0.5rem)] z-40 min-w-[12rem] overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--page)] py-1 shadow-[0_12px_40px_color-mix(in_oklab,var(--text)_12%,transparent)]",
  mobileNavLink:
    "block px-4 py-3 text-sm font-medium text-[var(--text)] no-underline hover:bg-[var(--surface)]",
  mobileNavDivider: "my-1 border-t border-[var(--border)]",
  mobileNavAccent:
    "block px-4 py-3 text-sm font-medium text-[var(--accent)] no-underline hover:bg-[var(--surface)]",
  downloadMenu: "relative w-full sm:w-auto",
  downloadMenuPanel:
    "overlay-menu-panel absolute left-0 right-0 top-[calc(100%+0.5rem)] z-40 overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--page)] py-1 shadow-[0_12px_40px_color-mix(in_oklab,var(--text)_12%,transparent)] sm:right-auto sm:left-0 sm:min-w-[11rem]",
  headerMenuPanel:
    "overlay-menu-panel absolute right-0 top-[calc(100%+0.5rem)] z-40 min-w-[11rem] overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--page)] py-1 shadow-[0_12px_40px_color-mix(in_oklab,var(--text)_12%,transparent)]",
  downloadMenuItem:
    "block min-h-11 px-4 py-3 text-sm font-medium text-[var(--text)] no-underline hover:bg-[var(--surface)]",
  hero: "space-y-6 border-b border-[var(--border)] pb-10 sm:space-y-8 sm:pb-16",
  heroPortraitCard:
    "relative my-2 mx-auto w-full max-w-lg overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-sm sm:rounded-3xl",
  heroPortraitImage:
    "h-auto w-full aspect-[704/1525] object-contain",
  siteLabel: "text-sm text-[var(--text-subtle)]",
  heroTitle:
    "text-balance text-[clamp(2.125rem,1.75rem+3vw,3.75rem)] font-semibold leading-[1.08] tracking-tight text-[var(--text)]",
  heroRole: "text-base text-[var(--text-muted)] sm:text-lg md:text-xl",
  heroPitch:
    "text-pretty max-w-2xl text-base leading-relaxed text-[var(--text-muted)] sm:text-lg sm:leading-relaxed md:text-[1.35rem]",
  heroMeta: "text-sm leading-relaxed text-[var(--text-soft)]",
  heroImpact:
    "mt-2 space-y-4 border-t border-[var(--border)] pt-6 sm:mt-3 sm:pt-7",
  heroImpactLabel:
    "m-0 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--text-subtle)]",
  heroImpactList: "m-0 flex flex-col gap-3.5 p-0 sm:gap-3",
  heroImpactItem: "flex items-start gap-3",
  heroImpactMarker:
    "mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]",
  heroImpactText:
    "text-pretty text-[0.9375rem] leading-[1.55] text-[var(--text-muted)] sm:text-base sm:leading-relaxed",
  heroImpactJump:
    "inline-flex min-h-10 items-center gap-1.5 text-sm font-medium text-[var(--accent)] no-underline hover:underline",
  heroImpactJumpIcon: "text-[var(--text-subtle)]",
  heroActions: "flex flex-col gap-3 pt-1",
  heroActionsRow: "grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:items-center sm:gap-3",
  buttonLinkedIn:
    "inline-flex min-h-11 w-full items-center justify-center rounded-full border border-[color-mix(in_oklab,var(--accent)_35%,var(--border))] bg-[color-mix(in_oklab,var(--accent)_8%,var(--page))] px-5 py-2.5 text-sm font-medium text-[var(--accent)] no-underline hover:border-[var(--accent)] hover:bg-[color-mix(in_oklab,var(--accent)_14%,var(--page))] sm:w-auto",
  buttonPrimary:
    "inline-flex min-h-11 w-full items-center justify-center rounded-full bg-[var(--text)] px-5 py-2.5 text-sm font-medium text-[var(--page)] no-underline hover:opacity-90 sm:w-auto",
  buttonSecondary:
    "inline-flex min-h-11 w-full items-center justify-center rounded-full border border-[var(--border)] px-5 py-2.5 text-sm font-medium text-[var(--text)] no-underline hover:border-[var(--text-soft)] hover:bg-[var(--surface)] sm:w-auto",
  section:
    "scroll-mt-[calc(4.75rem+env(safe-area-inset-top))] space-y-6 border-b border-[var(--border)] py-10 sm:space-y-8 sm:py-16",
  sectionHeader: "space-y-2",
  sectionTitle:
    "text-balance text-[1.65rem] font-semibold leading-tight tracking-tight text-[var(--text)] sm:text-2xl md:text-[1.75rem]",
  sectionIntro: "text-pretty max-w-2xl text-base leading-relaxed text-[var(--text-soft)]",
  featuredProject:
    "space-y-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 sm:p-7",
  projectList: "m-0 grid list-none gap-0 divide-y divide-[var(--border)] border-y border-[var(--border)] p-0",
  projectRow: "grid gap-4 py-5 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start sm:gap-6",
  projectTitle: "text-lg font-medium leading-snug text-[var(--text)]",
  projectMeta: "text-sm text-[var(--text-subtle)]",
  projectTeaser: "text-pretty text-base leading-relaxed text-[var(--text-muted)]",
  projectLinks: "flex flex-wrap gap-2 sm:justify-end sm:gap-x-4 sm:gap-y-3",
  linkPill:
    "inline-flex min-h-10 items-center rounded-full border border-[var(--border)] bg-[var(--page)] px-4 text-sm font-medium text-[var(--accent)] no-underline hover:border-[var(--text-soft)] hover:bg-[var(--surface)]",
  textLink:
    "inline-flex min-h-11 items-center text-sm font-medium text-[var(--accent)] no-underline hover:underline",
  detailsButton:
    "inline-flex min-h-11 w-full items-center justify-center rounded-full border border-[var(--border)] px-4 text-sm font-medium text-[var(--text-soft)] no-underline hover:border-[var(--text-soft)] hover:bg-[var(--surface)] sm:w-auto sm:justify-start sm:rounded-none sm:border-0 sm:px-0",
  impactGrid: "m-0 grid list-none grid-cols-1 gap-3 p-0 sm:grid-cols-2 sm:gap-4",
  impactCard:
    "space-y-1.5 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 sm:p-5",
  impactMetric:
    "text-balance text-2xl font-semibold tracking-tight text-[var(--text)] sm:text-3xl",
  impactContext:
    "text-pretty text-xs leading-relaxed text-[var(--text-muted)] sm:text-sm",
  impactList: "m-0 grid list-none gap-4 p-0",
  impactItem:
    "overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)] transition-colors hover:border-[var(--text-soft)]",
  impactCardLink:
    "flex flex-col gap-0 p-4 no-underline active:opacity-90 sm:p-6",
  impactOutcome:
    "text-pretty text-base font-semibold leading-snug text-[var(--text)] group-hover:text-[var(--accent)]",
  impactMeta: "mt-1.5 text-sm leading-relaxed text-[var(--text-subtle)]",
  impactText: "mt-3 text-pretty text-sm leading-relaxed text-[var(--text-muted)]",
  impactReadMore:
    "mt-4 inline-flex min-h-10 items-center text-sm font-medium text-[var(--accent)]",
  experienceList: "m-0 grid list-none gap-7 p-0 sm:gap-8",
  experienceItem:
    "space-y-2 border-s-2 border-[var(--border)] ps-4 sm:border-0 sm:ps-0",
  experienceHeading: "flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:items-baseline sm:gap-x-2 sm:gap-y-1",
  experienceRole: "text-base font-medium text-[var(--text)]",
  experienceCompany: "text-base text-[var(--text-muted)]",
  experiencePeriod: "text-sm text-[var(--text-subtle)] sm:ms-auto",
  experienceHighlight:
    "text-pretty ps-0 text-sm leading-relaxed text-[var(--text-muted)] before:me-2 before:text-[var(--accent)] before:content-['•']",
  toolsWrap: "space-y-4",
  toolsGroup: "space-y-2",
  toolsLabel: "text-sm font-medium text-[var(--text)]",
  toolsItems: "text-pretty text-sm leading-relaxed text-[var(--text-muted)]",
  contactPanel: "space-y-6",
  contactActions: "grid grid-cols-1 gap-3 sm:flex sm:flex-wrap",
  contactMeta: "space-y-4 text-sm leading-relaxed text-[var(--text-muted)]",
  contactMetaLink: "break-all",
  footerNote: "border-t border-[var(--border)] pt-8 text-sm text-[var(--text-subtle)]",
  themeToggleButton:
    "inline-flex min-h-10 min-w-10 shrink-0 items-center justify-center rounded-full border border-[var(--border)] text-[var(--text-soft)] hover:border-[var(--text-soft)] hover:text-[var(--text)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus)] cursor-pointer sm:min-h-11 sm:min-w-11",
  themeToggleLabel: "sr-only",
  themeControl: "flex shrink-0 items-center",
} as const;
