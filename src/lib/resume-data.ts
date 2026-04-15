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
  focus: string;
  outcome: string;
};

export const resumeData = {
  source: "docs/vivek_mankonda_resume.pdf",
  positioningLine:
    "Senior backend engineer with 7 years across distributed systems, workflow automation, and cloud infrastructure.",
  basics: {
    name: "Vivek Mankonda",
    title: "Senior Backend Engineer",
    locations: ["Hyderabad", "Bengaluru", "Pune", "India (Remote)"],
    email: "vivekmankonda.work@gmail.com",
    phoneDisplay: "+91 6361855058",
    phoneHref: "tel:+916361855058",
  },
  resumePageSummary: [
    "Senior backend engineer with 7 years across distributed systems, workflow automation, and cloud infrastructure.",
    "Strongest areas are correctness, reliability, observability, and cloud infrastructure under real operational pressure.",
    "Seven years across product engineering, platform work, and systems where state, scale, and uptime matter.",
  ],
  summary: [
    "Software Engineer with 7 years of experience creating high-performance backend systems and distributed architectures.",
    "Skilled in solving customer-centric challenges, scaling complex platforms, and streamlining cloud operations. Proven success driving products from inception to launch, collaborating remotely, and delivering clear documentation.",
  ],
  proofPoints: [
    {
      statement: "Automated customer onboarding with Terraform.",
    },
    {
      statement: "Reduced MTTR by 37% in a firefighting environment.",
    },
    {
      statement: "Cut medical checkup wait time from 17 days to 3.",
    },
    {
      statement: "Reduced AWS costs by 38% on high-traffic systems.",
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
      label: "GitHub Repo",
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
      title: "Customer Onboarding Automation",
      context: "New Relic",
      focus: "Replaced manual provisioning with Terraform-driven onboarding and tighter infrastructure integration.",
      outcome: "Shorter customer setup time and less operational drag on engineering teams.",
    },
    {
      title: "Healthcare Workflow Platform",
      context: "Acko",
      focus: "Built workflow-heavy microservices with Camunda, BPMN, and DMN for automated healthcare operations.",
      outcome: "Medical checkup turnaround dropped from 17 days to 3.",
    },
    {
      title: "High-Traffic Platform Efficiency",
      context: "Gameskraft Technologies",
      focus: "Reworked architecture and delivery flows for traffic-heavy systems under real operational pressure.",
      outcome: "AWS costs dropped by 38% and deployment reliability improved through CI/CD automation.",
    },
    {
      title: "Fintech Trading Backend",
      context: "Needle Innovision",
      focus: "Built backend systems for FinchMoney and integrated FIX 2.0 trading protocols.",
      outcome: "Delivered a production backend for a workflow- and integration-heavy fintech product.",
    },
  ] satisfies readonly ResumeCaseStudy[],
  education: {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Heritage Institute of Technology, Kolkata",
    period: "2013 – 2017",
  },
} as const;
