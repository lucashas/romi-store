
"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Hero() {
  const heroImg = PlaceHolderImages.find(img => img.id === "hero-main");
  const heroImgUrl = heroImg?.imageUrl || "https://i.imgur.com/XfmwUEJ.png"; 

  return (
    <section className="relative w-full h-[90vh] flex flex-col overflow-hidden bg-[#4a2c1d]">
      {/* Imagen Principal - Ocupa el 100% del viewport móvil de forma inmersiva */}
      <div className="relative flex-1 w-full h-full">
        <Image 
          src={heroImgUrl} 
          alt="MaryRuth's Organics - Promo TikTok"
          fill
          className="object-cover object-center"
          priority
          sizes="500px"
        />
        
        {/* Capa de acento visual inferior para transición suave */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#4a2c1d] to-transparent" />
      </div>

      {/* Banner Informativo Inferior (Estilo TikTok Funnel) */}
      <div className="w-full bg-[#4a2c1d] py-4 shadow-[0_-10px_30px_rgba(0,0,0,0.3)] relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center gap-1">
            <div className="flex items-center gap-3 w-full justify-center">
              <span className="h-px flex-1 bg-white/20" />
              <p className="text-white font-black text-[9px] uppercase tracking-[0.2em] whitespace-nowrap">
                Vitalidad Premium
              </p>
              <span className="h-px flex-1 bg-white/20" />
            </div>
            <p className="text-center text-white font-bold text-[10px] uppercase tracking-[0.1em] leading-tight">
              ENVÍO GRATIS • ABSORCIÓN INMEDIATA • 100% ORGÁNICO
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
