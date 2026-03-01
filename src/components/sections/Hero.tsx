"use client";

import Image from "next/image";

export function Hero() {
  const heroImgUrl = "https://i.imgur.com/XfmwUEJ.png";

  return (
    <section className="relative w-full h-[95vh] flex flex-col overflow-hidden bg-[#4a2c1d]">
      {/* Imagen Principal - Ocupa todo el espacio disponible */}
      <div className="relative flex-1 w-full">
        <Image 
          src={heroImgUrl} 
          alt="MaryRuth's Organics - Anuncio Principal"
          fill
          className="object-cover object-top"
          priority
          sizes="500px"
        />
        
        {/* Capa de acento visual inferior para transición suave */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#4a2c1d] to-transparent" />
      </div>

      {/* Banner Informativo Inferior (Estilo TikTok Funnel) */}
      <div className="w-full bg-[#4a2c1d] py-6 shadow-[0_-10px_30px_rgba(0,0,0,0.3)] relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="flex items-center gap-3 w-full justify-center">
              <span className="h-px flex-1 bg-white/20" />
              <p className="text-white font-black text-[10px] uppercase tracking-[0.2em] whitespace-nowrap">
                Vitalidad Premium
              </p>
              <span className="h-px flex-1 bg-white/20" />
            </div>
            <p className="text-center text-white font-bold text-[11px] uppercase tracking-[0.15em] leading-tight">
              CRECIMIENTO CAPILAR • ANTI-ENVEJECIMIENTO • NUTRICIÓN
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
