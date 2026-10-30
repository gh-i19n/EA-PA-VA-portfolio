import type { ReactNode } from "react";
import { Suspense } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteNavigation, siteContact } from "~/config/site";
import { SiteNavigation } from "./site-navigation";
import styles from "./site-shell.module.css";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className={styles.shell}>
      <a className={styles.skipLink} href="#main">Skip to content</a>
      <Suspense fallback={<header className={styles.header}><Link className={styles.brand} href="/">ay.</Link><Link href="/contact">Let&apos;s talk</Link></header>}>
        <SiteNavigation />
      </Suspense>
      <main id="main" tabIndex={-1}>{children}</main>
      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <Link href="/" className={styles.footerBrand} aria-label="AY, home">ay.</Link>
          <p>A steady hand.<br />Always a step ahead.</p>
          <a href={siteContact.mailto}>{siteContact.email}<ArrowUpRight size={18} aria-hidden="true" /></a>
        </div>
        <nav className={styles.footerNav} aria-label="Footer navigation">
          {siteNavigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
          <Link href="/contact">Contact</Link>
        </nav>
        <div className={styles.footerBottom}>
          <span>Executive, virtual & personal assistance</span>
          <a href="https://www.pexels.com/photo/close-up-shot-of-a-woman-in-black-blazer-looking-at-camera-8312669/" target="_blank" rel="noreferrer">Portrait placeholder by Dayana Joseph</a>
        </div>
      </footer>
    </div>
  );
}
