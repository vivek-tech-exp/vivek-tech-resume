import { pageStyles } from "@/lib/page-styles";
import { resumeData } from "@/lib/resume-data";

export const SelectedImpactSection = () => (
  <section
    aria-labelledby="impact-heading"
    className={pageStyles.section}
    id="impact"
  >
    <div className={pageStyles.sectionHeader}>
      <h2 className={pageStyles.sectionTitle} id="impact-heading">
        {resumeData.uiStrings.impactTitle}
      </h2>
    </div>

    <div className={pageStyles.impactGrid}>
      {resumeData.selectedImpact.map((item) => (
        <a
          aria-label={`${item.metric}: ${item.context}`}
          className={pageStyles.impactCard}
          href={`#${item.targetId}`}
          key={item.metric}
        >
          <div className="flex items-start justify-between gap-2">
            <p className={pageStyles.impactMetric}>{item.metric}</p>
            <span aria-hidden className={pageStyles.impactArrow}>
              ↓
            </span>
          </div>
          <p className={pageStyles.impactContext}>{item.context}</p>
        </a>
      ))}
    </div>
  </section>
);
