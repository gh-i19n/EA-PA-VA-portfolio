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
}: {
  children: ReactNode;
  className: string;
  reveal?: "arrival" | "viewport";
}) {
  const frame = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      if (!frame.current) return;
      const media = gsap.matchMedia();
      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(frame.current, {
          clipPath:
            reveal === "arrival" ? "inset(0 0 100% 0)" : "inset(8% 5% 8% 5%)",
          duration: 1.1,
          ease: motion.headlineEase,
          ...(reveal === "viewport"
            ? {
                scrollTrigger: {
                  trigger: frame.current,
                  start: "top 88%",
                  once: true,
                },
              }
            : {}),
        });
      });
      return () => media.revert();
    },
    { scope: frame, dependencies: [reveal], revertOnUpdate: true },
  );

  return (
    <div ref={frame} className={cn("overflow-hidden", className)}>
      {children}
    </div>
  );
}
