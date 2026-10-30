import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { ContactInvitation } from "~/components/ui/contact-invitation";
import { caseStudies, type CaseStudy } from "../config/case-studies";
import styles from "./case-studies.module.css";

export function CaseStudyDetail({ study }: { study: CaseStudy }) {
  const next = caseStudies.find((item) => item.slug !== study.slug);
  return (
    <>
      <header className={styles.detailHeader}>
        <Link href="/case-studies"><ArrowLeft size={16} aria-hidden="true" />All case studies</Link>
        <p>{study.category} / Illustrative scenario</p>
        <h1>{study.title}</h1>
        <p className={styles.detailSummary}>{study.summary}</p>
      </header>
      <div className={styles.detailImage}><Image src={study.image} alt={study.alt} fill preload sizes="100vw" /></div>
      <div className={styles.detailBody}>
        <aside><span>In this scenario</span><p>Preparation.<br />Coordination.<br />Follow-through.</p><small>An illustrative approach, prepared for the portfolio design.</small></aside>
        <div>
          <section aria-labelledby="challenge-title"><h2 id="challenge-title">The challenge.</h2><p>{study.challenge}</p></section>
          <section aria-labelledby="approach-title"><h2 id="approach-title">The approach.</h2><ol className={styles.steps}>{study.approach.map((step) => <li key={step.title}><h3>{step.title}</h3><p>{step.text}</p></li>)}</ol></section>
          <section className={styles.handoff} aria-labelledby="handoff-title"><h2 id="handoff-title">The handoff.</h2><ul>{study.deliverables.map((item) => <li key={item}>{item}</li>)}</ul></section>
          <section aria-labelledby="result-title"><h2 id="result-title">The intended result.</h2><p>{study.intendedResult}</p></section>
          {next && <Link className={styles.nextStudy} href={`/case-studies/${next.slug}`}><span>Next study<br /><strong>{next.title}</strong></span><ArrowUpRight size={28} aria-hidden="true" /></Link>}
        </div>
      </div>
      <ContactInvitation title="Bring a little more order to your world." />
    </>
  );
}
