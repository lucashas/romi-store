import type { Metadata } from 'next';
import './globals.css';
import { FirebaseClientProvider } from '@/firebase/client-provider';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
});

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