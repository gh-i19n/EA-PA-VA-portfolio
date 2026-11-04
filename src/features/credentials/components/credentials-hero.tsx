import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { PortfolioPageTitle } from "~/components/ui/portfolio-page-title";
import { cn } from "~/shared/ui/utils";
import { curriculumVitae } from "../config/credentials-content";

export function CredentialsHero() {
  return (
    <header className="mx-auto grid w-[calc(100%-2.5rem)] max-w-[1440px] items-center gap-10 pb-12 pt-10 sm:w-[calc(100%-5rem)] sm:gap-14 sm:pb-20 sm:pt-16 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
      <div className="min-w-0">
        <PortfolioPageTitle title={"A matter\nof trust."} />
        <p className="mt-9 max-w-[480px] text-pretty text-body text-muted sm:mt-12">
          The responsibility of executive support is personal. How information is
          handled, promises are followed through and decisions are escalated all
          matter.
        </p>
      </div>

      <figure className="w-full max-w-[560px] justify-self-center lg:justify-self-end">
        <a
          href={curriculumVitae.documentHref}
          target="_blank"
          rel="noreferrer"
          aria-label="View AY’s CV (PDF, opens in a new tab)"
          className="group block rounded-frame"
        >
          <div className="rounded-frame bg-mist px-7 py-9 [perspective:1400px] sm:px-12 sm:py-12">
            <div
              className={cn(
                "relative mx-auto max-w-[390px] [--cv-curl:clamp(1.25rem,2.4vw,2.5rem)] [filter:drop-shadow(0_1px_0_#bfc2b9)_drop-shadow(12px_24px_18px_#25272540)] [transform:rotateX(5deg)_rotateY(-8deg)_rotateZ(4deg)]",
                "before:pointer-events-none before:absolute before:bottom-0 before:right-0 before:z-10 before:size-(--cv-curl) before:translate-x-0.5 before:translate-y-1 before:rounded-tl-[80%_70%] before:bg-ink/25 before:blur-[4px] before:content-[''] before:[clip-path:polygon(0_0,100%_0,0_100%)]",
                "after:pointer-events-none after:absolute after:bottom-0 after:right-0 after:z-20 after:size-(--cv-curl) after:rounded-tl-[80%_70%] after:bg-[linear-gradient(135deg,#ffffff_15%,#f4f4ef_38%,#d5d7ce_68%,#a8ac9f_100%)] after:content-[''] after:[clip-path:polygon(0_0,100%_0,0_100%)]",
                "motion-safe:transition-transform motion-safe:duration-500 motion-safe:ease-[cubic-bezier(.22,1,.36,1)] motion-safe:group-hover:[transform:translateY(-4px)_rotateX(3deg)_rotateY(-5deg)_rotateZ(3deg)] motion-safe:group-focus-visible:[transform:translateY(-4px)_rotateX(3deg)_rotateY(-5deg)_rotateZ(3deg)]",
              )}
            >
              <Image
                src={curriculumVitae.previewSrc}
                alt="Preview of Ayomide Ajibola’s executive assistant CV"
                width={curriculumVitae.previewWidth}
                height={curriculumVitae.previewHeight}
                sizes="(max-width: 639px) min(390px, calc(100vw - 96px)), (max-width: 1023px) 390px, (max-width: 1200px) 320px, 390px"
                className="h-auto w-full rounded-[3px] [clip-path:polygon(0_0,100%_0,100%_calc(100%_-_var(--cv-curl)),calc(100%_-_var(--cv-curl))_100%,0_100%)]"
              />
            </div>
          </div>
          <div className="mt-5 flex min-h-11 items-center justify-between gap-4 text-label">
            <span className="text-muted">Ayomide Ajibola</span>
            <span className="inline-flex items-center gap-2 font-medium">
              View CV
              <ArrowUpRight size={18} strokeWidth={1.4} aria-hidden="true" />
            </span>
          </div>
        </a>
        <figcaption className="sr-only">
          AY’s curriculum vitae, with her experience, skills, education and
          training. Open the PDF to read the complete document.
        </figcaption>
      </figure>
    </header>
  );
}
