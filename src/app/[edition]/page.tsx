import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EditionCard } from "@/components/EditionCard";
import { PhotoPanel } from "@/components/PhotoPanel";
import { FormatSection } from "@/components/FormatSection";
import { InPreparation } from "@/components/PageHeader";
import { editionCode, editionDate, editionName, editionPlace, getEdition, getEditions } from "@/lib/editions";

type Params = { edition: string };

// One static page per edition: /001, /002, …
export const dynamicParams = false;
export function generateStaticParams(): Params[] {
  return getEditions().map((e) => ({ edition: editionCode(e) }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const edition = getEdition((await params).edition);
  return { title: edition ? `${editionCode(edition)} — ${editionName(edition)}` : "Edition" };
}

export default async function EditionPage({ params }: { params: Promise<Params> }) {
  const edition = getEdition((await params).edition);
  if (!edition) notFound();

  const facts = [
    ["Edition", editionCode(edition)],
    ["Destination", editionPlace(edition)],
    ["Date", editionDate(edition)],
    ["Field", "16 players · 2 teams of 8"],
    ["Format", "3 rounds · 16 points"],
    ["Courses", edition.courses?.join(", ") ?? "To be announced"],
  ];

  return (
    <>
      {/* Starts below the nav so the header always sits on ivory. */}
      <section className="grid bg-ivory pt-[76px] lg:h-[100svh] lg:min-h-[640px] lg:grid-cols-2 lg:pt-[96px]">
        <EditionCard edition={edition} cta="The Format" href="/format/" className="min-h-[64svh] lg:min-h-0" />
        {edition.image ? (
          <PhotoPanel image={edition.image} sizes="(min-width: 1024px) 50vw, 100vw" className="aspect-[4/3] lg:aspect-auto" />
        ) : (
          <div className="flex aspect-[4/3] items-center justify-center bg-sand/40 lg:aspect-auto">
            <p className="type-label text-ink/50">Destination to be announced</p>
          </div>
        )}
      </section>

      <section className="bg-ivory py-20 lg:py-28">
        <div className="frame grid gap-14 lg:grid-cols-[1fr_1.3fr] lg:gap-24">
          <p className="font-serif text-[clamp(22px,2.2vw,30px)] leading-[1.4] text-ink/90">
            {edition.summary ?? "The next chapter. Destination, name and dates to be announced."}
          </p>
          <dl className="border-b border-rule">
            {facts.map(([label, value]) => (
              <div key={label} className="grid grid-cols-[120px_1fr] gap-6 border-t border-rule py-5 sm:grid-cols-[180px_1fr]">
                <dt className="type-label pt-1 text-ink/55">{label}</dt>
                <dd className="type-headline text-[22px] tracking-[0.02em]">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <div className="border-t border-rule">
        <FormatSection showLink={false} />
      </div>
      <InPreparation note="Itinerary, courses, pairings and the full field will be published here." />
    </>
  );
}
