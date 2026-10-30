import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { EditorialPageIntro } from "~/components/ui/editorial-page-intro";
import { ContactInvitation } from "~/components/ui/contact-invitation";
import { caseStudies } from "../config/case-studies";
import styles from "./case-studies.module.css";

export function CaseStudiesPage() {
  return (
    <>
      <EditorialPageIntro label="Case studies" title={"The thinking\nbehind the doing."} description="A closer look at the preparation, coordination and follow-through behind thoughtful assistance." />
      <p className={styles.context}>Illustrative scenarios for this portfolio preview. Client case studies will follow.</p>
      <section className={styles.gallery} aria-label="Case studies">
        {caseStudies.map((study) => (
          <article key={study.slug}>
            <Link className={styles.imageLink} href={`/case-studies/${study.slug}`} aria-label={`Read ${study.title}`}>
              <Image src={study.image} alt={study.alt} fill sizes="(max-width: 700px) 90vw, 50vw" />
              <span>View study<ArrowUpRight size={18} aria-hidden="true" /></span>
            </Link>
            <p className={styles.category}>{study.category} / Illustrative scenario</p>
            <Link className={styles.titleLink} href={`/case-studies/${study.slug}`}><h2>{study.title}</h2><ArrowUpRight size={24} aria-hidden="true" /></Link>
            <p className={styles.summary}>{study.summary}</p>
          </article>
        ))}
      </section>
      <ContactInvitation title="What would good support change for you?" />
    </>
  );
}
