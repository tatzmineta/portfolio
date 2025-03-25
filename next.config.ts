import type { NextConfig } from "next";

const IS_DEV = process.env.NODE_ENV === "development";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath: IS_DEV ? "" : "/portfolio",
};

export default nextConfig;
