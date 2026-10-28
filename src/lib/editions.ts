import { editions, type Edition } from "@/content/editions";

/** 1 → "001" */
export const editionCode = (e: Pick<Edition, "number">) => String(e.number).padStart(3, "0");

export const editionHref = (e: Pick<Edition, "number">) => `/${editionCode(e)}/`;

export const editionName = (e: Edition) => e.name ?? "Event name TBD";

export const editionPlace = (e: Edition) =>
  e.destination ? `${e.destination.city}, ${e.destination.region}` : "Destination TBD";

export const editionDate = (e: Edition) => [e.season, e.year].filter(Boolean).join(" ");

export const getEditions = () => [...editions].sort((a, b) => a.number - b.number);

export const getEdition = (code: string) => editions.find((e) => editionCode(e) === code);

/** The edition the site is currently pointing at: the next upcoming one, else the latest. */
export function getCurrentEdition(): Edition {
  const sorted = getEditions();
  return sorted.find((e) => e.status === "upcoming") ?? sorted[sorted.length - 1];
}
