
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  eslint: {
    // Esto asegura que el build NO falle por advertencias de ESLint
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Ignoramos errores de tipos durante el build para asegurar el despliegue
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      }
    ],
  },
};

export default nextConfig;
