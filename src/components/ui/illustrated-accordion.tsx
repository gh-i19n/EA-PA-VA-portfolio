"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/primitives/accordion";

export type IllustratedAccordionItem = {
  id: string;
  label: string;
  heading: string;
  description: string;
  steps?: readonly string[];
  image: { src: string; alt: string; caption: string };
};

function DetailImage({ image }: { image: IllustratedAccordionItem["image"] }) {
  const [unavailable, setUnavailable] = useState(false);

  return (
    <figure className="min-w-0">
      <div className="relative grid aspect-[16/10] place-items-center overflow-hidden rounded-frame border border-rule/70 bg-mist">
        {unavailable ? (
          <p className="px-6 text-center text-support text-muted" role="status">
            This image couldn’t load.
          </p>
        ) : (
          <Image
            src={image.src}
            alt={image.alt}
            fill
            unoptimized
            loading="lazy"
            sizes="(min-width:1520px) 760px, (min-width:800px) 50vw, 90vw"
            className="object-contain p-3 sm:p-5"
            onError={() => setUnavailable(true)}
          />
        )}
      </div>
      <figcaption className="mt-3 text-caption text-muted">
        {image.caption}
      </figcaption>
    </figure>
  );
}

/** A complete single-open disclosure with text and a supporting image. */
export function IllustratedAccordion({ items, label }: {
  items: readonly IllustratedAccordionItem[];
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
      className="border-y border-rule"
    >
      {items.map((item) => (
        <AccordionItem key={item.id} value={item.id}>
          <AccordionTrigger className="min-h-24 py-6 sm:py-7">
            <span className="min-w-0 font-display text-[clamp(28px,3.2vw,44px)] font-medium leading-tight tracking-[-.03em]">
              {item.label}
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <div className="@container">
              <div className="grid items-start gap-7 pb-7 @3xl:grid-cols-[minmax(0,.9fr)_minmax(0,1.1fr)] @3xl:gap-12 @3xl:pb-10">
                <div className="min-w-0 @3xl:pt-3">
                  <h4 className="max-w-[28ch] text-balance font-display text-[clamp(24px,2.5vw,34px)] font-medium leading-[1.2] tracking-[-.025em]">
                    {item.heading}
                  </h4>
                  <p className="mt-4 max-w-[56ch] text-pretty text-body text-muted">
                    {item.description}
                  </p>
                  {item.steps && (
                    <ol className="mt-6 grid max-w-[56ch] list-decimal gap-3 pl-5 text-support marker:text-muted">
                      {item.steps.map((step) => <li key={step} className="pl-2">{step}</li>)}
                    </ol>
                  )}
                </div>
                <DetailImage key={item.image.src} image={item.image} />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
