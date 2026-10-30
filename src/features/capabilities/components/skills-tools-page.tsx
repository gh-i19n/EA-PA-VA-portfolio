import { EditorialPageIntro } from "~/components/ui/editorial-page-intro";
import { skillGroups, toolGroups } from "../config/capabilities";

export function SkillsToolsPage() {
  return (
    <>
      <EditorialPageIntro
        label="Skills & tools"
        title={"Skills &\nsystems."}
        description="Judgment makes the work effective. Familiar systems make it dependable. My approach connects both to the way you already work."
      />
      <section
        className="mx-auto w-[calc(100%-2.5rem)] max-w-[1440px] pb-16 sm:w-[calc(100%-5rem)] sm:pb-28"
        aria-labelledby="skills-title"
      >
        <h2 id="skills-title" className="font-medium mb-8 text-label text-muted">
          The human skills
        </h2>
        {skillGroups.map((group) => (
          <article
            key={group.title}
            className="grid gap-5 border-t border-rule py-8 md:grid-cols-[1.1fr_1fr] md:gap-24 md:py-10"
          >
            <h3 className="font-display font-medium text-[clamp(31px,4.9vw,70px)] leading-[1.05] tracking-[-.035em]">
              {group.title}
            </h3>
            <div>
              <p className="max-w-[460px] text-pretty text-body text-muted">
                {group.description}
              </p>
              <ul className="mt-6 flex list-none flex-wrap gap-x-6 gap-y-3">
                {group.keywords.map((word) => (
                  <li className="text-label" key={word}>
                    {word}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>
      <section className="bg-mist py-16 sm:py-24" aria-labelledby="tools-title">
        <div className="mx-auto w-[calc(100%-2.5rem)] max-w-[1440px] sm:w-[calc(100%-5rem)]">
          <div className="mb-14 grid gap-7 lg:grid-cols-[1.1fr_1fr] lg:gap-24">
            <h2
              id="tools-title"
              className="font-display font-medium text-[clamp(43px,7vw,100px)] leading-none tracking-[-.045em]"
            >
              The toolkit.
            </h2>
            <p className="max-w-[460px] text-pretty text-body text-muted lg:self-end">
              A representative toolkit for this portfolio direction. The tools
              follow the workflow, and the workflow fits your organisation.
            </p>
          </div>
          {toolGroups.map((group) => (
            <section
              key={group.category}
              className="grid gap-7 border-t border-rule py-9 lg:grid-cols-[1.1fr_1fr] lg:gap-24"
              aria-label={group.category}
            >
              <div>
                <h3 className="font-display font-medium text-[23px] tracking-[-.025em]">
                  {group.category}
                </h3>
                <p className="mt-3 text-support text-muted">{group.description}</p>
              </div>
              <ul className="list-none">
                {group.tools.map((tool) => (
                  <li
                    key={tool.name}
                    className="border-b border-ink/10 py-5 first:pt-0 last:border-0"
                  >
                    <span className="font-display text-[clamp(26px,3.2vw,42px)] font-medium leading-[1.1] tracking-[-.03em]">
                      {tool.name}
                    </span>
                    <p className="mt-3 text-support text-muted">
                      {tool.purpose}
                    </p>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </section>
    </>
  );
}
