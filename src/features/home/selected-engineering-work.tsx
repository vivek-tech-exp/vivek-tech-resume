import {
  externalLinkAriaSuffix,
  externalLinkProps,
} from "@/lib/link-behavior";
import { pageStyles } from "@/lib/page-styles";
import { resumeData, type EngineeringWorkItem } from "@/lib/resume-data";

export const EngineeringWorkCard = ({ item }: { item: EngineeringWorkItem }) => {
  const { uiStrings } = resumeData;

  return (
    <article
      className={`${pageStyles.engineeringCard} scroll-mt-[calc(5rem+env(safe-area-inset-top))]`}
      id={`work-${item.id}`}
    >
      <div className={pageStyles.engineeringCardHeader}>
        <span className={pageStyles.engineeringContext}>{item.context}</span>
        <h3 className={pageStyles.engineeringTitle}>{item.title}</h3>
      </div>

      <div className={pageStyles.engineeringBody}>
        <div className={pageStyles.engineeringField}>
          <span className={pageStyles.engineeringFieldLabel}>
            {uiStrings.problemLabel}:
          </span>{" "}
          <span>{item.problemContext}</span>
        </div>
        <div className={pageStyles.engineeringField}>
          <span className={pageStyles.engineeringFieldLabel}>
            {uiStrings.builtLabel}:
          </span>{" "}
          <span>{item.builtDesigned}</span>
        </div>
        <div className={pageStyles.engineeringField}>
          <span className={pageStyles.engineeringFieldLabel}>
            {uiStrings.resultLabel}:
          </span>{" "}
          <span className={pageStyles.engineeringResultText}>
            {item.measurableResult}
          </span>
        </div>
      </div>

      <div className={pageStyles.engineeringFooter}>
        <div className={pageStyles.engineeringTags}>
          {item.tags.map((tag) => (
            <span className={pageStyles.engineeringTag} key={tag}>
              {tag}
            </span>
          ))}
        </div>

        {item.link ? (
          <div className="shrink-0 pt-1 sm:pt-0">
            <a
              aria-label={`${item.title} ${item.link.label}${externalLinkAriaSuffix(item.link.href, uiStrings.externalLinkSuffix)}`}
              className={pageStyles.linkPill}
              href={item.link.href}
              {...(item.link.isExternal ? externalLinkProps(item.link.href) : {})}
            >
              {item.link.label}
              <span aria-hidden className="ms-1.5 text-xs text-[var(--accent)]">
                →
              </span>
            </a>
          </div>
        ) : null}
      </div>
    </article>
  );
};

export const SelectedEngineeringWorkSection = () => {
  const { uiStrings, selectedEngineeringWork } = resumeData;

  return (
    <section
      aria-labelledby="work-heading"
      className={pageStyles.section}
      id="work"
    >
      <div className={pageStyles.sectionHeader}>
        <h2 className={pageStyles.sectionTitle} id="work-heading">
          {uiStrings.workTitle}
        </h2>
        <p className={pageStyles.sectionIntro}>{uiStrings.workIntro}</p>
      </div>

      <div className={pageStyles.engineeringList}>
        {selectedEngineeringWork.map((item) => (
          <EngineeringWorkCard item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};
