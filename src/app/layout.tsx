
import type {Metadata} from 'next';
import './globals.css';
import { FirebaseClientProvider } from '@/firebase/client-provider';

export const metadata: Metadata = {
  title: 'Romi Store EC | Kit Piel de Porcelana Bioaqua',
  description: 'Rutina completa de 6 pasos para una piel radiante. Envío a todo Ecuador y ¡Pagas al recibir!',
  metadataBase: new URL('https://romi-store-ec.web.app'),
  icons: {
    icon: 'https://i.imgur.com/aSjVyM2.png',
    shortcut: 'https://i.imgur.com/aSjVyM2.png',
    apple: 'https://i.imgur.com/aSjVyM2.png',
  },
  openGraph: {
    title: 'Romi Store EC | Kit Piel de Porcelana Bioaqua',
    description: 'Consigue una piel de porcelana con el Kit de Arroz Bioaqua. ¡Pagas al recibir!',
    images: [{ url: 'https://i.imgur.com/aSjVyM2.png' }],
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
