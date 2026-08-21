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
        <div className={pageStyles.impactCard} key={item.metric}>
          <p className={pageStyles.impactMetric}>{item.metric}</p>
          <p className={pageStyles.impactContext}>{item.context}</p>
        </div>
      ))}
    </div>
  </section>
);
