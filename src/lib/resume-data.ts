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

type SelectedImpactItem = {
  metric: string;
  context: string;
};

export type EngineeringWorkItem = {
  id: string;
  title: string;
  context: string;
  problemContext: string;
  builtDesigned: string;
  measurableResult: string;
  tags: readonly string[];
  link?: {
    label: string;
    href: string;
    isExternal: boolean;
  };
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

export const resumeData = {
  positioningLine: "Distributed Systems | Product Engineering",
  specializationSummary:
    "Backend-heavy senior software engineer with 8+ years of experience across distributed systems, high-scale services, fintech, workflow orchestration, observability, cloud infrastructure, and 0-to-1 product development.",
  basics: {
    name: "Vivek Mankonda",
    title: "Senior Software Engineer",
    image: "/images/profile.png",
    location: "Based in India | Open to Relocation",
    locations: ["India", "Open to Relocation"],
    yearsOfExperience: "8+ years",
  },
  selectedImpact: [
    {
      metric: "1M+ requests/min",
      context: "Core backend systems at Gameskraft",
    },
    {
      metric: "17 days to 3 days",
      context: "Medical-checkup turnaround at Acko",
    },
    {
      metric: "0-to-1 Trading Platform",
      context:
        "FIX execution, pooled investing, rebalancing, fractional allocation and settlement at FinchMoney",
    },
    {
      metric: "37% lower MTTR",
      context: "Production reliability at New Relic",
    },
  ] satisfies readonly SelectedImpactItem[],
  selectedEngineeringWork: [
    {
      id: "footsteps-space",
      title: "Footsteps Space",
      context: "0-to-1 Travel Platform",
      problemContext:
        "0-to-1 product built independently across Flutter mobile application, TypeScript / Express backend, PostgreSQL / Supabase, and Next.js web with maps, authentication, and deployment.",
      builtDesigned:
        "Engineered FOTA: offline-first, battery-aware geolocation engine with adaptive GPS sampling, local persistence, and deferred synchronization.",
      measurableResult:
        "Approximately 100 users, with 85%+ outside my personal network.",
      tags: ["Flutter", "TypeScript", "Express", "PostgreSQL", "Supabase", "Next.js", "FOTA / Geolocation"],
      link: {
        label: "Live Platform",
        href: "https://www.footsteps.space",
        isExternal: true,
      },
    },
    {
      id: "gameskraft",
      title: "Gameskraft: High-Scale Tournament Systems",
      context: "Matchmaking & Core Backend Services",
      problemContext:
        "Matchmaking and core backend systems handling extreme concurrency and live tournament traffic.",
      builtDesigned:
        "Optimized cache and recovery paths, eliminated CPU and memory bottlenecks across services, and restructured AWS infrastructure.",
      measurableResult:
        "1M+ requests/min during 215K-participant Guinness World Record tournament; 38% lower AWS infrastructure cost.",
      tags: ["Java", "Spring Cloud", "AWS", "High Concurrency", "Redis", "Distributed Systems"],
      link: {
        label: "Case Study",
        href: caseStudyHref("high-scale-tournament-systems"),
        isExternal: false,
      },
    },
    {
      id: "finchmoney",
      title: "FinchMoney: Financial Systems & Trading",
      context: "Fintech & Brokerage Architecture",
      problemContext:
        "US banking and investment platform built from 0-to-1 with KYC, pooled investing, rebalancing, and fractional allocation.",
      builtDesigned:
        "Integrated FIX / QuickFIX brokerage execution with transactional state, idempotent processing, retries, reconciliation, and card authorization separated from asynchronous investment recovery.",
      measurableResult:
        "Delivered real-time spending with asynchronous market settlements and fractional share accounting.",
      tags: ["Java", "Spring", "FIX Protocol", "PostgreSQL", "Kafka", "Fintech", "Idempotency"],
      link: {
        label: "Case Study",
        href: caseStudyHref("finchmoney"),
        isExternal: false,
      },
    },
    {
      id: "acko",
      title: "Acko: Workflow Orchestration",
      context: "Distributed Business Process Platform",
      problemContext:
        "Long-running insurance workflows with multi-step vendor dependencies and complex state transitions.",
      builtDesigned:
        "Implemented Camunda with BPMN / DMN for persisted workflow state, retries, timeouts, exception handling, asynchronous vendor integrations, and New Relic / NRQL instrumentation.",
      measurableResult:
        "Medical-checkup turnaround reduced from 17 days to 3 days.",
      tags: ["Camunda", "BPMN / DMN", "Java", "Spring Boot", "New Relic", "Distributed Workflows"],
      link: {
        label: "Case Study",
        href: caseStudyHref("health-insurance-workflow"),
        isExternal: false,
      },
    },
    {
      id: "new-relic",
      title: "New Relic: Cloud Provisioning & Reliability",
      context: "Cloud Automation & Observability",
      problemContext:
        "Enterprise customer telemetry onboarding across thousands of AWS accounts.",
      builtDesigned:
        "Built Terraform automation across thousands of customer AWS accounts for repeatable and auditable telemetry onboarding, with improved alert routing, dashboards, and runbooks.",
      measurableResult:
        "MTTR reduced by 37% and automated provisioning across thousands of customer AWS accounts.",
      tags: ["Terraform", "AWS", "Infrastructure-as-Code", "New Relic", "Observability", "Reliability"],
      link: {
        label: "Case Study",
        href: caseStudyHref("cloud-onboarding"),
        isExternal: false,
      },
    },
  ] satisfies readonly EngineeringWorkItem[],
  uiStrings: {
    skipToContent: "Skip to content",
    navMenuLabel: "Menu",
    navWork: "Work",
    navExperience: "Experience",
    navImpact: "Impact",
    navContact: "Contact",
    linkedinCtaLabel: "LinkedIn",
    emailCtaLabel: "Email",
    resumeShareLabel: "Resume link",
    resumeMenuLabel: "Choose a format",
    resumePageIntro:
      "PDF and Word copies of my resume, reflecting 8+ years across distributed systems and backend engineering.",
    resumePageBack: "View full profile",
    downloadPdfLabel: "PDF",
    downloadDocxLabel: "Word",
    heroRoleLine: "Senior Software Engineer | 8+ years",
    heroAvailability: "Based in India | Open to Relocation",
    heroImpactLabel: "Recent impact",
    heroImpactJump: "Read case studies",
    workTitle: "Selected Engineering Work",
    workIntro:
      "Key systems, distributed architecture, and 0-to-1 products shipped in production.",
    problemLabel: "Problem / Context",
    builtLabel: "Built / Designed",
    resultLabel: "Result",
    experienceTitle: "Experience",
    experienceIntro:
      "8+ years across distributed systems, high-scale backend services, fintech, workflow orchestration, and 0-to-1 product delivery.",
    impactTitle: "Selected Impact",
    impactIntro:
      "Deeper notes on platform architecture, workflow orchestration, and systems shipped in production.",
    toolsTitle: "Technical Profile",
    contactTitle: "Contact",
    contactIntro:
      "Open to senior software engineering opportunities. Based in India and open to relocation.",
    educationLabel: "Education",
    readCaseStudy: "View case study",
    externalLinkSuffix: "opens in new tab",
  },
  links: {
    email: {
      href: "mailto:vivekmankonda.work@gmail.com",
      label: "Email",
    } satisfies ResumeLink,
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
      role: "Independent Software Engineer / Product Developer",
      highlight:
        "Built and launched Footsteps Space end to end across mobile, backend, data, maps, authentication and deployment.",
    },
    {
      company: "New Relic",
      location: "Hyderabad",
      period: "Jan 2025 - May 2025",
      role: "Senior Software Engineer",
      highlight:
        "Built Terraform-based enterprise AWS onboarding across thousands of customer accounts and improved production reliability, contributing to a 37% reduction in MTTR.",
    },
    {
      company: "Acko",
      location: "Bengaluru",
      period: "Mar 2023 - Jul 2024",
      role: "Software Development Engineer 3",
      highlight:
        "Built long-running workflow systems with Camunda and reduced pre-policy medical-checkup turnaround from 17 days to 3 days.",
    },
    {
      company: "Gameskraft Technologies",
      location: "Bengaluru",
      period: "Apr 2022 - Mar 2023",
      role: "Senior Software Engineer",
      highlight:
        "Worked on matchmaking and core backend systems handling 1M+ requests/min during a 215K-participant Guinness World Record tournament while reducing AWS infrastructure spend by 38%.",
    },
    {
      company: "Needle Innovision",
      location: "Bengaluru",
      period: "Oct 2018 - Mar 2022",
      role: "R&D Engineer, Backend",
      highlight:
        "Built FinchMoney from 0-to-1, including banking, investment, FIX trading, allocation, settlement and reconciliation systems.",
    },
    {
      company: "ThoughtClan Technologies",
      location: "Bengaluru",
      period: "Aug 2017 - Aug 2018",
      role: "Software Engineer",
      highlight:
        "Delivered enterprise applications across 21 international markets, with performance work contributing to a 30% improvement in site performance.",
    },
  ] satisfies readonly ResumeExperience[],
  coreStack: [
    {
      label: "Specializations",
      items: [
        "Distributed Systems",
        "Event-Driven Architecture",
        "System Design",
        "Microservices",
        "Workflow Orchestration",
        "Fault Tolerance",
        "Concurrency",
        "Idempotency",
        "0-to-1 / MVP Development",
        "End-to-End Product Development",
      ],
    },
    {
      label: "Languages & Frameworks",
      items: [
        "Java",
        "TypeScript",
        "Spring Boot / Spring Cloud",
        "Express.js",
        "Next.js",
        "Flutter",
      ],
    },
    {
      label: "Messaging, APIs & Protocols",
      items: [
        "Kafka",
        "REST",
        "GraphQL",
        "Webhooks",
        "WebSockets",
        "WebRTC",
        "OAuth 2.0 / JWT",
        "FIX / QuickFIX",
        "Camunda (BPMN / DMN)",
      ],
    },
    {
      label: "Data & Infrastructure",
      items: [
        "PostgreSQL",
        "MongoDB",
        "DynamoDB",
        "Redis",
        "Elasticsearch",
        "AWS",
        "Docker",
        "Kubernetes",
        "Terraform",
      ],
    },
    {
      label: "Observability",
      items: [
        "New Relic / NRQL",
        "Grafana",
        "CloudWatch",
        "Service Instrumentation",
        "Metrics / Logs / Traces",
        "Alerting",
        "Production Debugging",
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
    degree: "B.Tech, Computer Science & Engineering",
    institution: "Heritage Institute of Technology, Kolkata",
    period: "2013 - 2017",
  },
} as const;
