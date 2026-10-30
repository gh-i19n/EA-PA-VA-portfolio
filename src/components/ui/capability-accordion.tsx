import { Plus } from "lucide-react";
import styles from "./capability-accordion.module.css";

type Capability = {
  readonly id: string;
  readonly title: string;
  readonly introduction: string;
  readonly description: string;
  readonly capabilities: readonly string[];
};

type CapabilityAccordionProps = {
  items: readonly Capability[];
  label: string;
};

/** A complete capability presentation with native, keyboard-accessible disclosure. */
export function CapabilityAccordion({ items, label }: CapabilityAccordionProps) {
  return (
    <div className={styles.accordion} aria-label={label}>
      {items.map((item, index) => (
        <details className={styles.item} key={item.id} open={index === 0}>
          <summary className={styles.trigger}>
            <h3>{item.title}</h3>
            <span className={styles.toggle}><Plus size={20} strokeWidth={1.3} aria-hidden="true" /></span>
          </summary>
          <div className={styles.content}>
            <p className={styles.introduction}>{item.introduction}</p>
            <p className={styles.description}>{item.description}</p>
            <ul>{item.capabilities.map((capability) => <li key={capability}>{capability}</li>)}</ul>
          </div>
        </details>
      ))}
    </div>
  );
}
