
import type { Metadata } from 'next';
import './globals.css';
import { FirebaseClientProvider } from '@/firebase/client-provider';
import { Poppins } from 'next/font/google';
import Script from 'next/script';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Shilajit Ultra | Romi Store EC',
  description: 'Shilajit Ultra – Resina pura con más de 84 minerales. Potencia, vigor y vitalidad natural. Envíos a todo Ecuador, pagas al recibir.',
  metadataBase: new URL('https://romi-store.com'),
  icons: {
    icon: 'https://i.imgur.com/DwO3E2c.png',
    shortcut: 'https://i.imgur.com/DwO3E2c.png',
    apple: 'https://i.imgur.com/DwO3E2c.png',
  },
  openGraph: {
    title: 'Shilajit Ultra | Potencia y Vitalidad Natural',
    description: 'Shilajit Ultra – Resina pura con más de 84 minerales. Potencia, vigor y vitalidad natural.',
    url: 'https://romi-store.com/shilajit-ultra',
    siteName: 'Romi Store EC',
    images: [
      {
        url: 'https://i.imgur.com/DwO3E2c.png',
        width: 800,
        height: 800,
        alt: 'Shilajit Ultra Potencia Natural',
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
        {/* TikTok Pixel Base Code Placeholder */}
        <Script id="tiktok-pixel" strategy="afterInteractive">
          {`
            // Aquí irá el código base del Pixel de TikTok (ttq.load).
          `}
        </Script>
      </head>
      <body className="font-body antialiased selection:bg-accent selection:text-accent-foreground" suppressHydrationWarning>
        <FirebaseClientProvider>
          {children}
        </FirebaseClientProvider>
      </body>
    </html>
  );
}
