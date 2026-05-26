export type ResumeLink = {
  href: string;
  label: string;
};

export type ResumeProofPoint = {
  statement: string;
};

export type ResumeExperience = {
  company: string;
  location: string;
  period: string;
  role: string;
  highlight: string;
};

export type ResumeStackGroup = {
  label: string;
  items: readonly string[];
};

export type ResumeCaseStudy = {
  title: string;
  context: string;
  description: string;
  outcome: string;
  href: string;
};

export type ProjectLink = {
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
  positioningLine:
    "I build backend systems and full-stack products that stay reliable under real load.",
  specializationSummary:
    "Seven years across backend infrastructure, workflow platforms, and product delivery.",
  basics: {
    name: "Vivek Mankonda",
    title: "Senior Software Engineer",
    locations: ["Hyderabad", "Bengaluru", "Pune", "India (Remote)"],
    email: "vivekmankonda.work@gmail.com",
  },
  uiStrings: {
    skipToContent: "Skip to content",
    siteLabel: "Resume & selected work",
    navWork: "Work",
    navExperience: "Experience",
    navContact: "Contact",
    heroRoleLine: "Senior Software Engineer · 7 years",
    heroAvailability: "Open to senior IC roles · India & remote",
    proofHeading: "Recent impact",
    workTitle: "What I'm building",
    workIntro: "Side projects and products I ship end to end.",
    showAllProjects: "Show all projects",
    experienceTitle: "Where I've worked",
    experienceIntro: "Backend, platform, and delivery roles across fintech, insurance, and observability.",
    impactTitle: "Deeper write-ups",
    impactIntro: "Longer case studies for people who want the full story.",
    toolsTitle: "Tools I reach for",
    contactTitle: "Get in touch",
    contactIntro: "Best reached on LinkedIn or by email.",
    emailLabel: "Email",
    educationLabel: "Education",
    footerNote: "This site and its code are public.",
    readCaseStudy: "Read case study",
    externalLinkSuffix: "opens in new tab",
  },
  proofPoints: [
    {
      statement: "Automated customer onboarding with Terraform.",
    },
    {
      statement: "Cut medical checkup wait time from 17 days to 3.",
    },
    {
      statement: "Built a fintech backend with FIX 2.0 integrations.",
    },
  ] satisfies readonly ResumeProofPoint[],
  links: {
    linkedin: {
      href: "https://www.linkedin.com/in/vivekmankonda/",
      label: "LinkedIn",
    },
    github: {
      href: "https://github.com/vivek-tech-exp/vivek-tech-resume",
      label: "GitHub",
    },
  } satisfies Record<string, ResumeLink>,
  experience: [
    {
      company: "New Relic",
      location: "Bengaluru",
      period: "Jan 2025 – May 2025",
      role: "Senior Software Engineer",
      highlight:
        "Automated customer onboarding with Terraform and reduced mean time to resolution by 37%.",
    },
    {
      company: "Acko",
      location: "Bengaluru",
      period: "Mar 2023 – Jul 2024",
      role: "Software Development Engineer 3",
      highlight:
        "Built workflow automation with Camunda and cut medical checkup wait times from 17 days to 3.",
    },
    {
      company: "Gameskraft Technologies",
      location: "Bengaluru",
      period: "Apr 2022 – Mar 2023",
      role: "Senior Software Engineer",
      highlight:
        "Optimized high-traffic backend architecture and cut AWS costs by 38%.",
    },
    {
      company: "Needle Innovision",
      location: "Pune",
      period: "Oct 2018 – Mar 2022",
      role: "R&D Engineer Backend",
      highlight:
        "Built the FinchMoney fintech platform with FIX 2.0 trading integrations.",
    },
    {
      company: "Thoughtclan Technologies",
      location: "Hyderabad",
      period: "Aug 2017 – Aug 2018",
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
      label: "Backend",
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
        "Camunda",
        "BPMN",
        "DMN",
        "Kafka",
        "Kafka Streams",
        "RabbitMQ",
      ],
    },
    {
      label: "Cloud & Platform",
      items: ["AWS", "Terraform", "CloudFormation", "Docker", "Kubernetes"],
    },
    {
      label: "Interfaces",
      items: [
        "GraphQL",
        "REST",
        "WebSockets",
        "Webhooks",
        "HTTP 2.0",
        "FIX 2.0",
      ],
    },
    {
      label: "Observability & Data",
      items: [
        "Grafana",
        "New Relic",
        "Logstash",
        "PostgreSQL",
        "MongoDB",
        "DynamoDB",
        "Elasticsearch",
        "Redis Cache",
      ],
    },
  ] satisfies readonly ResumeStackGroup[],
  caseStudies: [
    {
      title: "Cloud Onboarding & Provisioning Automation",
      context: "New Relic",
      description:
        "Implemented version-controlled Infrastructure-as-Code modules using Terraform to automate the onboarding of thousands of enterprise AWS accounts, replacing manual UI configurations with auditable, high-scale telemetry pipelines.",
      outcome: "Standardized enterprise cloud provisioning at scale",
      href: "https://www.notion.so/Cloud-Onboarding-Provisioning-Automation-33dc3c09806980b9870ec3404a0813db?source=copy_link",
    },
    {
      title: "Health Insurance Workflow Automation Platform",
      context: "Acko",
      description:
        "Architected a workflow-first backend using Camunda, BPMN, and DMN to orchestrate complex insurance operations, explicitly modeling long-running business processes and automating critical state transitions.",
      outcome: "Reduced medical checkup turnaround from 17 days to 3",
      href: "https://www.notion.so/Health-Insurance-Workflow-Automation-Platform-33dc3c09806980339d41c979d47d9232?source=copy_link",
    },
    {
      title: "FinchMoney: Automated Consumer Investing Platform",
      context: "Needle Innovision",
      description:
        "Engineered a pooled brokerage architecture and fractional share accounting system to reconcile real-time consumer spending with asynchronous market settlements, integrating complex liquidity management and FIX-based trading protocols.",
      outcome: "Aligned user spending power with real-market settlements",
      href: "https://www.notion.so/FinchMoney-Building-the-Backend-for-an-Automated-Consumer-Investing-Platform-33dc3c098069809697a5de26144c0272?source=copy_link",
    },
  ] satisfies readonly ResumeCaseStudy[],
  education: {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Heritage Institute of Technology, Kolkata",
    period: "2013 – 2017",
  },
  personalProjects: [
    {
      title: "Footsteps App",
      featured: true,
      period: "Jun 2025 – Present",
      teaser:
        "A mobile app that turns trips into structured travel stories with maps, photos, and sync.",
      links: [
        { label: "Backend Repo", href: "https://github.com/vivek-tech-exp/footsteps-backend/blob/main/README.md" },
        { label: "Native Repo", href: "https://github.com/vivek-tech-exp/footsteps-native/blob/main/README.md" },
        { label: "Landing Repo", href: "https://github.com/vivek-tech-exp/footsteps-landing/blob/master/README.md" },
        { label: "Live Site", href: "https://www.footsteps.space" },
        { label: "Staging API", href: "https://footsteps-backend-staging.vercel.app" },
      ],
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
