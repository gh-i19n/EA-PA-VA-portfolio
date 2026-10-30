import { EditorialPageIntro } from "~/components/ui/editorial-page-intro";
import { ContactInvitation } from "~/components/ui/contact-invitation";
import { skillGroups, toolGroups } from "../config/capabilities";
import styles from "./skills-tools.module.css";

export function SkillsToolsPage() {
  return (
    <>
      <EditorialPageIntro label="Skills & tools" title={"A practiced hand.\nA familiar toolkit."} description="Good judgment first. Useful tools behind it. A look at the capabilities and systems that support a well-run day." />
      <section className={styles.skills} aria-labelledby="skills-title">
        <h2 id="skills-title">The human skills.</h2>
        <div>{skillGroups.map((group) => <article key={group.title}><h3>{group.title}</h3><p>{group.description}</p><ul>{group.keywords.map((word) => <li key={word}>{word}</li>)}</ul></article>)}</div>
      </section>
      <section className={styles.toolSection} aria-labelledby="tools-title">
        <div className={styles.toolsIntro}><h2 id="tools-title">The tools behind the work.</h2><p>A representative toolkit for this portfolio direction.<br />Adapted to the systems you already use.</p></div>
        {toolGroups.map((group) => (
          <div className={styles.toolGroup} key={group.category}>
            <div><h3>{group.category}</h3><p>{group.description}</p></div>
            <ul>{group.tools.map((tool) => <li key={tool}>{tool}</li>)}</ul>
          </div>
        ))}
      </section>
      <ContactInvitation title="Support that works your way." />
    </>
  );
}
