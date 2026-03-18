import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // This tells Next.js to make the "out" folder
  images: {
    unoptimized: true, // Required for static exports so your logos show up
  },
};

export default nextConfig;
