export const siteNavigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services & tools", href: "/services" },
  { label: "Project", href: "/case-studies" },
  { label: "Trust & credentials", href: "/credentials" },
] as const;

export const primaryNavigation = siteNavigation.filter(
  (item) => item.href !== "/" && item.href !== "/credentials",
);

export const siteImages = {
  introductionPortrait: "/images/ay-at-work.png",
  aboutPortrait: "/images/ay-a.png",
} as const;

export const siteContact = {
  email: "ajibolaayomidee@gmail.com",
  mailto: "mailto:ajibolaayomidee@gmail.com?subject=Let%27s%20work%20together",
  linkedin: "https://www.linkedin.com/in/ajibolaayomidee",
  whatsapp: "https://wa.me/2349053600768?s=p",
};

export const introductionVideo = {
  src: "/videos/ay-meet-ay-3x4.mp4",
  poster: "/images/ay-introduction-poster.jpg",
  captions: "/videos/ay-meet-ay-3x4.en.vtt",
  duration: "1:50",
} as const;
