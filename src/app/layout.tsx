import type { Metadata } from "next";

import "./globals.css";

import { siteConfig } from "@/lib/site-config";

const description =
  "Resume website for Vivek Mankonda. Backend systems, distributed architecture, and a public codebase built with care.";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description,
  metadataBase: siteConfig.siteUrl ? new URL(siteConfig.siteUrl) : undefined,
  openGraph: {
    title: siteConfig.name,
    description,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth bg-zinc-950">
      <body className="min-h-screen bg-zinc-950 font-sans text-zinc-50 antialiased">
        {children}
      </body>
    </html>
  );
}
