
import Script from 'next/script';

export default function BioaquaRiceLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* 
        TikTok Pixel Base Code removido de aquí para centralizarse en el layout raíz.
        Se mantiene el layout para futuras configuraciones específicas de Bioaqua.
      */}
      {children}
    </>
  );
}
