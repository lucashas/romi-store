
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Droplets, Heart, Zap } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Hero() {
  const heroProduct = PlaceHolderImages.find(img => img.id === "hero-product");
  const healthyLife = PlaceHolderImages.find(img => img.id === "healthy-lifestyle");

  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center bg-background py-12 lg:py-0">
      {/* Elementos de fondo */}
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full bg-secondary/10 -skew-x-12 transform origin-top hidden lg:block" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-[0.2em] mx-auto lg:mx-0">
              <Sparkles className="h-3 w-3" />
              MaryRuth's Organics
            </div>
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-headline text-foreground leading-[1.1] uppercase tracking-tighter">
              Vitalidad <br />
              <span className="text-primary italic">Natural</span> <br />
              y Belleza
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Multivitamínico líquido de <span className="text-foreground font-bold">absorción rápida</span> para un cabello fuerte y una energía inagotable.
            </p>

            <div className="inline-block bg-accent px-6 py-3 rounded-2xl text-white font-black text-xl sm:text-2xl uppercase tracking-tighter shadow-xl shadow-accent/40 animate-pulse">
              Envío Gratis 🚚
            </div>

            <div className="flex justify-center lg:justify-start pt-4">
              <Button size="lg" className="h-14 sm:h-16 px-8 sm:px-12 text-base sm:text-lg font-bold rounded-2xl bg-primary hover:bg-primary/90 shadow-xl group w-full sm:w-auto">
                QUIERO MI CAMBIO HOY
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-10 border-t border-border/50">
              {[
                { icon: Droplets, label: "Líquido" },
                { icon: Heart, label: "Vegano" },
                { icon: Zap, label: "Energía" }
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

          <div className="relative animate-fade-in-up [animation-delay:200ms] px-4 sm:px-0">
            {/* Imagen Principal de Estilo de Vida */}
            <div className="relative rounded-[2.5rem] sm:rounded-[3.5rem] overflow-hidden aspect-[4/5] shadow-2xl border-4 sm:border-[12px] border-white group">
              <Image 
                src={healthyLife?.imageUrl || ""} 
                alt="Estilo de vida saludable" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-1000"
                priority
                data-ai-hint="healthy woman"
              />
            </div>
            
            {/* Imagen del Producto Flotante - Organizada estratégicamente */}
            <div className="absolute -left-4 sm:-left-12 bottom-8 sm:-bottom-8 w-40 sm:w-64 aspect-[1/1.4] z-20 transition-transform hover:scale-110 duration-500">
               <div className="relative w-full h-full bg-white rounded-2xl sm:rounded-[2rem] p-3 sm:p-4 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.3)] border border-secondary/20">
                 <Image 
                  src={heroProduct?.imageUrl || ""} 
                  alt="Producto MaryRuth's" 
                  fill 
                  className="object-contain p-2 sm:p-4 drop-shadow-2xl"
                  data-ai-hint="vitamin bottle"
                 />
               </div>
            </div>
            
            <div className="absolute -right-8 -top-8 h-48 sm:h-64 w-48 sm:w-64 bg-primary/20 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
