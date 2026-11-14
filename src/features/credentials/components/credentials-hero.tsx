import { PortfolioPageTitle } from "~/components/ui/portfolio-page-title";
import { CvPreview } from "./cv-preview";

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

      <CvPreview />
    </header>
  );
}
