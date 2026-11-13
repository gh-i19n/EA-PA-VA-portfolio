export type Testimonial = {
  id: string;
  organisation: string;
  quote: string;
  name: string;
  role: string;
  recommendation: {
    title: string;
    paragraphs: readonly string[];
    signOff?: string;
  };
};
