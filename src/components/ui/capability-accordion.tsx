"use client";

import { useId, useRef } from "react";
import { Plus } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { motion } from "~/config/motion";

type Capability = {
  readonly id: string;
  readonly title: string;
  readonly introduction: string;
  readonly description: string;
  readonly capabilities: readonly string[];
};

gsap.registerPlugin(useGSAP);

/** Complete service disclosures with native keyboard and no-JavaScript behaviour. */
export function CapabilityAccordion({
  items,
  label,
}: {
  items: readonly Capability[];
  label: string;
}) {
  const scope = useRef<HTMLDivElement>(null);
  const name = useId();
  const { contextSafe } = useGSAP({ scope });
  const reveal = contextSafe((details: HTMLDetailsElement) => {
    if (!details.open || window.matchMedia(motion.reducedMotion).matches)
      return;
    const content = details.querySelector("[data-capability-content]");
    if (content)
      gsap.fromTo(
        content,
        { opacity: 0.3, y: -7 },
        {
          opacity: 1,
          y: 0,
          duration: 0.3,
          ease: motion.ease,
          overwrite: true,
          clearProps: "transform,opacity",
        },
      );
  });

  return (
    <div ref={scope} className="min-w-0" aria-label={label}>
      {items.map((item, index) => (
        <details
          id={item.id}
          name={name}
          className="group scroll-mt-8 border-t border-rule last:border-b"
          key={item.id}
          open={index === 0}
          onToggle={(event) => reveal(event.currentTarget)}
        >
          <summary className="flex min-h-[110px] cursor-pointer list-none items-center justify-between gap-5 py-7 [&::-webkit-details-marker]:hidden">
            <h3 className="font-display font-medium text-[clamp(23px,2.4vw,34px)] leading-[1.25] tracking-[-.03em]">
              {item.title}
            </h3>
            <span className="grid size-10 shrink-0 place-items-center rounded-full border border-rule transition-colors duration-200 group-hover:border-ink group-open:border-ink group-open:bg-ink group-open:text-paper motion-reduce:transition-none">
              <Plus
                className="transition-transform duration-200 group-open:rotate-45 motion-reduce:transition-none"
                size={18}
                strokeWidth={1.5}
                aria-hidden="true"
              />
            </span>
          </summary>
          <div data-capability-content className="pb-9 pr-1 sm:pr-14">
            <p className="mb-4 text-body font-medium">
              {item.introduction}
            </p>
            <p className="max-w-[540px] text-body text-muted">
              {item.description}
            </p>
            <ul className="mt-7 grid list-none gap-x-6 gap-y-4 sm:grid-cols-2">
              {item.capabilities.map((capability) => (
                <li
                  className="flex items-baseline gap-3 text-label before:size-1 before:shrink-0 before:rounded-full before:bg-fern before:content-['']"
                  key={capability}
                >
                  {capability}
                </li>
              ))}
            </ul>
          </div>
        </details>
      ))}
    </div>
  );
}
