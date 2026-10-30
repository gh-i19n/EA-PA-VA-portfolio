import type { Metadata } from "next";
import type React from "react";
import { SiteShell } from "~/components/ui/site-shell";
import { displayFont, readingFont } from "~/infrastructure/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "AY | Executive Assistant", template: "%s | AY" },
  description:
    "Senior executive assistance for founders and leaders. Calendar strategy, decision-ready meetings, operations and personal logistics, handled with foresight.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${readingFont.variable} ${displayFont.variable}`}>
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
