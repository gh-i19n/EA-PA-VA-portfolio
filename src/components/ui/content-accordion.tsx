"use client";

import type { ReactNode } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/primitives/accordion";

export type ContentAccordionItem = {
  id: string;
  title: string;
  content: ReactNode;
};

/** A single-open accordion for titled sections of supporting content. */
export function ContentAccordion({ items, label }: {
  items: readonly ContentAccordionItem[];
  label: string;
}) {
  if (items.length === 0) return null;

  return (
    <Accordion
      type="single"
      collapsible
      defaultValue={items[0].id}
      role="group"
      aria-label={label}
      className="mt-8 border-y border-rule"
    >
      {items.map((item) => (
        <AccordionItem key={item.id} value={item.id}>
          <AccordionTrigger className="min-h-24 py-6">
            <span className="min-w-0 font-display text-[clamp(20px,2.5cqw,24px)] font-medium leading-tight tracking-[-.02em]">
              {item.title}
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <div className="max-w-[70ch] pb-6 text-support text-muted">
              {item.content}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
