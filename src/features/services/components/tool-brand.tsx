import Image from "next/image";

type ToolBrandProps = {
  name: string;
  symbolSrc: string;
};

export function ToolBrand({ name, symbolSrc }: ToolBrandProps) {
  return (
    <div className="flex min-w-0 flex-col items-center gap-2">
      <div className="grid size-16 place-items-center" aria-hidden="true">
        <Image
          src={symbolSrc}
          alt=""
          width={64}
          height={64}
          unoptimized
          className="size-12 object-contain"
        />
      </div>
      <span className="whitespace-nowrap text-center text-[13px] font-medium leading-[1.35] sm:text-sm">
        {name}
      </span>
    </div>
  );
}
