import { resumeData } from "@/lib/resume-data";
import { siteConfig } from "@/lib/site-config";
import { getSiteUrl } from "@/lib/site-url";

const knowsAbout = resumeData.coreStack.flatMap((group) => group.items);

export const buildStructuredData = () => {
  const siteUrl = getSiteUrl()?.href;
  const sameAs = [siteConfig.linkedinUrl, siteConfig.githubUrl].filter(Boolean);
  const personId = siteUrl ? `${siteUrl}#person` : undefined;
  const websiteId = siteUrl ? `${siteUrl}#website` : undefined;
  const profileId = siteUrl ? `${siteUrl}#profile` : undefined;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        ...(websiteId ? { "@id": websiteId } : {}),
        name: siteConfig.name,
        ...(siteUrl ? { url: siteUrl } : {}),
        description: siteConfig.summary,
        inLanguage: "en",
        ...(personId
          ? {
              publisher: {
                "@id": personId,
              },
            }
          : {}),
      },
      {
        "@type": "ProfilePage",
        ...(profileId ? { "@id": profileId } : {}),
        ...(siteUrl ? { url: siteUrl } : {}),
        name: `${siteConfig.name} | ${siteConfig.role}`,
        description: siteConfig.summary,
        inLanguage: "en",
        ...(websiteId
          ? {
              isPartOf: {
                "@id": websiteId,
              },
            }
          : {}),
        ...(personId
          ? {
              mainEntity: {
                "@id": personId,
              },
            }
          : {}),
      },
      {
        "@type": "Person",
        ...(personId ? { "@id": personId } : {}),
        name: resumeData.basics.name,
        jobTitle: resumeData.basics.title,
        description: resumeData.specializationSummary,
        ...(siteUrl ? { url: siteUrl } : {}),
        email: `mailto:${resumeData.basics.email}`,
        sameAs,
        knowsAbout,
        workLocation: resumeData.basics.locations.map((location) => ({
          "@type": "Place",
          name: location,
        })),
        hasOccupation: {
          "@type": "Occupation",
          name: resumeData.basics.title,
          occupationalCategory: resumeData.specializationSummary,
        },
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: resumeData.education.institution,
        },
      },
    ],
  };
};
