
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Droplets, Heart, Zap } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Hero() {
  const heroProduct = PlaceHolderImages.find(img => img.id === "hero-product");
  const healthyLife = PlaceHolderImages.find(img => img.id === "healthy-lifestyle");

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center bg-background">
      {/* Fondo decorativo */}
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full bg-secondary/20 -skew-x-12 transform origin-top hidden lg:block" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-[0.2em]">
              <Sparkles className="h-3 w-3" />
              MaryRuth's Organics
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black font-headline text-foreground leading-[0.9] uppercase tracking-tighter">
              Vitalidad <br />
              <span className="text-primary italic">Natural</span> <br />
              y Belleza
            </h1>
            
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-lg leading-snug">
              Multivitamínico líquido de <span className="text-foreground font-bold">absorción rápida</span> para un cabello fuerte y una energía inagotable.
            </p>

            <div className="inline-block bg-accent px-8 py-4 rounded-2xl text-white font-black text-2xl uppercase tracking-tighter shadow-2xl shadow-accent/40 animate-pulse">
              Envío Gratis 🚚
            </div>

            <div className="flex pt-4">
              <Button size="lg" className="h-16 px-12 text-lg font-bold rounded-2xl bg-primary hover:bg-primary/90 shadow-xl group">
                QUIERO MI CAMBIO HOY
                <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-2 transition-transform" />
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-12 border-t">
              {[
                { icon: Droplets, label: "Líquido" },
                { icon: Heart, label: "Vegano" },
                { icon: Zap, label: "Energía" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <div className="h-12 w-12 rounded-xl bg-white shadow-md flex items-center justify-center">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-in-up [animation-delay:200ms]">
            {/* Imagen Principal */}
            <div className="relative rounded-[3.5rem] overflow-hidden aspect-[4/5] shadow-2xl border-[12px] border-white group">
              <Image 
                src={healthyLife?.imageUrl || ""} 
                alt="Salud MaryRuth's" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-1000"
                priority
                data-ai-hint="healthy woman"
              />
            </div>
            
            {/* Imagen del Producto Flotante */}
            <div className="absolute -left-8 -bottom-8 w-48 sm:w-64 aspect-[1/1.4] z-20 transition-transform hover:scale-110 duration-500">
               <div className="relative w-full h-full bg-white rounded-[2rem] p-4 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border border-secondary/20">
                 <Image 
                  src={heroProduct?.imageUrl || ""} 
                  alt="MaryRuth's Bottle" 
                  fill 
                  className="object-contain p-4 drop-shadow-2xl"
                  data-ai-hint="vitamin bottle"
                 />
               </div>
            </div>
            
            {/* Decoración circular */}
            <div className="absolute -right-12 -top-12 h-64 w-64 bg-primary/20 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
