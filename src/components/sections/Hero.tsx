"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Hero() {
  const heroImg = PlaceHolderImages.find(img => img.id === "hero-main");
  const heroImgUrl = heroImg?.imageUrl || "https://i.imgur.com/XfmwUEJ.png"; 

  return (
    <section className="relative w-full h-screen bg-[#4a2c1d] px-[5px] pt-[5px]">
      {/* Contenedor principal */}
      <div className="relative w-full h-full overflow-hidden">
        <Image 
          src={heroImgUrl} 
          alt="MaryRuth's Organics - Promo TikTok"
          fill
          className="object-contain"
          priority
          sizes="500px"
        />
      </div>
      
      {/* Banner Informativo Inferior pegado */}
      <div className="absolute bottom-0 left-0 w-full bg-[#4a2c1d]/90 backdrop-blur-sm py-[10px] z-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center gap-1">
            <div className="flex items-center gap-2 w-full justify-center">
              <span className="h-px flex-1 bg-white/20" />
              <p className="text-white font-black text-[8px] uppercase tracking-[0.2em] whitespace-nowrap">
                Vitalidad Premium
              </p>
              <span className="h-px flex-1 bg-white/20" />
            </div>
            <p className="text-center text-white font-bold text-[9px] uppercase tracking-[0.1em] leading-tight">
              ENVÍO GRATIS • ABSORCIÓN INMEDIATA • 100% ORGÁNICO
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
