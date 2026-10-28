import type { Metadata } from "next";
import { PageHeader, InPreparation } from "@/components/PageHeader";

export const metadata: Metadata = { title: "The Teams" };

export default function TeamsPage() {
  return (
    <>
      <PageHeader eyebrow="The Teams" title={["Eight vs.", "eight."]}>
        Sixteen players, split into two teams of eight. Captains, rosters and pairings are announced before each edition.
      </PageHeader>
      <InPreparation note="Captains, rosters and pairings for 001 to be announced." />
    </>
  );
}
