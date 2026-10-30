import Link from "next/link";
import { EditorialPageIntro } from "~/components/ui/editorial-page-intro";
import styles from "~/components/ui/editorial.module.css";

export default function NotFound() {
  return <><EditorialPageIntro label="Page not found" title={"A small detour."} description="That page is no longer here, or the address may be incomplete. You can find your way back from here." /><div className={styles.invitation}><Link href="/">Return home</Link><Link href="/case-studies">Explore case studies</Link></div></>;
}
