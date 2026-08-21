import type { MetadataRoute } from "next";

import { seoCopy } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: seoCopy.homeTitle,
    short_name: siteConfig.name,
    description: seoCopy.homeDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#fafaf9",
    theme_color: "#111111",
    lang: "en-IN",
    categories: ["business", "productivity"],
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
