"use client";

import type { ReactNode } from "react";
import { useEffect, useRef } from "react";

/** Keeps the fixed header's actual height available to page and anchor spacing. */
export function SiteHeader({ children }: { children: ReactNode }) {
  const header = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = header.current;
    if (!element) return;

    const root = document.documentElement;
    const previousHeight = root.style.getPropertyValue("--site-header-height");
    const updateHeight = () => {
      root.style.setProperty(
        "--site-header-height",
        `${Math.ceil(element.getBoundingClientRect().height)}px`,
      );
    };

    updateHeight();
    const observer = new ResizeObserver(updateHeight);
    observer.observe(element);

    return () => {
      observer.disconnect();
      if (previousHeight) root.style.setProperty("--site-header-height", previousHeight);
      else root.style.removeProperty("--site-header-height");
    };
  }, []);

  return (
    <div
      ref={header}
      className="fixed inset-x-0 top-0 z-[90] bg-paper pt-[env(safe-area-inset-top)]"
    >
      {children}
    </div>
  );
}
