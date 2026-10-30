import Image from "next/image";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import styles from "./portfolio-home.module.css";

export function PortfolioHero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <p className={styles.heroDiscipline}>Executive, virtual & personal assistance</p>
      <h1 className={styles.heroTitle} id="hero-title">One step ahead.</h1>
      <div className={styles.heroComposition}>
        <div className={styles.heroIntroduction}>
          <span className={styles.smallHeading}>Hello, I&apos;m AY.</span>
          <p>A steady hand behind your busy world. I take care of the details, so you can take the lead.</p>
          <Link className={styles.underlinedLink} href="/about">A little about me <ArrowDownRight size={18} aria-hidden="true" /></Link>
        </div>
        <figure className={styles.heroPortrait}>
          <Image src="/images/folio/portrait-placeholder.jpg" alt="Editorial portrait placeholder for AY, photographed by Dayana Joseph" fill preload sizes="(max-width: 600px) 78vw, (max-width: 1000px) 42vw, 390px" />
          <figcaption className={styles.portraitCaption}>A personal approach to professional support.</figcaption>
        </figure>
        <div className={styles.heroAside}>
          <p>Consider it<br />taken care of.</p>
          <Link className={styles.roundAction} href="/contact" aria-label="Contact AY">
            <ArrowUpRight strokeWidth={1} aria-hidden="true" />
          </Link>
          <span>Good things start<br />with a conversation.</span>
        </div>
      </div>
      <div className={styles.heroFootnote}>
        <span>Thoughtful support. Lasting trust.</span>
        <a href="#discover">Scroll to discover <span className={styles.scrollLine} aria-hidden="true" /></a>
      </div>
    </section>
  );
}
