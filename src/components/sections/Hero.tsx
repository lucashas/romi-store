"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Hero() {
  const heroImg = PlaceHolderImages.find(img => img.id === "hero-main");

  return (
    <section className="relative w-full bg-[#fdfaf6] flex flex-col items-center">
      <div className="w-full max-w-[500px] mx-auto overflow-hidden">
        {/* Contenedor de la imagen Hero que es el anuncio completo */}
        <div className="relative w-full aspect-[16/9] sm:aspect-[16/7]">
          {heroImg && (
            <Image 
              src={heroImg.imageUrl} 
              alt="MaryRuth's Organics - Vitalidad y Belleza Natural"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 500px) 100vw, 500px"
            />
          )}
        </div>
      </div>

      {/* Banner Informativo Inferior (Café Oscuro) */}
      <div className="w-full bg-[#4a2c1d] py-4 shadow-[0_-10px_30px_rgba(0,0,0,0.2)]">
        <div className="container mx-auto px-4">
          <p className="text-center text-white font-bold text-xs uppercase tracking-[0.1em] leading-tight flex flex-col items-center justify-center gap-1">
            <span>CRECIMIENTO CAPILAR</span>
            <span>ANTI-ENVEJECIMIENTO</span>
            <span>NUTRICIÓN COMPLETA</span>
          </p>
        </div>
      </div>
    </section>
  );
}
