import {
  buildResumeStructuredData,
  buildStructuredData,
} from "@/lib/structured-data";

type StructuredDataProps = {
  page?: "home" | "resume";
};

export const StructuredData = ({ page = "home" }: StructuredDataProps) => {
  const payload =
    page === "resume" ? buildResumeStructuredData() : buildStructuredData();

  return (
    <script
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(payload),
      }}
      type="application/ld+json"
    />
  );
};
