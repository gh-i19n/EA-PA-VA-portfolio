export type ProjectCardData = {
  id: string;
  category: string;
  title: string;
  contents: readonly string[];
  poster: string;
  alt: string;
  recording?: string;
  href: string;
  linkLabel: string;
  opensNewTab?: boolean;
};
