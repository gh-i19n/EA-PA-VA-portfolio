import { IntroductionVideo } from "~/components/ui/introduction-video";
import { PortfolioLink } from "~/components/ui/portfolio-link";
import { introductionVideo } from "~/config/site";
import styles from "./about-story.module.css";

export function AboutStory() {
  return (
    <section aria-labelledby="story-title" className={styles.section}>
      <article className={styles.paper}>
        <header className={styles.masthead}>
          <p className={styles.name}>Ayomide Ajibola</p>
          <h1 id="story-title" className={styles.title}>
            The person behind the scenes
          </h1>
          <p className={styles.edition}>
            <span>My story</span>
            <span>Executive assistance</span>
          </p>
        </header>

        <div className={styles.newsBody}>
          <div className={styles.feature}>
            <figure className={styles.video}>
              <IntroductionVideo {...introductionVideo} appearance="editorial" />
              <figcaption className={styles.caption}>
                A short introduction, in my own words.
              </figcaption>
            </figure>

            <h2 className={styles.featureTitle}>
              From the stage to supporting businesses
            </h2>
            <div className={styles.proseColumns}>
              <p>
                People often ask how someone who studied Performing Arts became an
                Executive Virtual Assistant. To me, the transition makes perfect
                sense.
              </p>
              <p>
                While studying, I was drawn to what happened behind the scenes:
                organising rehearsals, coordinating people, managing schedules and
                making sure everything was ready before the curtain went up.
              </p>
              <p>
                Directing and stage management taught me that a successful performance
                depends on someone paying attention to every detail. That experience
                shaped how I work today.
              </p>

              <blockquote className={styles.quote}>
                <p className={styles.quoteCaption}>
                  One lesson from theatre has stayed with me:
                </p>
                <p className={styles.quoteText}>“The show must go on.”</p>
              </blockquote>

              <p>
                Whether the director was present or not, my responsibility was to keep
                everything moving. Organisation, communication, teamwork,
                problem-solving, adaptability and staying calm under pressure are just
                as valuable in business as they are on stage.
              </p>
              <p>
                Every CEO, founder and growing business needs someone who keeps
                operations moving, anticipates what needs doing and creates order
                where there’s complexity. That’s where I do my best work.
              </p>
            </div>
          </div>

          <aside className={styles.context} aria-labelledby="why-it-matters-title">
            <h2 id="why-it-matters-title" className={styles.sectionTitle}>
              Why it matters today
            </h2>
            <div className={styles.contextCopy}>
              <p>
                Every CEO, founder, and executive has several responsibilities
                competing for their attention. From managing busy schedules,
                attending meetings, responding to important emails, and
                communicating with stakeholders to making decisions, managing
                teams, and overseeing projects. All these require proper
                coordination to ensure nothing is overlooked. For instance,
                appointments need to be monitored to avoid clashes, emails need to
                be attended to, and meeting action points need to be documented and
                followed up on. An executive shouldn’t have to worry about taking
                meeting notes while trying to actively listen and contribute to
                important discussions.
              </p>
              <p>
                These are some of the responsibilities an Executive Assistant helps
                manage, simplifying administrative tasks, supporting executives,
                coordinating projects, and handling the administrative backend.
              </p>
              <p>
                Whether I’m organising calendars, managing emails, coordinating
                projects, preparing meeting reports, tracking action points, or
                handling other administrative responsibilities, my goal is always
                to take some of these tasks off the executive’s plate so they can
                give more attention to other important responsibilities.
              </p>
            </div>
          </aside>
        </div>

        <section className={styles.working} aria-labelledby="working-with-me-title">
          <h2 id="working-with-me-title" className={styles.sectionTitle}>
            What it’s like to work with me
          </h2>
          <div className={styles.workingColumns}>
            <p>
              I enjoy what I do. What keeps me motivated is the opportunity to
              learn, improve and grow through every client, project and challenge.
            </p>
            <p>
              When I work with you, I treat your business with the same ownership,
              care and attention I would give my own. Behind the scenes, success
              is measured by how smoothly everything works out front.
            </p>
            <div className={styles.workingCta}>
              <p>
                You’ve met the person behind the scenes. Now, I’d love to show you
                what I can do.
              </p>
              <PortfolioLink href="/case-studies" quiet>
                Explore my work
              </PortfolioLink>
            </div>
          </div>
        </section>
      </article>
    </section>
  );
}
