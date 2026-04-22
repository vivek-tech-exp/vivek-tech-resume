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

export const resumeData = {
  positioningLine:
    "I build backend systems where delays, incorrectness, and operational drag are expensive.",
  specializationSummary:
    "Best in workflow-heavy backend systems, integrations, and production reliability under pressure.",
  basics: {
    name: "Vivek Mankonda",
    title: "Senior Backend Engineer",
    locations: ["Hyderabad", "Bengaluru", "Pune", "India (Remote)"],
    email: "vivekmankonda.work@gmail.com",
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
} as const;
