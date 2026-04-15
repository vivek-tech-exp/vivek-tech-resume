import type { Metadata } from "next";

import "./globals.css";

import { siteConfig } from "@/lib/site-config";

const description =
  "Personal resume website for Vivek Mankonda, built with Next.js and focused on clear presentation, accessibility, and fast delivery.";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description,
  metadataBase: siteConfig.siteUrl ? new URL(siteConfig.siteUrl) : undefined,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
