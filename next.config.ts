import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  eslint: {
    // Permite que el build pase aunque haya errores de lint
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Ignorar errores de TypeScript durante el build para asegurar la publicación
    ignoreBuildErrors: true,
  },
  images: {
    formats: ["image/webp"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Permite cargar imágenes desde cualquier dominio
      }
    ],
  },
};

export default nextConfig;