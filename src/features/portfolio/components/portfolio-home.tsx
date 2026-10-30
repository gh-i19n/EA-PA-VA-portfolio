import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ContactInvitation } from "~/components/ui/contact-invitation";
import { PortfolioHero } from "./portfolio-hero";
import styles from "./home-overview.module.css";

export function PortfolioHome() {
  return (
    <>
      <PortfolioHero />
      <section className={styles.overview} id="discover" aria-labelledby="overview-title">
        <div><p>A personal approach</p><h2 id="overview-title">Your world.<br />A little lighter.</h2></div>
        <div className={styles.overviewBody}>
          <p>Considered support for the person behind the position. From executive priorities to the details of everyday life, discover how I can work alongside you.</p>
          <nav aria-label="Explore the portfolio">
            <Link href="/about"><span>Meet your right hand</span><ArrowUpRight size={22} aria-hidden="true" /></Link>
            <Link href="/services"><span>Find your support</span><ArrowUpRight size={22} aria-hidden="true" /></Link>
            <Link href="/case-studies"><span>See the thinking in practice</span><ArrowUpRight size={22} aria-hidden="true" /></Link>
          </nav>
        </div>
      </section>
      <ContactInvitation title="Make room for what matters." />
    </>
  );
}
