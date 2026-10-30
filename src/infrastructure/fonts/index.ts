import localFont from "next/font/local";

export const readingFont = localFont({
  src: "./assets/Switzer-Variable.woff2",
  weight: "100 900",
  style: "normal",
  variable: "--site-sans",
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

export const displayFont = localFont({
  src: "./assets/CabinetGrotesk-Variable.woff2",
  weight: "100 900",
  style: "normal",
  variable: "--site-display",
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});
