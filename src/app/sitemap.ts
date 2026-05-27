import type { MetadataRoute } from "next";

import { indexableRoutes } from "@/lib/seo-routes";
import { getSiteOrigin } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = getSiteOrigin();

  if (!origin) {
    return [];
  }

  const lastModified = new Date();

  return indexableRoutes.map((route) => ({
    url: `${origin}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
