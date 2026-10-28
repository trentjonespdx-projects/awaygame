/**
 * Site-wide copy, navigation and the format of play.
 * Photography lives in /public/images — see IMAGES.md for the shot list.
 */

import { editionHref, getCurrentEdition } from "@/lib/editions";

const current = editionHref(getCurrentEdition());

export const site = {
  name: "Away Game",
  tagline: ["Eight vs. eight.", "Somewhere else."],
  description: "An annual golf match for sixteen friends. New destination. Same competition.",
  intro: [
    "An annual golf match for sixteen friends.",
    "New destination. Same competition.",
    "Leave real life at home.",
  ],
};

export const navigation = [
  { label: "The Event", href: current },
  { label: "Format", href: "/format/" },
  { label: "History", href: "/archive/" },
  { label: "Destinations", href: "/destinations/" },
  { label: "The Trophy", href: "/trophy/" },
] as const;

export const format = {
  eyebrow: "The Format",
  headline: ["Three rounds.", "Sixteen points.", "Every shot counts."],
  body: [
    "A Ryder Cup-inspired match with no gimmicks.",
    "Every player competes with his own ball in every round.",
  ],
  rounds: [
    {
      code: "01",
      name: "Four-Ball",
      matches: 4,
      points: 4,
      lines: ["Two-man teams.", "Best score counts.", "Every player plays", "his own ball."],
    },
    {
      code: "02",
      name: "Aggregate",
      matches: 4,
      points: 4,
      lines: ["Two-man teams.", "Both scores count", "on every hole.", "Every player plays", "his own ball."],
    },
    {
      code: "03",
      name: "Singles",
      matches: 8,
      points: 8,
      lines: ["Head-to-head.", "One match per player.", "Every player plays", "his own ball."],
    },
  ],
};

export const features = [
  {
    title: "The Trophy",
    subtext: "A record of every Away Game.",
    cta: "View Trophy",
    href: "/trophy/",
    image: { src: "/images/trophy.jpg", alt: "A silver two-handled cup engraved Away Game" },
  },
  {
    title: "The Teams",
    cta: "How It Works",
    href: "/teams/",
    image: { src: "/images/teams.jpg", alt: "Two golfers seen from behind, looking out over a green" },
  },
  {
    title: "The Destinations",
    cta: "Past + Future",
    href: "/destinations/",
    image: { src: "/images/destinations.jpg", alt: "A desert golf course below a mountain range" },
  },
  {
    title: "The Experience",
    cta: "More Than Golf",
    href: current,
    image: { src: "/images/experience.jpg", alt: "Friends around a lantern-lit table after the round" },
  },
];
