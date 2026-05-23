"use client";

import { InteractiveCanvas } from "@/components/interactive-canvas";
import { TelemetryDashboard } from "@/components/telemetry-dashboard";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { pageStyles } from "@/lib/page-styles";
import { resumeData } from "@/lib/resume-data";
import { siteConfig } from "@/lib/site-config";

type ExternalLink = {
  href: string;
  label: string;
};

const buildExternalLinks = (): ExternalLink[] => {
  const links: ExternalLink[] = [
    {
      href: resumeData.links.linkedin.href,
      label: resumeData.links.linkedin.label,
    },
    {
      href: resumeData.links.github.href,
      label: resumeData.links.github.label,
    },
  ];

  if (siteConfig.linkedinUrl !== resumeData.links.linkedin.href) {
    links[0] = {
      href: siteConfig.linkedinUrl,
      label: resumeData.links.linkedin.label,
    };
  }

  if (siteConfig.githubUrl !== resumeData.links.github.href) {
    links[1] = {
      href: siteConfig.githubUrl,
      label: resumeData.links.github.label,
    };
  }

  return links;
};

const formatYearOnly = (period: string) => {
  const years = period.match(/\b\d{4}\b/g);
  if (!years) return period;
  if (years.length === 1) return years[0];
  if (years[0] === years[1]) return years[0];
  return `${years[0]} – ${years[1]}`;
};

const getCaseStudyTags = (title: string): string[] => {
  const t = title.toLowerCase();
  if (t.includes("cloud") || t.includes("provisioning")) {
    return ["Terraform", "AWS", "IaC", "Telemetry"];
  }
  if (t.includes("health") || t.includes("workflow")) {
    return ["Camunda", "BPMN", "DMN", "Microservices"];
  }
  if (t.includes("finchmoney") || t.includes("investing")) {
    return ["FIX 2.0", "Brokerage", "GraphQL", "Java"];
  }
  return ["Backend", "Cloud"];
};

export const HomePage = () => {
  const externalLinks = buildExternalLinks();

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Background Interactive Nodes Network */}
      <InteractiveCanvas />
      
      {/* Tech Grid Backdrop Accent */}
      <div className="fixed inset-0 cyber-grid pointer-events-none z-0 opacity-15" />

      <a className={pageStyles.skipLink} href="#main-content">
        Skip to content
      </a>
      
      <header className={pageStyles.chrome}>
        <div className={pageStyles.topBar}>
          <nav aria-label="Section navigation" className={pageStyles.topBarNav}>
            <a className={pageStyles.topBarLink} href="#impact">
              Impact
            </a>
            <a className={pageStyles.topBarLink} href="#experience">
              Experience
            </a>
            <a className={pageStyles.topBarLink} href="#stack">
              Stack
            </a>
            <a className={pageStyles.topBarLink} href="#case-studies">
              Case Studies
            </a>
            <a className={pageStyles.topBarLink} href="#contact">
              Contact
            </a>
          </nav>
          <ThemeToggle />
        </div>
      </header>

      <main className={pageStyles.pageShell} id="main-content">
        {/* HERO SECTION */}
        <section className={pageStyles.heroPanel}>
          <div className={pageStyles.heroCopy}>
            <p className={pageStyles.eyebrow}>{resumeData.basics.title}</p>
            <h1 className={pageStyles.heroTitle}>{resumeData.basics.name}</h1>
            <p className={pageStyles.heroSpecialization}>
              Distributed Systems • Workflow Automation • Reliability • Cloud Infrastructure
            </p>
            <p className={pageStyles.heroSummary}>{resumeData.positioningLine}</p>
          </div>

          <aside className={pageStyles.heroAside} aria-label="Systems Dashboard">
            <TelemetryDashboard />
          </aside>
        </section>

        {/* SELECTED IMPACT */}
        <section
          className={`${pageStyles.section}`}
          id="impact"
          style={{ animationDelay: "150ms" }}
          aria-labelledby="impact-heading"
        >
          <div className={pageStyles.sectionHeading}>
            <p className={pageStyles.sectionKicker}>Selected Impact</p>
            <h2 className={pageStyles.sectionTitle} id="impact-heading">
              Concrete outcomes, not broad claims.
            </h2>
          </div>
          <ul className={pageStyles.proofList} aria-label="Selected proof points">
            {resumeData.proofPoints.map((item, index) => {
              let keyword = "IAC";
              let metric = "⚡";
              if (index === 1) {
                keyword = "OPS LATENCY";
                metric = "82%";
              }
              if (index === 2) {
                keyword = "PROTOCOL";
                metric = "FIX";
              }
              return (
                <li className={pageStyles.proofChip} key={item.statement}>
                  <div className="flex justify-between items-start mb-4 relative z-10 border-b border-[var(--border)] pb-2">
                    <span className="font-mono text-[0.6rem] uppercase tracking-[0.25em] text-[var(--text-subtle)] font-bold">
                      {keyword}
                    </span>
                    <span className="text-[var(--accent-cyan)] font-mono font-bold text-sm tracking-widest">
                      {metric}
                    </span>
                  </div>
                  <p className={pageStyles.proofText}>{item.statement}</p>
                </li>
              );
            })}
          </ul>
        </section>
        
        {/* SPECIALIZATION */}
        <section
          className={`${pageStyles.specializationSection}`}
          style={{ animationDelay: "225ms" }}
        >
          <div className={pageStyles.sectionHeading}>
            <p className={pageStyles.sectionKicker}>Specialization</p>
          </div>
          <div className="max-w-3xl">
            <p className={pageStyles.specializationText}>
              {resumeData.specializationSummary}
            </p>
          </div>
        </section>

        {/* EXPERIENCE TIMELINE */}
        <section
          className={`${pageStyles.section}`}
          id="experience"
          style={{ animationDelay: "300ms" }}
          aria-labelledby="experience-heading"
        >
          <div className={pageStyles.sectionHeading}>
            <p className={pageStyles.sectionKicker}>Experience Snapshot</p>
            <h2 className={pageStyles.sectionTitle} id="experience-heading">
              Seven years across backend, platform, and delivery.
            </h2>
          </div>
          
          <div className="relative">
            <ol className={pageStyles.snapshotList}>
              {/* Dynamic scroll indicator line */}
              <div className="absolute left-[-1px] top-6 bottom-6 w-[1px] bg-[var(--border)] overflow-hidden">
                <div className="scroll-timeline-line w-full bg-gradient-to-b from-[var(--accent-cyan)] via-[var(--accent-violet)] to-transparent h-full origin-top" />
              </div>

              {resumeData.experience.map((item) => (
                <li key={`${item.company}-${item.period}`} className="relative pl-2">
                  {/* Pulse Milestone indicator node */}
                  <div className="absolute left-[-31px] top-6.5 w-4 h-4 rounded-full bg-[var(--page)] border-2 border-[var(--accent-cyan)] flex items-center justify-center z-10 shadow-sm transition-transform duration-300 hover:scale-125">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-cyan)] animate-pulse" />
                  </div>

                  <article className={pageStyles.snapshotCard}>
                    <p className={pageStyles.snapshotPeriod}>
                      {formatYearOnly(item.period)}
                    </p>
                    <div className={pageStyles.snapshotBody}>
                      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                        <h3 className={pageStyles.snapshotTitle}>{item.role}</h3>
                        <span className="text-xs font-semibold font-mono tracking-widest text-[var(--accent-violet)] uppercase">
                          @{item.company}
                        </span>
                      </div>
                      <p className={pageStyles.snapshotCompany}>
                        {item.location} · {item.period}
                      </p>
                      <p className={pageStyles.snapshotSummary}>{item.summary}</p>
                      
                      {/* Achievements bullets */}
                      <ul className="mt-4 space-y-2 list-none p-0">
                        {item.points.map((point, idx) => (
                          <li
                            key={idx}
                            className="text-xs leading-relaxed text-[var(--text-soft)] flex items-start gap-2.5"
                          >
                            <span className="text-[var(--accent-cyan)]/70 select-none font-bold mt-0.5">▪</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* CORE STACK */}
        <section
          className={`${pageStyles.section}`}
          id="stack"
          style={{ animationDelay: "450ms" }}
          aria-labelledby="stack-heading"
        >
          <div className={pageStyles.sectionHeading}>
            <p className={pageStyles.sectionKicker}>Core Stack</p>
            <h2 className={pageStyles.sectionTitle} id="stack-heading">
              Core runtime, workflow, and platform tools.
            </h2>
          </div>
          <div className={pageStyles.capabilityGrid}>
            {resumeData.coreStack.map((group) => (
              <section className={pageStyles.capabilityItem} key={group.label}>
                <h3 className={pageStyles.capabilityLabel}>{group.label}</h3>
                <div className="flex flex-wrap gap-2 mt-4">
                  {group.items.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-[0.68rem] font-semibold font-mono tracking-wide border border-[var(--border)] bg-black/10 hover:border-[var(--accent-cyan)] hover:bg-[var(--accent-cyan)]/5 hover:text-[var(--accent-cyan)] transition-all duration-300 rounded-none shadow-sm cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </section>

        {/* SELECTED CASE STUDIES */}
        <section
          className={`${pageStyles.section}`}
          id="case-studies"
          style={{ animationDelay: "600ms" }}
          aria-labelledby="systems-heading"
        >
          <div className={pageStyles.sectionHeading}>
            <p className={pageStyles.sectionKicker}>Selected Case Studies</p>
            <h2 className={pageStyles.sectionTitle} id="systems-heading">
              A few case studies where the engineering work is concrete.
            </h2>
          </div>
          <div className={pageStyles.systemsGrid}>
            {resumeData.caseStudies.map((study) => {
              const tags = getCaseStudyTags(study.title);
              return (
                <article className={pageStyles.systemCard} key={study.title}>
                  {/* Browser window frame mock */}
                  <div className="flex items-center justify-between border-b border-[var(--border)] pb-3 relative z-10">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[var(--border)] group-hover:bg-red-500/50 transition-colors duration-300" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[var(--border)] group-hover:bg-amber-500/50 transition-colors duration-300" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[var(--border)] group-hover:bg-emerald-500/50 transition-colors duration-300" />
                    </div>
                    <span className={pageStyles.systemContext}>{study.context}</span>
                  </div>

                  <div className={pageStyles.systemBody}>
                    <h3 className={pageStyles.systemTitle}>
                      <a
                        href={study.href}
                        rel="noreferrer"
                        target="_blank"
                        className="hover:text-[var(--accent-cyan)] flex items-baseline justify-between w-full"
                      >
                        <span>{study.title}</span>
                        <span className="text-xl opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                          ↗
                        </span>
                      </a>
                    </h3>
                    <p className={pageStyles.systemText}>{study.description}</p>
                    
                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 py-1.5">
                      {tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[0.6rem] font-semibold font-mono tracking-wider text-[var(--accent-violet)] bg-[var(--accent-violet)]/5 border border-[var(--accent-violet)]/10 px-2 py-0.5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <p className="mt-2 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-[var(--accent-cyan)] font-bold">
                      {study.outcome}
                    </p>
                  </div>
                  <a
                    className={pageStyles.systemLink}
                    href={study.href}
                    rel="noreferrer"
                    target="_blank"
                  >
                    View engineering case study
                  </a>
                </article>
              );
            })}
          </div>
        </section>

        {/* RESUME & CONTACT */}
        <section
          className={`${pageStyles.section}`}
          id="contact"
          style={{ animationDelay: "750ms" }}
          aria-labelledby="links-heading"
        >
          <div className={pageStyles.sectionHeading}>
            <p className={pageStyles.sectionKicker}>Resume & Contact</p>
            <h2 className={pageStyles.sectionTitle} id="links-heading">
              LinkedIn, GitHub, and direct contact.
            </h2>
          </div>
          <div className={pageStyles.linksPanel}>
            <div className={pageStyles.linksActions}>
              {externalLinks.map((link) => (
                <a
                  className={pageStyles.actionSecondary}
                  href={link.href}
                  key={link.label}
                  rel="noreferrer"
                  target="_blank"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className={pageStyles.linksMeta}>
              <p className={pageStyles.linksMetaItem}>
                <span className="font-mono text-[0.55rem] uppercase tracking-[0.25em] text-[var(--text-subtle)] font-bold">
                  Email
                </span>
                <a
                  className="text-sm font-semibold text-[var(--text-soft)] hover:text-[var(--accent-cyan)] transition-colors duration-300"
                  href={`mailto:${resumeData.basics.email}`}
                >
                  {resumeData.basics.email}
                </a>
              </p>
              <p className={pageStyles.linksMetaItem}>
                <span className="font-mono text-[0.55rem] uppercase tracking-[0.25em] text-[var(--text-subtle)] font-bold">
                  Education
                </span>
                <span className="text-sm leading-relaxed text-[var(--text-soft)] font-medium">
                  {resumeData.education.degree}, {resumeData.education.institution}
                </span>
              </p>
              <p className={pageStyles.linksNote}>
                The site and code stay public. Clear writing and clean
                implementation both matter.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
