import { resumeData } from "@/lib/resume-data";

/** Indexable HTML routes (file download routes are linked, not listed). */
export const indexableRoutes = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  {
    path: resumeData.resumeDownloads.sharePath,
    priority: 0.9,
    changeFrequency: "monthly" as const,
  },
] as const;
