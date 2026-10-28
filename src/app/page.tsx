import { Hero } from "@/components/Hero";
import { EditionShowcase } from "@/components/EditionShowcase";
import { FormatSection } from "@/components/FormatSection";
import { FeatureGrid } from "@/components/FeatureTile";
import { features } from "@/content/site";
import { editionCode, editionHref, getCurrentEdition } from "@/lib/editions";

export default function HomePage() {
  const edition = getCurrentEdition();

  return (
    <>
      <Hero
        image={{ src: "/images/hero.jpg", alt: "A golfer walks toward the course in late-afternoon light, mountains in the distance" }}
        cta={{ label: `Explore ${editionCode(edition)}`, href: editionHref(edition) }}
      />
      <EditionShowcase edition={edition} />
      <FormatSection />
      <FeatureGrid features={features} />
    </>
  );
}
