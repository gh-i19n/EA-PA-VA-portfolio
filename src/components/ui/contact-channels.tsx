import { Mail } from "lucide-react";
import { faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { siteContact } from "~/config/site";
import { cn } from "~/shared/ui/utils";

const appearanceStyles = {
  light: "border-ink/25 text-ink hover:bg-ink hover:text-paper",
  dark: "border-paper/30 text-paper hover:bg-paper hover:text-ink",
} as const;

function BrandMark({
  icon,
  className,
}: {
  icon: typeof faLinkedin;
  className: string;
}) {
  const [width, height, , , pathData] = icon.icon;
  const paths = Array.isArray(pathData) ? pathData : [pathData];

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={cn("fill-current", className)}
      aria-hidden="true"
    >
      {paths.map((path, index) => (
        <path key={index} d={path} />
      ))}
    </svg>
  );
}

export function ContactChannels({
  appearance = "light",
  label,
}: {
  appearance?: keyof typeof appearanceStyles;
  label: string;
}) {
  const linkClass = cn(
    "grid size-11 place-items-center rounded-full border transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-4",
    appearanceStyles[appearance],
  );

  return (
    <nav aria-label={label} className="flex items-center gap-3">
      <a className={linkClass} href={siteContact.mailto} aria-label="Email AY">
        <Mail size={20} strokeWidth={1.5} aria-hidden="true" />
      </a>
      <a
        className={linkClass}
        href={siteContact.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="AY on LinkedIn (opens in a new tab)"
      >
        <BrandMark icon={faLinkedin} className="size-[18px]" />
      </a>
      <a
        className={linkClass}
        href={siteContact.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Message AY on WhatsApp (opens in a new tab)"
      >
        <BrandMark icon={faWhatsapp} className="size-5" />
      </a>
    </nav>
  );
}
