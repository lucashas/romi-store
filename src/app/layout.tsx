import type {Metadata} from 'next';
import './globals.css';
import { FirebaseClientProvider } from '@/firebase/client-provider';

export const metadata: Metadata = {
  title: 'Romi Store EC | Kit Piel de Porcelana Bioaqua Ecuador',
  description: 'Consigue una piel de porcelana con el Kit de Arroz Bioaqua. Rutina de 6 pasos para un rostro radiante. ¡Pagas al recibir en todo Ecuador!',
  metadataBase: new URL('https://romi-store.com'),
  alternates: {
    canonical: '/bioaqua-arroz',
  },
  icons: {
    icon: 'https://i.imgur.com/aSjVyM2.png',
    shortcut: 'https://i.imgur.com/aSjVyM2.png',
    apple: 'https://i.imgur.com/aSjVyM2.png',
  },
  openGraph: {
    title: 'Romi Store EC | Kit Piel de Porcelana Bioaqua',
    description: 'Rutina completa de 6 pasos para una piel radiante. Envío a todo Ecuador y ¡Pagas al recibir!',
    url: 'https://romi-store.com/bioaqua-arroz',
    siteName: 'Romi Store EC',
    images: [
      {
        url: 'https://i.imgur.com/aSjVyM2.png',
        width: 800,
        height: 800,
        alt: 'Kit Piel de Porcelana Bioaqua Ecuador',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Romi Store EC | Kit Piel de Porcelana Bioaqua',
    description: 'Piel de porcelana al instante. Envío a todo Ecuador.',
    images: ['https://i.imgur.com/aSjVyM2.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased selection:bg-accent selection:text-accent-foreground" suppressHydrationWarning>
        <FirebaseClientProvider>
          {children}
        </FirebaseClientProvider>
      </body>
    </html>
  );
}
