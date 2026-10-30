import Link from "next/link";
import { ArrowUpRight, FileCheck2, MessageSquareQuote } from "lucide-react";
import { EditorialPageIntro } from "~/components/ui/editorial-page-intro";
import { ContactInvitation } from "~/components/ui/contact-invitation";
import { certificates, testimonials } from "../config/credentials-content";
import styles from "./credentials.module.css";

export function CredentialsPage() {
  return (
    <>
      <EditorialPageIntro label="Testimonials & certificates" title={"Trust, earned\nin the details."} description="A place for client perspectives, professional learning and the evidence behind a trusted working relationship." />
      <nav className={styles.collectionNav} aria-label="Credential collections"><a href="#testimonials">Client words</a><a href="#certificates">Certificates & learning</a></nav>
      <section className={styles.testimonials} id="testimonials" aria-labelledby="testimonials-title">
        <div><MessageSquareQuote size={32} strokeWidth={1} aria-hidden="true" /><h2 id="testimonials-title">In their words.</h2><p>The experience of working together, told by the people who know it.</p></div>
        <div className={styles.quotes}>
          {testimonials.length ? testimonials.map((item) => <figure key={item.name}><blockquote>{item.quote}</blockquote><figcaption>{item.name}<span>{item.role}</span></figcaption></figure>) : <div className={styles.quoteEmpty}><span className={styles.quoteMark} aria-hidden="true">“</span><p>Good work leaves<br />a lasting impression.</p><span>Client testimonials will appear here once shared with permission.</span></div>}
        </div>
      </section>
      <section className={styles.certificates} id="certificates" aria-labelledby="certificates-title">
        <div><FileCheck2 size={30} strokeWidth={1} aria-hidden="true" /><h2 id="certificates-title">Always learning.</h2><p>Professional training and certificates, with the details to verify them.</p></div>
        <div>{certificates.length ? certificates.map((certificate) => <a className={styles.certificate} key={certificate.title} href={certificate.verificationUrl} target="_blank" rel="noreferrer"><div><h3>{certificate.title}</h3><p>{certificate.issuer} / {certificate.issued}</p></div><ArrowUpRight size={20} aria-hidden="true" /></a>) : <div className={styles.certificateEmpty}><FileCheck2 size={44} strokeWidth={.9} aria-hidden="true" /><h3>Certificates to follow.</h3><p>Verified credentials will be added with their issuing organisation and completion details.</p><Link href="/contact">Discuss your requirements<ArrowUpRight size={18} aria-hidden="true" /></Link></div>}</div>
      </section>
      <ContactInvitation title="Let's build a working relationship." />
    </>
  );
}
