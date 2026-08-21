import { caseStudyHref } from "@/lib/case-study-links";
import { withResumeDownloadCacheBust } from "@/lib/resume-download-version";

type ResumeLink = {
  href: string;
  label: string;
};

type ResumeExperience = {
  company: string;
  location: string;
  period: string;
  role: string;
  highlight: string;
};

type ResumeStackGroup = {
  label: string;
  items: readonly string[];
};

type ResumeCaseStudy = {
  title: string;
  context: string;
  description: string;
  /** Punchy one-liner for the hero (not linked; full write-up is in Case studies). */
  metric: string;
  outcome: string;
  href: string;
};

type ProjectLink = {
  label: string;
  href: string;
};

export type PersonalProject = {
  title: string;
  featured: boolean;
  period: string;
  teaser: string;
  links: readonly ProjectLink[];
};

export const resumeData = {
  positioningLine: "Distributed Systems | Product Engineering",
  specializationSummary:
    "Backend-heavy senior software engineer with 8+ years of experience across distributed systems, high-scale services, fintech, workflow orchestration, observability, cloud infrastructure, and 0-to-1 product development.",
  basics: {
    name: "Vivek Mankonda",
    title: "Senior Software Engineer",
    image: "/images/profile.png",
    location: "Based in India | Open to Relocation",
    locations: ["India (Remote)", "Open to Relocation", "Hyderabad", "Bengaluru", "Pune"],
    yearsOfExperience: "8+ years",
  },
  uiStrings: {
    skipToContent: "Skip to content",
    navMenuLabel: "Menu",
    navWork: "Work",
    navExperience: "Experience",
    navImpact: "Case studies",
    navContact: "Contact",
    linkedinCtaLabel: "Message on LinkedIn",
    resumeShareLabel: "Resume link",
    resumeMenuLabel: "Choose a format",
    resumePageIntro:
      "PDF and Word copies of my resume, with the same experience and projects as this site.",
    resumePageBack: "View full profile",
    downloadPdfLabel: "PDF",
    downloadDocxLabel: "Word",
    heroRoleLine: "Senior Software Engineer | 8+ years",
    heroAvailability: "Based in India | Open to Relocation",
    heroImpactLabel: "Recent impact",
    heroImpactJump: "Read case studies",
    workTitle: "Current work",
    workIntro:
      "Footsteps Space, a travel storytelling product I am building end to end.",
    sideProjectsTitle: "Other projects",
    sideProjectsIntro:
      "Additional products built alongside full-time engineering roles.",
    showAllProjects: "Show all projects",
    experienceTitle: "Experience",
    experienceIntro:
      "8+ years across distributed systems, high-scale backend services, fintech, workflow orchestration, and 0-to-1 product delivery.",
    impactTitle: "Case studies",
    impactIntro:
      "Deeper notes on platform architecture, workflow orchestration, and systems shipped in production.",
    toolsTitle: "Technical stack",
    contactTitle: "Contact",
    contactIntro: "Message me on LinkedIn. Same-day replies when I can.",
    educationLabel: "Education",
    readCaseStudy: "View case study",
    externalLinkSuffix: "opens in new tab",
  },
  links: {
    linkedin: {
      href: "https://www.linkedin.com/in/vivekmankonda/",
      label: "LinkedIn",
    } satisfies ResumeLink,
    github: {
      href: "https://github.com/vivek-tech-exp",
      label: "GitHub",
    } satisfies ResumeLink,
  },
  resumeDownloads: {
    menuLabel: "Download Resume",
    headerMenuLabel: "Resume",
    sharePath: "/resume",
    formats: {
      pdf: {
        href: withResumeDownloadCacheBust("/resume/pdf"),
        menuLabel: "PDF",
        fileName: "Vivek-Mankonda-Resume.pdf",
        publicFile: "vivek-mankonda-resume.pdf",
        mimeType: "application/pdf",
      },
      docx: {
        href: withResumeDownloadCacheBust("/resume/docx"),
        menuLabel: "Word",
        fileName: "Vivek-Mankonda-Resume.docx",
        publicFile: "vivek-mankonda-resume.docx",
        mimeType:
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      },
    },
  },
  experience: [
    {
      company: "Footsteps Space",
      location: "Remote",
      period: "Jun 2025 - Present",
      role: "Builder",
      highlight:
        "Building a travel storytelling product end to end: mobile app, backend, and public web.",
    },
    {
      company: "New Relic",
      location: "Bengaluru",
      period: "Jan 2025 - May 2025",
      role: "Senior Software Engineer",
      highlight:
        "Automated enterprise customer onboarding with Terraform and reduced mean time to resolution by 37%.",
    },
    {
      company: "Acko",
      location: "Bengaluru",
      period: "Mar 2023 - Jul 2024",
      role: "Software Development Engineer 3",
      highlight:
        "Built workflow automation with Camunda and cut medical checkup wait times from 17 days to 3.",
    },
    {
      company: "Gameskraft Technologies",
      location: "Bengaluru",
      period: "Apr 2022 - Mar 2023",
      role: "Senior Software Engineer",
      highlight:
        "Optimized high-traffic backend architecture and cut AWS costs by 38%.",
    },
    {
      company: "Needle Innovision",
      location: "Pune",
      period: "Oct 2018 - Mar 2022",
      role: "R&D Engineer Backend",
      highlight:
        "Built the FinchMoney fintech platform with FIX 2.0 trading integrations.",
    },
    {
      company: "Thoughtclan Technologies",
      location: "Hyderabad",
      period: "Aug 2017 - Aug 2018",
      role: "Software Engineer",
      highlight: "Developed internal automation tools for operational efficiency.",
    },
  ] satisfies readonly ResumeExperience[],
  coreStack: [
    {
      label: "Languages",
      items: ["Java", "JavaScript", "TypeScript", "Python"],
    },
    {
      label: "Backend & Systems",
      items: [
        "Spring Framework",
        "Spring Cloud",
        "ExpressJS",
        "NestJS",
      ],
    },
    {
      label: "Workflows & Messaging",
      items: [
        "Apache Kafka",
        "Kafka Streams",
        "RabbitMQ",
        "Camunda",
        "BPMN",
        "DMN",
      ],
    },
    {
      label: "Cloud & Infrastructure",
      items: ["AWS", "Terraform", "CloudFormation", "Docker", "Kubernetes"],
    },
    {
      label: "Protocols & APIs",
      items: [
        "REST",
        "GraphQL",
        "WebSockets",
        "Webhooks",
        "HTTP 2.0",
        "FIX 2.0",
      ],
    },
    {
      label: "Observability & Data",
      items: [
        "PostgreSQL",
        "MongoDB",
        "DynamoDB",
        "Elasticsearch",
        "Redis",
        "Grafana",
        "New Relic",
        "Logstash",
      ],
    },
  ] satisfies readonly ResumeStackGroup[],
  caseStudies: [
    {
      title: "Cloud Onboarding & Provisioning Automation",
      context: "New Relic",
      metric: "Automated enterprise customer onboarding with Terraform.",
      description:
        "Implemented version-controlled Infrastructure-as-Code modules using Terraform to automate the onboarding of thousands of enterprise AWS accounts, replacing manual UI configurations with auditable, high-scale telemetry pipelines.",
      outcome: "Standardized enterprise cloud provisioning at scale",
      href: caseStudyHref("cloud-onboarding"),
    },
    {
      title: "Health Insurance Workflow Automation Platform",
      context: "Acko",
      metric: "Cut medical checkup wait time from 17 days to 3.",
      description:
        "Architected a workflow-first backend using Camunda, BPMN, and DMN to orchestrate complex insurance operations, explicitly modeling long-running business processes and automating critical state transitions.",
      outcome: "Reduced medical checkup turnaround from 17 days to 3",
      href: caseStudyHref("health-insurance-workflow"),
    },
    {
      title: "FinchMoney: Automated Consumer Investing Platform",
      context: "Needle Innovision",
      metric: "Built a fintech backend with FIX 2.0 integrations.",
      description:
        "Engineered a pooled brokerage architecture and fractional share accounting system to reconcile real-time consumer spending with asynchronous market settlements, integrating complex liquidity management and FIX-based trading protocols.",
      outcome: "Aligned user spending power with real-market settlements",
      href: caseStudyHref("finchmoney"),
    },
  ] satisfies readonly ResumeCaseStudy[],
  education: {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Heritage Institute of Technology, Kolkata",
    period: "2013 - 2017",
  },
  personalProjects: [
    {
      title: "Footsteps Space",
      featured: true,
      period: "Jun 2025 - Present",
      teaser:
        "A travel storytelling product built end to end: mobile app, backend, and public web.",
      links: [{ label: "Live Site", href: "https://www.footsteps.space" }],
    },
    {
      title: "Emu Event Assistant",
      featured: false,
      period: "2026",
      teaser:
        "A lightweight assistant for small hosts to track guests, payments, and expenses.",
      links: [
        { label: "GitHub Repo", href: "https://github.com/vivek-tech-exp/event-assistant/blob/master/README.md" },
        { label: "Live App", href: "https://event-assistant-beta.vercel.app" },
      ],
    },
    {
      title: "gh-ruleset-sync",
      featured: false,
      period: "2026",
      teaser:
        "A GitHub CLI tool to apply and audit repository rulesets across many repos.",
      links: [
        { label: "GitHub Repo", href: "https://github.com/vivek-tech-exp/gh-ruleset-sync/blob/master/README.md" },
      ],
    },
    {
      title: "Borderless Buy / One Day Baby",
      featured: false,
      period: "2026",
      teaser:
        "Helps shoppers compare local vs abroad prices with landed-cost context.",
      links: [
        { label: "GitHub Repo", href: "https://github.com/vivek-tech-exp/borderless-buy/blob/master/README.md" },
        { label: "Live App", href: "https://oneday-baby-phi.vercel.app" },
      ],
    },
    {
      title: "my-fi",
      featured: false,
      period: "2026",
      teaser:
        "A local-first app that turns bank CSV exports into a searchable ledger.",
      links: [
        { label: "GitHub Repo", href: "https://github.com/vivek-tech-exp/my-fi/blob/master/README.md" },
      ],
    },
  ] satisfies readonly PersonalProject[],
} as const;
