import {
  externalLinkAriaSuffix,
  externalLinkProps,
} from "@/lib/link-behavior";
import { pageStyles } from "@/lib/page-styles";
import { resumeData } from "@/lib/resume-data";

const { uiStrings, caseStudies } = resumeData;

export const HeroImpactTeaser = () => (
  <section aria-labelledby="hero-impact-heading" className={pageStyles.heroImpact}>
    <h2 className={pageStyles.heroImpactLabel} id="hero-impact-heading">
      {uiStrings.heroImpactLabel}
    </h2>
    <ul className={pageStyles.heroImpactList}>
      {caseStudies.map((study) => (
        <li className={pageStyles.heroImpactItem} key={study.title}>
          <span aria-hidden className={pageStyles.heroImpactMarker} />
          <span className={pageStyles.heroImpactText}>{study.metric}</span>
        </li>
      ))}
    </ul>
    <a className={pageStyles.heroImpactJump} href="#impact">
      {uiStrings.heroImpactJump}
      <span aria-hidden className={pageStyles.heroImpactJumpIcon}>
        →
      </span>
    </a>
  </section>
);

export const ImpactCaseStudyList = () => (
  <ul className={pageStyles.impactList}>
    {caseStudies.map((study) => (
      <li className={pageStyles.impactItem} key={study.title}>
        <a
          aria-label={`${study.outcome}. ${uiStrings.readCaseStudy}: ${study.title}${externalLinkAriaSuffix(study.href, uiStrings.externalLinkSuffix)}`}
          className={`${pageStyles.impactCardLink} group`}
          href={study.href}
          {...externalLinkProps(study.href)}
        >
          <p className={pageStyles.impactOutcome}>{study.outcome}</p>
          <p className={pageStyles.impactMeta}>
            {study.context} · {study.title}
          </p>
          <p className={pageStyles.impactText}>{study.description}</p>
          <span className={pageStyles.impactReadMore}>{uiStrings.readCaseStudy}</span>
        </a>
      </li>
    ))}
  </ul>
);
