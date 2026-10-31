import Image from "next/image";
import { cn } from "~/shared/ui/utils";

/** A fine spiral rosette, cropped to support each portfolio surface. */
export function PortfolioContours({
  appearance,
}: {
  appearance: "portrait" | "footer";
}) {
  return (
    <div
      aria-hidden="true"
      data-portfolio-contours={appearance}
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden select-none",
        appearance === "portrait" &&
          "[mask-image:linear-gradient(to_right,transparent_43%,black_65%)]",
      )}
    >
      <Image
        src="/images/folio/spiral-rosette.svg"
        alt=""
        width={800}
        height={800}
        unoptimized
        className={cn(
          "absolute h-auto max-w-none",
          appearance === "portrait"
            ? "-right-[8%] -top-[20%] w-[72%] rotate-[18deg] opacity-[.12] [mask-image:linear-gradient(to_bottom,black_58%,transparent_94%)] max-sm:-right-[26%] max-sm:-top-[8%] max-sm:w-[95%] max-sm:opacity-[.08]"
            : "-right-[8%] -top-[65%] w-[88%] min-w-[700px] rotate-[-12deg] opacity-[.08] [mask-image:linear-gradient(to_right,transparent,black_32%)] max-sm:-right-[70%] max-sm:-top-[5%] max-sm:opacity-[.06]",
        )}
      />
    </div>
  );
}
