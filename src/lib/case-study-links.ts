/** Notion targets live here so public HTML never embeds hex IDs that look like phone numbers. */
export const caseStudyLinks = {
  "cloud-onboarding": {
    notionUrl:
      "https://www.notion.so/Cloud-Onboarding-Provisioning-Automation-33dc3c09806980b9870ec3404a0813db?source=copy_link",
  },
  "health-insurance-workflow": {
    notionUrl:
      "https://www.notion.so/Health-Insurance-Workflow-Automation-Platform-33dc3c09806980339d41c979d47d9232?source=copy_link",
  },
  finchmoney: {
    notionUrl:
      "https://www.notion.so/FinchMoney-Building-the-Backend-for-an-Automated-Consumer-Investing-Platform-33dc3c098069809697a5de26144c0272?source=copy_link",
  },
} as const;

export type CaseStudySlug = keyof typeof caseStudyLinks;

export const caseStudyHref = (slug: CaseStudySlug) => `/case-study/${slug}`;

export const isCaseStudySlug = (value: string): value is CaseStudySlug =>
  value in caseStudyLinks;
