import type {Metadata} from 'next';
import './globals.css';
import { FirebaseClientProvider } from '@/firebase/client-provider';

export const metadata: Metadata = {
  title: 'Romi Store EC | Crema V7 Bioaqua Ecuador',
  description: 'Tienda oficial Romi Store. Descubre la Crema V7 Bioaqua en Ecuador. Efecto porcelana instantáneo con 7 vitaminas. Pago contra entrega en todo el país.',
  metadataBase: new URL('https://romi-store.com'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: 'https://i.imgur.com/bUaJbMD.png', // Imagen del producto Bioaqua V7 en la pestaña
    shortcut: 'https://i.imgur.com/bUaJbMD.png',
    apple: 'https://i.imgur.com/bUaJbMD.png',
  },
  openGraph: {
    title: 'Romi Store EC | Crema V7 Bioaqua',
    description: 'Piel de porcelana al instante con la Crema V7 de 7 Vitaminas. Envío a todo Ecuador y ¡Pagas al recibir!',
    url: 'https://romi-store.com/bioaqua-v7',
    siteName: 'Romi Store EC',
    images: [
      {
        url: 'https://i.imgur.com/bUaJbMD.png', // Foto que se ve al compartir el link
        width: 800,
        height: 600,
        alt: 'Crema V7 Bioaqua Ecuador',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Romi Store EC | Crema V7 Bioaqua',
    description: 'Piel de porcelana al instante. Envío a todo Ecuador.',
    images: ['https://i.imgur.com/bUaJbMD.png'],
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
