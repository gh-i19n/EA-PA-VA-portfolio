import Link from "next/link";

export function CaseStudyPending() {
  return (
    <section
      className="mx-auto min-h-[60dvh] w-[calc(100%-2.5rem)] max-w-[1440px] py-14 sm:w-[calc(100%-5rem)] sm:py-24"
      aria-busy="true"
      aria-label="Loading case study"
    >
      <Link
        className="inline-block min-h-11 py-3 text-label underline underline-offset-4"
        href="/case-studies"
      >
        All case studies
      </Link>
      <p
        className="mt-12 font-display text-[clamp(40px,7vw,100px)] font-medium leading-[1.1] tracking-[-.04em]"
        role="status"
      >
        Opening the
        <br />
        case study.
      </p>
    </section>
  );
}
