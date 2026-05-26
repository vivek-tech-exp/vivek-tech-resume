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
  summary: string;
  points: readonly string[];
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
  why: string;
  whatItDoes: string;
  howItIsDone: string;
  challenge: string;
  tags: readonly string[];
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
    otherProjects: "More projects",
    showAllProjects: "Show all projects",
    hideProjects: "Show less",
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
    readMore: "Read more",
    readCaseStudy: "Read case study",
    externalLinkSuffix: "opens in new tab",
    liveLink: "Live",
    codeLink: "Code",
  },
  summary: [
    "Software Engineer with 7 years of experience creating high-performance backend systems and distributed architectures.",
    "Skilled in solving customer-centric challenges, scaling complex platforms, and streamlining cloud operations. Proven success driving products from inception to launch, collaborating remotely, and delivering clear documentation.",
  ],
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
      summary: "Terraform-driven onboarding and production reliability work.",
      points: [
        "Automated customer onboarding with Terraform, removing manual provisioning and accelerating resource integration.",
        "Reduced Mean Time to Resolution by 37%, cutting pager noise and stabilizing cloud monitoring.",
      ],
    },
    {
      company: "Acko",
      location: "Bengaluru",
      period: "Mar 2023 – Jul 2024",
      role: "Software Development Engineer 3",
      summary: "Workflow-heavy healthcare automation and product delivery.",
      points: [
        "Designed and deployed workflow-driven microservices using Camunda, BPMN, and DMN for healthcare automation.",
        "Drove key product launches and secured a top-five finish in an org-wide hackathon.",
        "Engineered an automated medical checkup system that reduced wait times from 17 days to 3.",
      ],
    },
    {
      company: "Gameskraft Technologies",
      location: "Bengaluru",
      period: "Apr 2022 – Mar 2023",
      role: "Senior Software Engineer",
      summary: "High-traffic backend optimization, CI/CD, and cloud cost control.",
      points: [
        "Optimized architecture for high traffic and cut AWS costs by 38% through strategic resource allocation.",
        "Migrated deployments to automated CI/CD, improving reliability and reducing downtime.",
      ],
    },
    {
      company: "Needle Innovision",
      location: "Pune",
      period: "Oct 2018 – Mar 2022",
      role: "R&D Engineer Backend",
      summary: "Fintech backend development with FIX 2.0 protocol integrations.",
      points: [
        "Built the FinchMoney fintech platform and integrated FIX 2.0 trading protocols.",
      ],
    },
    {
      company: "Thoughtclan Technologies",
      location: "Hyderabad",
      period: "Aug 2017 – Aug 2018",
      role: "Software Engineer",
      summary: "Internal automation and operational efficiency improvements.",
      points: [
        "Developed internal automation tools to improve operational efficiency.",
      ],
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
      why: "Travel memories usually get fragmented across phone galleries, social posts, notes, and map pins. The starting trigger for Footsteps is the idea that a journey should become a structured story, not just a folder of photos or a short-lived social update.\n\nThe need is especially clear for travelers who want to remember where they went, what happened, and how places connect over time. The product direction is a travel identity layer: a way to record journeys, attach story fragments, and later explore or share them with context.",
      whatItDoes: "For everyday users, Footsteps is a mobile travel storytelling app. Users can record journeys, pin travel moments on a map, add photos and story fragments, and build a personal travel history.\n\nFor product managers and business stakeholders, the system is more than a mobile app. It includes a public landing page for positioning and early-access capture, a native app for the core user experience, and a backend platform for profiles, stories, journeys, exploration, sync, device registration, and app version control.",
      howItIsDone: "Technically, Footsteps is split into three product surfaces: a Flutter mobile app, a TypeScript Express backend, and a Next.js landing page. The backend uses Prisma with PostgreSQL on Supabase, Supabase Auth for user identity, Firebase Admin for push notifications, optional Redis caching, and AWS Lambda with API Gateway for production-style serverless deployment.",
      challenge: "Coordinating the full mobile-to-cloud system across environments. The native app depends on compile-time environment files, real backend origins, Supabase configuration, app update checks, and platform-specific release signing. The backend has to support mobile API workflows, offline-oriented sync surfaces, serverless runtime behavior, database migrations, auth verification, and version enforcement without mixing product environment (APP_ENV) with runtime environment (NODE_ENV).",
      tags: ["Flutter", "ExpressJS", "TypeScript", "Next.js", "Prisma", "PostgreSQL", "Supabase", "AWS Lambda", "Firebase Admin", "Redis"],
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
      why: "Small real-world events are often run by people who do not have staff, accounting tools, or event software. Hosts of dinners, workshops, pop-ups, run clubs, karaoke nights, and travel experiences usually coordinate guests, payments, expenses, partners, and final summaries through scattered chats and spreadsheets.\n\nThe starting trigger is simple: hosts need to know who is coming, who paid, what was spent, and what is left after the event without adopting a heavy restaurant dashboard or payment platform.",
      whatItDoes: "For everyday users and small business owners, Emu is a calm mobile-first assistant for running small experiences. A host can create an experience, add guests and people counts, track payments, record expenses, settle with partners, and copy a WhatsApp-ready wrap-up.\n\nFor product managers, the value is focused scope. It deliberately avoids payment gateway complexity, full accounting software, and broad event-management sprawl. It solves the operational basics that create confusion before, during, and after a hosted experience.",
      howItIsDone: "Emu is a Next.js app backed by Supabase and Prisma/Postgres. It supports local demo usage, signed-in cloud experiences, guest self-registration through short join links, URL-state based navigation, and database migration workflows that separate local, staging, and production environments.",
      challenge: "Preserving a lightweight host experience while still making the data model durable enough for real event operations. Guest links require server-side trust, token handling, and row ownership. Demo mode needs isolated browser storage so prospects can try the product without contaminating normal data. Database commands are wrapped to avoid unsafe remote migrations, which matters once guest and payment records become business-critical.",
      tags: ["Next.js", "React", "TypeScript", "Prisma", "PostgreSQL", "Supabase", "Row Level Security"],
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
      why: "GitHub rulesets are powerful, but managing them manually across many repositories creates operational debt. Teams and solo developers end up repeating UI clicks, drifting away from intended policy, or avoiding protections because setup feels too heavy.\n\nThe starting trigger is the need to treat repository protection as code: repeatable, auditable, reviewable, and reversible.",
      whatItDoes: "For developers, startups, and small teams, gh-ruleset-sync is a GitHub CLI extension that automates repository ruleset management. It can apply baseline rules, audit a fleet, capture a policy from a golden repository, sync policy files across repos, protect tags, and support rollback-oriented workflows.\n\nFor business owners and product managers, the benefit is governance without ceremony. Repositories get safer defaults, drift becomes visible, and security operations become a repeatable workflow instead of a manual admin chore.",
      howItIsDone: "The project packages ruleset operations as a GitHub CLI extension with intent-based commands. The policy source of truth lives in JSON files, and the tool maps security tiers like loose, moderate, and strict across individual, team, and organization scopes.",
      challenge: "Making bulk policy mutation safe. Ruleset changes can lock teams out or break release workflows if applied carelessly. The project addresses that by emphasizing dry runs, parallelism controls, audit-first workflows, captured policy templates, explicit owners, and rollback paths.",
      tags: ["Go / Shell", "GitHub CLI", "GitHub API", "JSON Schema", "CI/CD Security"],
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
      why: "Cross-border shopping decisions are hard because people usually compare sticker prices without considering product variants, foreign-market pricing, taxes, exchange-rate friction, and landed cost. A traveler may know what they want to buy, but not where buying it actually makes financial sense.\n\nThe starting trigger is a practical consumer question: should I buy this product locally or abroad?",
      whatItDoes: "For everyday shoppers, One Day, Baby helps build a wishlist from product searches, compare item prices across markets, estimate total list costs, and understand what is worth buying locally versus abroad.\n\nFor business and product audiences, the project is a decision-support engine rather than a generic ecommerce wishlist. It combines AI-assisted product resolution, market comparison, user-owned wishlists, affordability context, usage limits, pricing cache, and a bring-your-own-key model for users who need more AI quota.",
      howItIsDone: "The app is a Next.js product with Supabase-backed auth, persistence, pricing cache, usage tracking, and migrations. The pricing layer is provider-based, with a Gemini provider for AI-assisted product and pricing workflows plus a mock provider for local demos and fallback behavior.",
      challenge: "Drawing the line between probabilistic AI and deterministic product logic. AI is useful for resolving ambiguous product queries and market data, but the comparison experience still needs explicit cost modeling, cache behavior, quota protection, request logging, and graceful fallback when AI is unavailable.",
      tags: ["Next.js", "TypeScript", "Supabase", "Gemini API", "AI Integration", "Caching"],
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
      why: "Personal finance tools often require cloud accounts, data sharing, bank aggregation, or a trust decision users may not want to make. At the same time, raw bank CSV exports are hard to search, compare, audit, or normalize across banks.\n\nThe starting trigger is data ownership: personal banking data should stay on the user's machine while still becoming useful and structured.",
      whatItDoes: "For everyday users, my-fi imports bank CSV exports into a clean searchable ledger. Users can upload statements, view transactions, filter by bank/account/date/direction, inspect import reports, view monthly summaries, and reprocess stored imports.\n\nFor business owners and product managers, the product demonstrates a privacy-first financial workflow: no cloud account, no telemetry, no external data movement, and synthetic sample data for safe demos.",
      howItIsDone: "my-fi is a local-first FastAPI application with a lightweight browser UI, DuckDB storage on disk, and bank-specific parsers for HDFC, Kotak, and Federal CSV formats. Each parser normalizes different statement shapes into a canonical ledger, while validation checks duplicates, balance mismatches, suspicious rows, and import audit trails.",
      challenge: "Reliable ingestion across messy bank exports. CSVs differ by bank, include preambles or inconsistent columns, and can contain edge cases that break simple parsers. The project solves this with explicit bank-specific parsing, a canonical transaction model, stored raw-row audit trails, quarantine paths, and reprocessing support so data quality can improve without losing the original evidence.",
      tags: ["FastAPI", "Python", "DuckDB", "CSV Parsing", "Local-first", "Financial Ledger"],
    },
  ] satisfies readonly PersonalProject[],
} as const;
