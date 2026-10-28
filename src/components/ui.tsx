import Link from "next/link";
import type { ReactNode } from "react";

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 14 10"
      className={`h-[9px] w-[13px] shrink-0 transition-transform duration-500 ease-editorial group-hover/btn:translate-x-1 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
    >
      <path d="M0 5h12.5M8.5 1l4 4-4 4" />
    </svg>
  );
}

type ButtonVariant = "solid" | "outline-light" | "outline-dark";

const variants: Record<ButtonVariant, string> = {
  solid: "bg-forest text-ivory border-forest hover:bg-ink hover:border-ink",
  "outline-light": "border-ivory/80 text-ivory hover:bg-ivory hover:text-ink",
  "outline-dark": "border-ink/70 text-ink hover:bg-ink hover:text-ivory",
};

/** Rectangular, understated call to action: LABEL →  */
export function ButtonLink({
  href,
  children,
  variant = "solid",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group/btn type-label inline-flex h-[50px] items-center justify-between gap-8 border px-7 transition-colors duration-300 ${variants[variant]} ${className}`}
    >
      <span>{children}</span>
      <Arrow />
    </Link>
  );
}

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`type-label ${className}`}>{children}</p>;
}
