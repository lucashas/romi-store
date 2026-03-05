import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  eslint: {
    // Permite que el build pase aunque haya errores de lint
    ignoreDuringBuilds: true
  },
  typescript: {
    // Permite que el build pase aunque haya errores de tipos
    ignoreBuildErrors: true
  },
  images: {
    formats: ["image/webp"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      }
    ],
  },
};

export default nextConfig;
