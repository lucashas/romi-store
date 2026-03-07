
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

/**
 * Página raíz que redirige al usuario a la tienda principal.
 * Se implementa como Client Component para evitar errores de hidratación
 * y problemas con los chunks de Webpack en el servidor durante la redirección inicial.
 */
export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirección suave al catálogo principal de Bioaqua
    router.replace('/bioaqua-arroz');
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-6 animate-in fade-in duration-1000">
        <div className="h-16 w-16 rounded-full border-4 border-yellow-600 border-t-transparent animate-spin shadow-lg" />
        <div className="space-y-2 text-center">
          <h1 className="text-xl font-black text-slate-900 uppercase tracking-tighter">ROMI STORE EC</h1>
          <p className="text-sm font-bold text-yellow-600 uppercase tracking-[0.3em] animate-pulse">Cargando experiencia...</p>
        </div>
      </div>
    </div>
  );
}
