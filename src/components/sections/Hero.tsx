
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Droplets, Heart, Zap } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === "hero-product");
  const coupleImage = PlaceHolderImages.find(img => img.id === "healthy-couple");

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center bg-[url('https://images.unsplash.com/photo-1605371924599-2d0365da1ae0?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center">
      {/* Overlay para mejorar legibilidad */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent lg:to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-8 animate-fade-in-up">
            <div className="space-y-2">
              <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black font-headline text-foreground leading-[1.1] uppercase tracking-tight">
                Recupera tu <br />
                <span className="text-primary italic">Vitalidad y</span> <br />
                Belleza Natural
              </h1>
            </div>
            
            <div className="space-y-6 max-w-xl">
              <p className="text-xl sm:text-2xl text-muted-foreground font-medium leading-relaxed">
                Multivitamínico Líquido para un <span className="text-foreground font-bold">Cabello más Grueso, Piel Radiante y Menos Arrugas.</span>
              </p>
              
              <div className="inline-block bg-accent px-6 py-2 rounded-lg text-white font-bold text-xl uppercase tracking-widest animate-pulse">
                Envío Gratis 🚚
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 text-xl h-16 px-10 rounded-2xl shadow-2xl shadow-primary/30 group">
                COMPRAR AHORA
                <ArrowRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-primary/20">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Sparkles className="h-5 w-5 text-primary" />
                </div>
                <span className="text-sm font-bold uppercase tracking-wider">Cabello</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Zap className="h-5 w-5 text-primary" />
                </div>
                <span className="text-sm font-bold uppercase tracking-wider">Vitalidad</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Heart className="h-5 w-5 text-primary" />
                </div>
                <span className="text-sm font-bold uppercase tracking-wider">Nutrición</span>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in-up [animation-delay:200ms] hidden lg:block">
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white/20 backdrop-blur-sm aspect-[4/5] group">
              <Image
                src={coupleImage?.imageUrl || ""}
                alt="Salud y Vitalidad"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-1000"
                priority
                data-ai-hint="healthy couple"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-10 left-10 right-10 text-white">
                <p className="text-2xl font-bold font-headline uppercase tracking-widest leading-tight">
                  Crecimiento Capilar, Anti-envejecimiento, Nutrición Completa.
                </p>
              </div>
            </div>
            
            {/* Flotante del producto */}
            <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-64 aspect-[1/2] z-20 transition-transform hover:-translate-y-1/2 hover:scale-105 duration-500">
               <div className="relative w-full h-full bg-white/10 backdrop-blur-md rounded-3xl p-4 shadow-2xl border border-white/20">
                 <Image 
                  src={heroImage?.imageUrl || ""} 
                  alt="MaryRuth's Product" 
                  fill 
                  className="object-contain p-4 drop-shadow-2xl"
                  data-ai-hint="vitamin bottle"
                 />
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
