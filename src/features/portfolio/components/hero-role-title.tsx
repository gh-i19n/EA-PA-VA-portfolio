"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { motion } from "~/config/motion";

const roles = [
  { role: "Executive", designation: "Assistant" },
  { role: "Virtual", designation: "Assistant" },
  { role: "Personal", designation: "Assistant" },
  { role: "Administrative", designation: "Officer" },
] as const;

gsap.registerPlugin(useGSAP);

export function HeroRoleTitle({ id }: { id: string }) {
  const scope = useRef<HTMLDivElement>(null);
  const role = useRef<HTMLSpanElement>(null);
  const designation = useRef<HTMLSpanElement>(null);
  const roleIndex = useRef(0);

  useGSAP(
    () => {
      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: no-preference)", () => {
        const roleElement = role.current;
        const designationElement = designation.current;
        if (!roleElement || !designationElement) return;
        const lines = [roleElement, designationElement];

        gsap.from(lines, {
          yPercent: 105,
          autoAlpha: 0,
          duration: motion.entrance,
          stagger: 0.08,
          ease: motion.headlineEase,
        });

        const rotation = gsap.timeline({
          delay: 3,
          repeat: -1,
          repeatDelay: 2.2,
        });

        rotation
          .to(lines, {
            yPercent: -115,
            autoAlpha: 0,
            duration: 0.28,
            stagger: 0.04,
            ease: "power2.in",
            onComplete: () => {
              roleIndex.current = (roleIndex.current + 1) % roles.length;
              const next = roles[roleIndex.current];
              roleElement.textContent = next.role;
              roleElement.dataset.compact = String(next.role === "Administrative");
              designationElement.textContent = next.designation;
            },
          })
          .fromTo(
            lines,
            { yPercent: 115, autoAlpha: 0 },
            {
              yPercent: 0,
              autoAlpha: 1,
              duration: 0.44,
              stagger: 0.04,
              ease: motion.headlineEase,
              immediateRender: false,
            },
          );

        return () => {
          rotation.kill();
          roleIndex.current = 0;
          roleElement.textContent = roles[0].role;
          roleElement.dataset.compact = "false";
          designationElement.textContent = roles[0].designation;
        };
      });

      return () => media.revert();
    },
    { scope },
  );

  return (
    <div
      ref={scope}
      className="relative mb-2 ml-auto w-fit max-w-full text-right sm:mb-0"
    >
      <h1
        id={id}
        aria-label="Executive assistant, virtual assistant, personal assistant, and administrative officer"
        className="font-display font-medium leading-[.96] tracking-[-.045em]"
      >
        <span
          className="relative block h-[1.16em] overflow-hidden text-[clamp(42px,7vw,104px)] text-mustard max-sm:text-[clamp(34px,8vw,42px)]"
          aria-hidden="true"
        >
          <span
            ref={role}
            className="absolute bottom-[.08em] right-0 inline-block whitespace-nowrap data-[compact=true]:text-[.7em]"
          >
            Executive
          </span>
        </span>
        <span
          className="grid overflow-hidden pb-[.08em] text-[clamp(60px,11.5vw,172px)] max-sm:text-[clamp(48px,12vw,60px)]"
          aria-hidden="true"
        >
          <span className="invisible col-start-1 row-start-1">Assistant</span>
          <span ref={designation} className="col-start-1 row-start-1 justify-self-end whitespace-nowrap">
            Assistant
          </span>
        </span>
      </h1>
    </div>
  );
}
