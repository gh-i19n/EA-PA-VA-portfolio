import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import styles from "./editorial.module.css";

export function ContactInvitation({ title = "A little less on your mind." }: { title?: string }) {
  return (
    <aside className={styles.invitation} aria-label="Work with AY">
      <div><p>Good things start with a conversation.</p><h2>{title}</h2></div>
      <Link href="/contact">Let&apos;s talk<ArrowUpRight size={24} strokeWidth={1.2} aria-hidden="true" /></Link>
    </aside>
  );
}
