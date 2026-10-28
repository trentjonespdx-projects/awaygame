import type { Metadata } from "next";
import { PageHeader, InPreparation } from "@/components/PageHeader";

export const metadata: Metadata = { title: "The Trophy" };

export default function TrophyPage() {
  return (
    <>
      <PageHeader eyebrow="The Trophy" title={["A record of", "every Away Game."]}>
        One cup. Every winning team, every destination and every score engraved on its base, edition by edition.
      </PageHeader>
      <InPreparation note="The first name goes on the cup in Bend, Spring 2027." />
    </>
  );
}
