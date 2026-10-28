import type { Edition } from "@/content/editions";
import { EditionCard } from "@/components/EditionCard";
import { PhotoPanel } from "@/components/PhotoPanel";

/** Three-panel band under the hero: the players, the edition, the flag. */
export function EditionShowcase({ edition }: { edition: Edition }) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:h-[clamp(440px,32vw,600px)] lg:grid-cols-3" aria-label="The inaugural event">
      <PhotoPanel
        image={{ src: "/images/players.jpg", alt: "Four golfers in caps walking away together, bags over their shoulders" }}
        mono
        shade
        className="aspect-[4/3.4] md:aspect-square lg:aspect-auto"
      >
        <div className="absolute bottom-0 left-0 p-7 text-ivory lg:p-[clamp(28px,3.2vw,52px)]">
          <p className="type-display text-[clamp(26px,2.4vw,36px)] tracking-[0.07em]">16 Players</p>
          <p className="type-label mt-4 leading-[1.75] tracking-[0.18em]">
            Two teams. One weekend.
            <br />
            Every man plays his own ball.
          </p>
        </div>
      </PhotoPanel>

      <EditionCard edition={edition} className="order-first md:col-span-2 lg:order-none lg:col-span-1" />

      <PhotoPanel
        image={{ src: "/images/flag.jpg", alt: "A white Away Game flag on the pin, mountains soft in the background" }}
        mono
        className="aspect-[16/11] md:aspect-square lg:aspect-auto"
      />
    </section>
  );
}
