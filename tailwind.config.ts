import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    screens: { sm: "640px", md: "768px", lg: "1024px", xl: "1280px", "2xl": "1536px" },
    extend: {
      colors: {
        ivory: "#F4F0E7",
        paper: "#F8F5EE",
        ink: "#111613",
        forest: { DEFAULT: "#14251D", deep: "#0E1A14" },
        stone: "#A9A296",
        sand: "#D6C8AC",
        brown: "#6E5138",
        rule: "rgba(17, 22, 19, 0.16)",
      },
      fontFamily: {
        sans: ["var(--font-archivo)", "Helvetica Neue", "Arial", "sans-serif"],
        serif: ["var(--font-plex-serif)", "Georgia", "serif"],
      },
      maxWidth: { frame: "1440px" },
      transitionTimingFunction: { editorial: "cubic-bezier(0.22, 0.61, 0.36, 1)" },
    },
  },
  plugins: [],
};

export default config;
