"use client";

import { useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { motion } from "~/config/motion";
import { cn } from "~/shared/ui/utils";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/** Owns the photograph aperture and its lifecycle, leaving native scrolling intact. */
export function PortfolioVisual({
  children,
  className,
  reveal = "viewport",
  radius = "frame",
}: {
  children: ReactNode;
  className: string;
  reveal?: "arrival" | "viewport";
  radius?: "frame" | "inherit";
}) {
  const frame = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      const element = frame.current;
      if (!element) return;
      const media = gsap.matchMedia();
      media.add("(prefers-reduced-motion: no-preference)", () => {
        const curve = getComputedStyle(element).borderTopLeftRadius;
        gsap.fromTo(
          element,
          {
            clipPath:
              reveal === "arrival"
                ? `inset(0% 0% 100% 0% round ${curve})`
                : `inset(8% 5% 8% 5% round ${curve})`,
          },
          {
            clipPath: `inset(0% 0% 0% 0% round ${curve})`,
            duration: 1.1,
            ease: motion.headlineEase,
            clearProps: "clipPath",
            ...(reveal === "viewport"
              ? {
                  scrollTrigger: {
                    trigger: element,
                    start: "top 88%",
                    once: true,
                  },
                }
              : {}),
          },
        );
      });
      return () => media.revert();
    },
    { scope: frame, dependencies: [reveal, radius], revertOnUpdate: true },
  );

  return (
    <div
      ref={frame}
      className={cn(
        "overflow-hidden",
        radius === "inherit" ? "rounded-[inherit]" : "rounded-frame",
        className,
      )}
    >
      {children}
    </div>
  );
}
