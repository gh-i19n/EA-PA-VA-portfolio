"use client";

import { Fragment, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { motion } from "~/config/motion";

gsap.registerPlugin(useGSAP, SplitText);

/** Owns the heading DOM so text splitting runs after this boundary hydrates. */
export function PortfolioPageTitle({
  title,
  appearance = "page",
  id,
  lineClassNames,
}: {
  title: string;
  appearance?: "page" | "portrait";
  id?: string;
  lineClassNames?: readonly string[];
}) {
  const heading = useRef<HTMLHeadingElement>(null);
  const label = title.replace(/\n/g, " ");

  useGSAP(
    () => {
      if (!heading.current) return;
      const media = gsap.matchMedia();
      media.add("(prefers-reduced-motion: no-preference)", () => {
        const split = SplitText.create(heading.current, {
          type: "lines",
          mask: "lines",
          autoSplit: true,
          aria: "none",
          onSplit: (self) => {
            self.lines.forEach((line) =>
              line.setAttribute("aria-hidden", "true"),
            );
            return gsap.from(self.lines, {
              yPercent: 105,
              duration: motion.entrance,
              stagger: 0.08,
              ease: motion.headlineEase,
            });
          },
        });
        return () => split.revert();
      });
      return () => media.revert();
    },
    { scope: heading, dependencies: [title], revertOnUpdate: true },
  );

  return (
    <h1
      ref={heading}
      id={id}
      aria-label={label}
      className={
        appearance === "portrait"
          ? "font-display text-[clamp(60px,11.5vw,172px)] font-medium leading-[.96] tracking-[-.045em]"
          : "font-display text-[clamp(54px,10.4vw,150px)] font-medium leading-[1.01] tracking-[-.045em]"
      }
    >
      {title.split("\n").map((line, index) => (
        <Fragment key={line}>
          {index > 0 && <br />}
          {lineClassNames?.[index] ? (
            <span className={lineClassNames[index]}>{line}</span>
          ) : (
            line
          )}
        </Fragment>
      ))}
    </h1>
  );
}
