import type { NextConfig } from "next";

// Static export: the whole site builds to /out and can be hosted anywhere
// (Vercel, Netlify, GitHub Pages, S3). Remove `output` to use a Node server.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
