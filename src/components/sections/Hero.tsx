"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Hero() {
  const heroProduct = PlaceHolderImages.find(img => img.id === "hero-product");
  const healthyLife = PlaceHolderImages.find(img => img.id === "healthy-lifestyle");

  return (
    <section className="relative flex flex-col items-center overflow-hidden">
      {/* Background with Image Pattern or Gradient */}
      <div className="absolute inset-0 hero-gradient -z-10" />
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,white,transparent)] -z-10" />

      <div className="container mx-auto px-4 pt-12 sm:pt-20 pb-0 flex flex-col items-center">
        {/* Main Headings */}
        <div className="max-w-4xl text-center space-y-4 mb-8 sm:mb-12">
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black text-white leading-none tracking-tighter drop-shadow-sm uppercase">
            RECUPERA TU <br />
            <span className="bronze-text">VITALIDAD Y</span> <br />
            <span className="bronze-text">BELLEZA NATURAL</span>
          </h1>
          
          <p className="text-lg sm:text-2xl text-white font-medium max-w-2xl mx-auto leading-tight sm:leading-snug mt-6">
            Multivitamínico Líquido para un <span className="font-bold">Cabello más Grueso</span>, Piel Radiante y Menos Arrugas.
          </p>
        </div>

        {/* Free Shipping Badge */}
        <div className="mb-12">
          <div className="bg-accent px-8 py-3 sm:px-12 sm:py-4 shadow-[0_10px_30px_rgba(196,30,58,0.4)] transform hover:scale-105 transition-transform duration-300">
            <span className="text-white font-black text-xl sm:text-3xl tracking-wider uppercase">
              ENVÍO GRATIS
            </span>
          </div>
        </div>

        {/* Visual Composition: Couple + Bottle */}
        <div className="relative w-full max-w-5xl aspect-[4/5] sm:aspect-[16/10] mt-4">
          {/* Healthy Couple Image */}
          <div className="absolute right-0 bottom-0 w-full sm:w-[70%] h-full sm:h-[110%] z-0 translate-y-4 sm:translate-y-0">
            {healthyLife && (
              <Image 
                src={healthyLife.imageUrl} 
                alt="Pareja Saludable MaryRuth's" 
                fill 
                className="object-cover object-top sm:object-right-top rounded-t-[3rem] sm:rounded-none"
                priority
                sizes="(max-width: 768px) 100vw, 70vw"
                data-ai-hint="healthy couple"
              />
            )}
          </div>

          {/* Product Bottle */}
          <div className="absolute left-1/2 sm:left-10 bottom-10 sm:bottom-20 -translate-x-1/2 sm:translate-x-0 w-[240px] sm:w-[380px] aspect-[1/1.6] z-10 transition-transform hover:rotate-2 duration-500">
            {heroProduct && (
              <Image 
                src={heroProduct.imageUrl} 
                alt="MaryRuth's Multivitamin + Hair Growth" 
                fill 
                className="object-contain drop-shadow-[0_40px_60px_rgba(0,0,0,0.6)]"
                sizes="(max-width: 768px) 240px, 380px"
                data-ai-hint="vitamin bottle"
              />
            )}
          </div>
        </div>
      </div>

      {/* Bottom Informative Banner */}
      <div className="w-full bg-[#4a2c1d] py-5 sm:py-8 mt-auto">
        <div className="container mx-auto px-4">
          <p className="text-center text-white font-bold text-sm sm:text-2xl uppercase tracking-[0.1em] sm:tracking-[0.2em] leading-tight">
            CRECIMIENTO CAPILAR, ANTI-ENVEJECIMIENTO, <br className="sm:hidden" /> NUTRICIÓN COMPLETA.
          </p>
        </div>
      </div>
    </section>
  );
}