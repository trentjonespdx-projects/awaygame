import type { ReactNode } from "react";
import { Eyebrow } from "@/components/ui";

/** Opening block for inner pages: eyebrow, oversized headline, a short standfirst. */
export function PageHeader({ eyebrow, title, children }: { eyebrow: string; title: string[]; children?: ReactNode }) {
  return (
    <section className="bg-ivory pb-16 pt-36 lg:pb-24 lg:pt-48">
      <div className="frame">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="type-headline mt-8 text-[clamp(52px,8vw,128px)]">
          {title.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h1>
        {children && <div className="type-body mt-10 max-w-[34em] text-[17px] text-ink/80 lg:text-lg">{children}</div>}
      </div>
    </section>
  );
}

/** Placeholder band for sections still being written. */
export function InPreparation({ note }: { note: string }) {
  return (
    <section className="border-t border-rule bg-ivory">
      <div className="frame flex flex-col gap-4 py-14 sm:flex-row sm:items-baseline sm:justify-between">
        <p className="type-label text-ink/55">In preparation</p>
        <p className="font-serif text-[15px] italic text-ink/70">{note}</p>
      </div>
    </section>
  );
}
