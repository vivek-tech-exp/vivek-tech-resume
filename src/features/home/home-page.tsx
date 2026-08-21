import Image from "next/image";

import { HomeHeader } from "@/features/home/home-header";
import { SelectedImpactSection } from "@/features/home/impact-case-study-list";
import { SelectedEngineeringWorkSection } from "@/features/home/selected-engineering-work";
import { ResumeDownloadMenu } from "@/features/home/resume-download-menu";
import { pageStyles } from "@/lib/page-styles";
import { resumeData } from "@/lib/resume-data";
import { siteConfig } from "@/lib/site-config";

export const HomePage = () => {
  const { uiStrings } = resumeData;

  return (
    <div id="top">
      <a className={pageStyles.skipLink} href="#main-content">
        {uiStrings.skipToContent}
      </a>

      <HomeHeader />

      <main className={pageStyles.shell} id="main-content" tabIndex={-1}>
        <section
          aria-labelledby="hero-heading"
          className={`${pageStyles.hero} scroll-mt-[calc(4.75rem+env(safe-area-inset-top))]`}
        >
          <div className="space-y-3">
            <h1 className={pageStyles.heroTitle} id="hero-heading">
              {resumeData.basics.name}
            </h1>
            <p className={pageStyles.heroRole}>{uiStrings.heroRoleLine}</p>
          </div>

          {resumeData.basics.image ? (
            <div className={pageStyles.heroPortraitCard}>
              <Image
                alt={`${resumeData.basics.name} working remotely with mountains in the background`}
                className={pageStyles.heroPortraitImage}
                height={1525}
                priority
                quality={95}
                sizes="(max-width: 768px) 100vw, 768px"
                src={resumeData.basics.image}
                width={704}
              />
            </div>
          ) : null}

          <p className={pageStyles.heroPitch}>{resumeData.positioningLine}</p>
          <p className={pageStyles.heroMeta}>{uiStrings.heroAvailability}</p>

          <div className={pageStyles.heroActions}>
            <ResumeDownloadMenu variant="primary" />
            <div className={pageStyles.heroActionsRow}>
              <a
                aria-label={`${resumeData.links.linkedin.label} (${uiStrings.externalLinkSuffix})`}
                className={pageStyles.buttonLinkedIn}
                href={siteConfig.linkedinUrl}
                rel="noreferrer noopener"
                target="_blank"
              >
                {resumeData.links.linkedin.label}
              </a>
              <a
                aria-label={`${resumeData.links.github.label} (${uiStrings.externalLinkSuffix})`}
                className={pageStyles.buttonSecondary}
                href={siteConfig.githubUrl}
                rel="noreferrer noopener"
                target="_blank"
              >
                {resumeData.links.github.label}
              </a>
            </div>
          </div>
        </section>

        <SelectedImpactSection />

        <SelectedEngineeringWorkSection />

        <section
          aria-labelledby="experience-heading"
          className={`${pageStyles.section} defer-section`}
          id="experience"
        >
          <div className={pageStyles.sectionHeader}>
            <h2 className={pageStyles.sectionTitle} id="experience-heading">
              {uiStrings.experienceTitle}
            </h2>
            <p className={pageStyles.sectionIntro}>{uiStrings.experienceIntro}</p>
          </div>

          <ol className={pageStyles.experienceList}>
            {resumeData.experience.map((item) => (
              <li
                className={pageStyles.experienceItem}
                key={`${item.company}-${item.period}`}
              >
                <div className={pageStyles.experienceHeading}>
                  {item.company === "Footsteps Space" ? (
                    <span className={pageStyles.experienceRole}>{item.role}</span>
                  ) : (
                    <>
                      <span className={pageStyles.experienceCompany}>
                        {item.company}
                      </span>
                      <span aria-hidden className={pageStyles.experienceDivider}>
                        |
                      </span>
                      <span className={pageStyles.experienceRole}>{item.role}</span>
                    </>
                  )}
                  <span className={pageStyles.experiencePeriod}>
                    {item.period} | {item.location}
                  </span>
                </div>
                <p className={pageStyles.experienceHighlight}>
                  {item.highlight}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section
          aria-labelledby="tools-heading"
          className={`${pageStyles.section} defer-section`}
          id="tools"
        >
          <div className={pageStyles.sectionHeader}>
            <h2 className={pageStyles.sectionTitle} id="tools-heading">
              {uiStrings.toolsTitle}
            </h2>
          </div>

          <div className={pageStyles.toolsWrap}>
            {resumeData.coreStack.map((group) => (
              <div className={pageStyles.toolsGroup} key={group.label}>
                <h3 className={pageStyles.toolsLabel}>{group.label}</h3>
                <p className={pageStyles.toolsItems}>{group.items.join(", ")}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="contact-heading"
          className={pageStyles.section}
          id="contact"
        >
          <div className={pageStyles.sectionHeader}>
            <h2 className={pageStyles.sectionTitle} id="contact-heading">
              {uiStrings.contactTitle}
            </h2>
            <p className={pageStyles.sectionIntro}>{uiStrings.contactIntro}</p>
          </div>

          <div className={pageStyles.contactPanel}>
            <div className={pageStyles.contactActions}>
              <a
                className={pageStyles.buttonPrimary}
                href={resumeData.links.email.href}
              >
                {uiStrings.emailCtaLabel}
              </a>
              <a
                aria-label={`${resumeData.links.linkedin.label} (${uiStrings.externalLinkSuffix})`}
                className={pageStyles.buttonSecondary}
                href={siteConfig.linkedinUrl}
                rel="noreferrer noopener"
                target="_blank"
              >
                {resumeData.links.linkedin.label}
              </a>
              <a
                aria-label={`${resumeData.links.github.label} (${uiStrings.externalLinkSuffix})`}
                className={pageStyles.buttonSecondary}
                href={siteConfig.githubUrl}
                rel="noreferrer noopener"
                target="_blank"
              >
                {resumeData.links.github.label}
              </a>
              <ResumeDownloadMenu variant="secondary" />
            </div>

            <div className={pageStyles.contactEducation}>
              <p className={pageStyles.educationDegree}>
                {resumeData.education.degree}
              </p>
              <p className={pageStyles.educationInstitution}>
                {resumeData.education.institution}
              </p>
              <p className={pageStyles.educationPeriod}>
                {resumeData.education.period}
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
