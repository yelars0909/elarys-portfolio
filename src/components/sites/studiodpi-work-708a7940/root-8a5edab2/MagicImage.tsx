"use client";

import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

// Relative path so assets resolve both at dev root (localhost:7100/) and
// under a GitHub Pages subpath (user.github.io/<repo>/).
const ASSET_ROOT = "sites/studiodpi-work-708a7940/root-8a5edab2";

interface MagicImageProps {
  hashName: string;
  rootStyle?: CSSProperties;
  style?: CSSProperties;
  className?: string;
  dir?: "images" | "supply";
  alt?: string;
}

/**
 * Image with a transparent backdrop so it blends into the page background.
 */
export function MagicImage({
  hashName,
  rootStyle,
  style,
  className,
  dir = "images",
  alt = "",
}: MagicImageProps) {
  return (
    <div
      className={cn("relative", className)}
      style={{ backgroundColor: "transparent", ...rootStyle }}
    >
      <img
        src={`${ASSET_ROOT}/${dir}/${hashName}`}
        alt={alt}
        style={{
          width: "100%",
          height: "100%",
          display: "block",
          fontSize: 0,
          objectFit: "contain",
          ...style,
        }}
      />
    </div>
  );
}

export { ASSET_ROOT };
