import type { Edition } from "@/content/editions";
import { editionCode, editionDate, editionHref, editionName, editionPlace } from "@/lib/editions";
import { ButtonLink } from "@/components/ui";

/**
 * The edition as a tournament-program cover: number, name, place, date.
 * Sits on forest green with a faint topographic texture.
 */
export function EditionCard({
  edition,
  cta = "View Event",
  href,
  className = "",
}: {
  edition: Edition;
  cta?: string;
  /** Defaults to the edition's own page. */
  href?: string;
  className?: string;
}) {
  const lines = edition.nameLines ?? [editionName(edition)];

  return (
    <div className={`relative flex flex-col items-center justify-center overflow-hidden bg-forest px-8 py-20 text-center text-ivory ${className}`}>
      <div aria-hidden className="topo absolute inset-0 opacity-[0.07]" />

      <div className="relative flex flex-col items-center">
        <p className="type-label tracking-[0.32em]">{editionCode(edition)}</p>

        <h2 className="type-display mt-5 text-[clamp(46px,4.5vw,68px)]">
          {lines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h2>

        <p className="type-label mt-6 text-[11px] tracking-[0.3em]">{editionPlace(edition)}</p>
        <p className="type-label mt-3 text-[11px] tracking-[0.3em] text-ivory/70">{editionDate(edition)}</p>

        <span aria-hidden className="mt-7 block h-px w-8 bg-ivory/50" />

        <ButtonLink href={href ?? editionHref(edition)} variant="outline-light" className="mt-7 min-w-[220px] border-ivory/70">
          {cta}
        </ButtonLink>
      </div>
    </div>
  );
}
