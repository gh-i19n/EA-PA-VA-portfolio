import Image from "next/image";
import { PortfolioPageTitle } from "~/components/ui/portfolio-page-title";
import { PortfolioVisual } from "~/components/ui/portfolio-visual";
import { siteImages } from "~/config/site";

export function AboutHero() {
  return (
    <header
      aria-labelledby="about-title"
      className="mx-auto w-[calc(100%-2.5rem)] max-w-[1440px] pt-5 sm:w-[calc(100%-5rem)] sm:pt-7"
    >
      <div className="relative isolate overflow-hidden text-ink">
        <PortfolioVisual reveal="arrival" radius="inherit" className="absolute inset-0">
          <Image
            src={siteImages.aboutPortrait}
            alt="AY smiling in a mustard blouse with one hand near her face"
            fill
            loading="eager"
            sizes="95vw"
            className="object-cover object-[60%_center] [mask-image:linear-gradient(to_bottom,black_45%,transparent_85%)] sm:object-contain sm:object-right-bottom sm:[mask-image:linear-gradient(to_right,transparent_30%,black_65%)]"
          />
        </PortfolioVisual>
        <div className="relative flex min-h-[600px] flex-col justify-end px-5 pb-8 pt-16 sm:min-h-[650px] sm:px-10 sm:pb-12 lg:min-h-[min(76dvh,760px)] lg:px-14 lg:pb-14">
          <PortfolioPageTitle id="about-title" title={"AY, at\nyour side."} />
          <p className="mt-6 max-w-[440px] text-pretty text-body text-muted sm:mt-8">
            An experienced executive assistant. A steady point of coordination. A
            person who takes your priorities personally.
          </p>
        </div>
      </div>
    </header>
  );
}
