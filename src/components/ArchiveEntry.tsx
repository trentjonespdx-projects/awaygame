import Link from "next/link";
import type { Edition } from "@/content/editions";
import { editionCode, editionDate, editionHref, editionName, editionPlace } from "@/lib/editions";
import { Arrow } from "@/components/ui";

const statusLabel: Record<Edition["status"], string> = {
  complete: "Complete",
  upcoming: "Upcoming",
  tbd: "To be announced",
};

/** One chapter in the record: a ruled row with the edition number set large. */
export function ArchiveEntry({ edition, tone = "light" }: { edition: Edition; tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  const muted = dark ? "text-ivory/55" : "text-ink/55";
  const tbd = edition.status === "tbd";

  return (
    <li className={`border-t ${dark ? "border-ivory/15" : "border-rule"}`}>
      <Link
        href={editionHref(edition)}
        className="group/btn grid grid-cols-[auto_1fr] items-baseline gap-x-6 py-7 sm:grid-cols-[clamp(96px,14vw,200px)_1fr_auto] sm:gap-x-10 lg:py-9"
      >
        <span className={`type-mark text-[clamp(48px,7vw,104px)] ${tbd ? muted : ""}`}>{editionCode(edition)}</span>
        <div>
          <p className={`type-headline text-[clamp(22px,2.4vw,34px)] ${tbd ? muted : ""}`}>{editionName(edition)}</p>
          <p className={`type-label mt-3 ${muted}`}>
            {editionPlace(edition)} &nbsp;·&nbsp; {editionDate(edition)}
          </p>
        </div>
        <span className={`type-label col-span-2 mt-5 flex items-center gap-4 sm:col-span-1 sm:mt-0 ${muted}`}>
          {edition.result ? `${edition.result.winner} ${edition.result.score}` : statusLabel[edition.status]}
          <Arrow />
        </span>
      </Link>
    </li>
  );
}
