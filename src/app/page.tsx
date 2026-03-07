
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

/**
 * Página raíz que redirige al usuario a la tienda principal de Shilajit Ultra.
 * Se implementa como Client Component para asegurar una redirección limpia
 * después de la hidratación inicial.
 */
export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirección suave a la landing de Shilajit Ultra
    router.replace('/shilajit-ultra');
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="flex flex-col items-center gap-6 animate-in fade-in duration-1000">
        <div className="h-16 w-16 rounded-full border-4 border-[#DAA520] border-t-transparent animate-spin shadow-[0_0_20px_rgba(218,165,32,0.3)]" />
        <div className="space-y-2 text-center">
          <h1 className="text-xl font-black text-white uppercase tracking-tighter">ROMI STORE EC</h1>
          <p className="text-sm font-bold text-[#DAA520] uppercase tracking-[0.3em] animate-pulse">Iniciando experiencia...</p>
        </div>
      </div>
    </div>
  );
}
