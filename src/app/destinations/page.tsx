import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ArchiveEntry } from "@/components/ArchiveEntry";
import { getEditions } from "@/lib/editions";

export const metadata: Metadata = { title: "Destinations" };

export default function DestinationsPage() {
  return (
    <>
      <PageHeader eyebrow="Destinations" title={["New destination.", "Same competition."]}>
        Every year the match travels somewhere new. Past and future destinations, in order.
      </PageHeader>
      <section className="bg-ivory pb-24">
        <ul className="frame border-b border-rule">
          {getEditions().map((e) => (
            <ArchiveEntry key={e.number} edition={e} />
          ))}
        </ul>
      </section>
    </>
  );
}
