"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu } from "lucide-react";
import { useRef } from "react";
import { siteNavigation } from "~/config/site";
import styles from "./site-shell.module.css";

export function SiteNavigation() {
  const pathname = usePathname();
  const menu = useRef<HTMLDetailsElement>(null);
  const active = (href: string) => href === "/" ? pathname === "/" : pathname.startsWith(href);
  const closeMenu = () => { if (menu.current) menu.current.open = false; };

  return (
    <header className={styles.header}>
      <Link className={styles.brand} href="/" aria-label="AY, home">ay<span>.</span></Link>
      <nav className={styles.desktopNav} aria-label="Main navigation">
        {siteNavigation.map((item) => (
          <Link href={item.href} key={item.href} aria-current={active(item.href) ? "page" : undefined}>{item.label}</Link>
        ))}
      </nav>
      <div className={styles.headerActions}>
        <Link className={styles.contactLink} href="/contact" aria-current={pathname === "/contact" ? "page" : undefined}>Let&apos;s talk <ArrowUpRight size={16} aria-hidden="true" /></Link>
        <details className={styles.mobileMenu} ref={menu} key={pathname} onKeyDown={(event) => {
          if (event.key === "Escape" && menu.current?.open) {
            closeMenu();
            menu.current.querySelector("summary")?.focus();
          }
        }}>
          <summary aria-label="Site menu"><Menu size={20} strokeWidth={1.5} aria-hidden="true" /><span>Menu</span></summary>
          <nav aria-label="Mobile navigation">
            {siteNavigation.map((item) => (
              <Link href={item.href} key={item.href} onClick={closeMenu} aria-current={active(item.href) ? "page" : undefined}>{item.label}<ArrowUpRight size={16} aria-hidden="true" /></Link>
            ))}
            <Link href="/contact" onClick={closeMenu} aria-current={pathname === "/contact" ? "page" : undefined}>Contact<ArrowUpRight size={16} aria-hidden="true" /></Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
