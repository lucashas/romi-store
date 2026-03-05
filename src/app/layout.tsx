import type { Metadata } from 'next';
import './globals.css';
import { FirebaseClientProvider } from '@/firebase/client-provider';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Romi Store EC | Kit Piel de Porcelana Bioaqua',
  description: 'Rutina completa de 6 pasos para una piel radiante con Bioaqua Rice Raw Pulp. Envíos rápidos a todo Ecuador y ¡Pagas al recibir en tu casa!',
  metadataBase: new URL('https://romi-store.com'),
  icons: {
    icon: 'https://i.imgur.com/aSjVyM2.png',
    shortcut: 'https://i.imgur.com/aSjVyM2.png',
    apple: 'https://i.imgur.com/aSjVyM2.png',
  },
  openGraph: {
    title: 'Romi Store EC | Kit Piel de Porcelana Bioaqua',
    description: 'Consigue una piel de porcelana con el Kit de Arroz Bioaqua. ¡Pagas al recibir!',
    url: 'https://romi-store.com/bioaqua-arroz',
    siteName: 'Romi Store EC',
    images: [
      {
        url: 'https://i.imgur.com/aSjVyM2.png',
        width: 800,
        height: 800,
        alt: 'Kit Piel de Porcelana Bioaqua Rice',
      },
    ],
    locale: 'es_EC',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning className={poppins.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
      </head>
      <body className="font-body antialiased selection:bg-accent selection:text-accent-foreground" suppressHydrationWarning>
        <FirebaseClientProvider>
          {children}
        </FirebaseClientProvider>
      </body>
    </html>
  );
}