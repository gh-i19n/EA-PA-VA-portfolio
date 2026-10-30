import type { Metadata } from "next";
import type React from "react";
import { Bodoni_Moda, DM_Sans } from "next/font/google";
import { cn } from "~/shared/ui/utils";
import { SiteShell } from "~/components/ui/site-shell";
import "./globals.css";

const sans = DM_Sans({ subsets: ["latin"], variable: "--font-sans" });
const editorial = Bodoni_Moda({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-editorial",
  display: "swap",
});

export const metadata: Metadata = {
  title: { default: "AY | A step ahead", template: "%s | AY" },
  description: "Thoughtful executive, virtual and personal assistance. A steady hand behind your busy world.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={cn(sans.variable, editorial.variable)}>
      <body><SiteShell>{children}</SiteShell></body>
    </html>
  );
}
