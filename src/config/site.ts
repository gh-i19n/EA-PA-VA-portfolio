export const siteNavigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Selected work", href: "/case-studies" },
  { label: "Skills & tools", href: "/skills-and-tools" },
  { label: "Trust & credentials", href: "/credentials" },
] as const;

export const primaryNavigation = siteNavigation.filter(
  (item) => item.href !== "/" && item.href !== "/credentials",
);

export const siteImages = {
  heroPortrait: "/images/folio/ay-smiling-portrait.jpeg",
  introductionPortrait: "/images/ay-a.png",
  aboutPortrait: "/images/ay-a.png",
} as const;

export const siteContact = {
  // Reserved dummy address authorised by the client for this design preview.
  email: "ay@example.com",
  mailto: "mailto:ay@example.com?subject=Let%27s%20work%20together",
};
