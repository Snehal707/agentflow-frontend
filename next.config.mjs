import path from "path";
import { fileURLToPath } from "url";
import nextEnv from "@next/env";

const { loadEnvConfig } = nextEnv;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Monorepo: Next only loads .env from this app dir by default. Merge repo-root
// .env / .env.local so OPENAI_API_KEY and other secrets can live in agent-economy/.env
// (values in agentflow-frontend/.env.local still override when Next loads them after).
const monorepoRoot = path.resolve(__dirname, "..");
loadEnvConfig(monorepoRoot);

/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: process.env.NODE_ENV === "development" ? ".next-dev" : ".next",
  experimental: {
    optimizePackageImports: [
      "@rainbow-me/rainbowkit",
      "wagmi",
      "viem",
      "@tanstack/react-query",
    ],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@react-native-async-storage/async-storage": path.resolve(
        __dirname,
        "lib/shims/async-storage.ts",
      ),
      "pino-pretty": path.resolve(__dirname, "lib/shims/pino-pretty.ts"),
    };

    return config;
  },
};

export default nextConfig;
