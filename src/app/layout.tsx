import type { Metadata } from "next";
import type React from "react";
import { Instrument_Sans } from "next/font/google";
import { SiteShell } from "~/components/ui/site-shell";
import "./globals.css";

const sans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--site-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: { default: "AY | Executive Assistant", template: "%s | AY" },
  description:
    "Senior executive assistance for founders and leaders. Calendar strategy, decision-ready meetings, operations and personal logistics, handled with foresight.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={sans.variable}>
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
