/**
 * Every Away Game is an edition. Adding a new year means adding an entry here;
 * the homepage, /[edition] pages, archive and footer all read from this list.
 */

export type EditionStatus = "complete" | "upcoming" | "tbd";

export type Edition = {
  /** Sequential edition number: 1 → "001". */
  number: number;
  /** Event name, or null until it's announced. */
  name: string | null;
  /** Optional hand-set line breaks for the name on display panels. */
  nameLines?: string[];
  destination: {
    city: string;
    region: string;
    /** Short form used in tight spots, e.g. the nav button. */
    short: string;
  } | null;
  /** "Spring", "April", etc. Optional — the year always shows. */
  season?: string;
  year: number;
  status: EditionStatus;
  summary?: string;
  courses?: string[];
  result?: { winner: string; score: string };
  image?: { src: string; alt: string };
};

export const editions: Edition[] = [
  {
    number: 1,
    name: "The High Desert Classic",
    nameLines: ["The High", "Desert", "Classic"],
    destination: { city: "Bend", region: "Oregon", short: "Bend" },
    season: "Spring",
    year: 2027,
    status: "upcoming",
    summary:
      "The first Away Game goes to Central Oregon: ponderosa pine, volcanic rock and the Cascades on the horizon. Three rounds, sixteen points, one trophy.",
    image: { src: "/images/destinations.jpg", alt: "A desert golf course below a mountain range" },
  },
  {
    number: 2,
    name: null,
    destination: null,
    year: 2028,
    status: "tbd",
  },
];
