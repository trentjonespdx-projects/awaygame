import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ArchiveEntry } from "@/components/ArchiveEntry";
import { getEditions } from "@/lib/editions";

export const metadata: Metadata = { title: "History" };

export default function ArchivePage() {
  const editions = [...getEditions()].reverse();

  return (
    <>
      <PageHeader eyebrow="History" title={["The record."]}>
        Every Away Game is another chapter: the edition number, the destination, the name and the result.
      </PageHeader>
      <section className="bg-ivory pb-24">
        <ul className="frame border-b border-rule">
          {editions.map((e) => (
            <ArchiveEntry key={e.number} edition={e} />
          ))}
        </ul>
      </section>
    </>
  );
}
