import { format } from "@/content/site";
import { ButtonLink, Eyebrow } from "@/components/ui";
import { Reveal } from "@/components/Reveal";

/** Three rounds, sixteen points. Ivory, ruled, typographic. */
export function FormatSection({ showLink = true }: { showLink?: boolean }) {
  return (
    <section className="bg-ivory py-20 lg:py-[clamp(64px,6.5vw,104px)]" aria-labelledby="format-heading">
      <div className="frame">
        <Eyebrow className="mb-8 lg:mb-10">{format.eyebrow}</Eyebrow>

        <div className="grid gap-14 lg:grid-cols-[minmax(0,1.9fr)_repeat(3,minmax(0,1fr))] lg:gap-0">
          <Reveal className="lg:pr-12">
            <h2 id="format-heading" className="type-headline text-[clamp(40px,3.1vw,52px)]">
              {format.headline.map((line) => (
                <span key={line} className="block lg:whitespace-nowrap">
                  {line}
                </span>
              ))}
            </h2>
            <p className="type-body mt-7 max-w-[30em] text-ink/80">
              {format.body.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
            {showLink && (
              <ButtonLink href="/format/" className="mt-10 min-w-[262px]">
                View Full Format
              </ButtonLink>
            )}
          </Reveal>

          <ol className="contents">
            {format.rounds.map((round, i) => (
              <Reveal
                as="li"
                key={round.code}
                delay={120 * (i + 1)}
                className="grid grid-cols-[1fr_1.15fr] gap-6 border-t border-rule pt-7 sm:grid-cols-[1fr_1.4fr] lg:block lg:border-l lg:border-t-0 lg:px-[clamp(24px,3vw,44px)] lg:pt-0"
              >
                <div>
                  <p className="type-label text-[10px] tracking-[0.14em]">{round.code}</p>
                  <h3 className="type-headline mt-4 text-[clamp(26px,2.2vw,32px)] tracking-[0.02em] lg:mt-7">{round.name}</h3>
                  <p className="type-label mt-5 leading-[1.9] tracking-[0.3em] text-ink/85">
                    {round.matches} Matches
                    <br />
                    {round.points} Points
                  </p>
                </div>
                <div>
                  <span aria-hidden className="hidden h-px w-7 bg-ink/40 lg:mb-7 lg:mt-9 lg:block" />
                  <p className="type-body text-[15px] text-ink/80">
                    {round.lines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
