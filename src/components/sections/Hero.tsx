
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Droplets, Heart, Zap } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Hero() {
  const heroProduct = PlaceHolderImages.find(img => img.id === "hero-product");
  const healthyCouple = PlaceHolderImages.find(img => img.id === "healthy-couple");

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center bg-background">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/30 -skew-x-12 transform origin-top hidden lg:block" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="flex flex-col space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-widest">
                <Sparkles className="h-3 w-3" />
                MaryRuth's Organics
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black font-headline text-foreground leading-[1.1] uppercase tracking-tight">
                Vitalidad y <br />
                <span className="text-primary italic">Belleza</span> <br />
                Natural
              </h1>
            </div>
            
            <div className="space-y-6 max-w-xl">
              <p className="text-lg sm:text-xl text-muted-foreground font-medium leading-relaxed">
                El multivitamínico líquido que transforma tu bienestar. <span className="text-foreground font-bold italic">Cabello más grueso, piel radiante y energía inagotable.</span>
              </p>
              
              <div className="inline-flex items-center gap-3 bg-accent px-6 py-3 rounded-2xl text-white font-black text-lg sm:text-xl uppercase tracking-tighter shadow-xl shadow-accent/30 animate-pulse">
                <span>Envío Gratis 🚚</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:row gap-4">
              <Button size="lg" className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 text-lg h-16 px-10 rounded-2xl shadow-2xl shadow-primary/30 group">
                PRUEBA EL CAMBIO HOY
                <ArrowRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border/50">
              {[
                { icon: Zap, label: "Energía" },
                { icon: Droplets, label: "Absorción" },
                { icon: Heart, label: "Vegano" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center sm:items-start gap-2">
                  <div className="h-10 w-10 rounded-xl bg-secondary flex items-center justify-center">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-muted-foreground">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-in-up [animation-delay:200ms]">
            {/* Imagen Principal (Pareja Saludable) */}
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white aspect-[4/5] sm:aspect-square lg:aspect-[4/5] group">
              <Image
                src={healthyCouple?.imageUrl || ""}
                alt="Salud MaryRuth's"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-1000"
                priority
                data-ai-hint="healthy couple"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white lg:hidden">
                <p className="font-bold text-lg uppercase tracking-tight">Nutrición Líquida de Confianza</p>
              </div>
            </div>
            
            {/* Imagen Flotante (Producto) */}
            <div className="absolute -left-4 sm:-left-12 bottom-12 sm:bottom-20 w-32 sm:w-48 lg:w-56 aspect-[1/1.5] z-20 transition-transform hover:scale-110 duration-500">
               <div className="relative w-full h-full bg-white rounded-3xl p-3 sm:p-4 shadow-2xl border border-secondary">
                 <Image 
                  src={heroProduct?.imageUrl || ""} 
                  alt="MaryRuth's Bottle" 
                  fill 
                  className="object-contain p-2 drop-shadow-xl"
                  data-ai-hint="vitamin bottle"
                 />
               </div>
            </div>

            {/* Decoración */}
            <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-accent/20 rounded-full blur-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
