import { resumeData } from "@/lib/resume-data";
import { siteConfig } from "@/lib/site-config";
import { getSiteUrl } from "@/lib/site-url";

const knowsAbout = resumeData.coreStack.flatMap((group) => group.items);

const absoluteUrl = (siteUrl: string | undefined, path: string) =>
  siteUrl ? new URL(path, siteUrl).href : undefined;

export const buildStructuredData = () => {
  const siteUrl = getSiteUrl()?.href;
  const sameAs = [siteConfig.linkedinUrl, siteConfig.githubUrl].filter(Boolean);
  const personId = siteUrl ? `${siteUrl}#person` : undefined;
  const websiteId = siteUrl ? `${siteUrl}#website` : undefined;
  const profileId = siteUrl ? `${siteUrl}#profile` : undefined;
  const experienceId = siteUrl ? `${siteUrl}#experience` : undefined;
  const resumePdfUrl = absoluteUrl(
    siteUrl,
    resumeData.resumeDownloads.formats.pdf.href,
  );
  const resumeDocxUrl = absoluteUrl(
    siteUrl,
    resumeData.resumeDownloads.formats.docx.href,
  );

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        ...(websiteId ? { "@id": websiteId } : {}),
        name: siteConfig.name,
        ...(siteUrl ? { url: siteUrl } : {}),
        description: siteConfig.summary,
        inLanguage: "en-IN",
        ...(personId
          ? {
              publisher: { "@id": personId },
              author: { "@id": personId },
            }
          : {}),
        ...(siteUrl
          ? {
              potentialAction: {
                "@type": "ReadAction",
                target: absoluteUrl(siteUrl, resumeData.resumeDownloads.sharePath),
                name: "Download resume",
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
        inLanguage: "en-IN",
        ...(websiteId ? { isPartOf: { "@id": websiteId } } : {}),
        ...(personId ? { mainEntity: { "@id": personId } } : {}),
      },
      {
        "@type": "Person",
        ...(personId ? { "@id": personId } : {}),
        name: resumeData.basics.name,
        jobTitle: resumeData.basics.title,
        description: resumeData.specializationSummary,
        ...(siteUrl ? { url: siteUrl } : {}),
        ...(siteUrl && resumeData.basics.image
          ? { image: absoluteUrl(siteUrl, resumeData.basics.image) }
          : {}),
        sameAs,
        knowsAbout,
        workLocation: resumeData.basics.locations.map((location) => ({
          "@type": "Place",
          name: location,
        })),
        hasOccupation: {
          "@type": "Occupation",
          name: resumeData.basics.title,
          description: resumeData.specializationSummary,
          skills: knowsAbout.slice(0, 20),
        },
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: resumeData.education.institution,
        },
        ...(experienceId
          ? {
              hasPart: { "@id": experienceId },
            }
          : {}),
        ...(resumePdfUrl
          ? {
              subjectOf: [
                {
                  "@type": "DigitalDocument",
                  name: resumeData.resumeDownloads.formats.pdf.fileName,
                  encodingFormat: resumeData.resumeDownloads.formats.pdf.mimeType,
                  url: resumePdfUrl,
                },
                ...(resumeDocxUrl
                  ? [
                      {
                        "@type": "DigitalDocument",
                        name: resumeData.resumeDownloads.formats.docx.fileName,
                        encodingFormat:
                          resumeData.resumeDownloads.formats.docx.mimeType,
                        url: resumeDocxUrl,
                      },
                    ]
                  : []),
              ],
            }
          : {}),
      },
      {
        "@type": "ItemList",
        ...(experienceId ? { "@id": experienceId } : {}),
        name: "Work experience",
        itemListElement: resumeData.experience.map((role, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "OrganizationRole",
            roleName: role.role,
            description: role.highlight,
            worksFor: {
              "@type": "Organization",
              name: role.company,
              location: {
                "@type": "Place",
                name: role.location,
              },
            },
          },
        })),
      },
    ],
  };
};

export const buildResumeStructuredData = () => {
  const siteUrl = getSiteUrl()?.href;
  const resumePageUrl = absoluteUrl(
    siteUrl,
    resumeData.resumeDownloads.sharePath,
  );
  const pdfUrl = absoluteUrl(
    siteUrl,
    resumeData.resumeDownloads.formats.pdf.href,
  );
  const docxUrl = absoluteUrl(
    siteUrl,
    resumeData.resumeDownloads.formats.docx.href,
  );

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: "Download Resume",
        description: `Download ${resumeData.basics.name}'s resume.`,
        ...(resumePageUrl ? { url: resumePageUrl } : {}),
        inLanguage: "en-IN",
        isPartOf: siteUrl ? { "@type": "WebSite", url: siteUrl } : undefined,
        mainEntity: [
          ...(pdfUrl
            ? [
                {
                  "@type": "DigitalDocument",
                  name: resumeData.resumeDownloads.formats.pdf.fileName,
                  encodingFormat:
                    resumeData.resumeDownloads.formats.pdf.mimeType,
                  url: pdfUrl,
                },
              ]
            : []),
          ...(docxUrl
            ? [
                {
                  "@type": "DigitalDocument",
                  name: resumeData.resumeDownloads.formats.docx.fileName,
                  encodingFormat:
                    resumeData.resumeDownloads.formats.docx.mimeType,
                  url: docxUrl,
                },
              ]
            : []),
        ],
      },
      ...(resumePageUrl
        ? [
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: siteConfig.name,
                  item: siteUrl,
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Download Resume",
                  item: resumePageUrl,
                },
              ],
            },
          ]
        : []),
    ],
  };
};
