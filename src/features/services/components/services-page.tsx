import { ServiceCards } from "./service-cards";
import { ServicesHero } from "./services-hero";
import { ServicesToolkit } from "./services-toolkit";

export function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServiceCards />
      <ServicesToolkit />
    </>
  );
}
