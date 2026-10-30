import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { EditorialPageIntro } from "~/components/ui/editorial-page-intro";
import { ContactInvitation } from "~/components/ui/contact-invitation";
import styles from "./about-page.module.css";

const principles = [
  { title: "Discretion, always.", text: "Sensitive conversations and personal details deserve careful judgment. Trust starts with how information is handled." },
  { title: "A step ahead.", text: "Preparation creates breathing room. I look for what is coming, connect the details and make the next step clear." },
  { title: "Follow-through.", text: "The value is in closing the loop: the confirmed booking, the prepared meeting, the decision with a clear next action." },
];

export function AboutPage() {
  return (
    <>
      <EditorialPageIntro label="About AY" title={"The person behind\nthe details."} description="Professional in the work. Personal in the way I care. Get to know the person you can count on." />
      <section className={styles.story} aria-labelledby="story-title">
        <figure><div className={styles.portrait}><Image src="/images/folio/portrait-placeholder.jpg" alt="Stock portrait used as a design placeholder for AY" fill sizes="(max-width: 700px) 85vw, 40vw" /></div><figcaption>Portrait direction / Dayana Joseph, Pexels</figcaption></figure>
        <div className={styles.storyCopy}>
          <h2 id="story-title">Hello, I&apos;m AY.</h2>
          <p className={styles.lead}>A calm presence in a demanding day.</p>
          <p>I work alongside leaders and busy professionals, bringing order to the moving parts of work and life. My approach combines executive awareness with a very personal attention to detail.</p>
          <p>I enjoy making things work: the diary that finally has breathing room, the meeting everyone is prepared for, the journey where every connection has been considered.</p>
          <p>Good support is a partnership. I take time to understand how you think, what matters to you and where an extra pair of capable hands will make the biggest difference.</p>
          <Link href="/services">Explore how I can support you<ArrowUpRight size={20} aria-hidden="true" /></Link>
        </div>
      </section>
      <section className={styles.principles} aria-labelledby="principles-title">
        <h2 id="principles-title">How I show up.</h2>
        <div>{principles.map((item) => <article key={item.title}><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
      </section>
      <ContactInvitation title="A good partnership starts here." />
    </>
  );
}
