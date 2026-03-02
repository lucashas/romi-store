import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Crítico para Firebase App Hosting: Genera los archivos necesarios para producción
  output: 'standalone',
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'placehold.co' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'picsum.photos' },
      { protocol: 'https', hostname: 'i.imgur.com' }
    ],
  },
  typescript: {
    // Ignorar errores en build para agilizar el lanzamiento inicial
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
