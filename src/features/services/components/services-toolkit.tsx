import { toolGroups } from "../config/tools";
import { ToolBrand } from "./tool-brand";

export function ServicesToolkit() {
  return (
    <section className="bg-mist py-16 sm:py-24" aria-labelledby="tools-title">
      <div className="mx-auto w-[calc(100%-2.5rem)] max-w-[1440px] sm:w-[calc(100%-5rem)]">
        <div className="mb-12 grid gap-7 md:grid-cols-2 md:items-end md:gap-16 sm:mb-16">
          <h2
            id="tools-title"
            className="font-display text-[clamp(43px,6vw,86px)] font-medium leading-none tracking-[-.045em]"
          >
            The toolkit.
          </h2>
          <p className="max-w-[460px] text-pretty text-body text-muted md:justify-self-end">
            The right tool depends on the task. These are the platforms I use to
            organise schedules, keep information accessible and coordinate the
            work.
          </p>
        </div>
        <div className="grid gap-12 lg:grid-cols-3 lg:gap-10 xl:gap-16">
          {toolGroups.map((group) => (
            <section
              key={group.category}
              className="min-w-0 border-t border-rule pt-6"
              aria-label={group.category}
            >
              <h3 className="font-display text-[24px] font-medium tracking-[-.025em]">
                {group.category}
              </h3>
              <p className="mt-2 text-support text-muted">{group.description}</p>
              <ul className="mt-6 list-none">
                {group.tools.map((tool) => (
                  <li
                    key={tool.name}
                    className="border-b border-ink/10 py-6 first:pt-0 last:border-0 last:pb-0"
                  >
                    <ToolBrand name={tool.name} logo={tool.logo} />
                    <p className="mt-2 text-support text-muted">{tool.purpose}</p>
                    {"sampleHref" in tool && (
                      <a
                        href={tool.sampleHref}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-2 inline-flex min-h-11 items-center text-label underline underline-offset-4"
                      >
                        {tool.sampleLabel}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
