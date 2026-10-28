import Image from "next/image";
import { site } from "@/content/site";
import { ButtonLink } from "@/components/ui";

type HeroProps = {
  image: { src: string; alt: string };
  cta: { label: string; href: string };
};

/**
 * Full-bleed cinematic photograph with the wordmark set into the left of the frame.
 * On small screens the supporting copy drops below the photo so the image stays clean.
 */
export function Hero({ image, cta }: HeroProps) {
  return (
    <>
      <section className="relative h-[92svh] min-h-[560px] overflow-hidden bg-sand md:h-[100svh] md:min-h-[640px] md:max-h-[1000px]">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority
          sizes="100vw"
          className="animate-settle object-cover object-[74%_center] md:object-[center_60%]"
        />
        {/* Soft wash keeps the dark type legible without visibly covering the photograph. */}
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(244,240,231,0.62)_0%,rgba(244,240,231,0.18)_38%,rgba(244,240,231,0)_55%)] md:bg-[linear-gradient(90deg,rgba(244,240,231,0.5)_0%,rgba(244,240,231,0.26)_30%,rgba(244,240,231,0)_52%)]"
        />

        <div className="frame relative flex h-full flex-col pt-[112px] md:justify-center md:pb-[4vh] md:pt-[96px]">
          <h1 className="type-mark text-[clamp(104px,29vw,150px)] text-ink [font-stretch:74%] md:text-[clamp(110px,13.4vw,216px)]">
            <span className="block">Away</span>
            <span className="block">Game</span>
          </h1>

          <p className="type-tagline mt-[clamp(20px,2.4vw,36px)] text-[clamp(15px,1.85vw,27px)] text-ink/90">
            {site.tagline.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>

          <div className="hidden md:block">
            <p className="type-body mt-6 text-ink/85">
              {site.intro.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
            <ButtonLink href={cta.href} className="mt-9 min-w-[232px]">
              {cta.label}
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* Mobile: copy + CTA under the photograph */}
      <section className="frame bg-ivory py-12 md:hidden">
        <p className="type-body text-[17px] text-ink/85">
          {site.intro.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </p>
        <ButtonLink href={cta.href} className="mt-8 w-full">
          {cta.label}
        </ButtonLink>
      </section>
    </>
  );
}
