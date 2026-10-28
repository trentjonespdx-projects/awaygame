import Image from "next/image";
import type { ReactNode } from "react";

type PhotoPanelProps = {
  image: { src: string; alt: string };
  /** Render in black and white. */
  mono?: boolean;
  /** Darken the lower part of the frame for overlaid type. */
  shade?: boolean;
  sizes?: string;
  className?: string;
  children?: ReactNode;
};

/** A hard-edged, full-bleed photograph with optional overlaid type. */
export function PhotoPanel({ image, mono, shade, sizes = "(min-width: 1024px) 33vw, 100vw", className = "", children }: PhotoPanelProps) {
  return (
    <div className={`group relative overflow-hidden bg-ink ${className}`}>
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={sizes}
        className={`object-cover transition-transform duration-[1600ms] ease-editorial group-hover:scale-[1.035] ${
          mono ? "grayscale" : ""
        }`}
      />
      {shade && (
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(0deg,rgba(10,13,11,0.78)_0%,rgba(10,13,11,0.35)_32%,rgba(10,13,11,0)_58%)]"
        />
      )}
      {children}
    </div>
  );
}
