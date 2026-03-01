
"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Hero() {
  const heroImg = PlaceHolderImages.find(img => img.id === "hero-main");

  return (
    <section className="relative w-full h-[90vh] flex flex-col">
      {/* Contenedor principal de la imagen: ahora usa object-cover para llenar todo el espacio */}
      <div className="relative flex-1 w-full overflow-hidden">
        {heroImg && (
          <Image 
            src={heroImg.imageUrl} 
            alt="MaryRuth's Organics - Vitalidad y Belleza Natural"
            fill
            className="object-cover object-center"
            priority
            sizes="(max-width: 500px) 100vw, 500px"
          />
        )}
        
        {/* Capa de acento visual en la parte inferior para dar profundidad y transición suave */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#4a2c1d]/60 to-transparent" />
      </div>

      {/* Banner Informativo Inferior (Café Oscuro) - Integrado al final del Hero */}
      <div className="w-full bg-[#4a2c1d] py-6 shadow-[0_-15px_40px_rgba(0,0,0,0.3)] relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center gap-3">
            <div className="flex items-center gap-4 w-full justify-center">
              <span className="h-px flex-1 bg-white/10" />
              <p className="text-white font-black text-[10px] uppercase tracking-[0.3em] whitespace-nowrap">
                Vitalidad Premium
              </p>
              <span className="h-px flex-1 bg-white/10" />
            </div>
            <p className="text-center text-white/90 font-bold text-[11px] uppercase tracking-[0.15em] leading-relaxed">
              CRECIMIENTO CAPILAR • ANTI-ENVEJECIMIENTO • NUTRICIÓN
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
