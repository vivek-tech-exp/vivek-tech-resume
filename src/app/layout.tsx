import type { Metadata } from "next";

import "./globals.css";

import { siteConfig } from "@/lib/site-config";
import { resumeData } from "@/lib/resume-data";
import { getSiteUrl } from "@/lib/site-url";
import { getThemeScript } from "@/lib/theme";

const siteUrl = getSiteUrl();
const pageTitle = `${siteConfig.name} | ${siteConfig.role}`;
const keywords = resumeData.coreStack.flatMap((group) => group.items);

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: pageTitle,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.summary,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.linkedinUrl }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "technology",
  keywords,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: pageTitle,
    description: siteConfig.summary,
    type: "website",
    url: "/",
    siteName: siteConfig.name,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: siteConfig.summary,
  },
  other: {
    "format-detection": "telephone=no",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="light dark" />
        <link href={siteConfig.linkedinUrl} rel="me" />
        <link href={siteConfig.githubUrl} rel="me" />
      </head>
      <body className="min-h-dvh bg-[var(--page)] font-sans text-[var(--text)] antialiased">
        <script dangerouslySetInnerHTML={{ __html: getThemeScript() }} />
        {children}
      </body>
    </html>
  );
}
