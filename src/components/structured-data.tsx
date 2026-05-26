import { buildStructuredData } from "@/lib/structured-data";

export const StructuredData = () => (
  <script
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(buildStructuredData()),
    }}
    type="application/ld+json"
  />
);
