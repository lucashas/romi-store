"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Droplets, Heart, Zap } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Hero() {
  const heroProduct = PlaceHolderImages.find(img => img.id === "hero-product");
  const healthyLife = PlaceHolderImages.find(img => img.id === "healthy-lifestyle");

  return (
    <section className="relative overflow-hidden min-h-[90vh] flex flex-col bg-background">
      {/* Fondo con gradientes de la imagen */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#d4a373]/20 via-background to-[#b07d4e]/10 -z-10" />
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,rgba(184,115,51,0.15),transparent_70%)] -z-10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex-1 flex flex-col">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center flex-1 py-12">
          <div className="space-y-8 text-center lg:text-left animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-headline text-foreground leading-[1] uppercase tracking-tighter">
                Recupera tu <br />
                <span className="text-primary italic">Vitalidad y</span> <br />
                Belleza Natural
              </h1>
              
              <p className="text-lg sm:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium">
                Multivitamínico Líquido para un <span className="text-foreground font-bold">Cabello más Grueso</span>, Piel Radiante y Menos Arrugas.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 pt-4">
              <div className="inline-block bg-accent px-10 py-4 rounded-xl text-white font-black text-2xl uppercase tracking-tighter shadow-2xl shadow-accent/40 animate-pulse cursor-pointer hover:scale-105 transition-transform">
                ENVÍO GRATIS
              </div>
              <Button size="lg" className="h-16 px-12 text-lg font-bold rounded-xl bg-primary hover:bg-primary/90 shadow-xl group w-full sm:w-auto">
                COMPRAR AHORA
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-10 border-t border-border/50">
              {[
                { icon: Droplets, label: "Líquido" },
                { icon: Heart, label: "Vegano" },
                { icon: Zap, label: "Absorción" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center lg:items-start gap-2">
                  <div className="h-10 w-10 rounded-xl bg-white shadow-sm flex items-center justify-center border border-border/50">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-in-up [animation-delay:200ms] px-4 sm:px-0 h-[500px] lg:h-[700px]">
            {/* Imagen de la pareja al fondo del visual */}
            <div className="relative h-full w-full rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white/50 group">
              {healthyLife && (
                <Image 
                  src={healthyLife.imageUrl} 
                  alt="Pareja saludable MaryRuth's" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  data-ai-hint="healthy couple"
                />
              )}
              {/* Overlay suave para integrar el producto */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Botella de producto flotando delante */}
            <div className="absolute -left-4 sm:-left-20 bottom-10 lg:bottom-20 w-44 sm:w-72 aspect-[1/1.5] z-20 transition-transform hover:scale-110 duration-500">
               <div className="relative w-full h-full bg-white/95 backdrop-blur-sm rounded-[2.5rem] p-4 shadow-[0_30px_60px_-12px_rgba(0,0,0,0.5)] border border-white/40 overflow-hidden flex items-center justify-center">
                 {heroProduct && (
                   <Image 
                    src={heroProduct.imageUrl} 
                    alt="Producto MaryRuth's Líquido" 
                    fill 
                    className="object-contain p-6 drop-shadow-2xl"
                    sizes="(max-width: 768px) 176px, 288px"
                    data-ai-hint="vitamin bottle"
                   />
                 )}
               </div>
            </div>
            
            <div className="absolute -right-8 -top-8 h-48 sm:h-64 w-48 sm:w-64 bg-primary/30 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>

      {/* Banner inferior de la imagen */}
      <div className="w-full bg-[#5d3a1a] text-white py-6 overflow-hidden">
        <div className="container mx-auto px-4">
          <p className="text-center font-black uppercase tracking-[0.2em] text-sm sm:text-lg lg:text-xl">
            Crecimiento Capilar • Anti-Envejecimiento • Nutrición Completa
          </p>
        </div>
      </div>
    </section>
  );
}