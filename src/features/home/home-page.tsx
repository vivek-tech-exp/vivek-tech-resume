"use client";

import { useState } from "react";
import { InteractiveCanvas } from "@/components/interactive-canvas";
import { TelemetryDashboard } from "@/components/telemetry-dashboard";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { pageStyles } from "@/lib/page-styles";
import { resumeData, PersonalProject } from "@/lib/resume-data";
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

const FootstepsShowcase = ({ project }: { project: PersonalProject }) => {
  return (
    <article className="grid gap-6 glassmorphic-card p-6 border border-[var(--border)] transition-all duration-400 hover:shadow-2xl sm:p-8 lg:p-10 relative overflow-hidden group">
      {/* Visual Accent Layer */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[var(--glow-cyan)] rounded-full blur-[80px] pointer-events-none opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
      
      {/* Header with Active Pulse */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[var(--border)] relative z-10">
        <div className="space-y-1">
          <div className="flex items-center gap-2.5">
            <h3 className="text-2xl font-bold tracking-tight text-[var(--text)] group-hover:text-[var(--accent-cyan)] transition-colors duration-300 sm:text-3xl">
              {project.title}
            </h3>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 font-mono text-[0.58rem] tracking-wider uppercase font-semibold select-none">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {"Active Dev"}
            </span>
          </div>
          <p className="font-mono text-xs text-[var(--accent-violet)] uppercase tracking-widest font-semibold">
            {project.period} {"— Flagship Project"}
          </p>
        </div>

        {/* Project Links */}
        <div className="flex flex-wrap gap-x-4 gap-y-2">
          {project.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-[var(--text-soft)] hover:text-[var(--accent-cyan)] transition-colors duration-300 flex items-center gap-1 font-bold"
            >
              {link.label} <span>{"↗"}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Flagship Body Structure */}
      <div className="grid gap-8 lg:grid-cols-12 relative z-10 mt-2">
        {/* Left Side: Product Context (Why & What) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-2">
            <h4 className="font-mono text-[0.62rem] uppercase tracking-[0.3em] text-[var(--accent-cyan)] font-bold">
              {"✦ The Spark (Why)"}
            </h4>
            <p className="text-xs leading-relaxed text-[var(--text-muted)] font-medium whitespace-pre-line sm:text-sm">
              {project.why}
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-mono text-[0.62rem] uppercase tracking-[0.3em] text-[var(--accent-cyan)] font-bold">
              {"✦ Product Value (What it does)"}
            </h4>
            <p className="text-xs leading-relaxed text-[var(--text-muted)] font-medium whitespace-pre-line sm:text-sm">
              {project.whatItDoes}
            </p>
          </div>
        </div>

        {/* Right Side: Engineering Context (How & Hardest Challenge) */}
        <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="space-y-2">
              <h4 className="font-mono text-[0.62rem] uppercase tracking-[0.3em] text-[var(--accent-cyan)] font-bold">
                {"✦ Platform Architecture (How it is done)"}
              </h4>
              <p className="text-xs leading-relaxed text-[var(--text-muted)] font-medium whitespace-pre-line sm:text-sm">
                {project.howItIsDone}
              </p>
            </div>

            {/* Custom Tech Badges */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-0.5 text-[0.62rem] font-semibold font-mono tracking-wider border border-[var(--border)] bg-black/20 text-[var(--text-soft)] hover:border-[var(--accent-cyan)] hover:text-[var(--accent-cyan)] hover:bg-[var(--accent-cyan)]/5 transition-all duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Hardest Challenge callout */}
          <div className="border border-[var(--accent-violet)]/20 bg-[var(--accent-violet)]/5 p-5 relative overflow-hidden group/challenge mt-4 shadow-inner">
            <div className="absolute top-0 right-0 w-[120px] h-[120px] bg-[var(--glow-violet)] rounded-full blur-[40px] pointer-events-none opacity-40" />
            <span className="font-mono text-[0.62rem] uppercase tracking-[0.3em] text-[var(--accent-violet)] font-bold block mb-2">
              {"⚡ Hardest Technical Challenge"}
            </span>
            <p className="text-xs leading-relaxed text-[var(--text-soft)] font-medium">
              {project.challenge}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

const SubordinateProjectCard = ({ project }: { project: PersonalProject }) => {
  const [activeTab, setActiveTab] = useState<"why" | "what" | "how">("why");

  return (
    <article className="grid gap-4 glassmorphic-card p-6 border border-[var(--border)] glow-card-container flex flex-col justify-between h-full relative group">
      <div>
        <div className="flex justify-between items-start mb-3 pb-2 border-b border-[var(--border)]/60">
          <h3 className="text-lg font-bold tracking-tight text-[var(--text)] group-hover:text-[var(--accent-cyan)] transition-colors duration-300">
            {project.title}
          </h3>
          <span className="font-mono text-[0.65rem] tracking-wider text-[var(--text-subtle)] font-bold pt-0.5">
            {project.period}
          </span>
        </div>

        {/* Tech Badges */}
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

        {/* Compact Tabs Selector */}
        <div className="flex border-b border-[var(--border)]/60 mb-4" role="tablist" aria-label={`Project details for ${project.title}`}>
          {(["why", "what", "how"] as const).map((tab) => (
            <button
              key={tab}
              role="tab"
              aria-selected={activeTab === tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 pb-1.5 font-mono text-[0.62rem] uppercase tracking-wider text-center border-b-2 transition-all duration-200 cursor-pointer ${
                activeTab === tab
                  ? "border-[var(--accent-cyan)] text-[var(--accent-cyan)] font-bold"
                  : "border-transparent text-[var(--text-subtle)] hover:text-[var(--text)]"
              }`}
            >
              {tab === "how" ? "How & Challenge" : tab}
            </button>
          ))}
        </div>

        {/* Tab Panel */}
        <div className="min-h-[160px] text-xs leading-relaxed text-[var(--text-muted)] font-medium">
          {activeTab === "why" && (
            <p className="whitespace-pre-line">{project.why}</p>
          )}
          {activeTab === "what" && (
            <p className="whitespace-pre-line">{project.whatItDoes}</p>
          )}
          {activeTab === "how" && (
            <div className="space-y-3">
              <p className="whitespace-pre-line">{project.howItIsDone}</p>
              <div className="border-l-2 border-amber-500/50 bg-amber-500/5 pl-3 py-1.5 pr-2">
                <span className="font-mono text-[0.55rem] uppercase tracking-widest text-amber-500 font-bold block mb-1">
                  {"⚠ Hardest Challenge"}
                </span>
                <p className="text-[0.68rem] leading-normal text-[var(--text-soft)]">
                  {project.challenge}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* External Links */}
      <div className="flex flex-wrap gap-3 mt-6 pt-4 border-t border-[var(--border)]/60">
        {project.links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-[0.62rem] uppercase tracking-[0.15em] text-[var(--text-soft)] hover:text-[var(--accent-cyan)] transition-colors duration-300 flex items-center gap-1 font-semibold"
          >
            {link.label} <span>{"↗"}</span>
          </a>
        ))}
      </div>
    </article>
  );
};

export const HomePage = () => {
  const externalLinks = buildExternalLinks();
  const [showAllProjects, setShowAllProjects] = useState(false);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Background Interactive Nodes Network */}
      <InteractiveCanvas />
      
      {/* Tech Grid Backdrop Accent */}
      <div className="fixed inset-0 cyber-grid pointer-events-none z-0 opacity-15" />

      <a className={pageStyles.skipLink} href="#main-content">
        {resumeData.uiStrings.skipToContent}
      </a>
      
      <header className={pageStyles.chrome}>
        <div className={pageStyles.topBar}>
          <nav aria-label="Section navigation" className={pageStyles.topBarNav}>
            <a className={pageStyles.topBarLink} href="#projects">
              {resumeData.uiStrings.navProjects}
            </a>
            <a className={pageStyles.topBarLink} href="#experience">
              {resumeData.uiStrings.navExperience}
            </a>
            <a className={pageStyles.topBarLink} href="#stack">
              {resumeData.uiStrings.navStack}
            </a>
            <a className={pageStyles.topBarLink} href="#case-studies">
              {resumeData.uiStrings.navCaseStudies}
            </a>
            <a className={pageStyles.topBarLink} href="#contact">
              {resumeData.uiStrings.navContact}
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
              {"Distributed Systems • Backend Infrastructure • Modern Web & Mobile • High-Scale Reliability"}
            </p>
            <p className={pageStyles.heroSummary}>{resumeData.positioningLine}</p>
          </div>

          <aside className={pageStyles.heroAside} aria-label="Systems Dashboard">
            <TelemetryDashboard />
          </aside>
        </section>

        {/* PERSONAL PROJECTS */}
        <section
          className={`${pageStyles.section}`}
          id="projects"
          style={{ animationDelay: "150ms" }}
          aria-labelledby="projects-heading"
        >
          <div className={pageStyles.sectionHeading}>
            <p className={pageStyles.sectionKicker}>{resumeData.uiStrings.projectsKicker}</p>
            <h2 className={pageStyles.sectionTitle} id="projects-heading">
              {resumeData.uiStrings.projectsTitle}
            </h2>
          </div>

          <div className="space-y-12">
            {/* Overview paragraph */}
            <p className="text-sm leading-relaxed text-[var(--text-muted)] font-medium italic border-l-2 border-[var(--accent-cyan)] pl-3">
              {resumeData.uiStrings.projectsSubtitle}
            </p>

            {/* Flagship Project Showcase */}
            {resumeData.personalProjects
              .filter((p) => p.featured)
              .map((project) => (
                <FootstepsShowcase key={project.title} project={project} />
              ))}

            {/* Expandable Secondary Projects */}
            <div className="space-y-8">
              <div className="flex justify-center pt-2">
                <button
                  onClick={() => setShowAllProjects(!showAllProjects)}
                  className="group flex items-center gap-2.5 px-6 py-3 border border-[var(--border)] bg-black/10 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-[var(--text-soft)] hover:text-[var(--accent-cyan)] hover:border-[var(--accent-cyan)] hover:bg-[var(--accent-cyan)]/5 transition-all duration-300 shadow-md cursor-pointer hover:shadow-[0_0_15px_-5px_var(--glow-cyan)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus)] select-none font-bold"
                >
                  <span>{showAllProjects ? "Show Fewer Personal Builds ↑" : "Explore 4 More Recent Builds ↓"}</span>
                </button>
              </div>

              {showAllProjects && (
                <div className="space-y-6 animate-reveal">
                  <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--text-subtle)] font-bold pb-2 border-b border-[var(--border)]">
                    {resumeData.uiStrings.otherBuilds}
                  </h3>
                  <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
                    {resumeData.personalProjects
                      .filter((p) => !p.featured)
                      .map((project) => (
                        <SubordinateProjectCard key={project.title} project={project} />
                      ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* SPECIALIZATION */}
        <section
          className={`${pageStyles.specializationSection}`}
          style={{ animationDelay: "300ms" }}
        >
          <div className={pageStyles.sectionHeading}>
            <p className={pageStyles.sectionKicker}>{resumeData.uiStrings.specializationKicker}</p>
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
          style={{ animationDelay: "375ms" }}
          aria-labelledby="experience-heading"
        >
          <div className={pageStyles.sectionHeading}>
            <p className={pageStyles.sectionKicker}>{resumeData.uiStrings.experienceKicker}</p>
            <h2 className={pageStyles.sectionTitle} id="experience-heading">
              {resumeData.uiStrings.experienceTitle}
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
            <p className={pageStyles.sectionKicker}>{resumeData.uiStrings.stackKicker}</p>
            <h2 className={pageStyles.sectionTitle} id="stack-heading">
              {resumeData.uiStrings.stackTitle}
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
            <p className={pageStyles.sectionKicker}>{resumeData.uiStrings.caseStudiesKicker}</p>
            <h2 className={pageStyles.sectionTitle} id="systems-heading">
              {resumeData.uiStrings.caseStudiesTitle}
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
                          {"↗"}
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
                    {resumeData.uiStrings.viewCaseStudy}
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
            <p className={pageStyles.sectionKicker}>{resumeData.uiStrings.contactKicker}</p>
            <h2 className={pageStyles.sectionTitle} id="links-heading">
              {resumeData.uiStrings.contactTitle}
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
                  {resumeData.uiStrings.emailLabel}
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
                  {resumeData.uiStrings.educationLabel}
                </span>
                <span className="text-sm leading-relaxed text-[var(--text-soft)] font-medium">
                  {resumeData.education.degree}, {resumeData.education.institution}
                </span>
              </p>
              <p className={pageStyles.linksNote}>
                {resumeData.uiStrings.footerNote}
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
