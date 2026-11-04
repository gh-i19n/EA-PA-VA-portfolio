import { PortfolioHero } from "./portfolio-hero";
import { PortfolioIntroduction } from "./portfolio-introduction";
import { PortfolioSelectedWork } from "./portfolio-selected-work";
import { PortfolioSupport } from "./portfolio-support";

export function PortfolioHome() {
  return (
    <>
      <PortfolioHero />
      <PortfolioIntroduction />
      <PortfolioSelectedWork />
      <PortfolioSupport />
    </>
  );
}
