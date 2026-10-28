# Away Game

Eight vs. eight. Somewhere else.

The site for Away Game, an annual destination golf match for sixteen friends.
Built with Next.js (App Router), React, TypeScript and Tailwind CSS, and exported as a static site.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static site in ./out
npm start          # serve ./out locally
```

`./out` can be deployed to any static host (Vercel, Netlify, Cloudflare Pages, GitHub Pages, S3).
Set `NEXT_PUBLIC_SITE_URL` to the production URL so social previews resolve.

## Structure

```
src/
  content/
    editions.ts    ← every Away Game, past and future (the edition system)
    site.ts        ← copy, navigation, the format, homepage feature tiles
  lib/editions.ts  ← helpers: "001" codes, links, current edition
  components/
    Navigation, Hero, EditionShowcase, EditionCard, PhotoPanel,
    FormatSection, FeatureTile (+ FeatureGrid), ArchiveEntry,
    PageHeader (+ InPreparation), Footer, Reveal, ui (ButtonLink, Arrow, Eyebrow)
  app/
    page.tsx               /            homepage
    [edition]/page.tsx     /001, /002…  one page per edition, generated from data
    format/ teams/ trophy/ destinations/ archive/   inner pages (light stubs for now)
public/
  images/      photography (see IMAGES.md)
  textures/    topographic contour texture
```

## Adding the next edition

Add an entry to `src/content/editions.ts`:

```ts
{
  number: 2,
  name: "The Something Invitational",
  nameLines: ["The Something", "Invitational"],   // optional hand-set line breaks
  destination: { city: "Kiawah Island", region: "South Carolina", short: "Kiawah" },
  season: "Spring",
  year: 2028,
  status: "upcoming",
  summary: "…",
  image: { src: "/images/002/hero.jpg", alt: "…" },
}
```

The page `/002/`, the archive, the destinations list and the footer pick it up automatically.
The nav button and the homepage feature the next `upcoming` edition (else the latest).
When an event finishes, set `status: "complete"` and add `result: { winner: "Team Pine", score: "9½–6½" }`.

## Design system

- **Type:** Archivo (variable weight and width) for the wordmark, condensed headlines and tracked labels;
  IBM Plex Serif for editorial copy. Utility classes `type-mark`, `type-headline`, `type-display`,
  `type-label`, `type-tagline`, `type-body` live in `src/app/globals.css`.
- **Colour:** `ivory`, `paper`, `ink`, `forest`, `forest-deep`, `stone`, `sand`, `brown` (see `tailwind.config.ts`).
- **Rules:** hard edges, no shadows, no rounded corners, 1px rules, rectangular buttons.
- **Motion:** slow image scale on hover, nav underline, gentle fade-up on scroll, hero settles on load.
  All of it is disabled under `prefers-reduced-motion`.
