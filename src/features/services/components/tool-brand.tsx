import Image from "next/image";

type ToolBrandProps = {
  name: string;
  logo: {
    src: string;
    width: number;
    height: number;
    displayWidth: number;
    kind: "wordmark" | "symbol";
  };
};

export function ToolBrand({ name, logo }: ToolBrandProps) {
  return (
    <div className="flex min-h-16 items-center gap-4">
      <Image
        src={logo.src}
        alt={logo.kind === "wordmark" ? name : ""}
        width={logo.width}
        height={logo.height}
        sizes={`${logo.displayWidth}px`}
        style={{ width: logo.displayWidth }}
        className="h-auto max-w-full object-contain object-left"
      />
      {logo.kind === "symbol" && (
        <span className="font-display text-[clamp(26px,3.2vw,38px)] font-medium leading-[1.1] tracking-[-.03em]">
          {name}
        </span>
      )}
    </div>
  );
}
