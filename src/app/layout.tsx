import type {Metadata} from 'next';
import './globals.css';
import { FirebaseClientProvider } from '@/firebase/client-provider';

export const metadata: Metadata = {
  title: 'Romi Store EC | MaryRuth\'s Organics Ecuador',
  description: 'Tienda oficial Romi Store. Descubre MaryRuth\'s Organics en Ecuador. Suplementos líquidos premium con envío gratis y pago contra entrega en todo el país.',
  metadataBase: new URL('https://romi-store.com'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: 'https://i.imgur.com/XfmwUEJ.png', // Esta imagen aparecerá en la pestaña del navegador
    shortcut: 'https://i.imgur.com/XfmwUEJ.png',
    apple: 'https://i.imgur.com/XfmwUEJ.png',
  },
  openGraph: {
    title: 'Romi Store EC | MaryRuth\'s Organics',
    description: 'Suplementos orgánicos premium con envío gratis a todo Ecuador. ¡Paga al recibir!',
    url: 'https://romi-store.com/mary-ruth',
    siteName: 'Romi Store EC',
    images: [
      {
        url: 'https://i.imgur.com/XfmwUEJ.png', // Esta es la foto que se ve al compartir el link
        width: 800,
        height: 600,
        alt: 'MaryRuth\'s Organics Ecuador',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Romi Store EC | MaryRuth\'s Organics',
    description: 'Suplementos orgánicos premium con envío gratis a todo Ecuador.',
    images: ['https://i.imgur.com/XfmwUEJ.png'],
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
