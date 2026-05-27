import { ImageResponse } from "next/og";

import { seoCopy } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const alt = seoCopy.homeTitle;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          padding: 72,
          background: "#111111",
          color: "#f4f4f5",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#a1a1aa",
            marginBottom: 20,
          }}
        >
          Resume &amp; selected work
        </div>
        <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.05 }}>
          {siteConfig.name}
        </div>
        <div style={{ fontSize: 34, marginTop: 16, color: "#d4d4d8" }}>
          {siteConfig.role}
        </div>
        <div
          style={{
            fontSize: 26,
            marginTop: 36,
            maxWidth: 920,
            lineHeight: 1.45,
            color: "#a1a1aa",
          }}
        >
          {seoCopy.homeDescription}
        </div>
      </div>
    ),
    { ...size },
  );
}
