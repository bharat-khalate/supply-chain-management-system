import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  pageExtensions: ["ts", "tsx"],
  // basePath: "/supplychain_erp",
  // trailingSlash: true,
  experimental: {},
  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },

};

export default nextConfig;
