"use client";

import Image from "next/image";
import { useState } from "react";
import type { GalleryImage } from "~/shared/types/gallery-image";

export function GalleryImageDisplay({ image, expanded = false }: {
  image: GalleryImage;
  expanded?: boolean;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span role="status" className="flex min-h-40 items-center justify-center p-6 text-support text-muted">
        This image couldn’t load. Use the original image link to open it directly.
      </span>
    );
  }

  return (
    <Image
      src={image.src}
      alt={image.alt}
      {...(expanded ? { width: image.width, height: image.height } : { fill: true })}
      unoptimized
      loading="lazy"
      sizes={expanded ? "95vw" : "(min-width: 1024px) 65vw, 90vw"}
      onError={() => setFailed(true)}
      className={expanded ? "mx-auto h-auto max-w-full" : "object-contain p-3 sm:p-5"}
    />
  );
}
