import { RecommendationFolio } from "~/components/ui/recommendation-folio";
import { testimonials } from "../config/credentials-content";

export function TestimonialsSection() {
  if (testimonials.length === 0) return null;

  return (
    <section id="testimonials" aria-labelledby="testimonials-title" className="bg-mist pb-16 pt-12 sm:pb-24 sm:pt-20">
      <div className="mx-auto w-[calc(100%-2.5rem)] max-w-[1440px] sm:w-[calc(100%-5rem)]">
        <header className="mb-8 flex flex-col items-center justify-center gap-5 text-center sm:mb-12">
          <h2 id="testimonials-title" className="max-w-[750px] text-balance font-display text-[clamp(38px,5.4vw,78px)] font-medium leading-[1.05] tracking-[-.035em]">
            Testimonials
          </h2>
          <p className="max-w-[440px] text-pretty text-body text-muted">
            Recommendations from people who know my work.
          </p>
        </header>
        <RecommendationFolio items={testimonials} />
      </div>
    </section>
  );
}
