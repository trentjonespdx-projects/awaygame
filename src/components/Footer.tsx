import Link from "next/link";
import { navigation, site } from "@/content/site";
import { getEditions } from "@/lib/editions";
import { ArchiveEntry } from "@/components/ArchiveEntry";

export function Footer() {
  const editions = getEditions();

  return (
    <footer className="bg-ink text-ivory">
      <div className="frame pb-10 pt-20 lg:pt-28">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <div>
            <p className="type-mark text-[clamp(64px,8vw,128px)]">
              Away
              <br />
              Game
            </p>
            <p className="type-tagline mt-7 text-[13px] text-ivory/70">Every shot counts.</p>
          </div>

          <div>
            <p className="type-label mb-2 text-ivory/55">The Editions</p>
            <ul className="border-b border-ivory/15">
              {editions.map((e) => (
                <ArchiveEntry key={e.number} edition={e} tone="dark" />
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-8 border-t border-ivory/15 pt-8 lg:flex-row lg:items-center lg:justify-between">
          <ul className="flex flex-wrap gap-x-8 gap-y-4">
            {navigation.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="link-rule type-label text-ivory/75 hover:text-ivory">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="type-label text-ivory/45">
            {site.tagline.join(" ")} &nbsp;·&nbsp; Est. 2027
          </p>
        </div>
      </div>
    </footer>
  );
}
