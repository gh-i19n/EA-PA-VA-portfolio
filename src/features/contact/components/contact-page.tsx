import { ArrowUpRight } from "lucide-react";
import { EditorialPageIntro } from "~/components/ui/editorial-page-intro";
import { EmailEnquiry } from "~/components/ui/email-enquiry";
import { siteContact } from "~/config/site";
import styles from "./contact-page.module.css";

export function ContactPage() {
  return (
    <>
      <EditorialPageIntro label="Contact" title={"Tell me about\nyour world."} description="What is taking up your time? What would you like to make room for? A thoughtful working relationship starts with a simple conversation." />
      <div className={styles.contactLayout}>
        <aside className={styles.contactDetails}>
          <p className={styles.invitation}>A little less to carry.<br />A little more possibility.</p>
          <div><h2>Prefer a direct hello?</h2><a href={siteContact.mailto}>{siteContact.email}<ArrowUpRight size={19} aria-hidden="true" /></a><p className={styles.previewNote}>Placeholder email for this design preview.</p></div>
          <div><h2>Start wherever you are.</h2><p>You don&apos;t need a perfect brief. A few lines about your priorities and the support you have in mind are enough.</p></div>
        </aside>
        <EmailEnquiry recipient={siteContact.email} topics={["Executive assistance", "Virtual assistance", "Personal assistance", "A combination of support"]} />
      </div>
    </>
  );
}
