import type { Metadata } from "next";
import { PageHeader, InPreparation } from "@/components/PageHeader";
import { FormatSection } from "@/components/FormatSection";

export const metadata: Metadata = { title: "Format" };

export default function FormatPage() {
  return (
    <>
      <PageHeader eyebrow="Format" title={["Every shot", "counts."]}>
        Two teams of eight. Three competitive rounds. Sixteen points on the board, and every player plays his own ball on
        every hole.
      </PageHeader>
      <div className="border-t border-rule">
        <FormatSection showLink={false} />
      </div>
      <InPreparation note="Full rules, tiebreaks and handicap allowances to follow." />
    </>
  );
}
