import type { Metadata, Viewport } from "next";
import { Archivo, IBM_Plex_Serif } from "next/font/google";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { site } from "@/content/site";
import "./globals.css";

// Archivo is variable on weight and width: one family covers the heavy
// wordmark, the condensed headlines and the small tracked labels.
const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

const plexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-plex-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: { default: "Away Game — Eight vs. Eight. Somewhere Else.", template: "%s — Away Game" },
  description: site.description,
  openGraph: {
    title: "Away Game",
    description: site.description,
    images: ["/images/hero.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#F4F0E7",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${archivo.variable} ${plexSerif.variable} no-js`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.remove('no-js')",
          }}
        />
      </head>
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
