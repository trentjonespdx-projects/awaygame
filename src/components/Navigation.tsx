"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navigation } from "@/content/site";
import { editionCode, editionHref, getCurrentEdition } from "@/lib/editions";

const current = getCurrentEdition();
const editionLabel = `${editionCode(current)} / ${current.destination?.short ?? "TBD"}`;

export function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-500 ${
        solid ? "border-b border-rule bg-ivory" : "border-b border-transparent"
      }`}
    >
      <nav
        className={`frame flex items-center justify-between transition-[height] duration-500 ease-editorial ${
          scrolled ? "h-16" : "h-[76px] lg:h-[96px]"
        }`}
        aria-label="Primary"
      >
        <Link href="/" className="type-mark text-[21px] text-ink lg:text-[27px]" aria-label="Away Game — home">
          Away Game
        </Link>

        <ul className="hidden items-center gap-[clamp(28px,3.4vw,50px)] lg:ml-12 lg:flex lg:flex-1">
          {navigation.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="link-rule type-label text-ink"
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-5">
          <Link
            href={editionHref(current)}
            className="type-label hidden h-[48px] items-center bg-forest px-7 text-ivory transition-colors duration-300 hover:bg-ink sm:inline-flex"
          >
            {editionLabel}
          </Link>
          <button
            type="button"
            className="type-label flex h-10 items-center gap-3 text-ink lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Close" : "Menu"}
            <span aria-hidden className="relative block h-[9px] w-[22px]">
              <span
                className={`absolute left-0 top-0 h-px w-full bg-current transition-transform duration-300 ${open ? "translate-y-[4px] rotate-45" : ""}`}
              />
              <span
                className={`absolute bottom-0 left-0 h-px w-full bg-current transition-transform duration-300 ${open ? "-translate-y-[4px] -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-x-0 bottom-0 bg-ivory transition-opacity duration-500 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        style={{ top: scrolled ? 64 : 76 }}
      >
        <div className="frame flex h-full flex-col justify-between pb-10 pt-8">
          <ul className="border-t border-rule">
            {navigation.map((item, i) => (
              <li key={item.label} className="border-b border-rule">
                <Link href={item.href} className="flex items-baseline justify-between py-5">
                  <span className="type-headline text-[40px] leading-none">{item.label}</span>
                  <span className="type-label text-stone">{String(i + 1).padStart(2, "0")}</span>
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href={editionHref(current)}
            className="type-label flex h-14 items-center justify-center bg-forest text-ivory"
          >
            {editionLabel}
          </Link>
        </div>
      </div>
    </header>
  );
}
