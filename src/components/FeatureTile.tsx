import Link from "next/link";
import { PhotoPanel } from "@/components/PhotoPanel";
import { Arrow } from "@/components/ui";

export type Feature = {
  title: string;
  subtext?: string;
  cta: string;
  href: string;
  image: { src: string; alt: string };
};

/** Editorial image tile: the whole frame is the link; the outlined CTA is its label. */
export function FeatureTile({ feature }: { feature: Feature }) {
  return (
    <Link href={feature.href} className="group/btn block focus-visible:outline-offset-[-6px]">
      <PhotoPanel
        image={feature.image}
        shade
        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
        className="aspect-[4/4.6] sm:aspect-[3/4] lg:aspect-[0.78]"
      >
        <div className="absolute inset-x-0 bottom-0 p-7 text-ivory lg:p-[clamp(24px,3.2vw,46px)]">
          <h3 className="type-label text-[13px] tracking-[0.24em] lg:text-[clamp(12px,1vw,15px)]">{feature.title}</h3>
          {/* Fixed-height line so titles align across tiles whether or not they carry subtext. */}
          <p className="mt-3 min-h-[21px] font-serif text-[14px] italic text-ivory/80">{feature.subtext}</p>
          <span className="type-label mt-4 flex h-[50px] w-full max-w-[260px] items-center justify-between border border-ivory/75 px-7 transition-colors duration-300 group-hover/btn:bg-ivory group-hover/btn:text-ink">
            {feature.cta}
            <Arrow />
          </span>
        </div>
      </PhotoPanel>
    </Link>
  );
}

export function FeatureGrid({ features }: { features: Feature[] }) {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" aria-label="Away Game">
      {features.map((f) => (
        <FeatureTile key={f.title} feature={f} />
      ))}
    </section>
  );
}
