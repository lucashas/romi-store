"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Hero() {
  const heroImg = PlaceHolderImages.find(img => img.id === "hero-main");

  return (
    <section className="relative w-full bg-[#fdfaf6] flex flex-col items-center">
      <div className="w-full max-w-[1440px] mx-auto overflow-hidden">
        {/* Contenedor de la imagen Hero que es el anuncio completo */}
        <div className="relative w-full aspect-[16/9] sm:aspect-[16/7] md:aspect-[16/6] lg:aspect-[16/5.5]">
          {heroImg && (
            <Image 
              src={heroImg.imageUrl} 
              alt="MaryRuth's Organics - Vitalidad y Belleza Natural"
              fill
              className="object-contain sm:object-cover object-center"
              priority
              sizes="100vw"
            />
          )}
        </div>
      </div>

      {/* Banner Informativo Inferior (Café Oscuro) para mantener la estética de la imagen */}
      <div className="w-full bg-[#4a2c1d] py-4 sm:py-8 shadow-[0_-10px_30px_rgba(0,0,0,0.2)]">
        <div className="container mx-auto px-4">
          <p className="text-center text-white font-bold text-sm sm:text-2xl uppercase tracking-[0.1em] sm:tracking-[0.2em] leading-tight flex flex-wrap items-center justify-center gap-2 sm:gap-6">
            <span>CRECIMIENTO CAPILAR</span>
            <span className="hidden sm:inline text-primary/50">•</span>
            <span>ANTI-ENVEJECIMIENTO</span>
            <span className="hidden sm:inline text-primary/50">•</span>
            <span>NUTRICIÓN COMPLETA</span>
          </p>
        </div>
      </div>
    </section>
  );
}