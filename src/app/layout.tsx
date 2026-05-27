import type { Metadata } from "next";

import "./globals.css";

import { buildBaseMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import { getThemeScript } from "@/lib/theme";

export const metadata: Metadata = {
  ...buildBaseMetadata(),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  applicationName: siteConfig.name,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="light dark" />
        <meta name="format-detection" content="telephone=no,email=no,address=no" />
        <link href={siteConfig.linkedinUrl} rel="me" />
        <link href={siteConfig.githubUrl} rel="me" />
        <link
          href="/llms.txt"
          rel="alternate"
          title="LLM-readable summary"
          type="text/plain"
        />
      </head>
      <body className="min-h-dvh bg-[var(--page)] font-sans text-[var(--text)] antialiased">
        <script dangerouslySetInnerHTML={{ __html: getThemeScript() }} />
        {children}
      </body>
    </html>
  );
}
