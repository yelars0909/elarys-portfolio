import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages serves static files only; export to plain HTML/CSS/JS.
  // basePath is set at build time via BASE_PATH (repo name) for
  // username.github.io/<repo>/ deployments.
  output: "export",
  basePath: process.env.BASE_PATH || "",
};

export default nextConfig;
