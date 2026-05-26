import { resumeData, type PersonalProject } from "@/lib/resume-data";

const { uiStrings } = resumeData;

export const FootstepsShowcase = ({ project }: { project: PersonalProject }) => (
  <article className="grid gap-6 glassmorphic-card p-6 border border-[var(--border)] sm:p-8 lg:p-10 relative overflow-hidden">
    <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[var(--border)]">
      <div className="space-y-1">
        <div className="flex items-center gap-2.5">
          <h3 className="text-2xl font-bold tracking-tight text-[var(--text)] sm:text-3xl">
            {project.title}
          </h3>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 font-mono text-[0.58rem] tracking-wider uppercase font-semibold select-none">
            <span className="status-dot w-1.5 h-1.5 rounded-full bg-emerald-400" />
            {uiStrings.activeDevBadge}
          </span>
        </div>
        <p className="font-mono text-xs text-[var(--accent-violet)] uppercase tracking-widest font-semibold">
          {project.period} {`— ${uiStrings.flagshipLabel}`}
        </p>
      </div>

      <div className="flex flex-wrap gap-x-4 gap-y-2">
        {project.links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`${link.label} (${uiStrings.externalLinkSuffix})`}
            className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-[var(--text-soft)] hover:text-[var(--accent-cyan)] flex items-center gap-1 font-bold"
          >
            {link.label} <span>{"↗"}</span>
          </a>
        ))}
      </div>
    </div>

    <div className="grid gap-8 lg:grid-cols-12 relative z-10 mt-2">
      <div className="lg:col-span-5 space-y-6">
        <div className="space-y-2">
          <h4 className="font-mono text-[0.62rem] uppercase tracking-[0.3em] text-[var(--accent-cyan)] font-bold">
            {`✦ ${uiStrings.sparkLabel}`}
          </h4>
          <p className="text-xs leading-relaxed text-[var(--text-muted)] font-medium whitespace-pre-line sm:text-sm">
            {project.why}
          </p>
        </div>

        <div className="space-y-2">
          <h4 className="font-mono text-[0.62rem] uppercase tracking-[0.3em] text-[var(--accent-cyan)] font-bold">
            {`✦ ${uiStrings.productValueLabel}`}
          </h4>
          <p className="text-xs leading-relaxed text-[var(--text-muted)] font-medium whitespace-pre-line sm:text-sm">
            {project.whatItDoes}
          </p>
        </div>
      </div>

      <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
        <div className="space-y-4">
          <div className="space-y-2">
            <h4 className="font-mono text-[0.62rem] uppercase tracking-[0.3em] text-[var(--accent-cyan)] font-bold">
              {`✦ ${uiStrings.architectureLabel}`}
            </h4>
            <p className="text-xs leading-relaxed text-[var(--text-muted)] font-medium whitespace-pre-line sm:text-sm">
              {project.howItIsDone}
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 text-[0.62rem] font-semibold font-mono tracking-wider border border-[var(--border)] bg-black/20 text-[var(--text-soft)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="border border-[var(--accent-violet)]/20 bg-[var(--accent-violet)]/5 p-5 relative overflow-hidden mt-4 shadow-inner">
          <span className="font-mono text-[0.62rem] uppercase tracking-[0.3em] text-[var(--accent-violet)] font-bold block mb-2">
            {`⚡ ${uiStrings.challengeLabel}`}
          </span>
          <p className="text-xs leading-relaxed text-[var(--text-soft)] font-medium">
            {project.challenge}
          </p>
        </div>
      </div>
    </div>
  </article>
);

export const SubordinateProjectCard = ({
  project,
}: {
  project: PersonalProject;
}) => (
  <article className="grid gap-4 glassmorphic-card p-6 border border-[var(--border)] flex flex-col justify-between h-full relative">
    <div>
      <div className="flex justify-between items-start mb-3 pb-2 border-b border-[var(--border)]/60">
        <h3 className="text-lg font-bold tracking-tight text-[var(--text)]">
          {project.title}
        </h3>
        <span className="font-mono text-[0.65rem] tracking-wider text-[var(--text-subtle)] font-bold pt-0.5">
          {project.period}
        </span>
      </div>

      <div className="flex flex-wrap gap-1 mb-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-[0.55rem] font-semibold font-mono tracking-wider text-[var(--text-subtle)] border border-[var(--border)] bg-black/10 px-1.5 py-0.5"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="space-y-2 min-h-[160px] text-xs leading-relaxed text-[var(--text-muted)] font-medium">
        <details className="project-detail">
          <summary className="project-detail-summary">{uiStrings.tabWhy}</summary>
          <p className="whitespace-pre-line pt-2">{project.why}</p>
        </details>
        <details className="project-detail">
          <summary className="project-detail-summary">{uiStrings.tabWhat}</summary>
          <p className="whitespace-pre-line pt-2">{project.whatItDoes}</p>
        </details>
        <details className="project-detail">
          <summary className="project-detail-summary">{uiStrings.tabHow}</summary>
          <div className="space-y-3 pt-2">
            <p className="whitespace-pre-line">{project.howItIsDone}</p>
            <div className="border-s-2 border-amber-500/50 bg-amber-500/5 ps-3 py-1.5 pe-2">
              <span className="font-mono text-[0.55rem] uppercase tracking-widest text-amber-500 font-bold block mb-1">
                {`⚠ ${uiStrings.challengeShortLabel}`}
              </span>
              <p className="text-[0.68rem] leading-normal text-[var(--text-soft)]">
                {project.challenge}
              </p>
            </div>
          </div>
        </details>
      </div>
    </div>

    <div className="flex flex-wrap gap-3 mt-6 pt-4 border-t border-[var(--border)]/60">
      {project.links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={`${link.label} (${uiStrings.externalLinkSuffix})`}
          className="font-mono text-[0.62rem] uppercase tracking-[0.15em] text-[var(--text-soft)] hover:text-[var(--accent-cyan)] flex items-center gap-1 font-semibold"
        >
          {link.label} <span>{"↗"}</span>
        </a>
      ))}
    </div>
  </article>
);
