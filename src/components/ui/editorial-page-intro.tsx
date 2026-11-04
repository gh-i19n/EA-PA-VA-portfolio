import { PortfolioPageTitle } from "./portfolio-page-title";

export function EditorialPageIntro({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <header className="mx-auto w-[calc(100%-2.5rem)] max-w-[1440px] pb-12 pt-10 sm:w-[calc(100%-5rem)] sm:pb-20 sm:pt-16 lg:pt-20">
      <PortfolioPageTitle title={title} />
      <p className="ml-auto mt-9 max-w-[480px] text-pretty text-body text-muted sm:mt-12 lg:mr-[6%]">
        {description}
      </p>
    </header>
  );
}
