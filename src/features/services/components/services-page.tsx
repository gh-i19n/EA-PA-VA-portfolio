import { CapabilityAccordion } from "~/components/ui/capability-accordion";
import { EditorialPageIntro } from "~/components/ui/editorial-page-intro";
import { ContactInvitation } from "~/components/ui/contact-invitation";
import { serviceAreas } from "../config/services-content";
import styles from "./services-page.module.css";

export function ServicesPage() {
  return (
    <>
      <EditorialPageIntro label="Services" title={"Good support.\nOn your terms."} description="Executive, virtual and personal assistance, shaped around the way you work and the life you lead." />
      <section className={styles.services} aria-label="Explore assistance services">
        <div className={styles.sideNote}><p>One trusted person.<br />A considered kind of support.</p><span>Explore each area to see what I can take off your plate.</span></div>
        <CapabilityAccordion items={serviceAreas} label="Areas of assistance" />
      </section>
      <section className={styles.process} aria-labelledby="process-title">
        <h2 id="process-title">Finding our rhythm.</h2>
        <ol>
          <li><span>01</span><h3>A conversation.</h3><p>We talk about your world, your priorities and what good support would change.</p></li>
          <li><span>02</span><h3>A clear agreement.</h3><p>We define the scope, communication habits and responsibilities that fit.</p></li>
          <li><span>03</span><h3>A thoughtful start.</h3><p>We get the essentials in place and build a working rhythm together.</p></li>
        </ol>
      </section>
      <ContactInvitation title="What could I take off your plate?" />
    </>
  );
}
