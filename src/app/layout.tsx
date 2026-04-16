import type { Metadata } from "next";

import "./globals.css";

import { siteConfig } from "@/lib/site-config";
import { getThemeScript } from "@/lib/theme";

const description =
  "Resume website for Vivek Mankonda. Backend systems, distributed architecture, and a public codebase built with care.";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.summary,
  metadataBase: siteConfig.siteUrl ? new URL(siteConfig.siteUrl) : undefined,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.summary,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className="min-h-screen bg-[var(--page)] font-sans text-[var(--text)] antialiased">
        <script dangerouslySetInnerHTML={{ __html: getThemeScript() }} />
        {children}
      </body>
    </html>
  );
}
