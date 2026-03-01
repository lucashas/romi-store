"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Hero() {
  const heroProduct = PlaceHolderImages.find(img => img.id === "hero-product");
  const healthyLife = PlaceHolderImages.find(img => img.id === "healthy-lifestyle");

  return (
    <section className="relative flex flex-col items-center overflow-hidden">
      {/* Fondo con Degradado Hero */}
      <div className="absolute inset-0 hero-gradient -z-10" />
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,white,transparent)] -z-10" />

      <div className="container mx-auto px-4 pt-12 sm:pt-20 pb-0 flex flex-col items-center">
        {/* Titulares Principales */}
        <div className="max-w-4xl text-center space-y-4 mb-8 sm:mb-12 relative z-20">
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black text-white leading-[0.9] tracking-tighter drop-shadow-md uppercase">
            RECUPERA TU <br />
            <span className="bronze-text">VITALIDAD Y</span> <br />
            <span className="bronze-text">BELLEZA NATURAL</span>
          </h1>
          
          <p className="text-lg sm:text-2xl text-white font-medium max-w-2xl mx-auto leading-tight sm:leading-snug mt-6 drop-shadow-sm">
            Multivitamínico Líquido para un <span className="font-bold underline decoration-accent decoration-4">Cabello más Grueso</span>, Piel Radiante y Menos Arrugas.
          </p>
        </div>

        {/* Distintivo de Envío Gratis */}
        <div className="mb-12 relative z-30 transform hover:scale-110 transition-transform duration-300">
          <div className="bg-accent px-8 py-3 sm:px-12 sm:py-4 shadow-[0_15px_40px_rgba(196,30,58,0.5)] shipping-badge">
            <span className="text-white font-black text-xl sm:text-4xl tracking-widest uppercase italic">
              ENVÍO GRATIS
            </span>
          </div>
        </div>

        {/* Composición Visual: Personas + Botella */}
        <div className="relative w-full max-w-5xl aspect-[4/5] sm:aspect-[16/9] mt-4">
          {/* Imagen de Pareja/Estilo de Vida (Fondo de la composición) */}
          <div className="absolute right-0 bottom-0 w-full sm:w-[75%] h-[90%] sm:h-full z-0 translate-y-2 sm:translate-y-0">
            {healthyLife && (
              <Image 
                src={healthyLife.imageUrl} 
                alt="Estilo de Vida MaryRuth's" 
                fill 
                className="object-cover object-top sm:object-right-top rounded-t-[3rem] sm:rounded-none shadow-2xl"
                priority
                sizes="(max-width: 768px) 100vw, 75vw"
                data-ai-hint="healthy couple"
              />
            )}
          </div>

          {/* Botella del Producto (Primer plano) */}
          <div className="absolute left-1/2 sm:left-10 bottom-12 sm:bottom-16 -translate-x-1/2 sm:translate-x-0 w-[260px] sm:w-[420px] aspect-[1/1.6] z-10 transition-transform hover:rotate-2 duration-500 cursor-pointer">
            {heroProduct && (
              <Image 
                src={heroProduct.imageUrl} 
                alt="MaryRuth's Multivitamin Bottle" 
                fill 
                className="object-contain drop-shadow-[0_45px_70px_rgba(0,0,0,0.7)]"
                sizes="(max-width: 768px) 260px, 420px"
                data-ai-hint="vitamin bottle"
              />
            )}
          </div>
        </div>
      </div>

      {/* Banner Informativo Inferior (Café Oscuro) */}
      <div className="w-full bg-[#4a2c1d] py-6 sm:py-10 mt-auto shadow-[0_-10px_30px_rgba(0,0,0,0.2)]">
        <div className="container mx-auto px-4">
          <p className="text-center text-white font-bold text-base sm:text-3xl uppercase tracking-[0.15em] sm:tracking-[0.25em] leading-tight flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6">
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