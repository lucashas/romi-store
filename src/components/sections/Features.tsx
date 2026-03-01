
"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { CheckCircle2, Baby, ShieldCheck, Sun, Zap, Heart } from "lucide-react";

export function Features() {
  const featHair = PlaceHolderImages.find(img => img.id === "feature-hair");
  const featKids = PlaceHolderImages.find(img => img.id === "feature-kids");
  const featD3 = PlaceHolderImages.find(img => img.id === "supplement-d3");
  const featB = PlaceHolderImages.find(img => img.id === "supplement-complex-b");
  const featOmega = PlaceHolderImages.find(img => img.id === "supplement-omega");

  return (
    <section id="caracteristicas" className="bg-white">
      {/* Crecimiento Capilar */}
      <div className="py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl aspect-square relative group border-8 border-secondary/10">
                {featHair && (
                  <Image 
                    src={featHair.imageUrl} 
                    alt="Resultados MaryRuth's Cabello"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    data-ai-hint="healthy hair"
                  />
                )}
              </div>
            </div>
            
            <div className="order-1 lg:order-2 space-y-6 sm:space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-sm uppercase tracking-wider mx-auto lg:mx-0">
                <ShieldCheck className="h-4 w-4" />
                Crecimiento Real
              </div>
              <h2 className="text-3xl sm:text-5xl font-black font-headline text-foreground leading-tight">Tu Cabello, <br /><span className="text-primary italic">Más Fuerte que Nunca</span></h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Fórmula con Biotina y Lustriva® clínicamente probados para aumentar el volumen capilar y mejorar la elasticidad de la piel en solo semanas.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Crecimiento capilar",
                  "Piel radiante",
                  "Absorción rápida",
                  "100% Orgánico"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground/90 font-bold bg-secondary/20 p-4 rounded-xl">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* MaryRuth's Kids */}
      <div className="py-20 sm:py-32 bg-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent font-bold text-sm uppercase tracking-wider mx-auto lg:mx-0">
                <Baby className="h-4 w-4" />
                MaryRuth's Kids
              </div>
              <h2 className="text-3xl sm:text-5xl font-black font-headline text-foreground leading-tight">Nutrición para <br /><span className="text-accent italic">Toda la Familia</span></h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Gomitas y suplementos líquidos que los niños adoran. Sin químicos, solo los nutrientes esenciales para su desarrollo óptimo.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl bg-white shadow-sm border border-border/50">
                  <p className="text-3xl font-black text-primary">0%</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Azúcar Añadido</p>
                </div>
                <div className="p-6 rounded-2xl bg-white shadow-sm border border-border/50">
                  <p className="text-3xl font-black text-primary">100%</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Orgánico</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl aspect-square relative group border-8 border-white">
                {featKids && (
                  <Image 
                    src={featKids.imageUrl} 
                    alt="Niños saludables MaryRuth's"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    data-ai-hint="happy child"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Suplementos Específicos */}
      <div className="py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-4">Suplementos Especializados</h2>
            <p className="text-lg text-muted-foreground">Potencia tu salud diaria con nuestras fórmulas líquidas de absorción instantánea.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            {/* Vitamina D3 */}
            <div className="group bg-white p-6 rounded-[2.5rem] border border-border/50 hover:shadow-2xl transition-all hover:-translate-y-2">
              <div className="relative h-64 mb-6 rounded-2xl overflow-hidden shadow-inner bg-secondary/10">
                {featD3 && <Image src={featD3.imageUrl} alt="Vitamina D3" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" data-ai-hint="vitamin D3" />}
              </div>
              <div className="flex items-center gap-2 text-primary mb-3">
                <Sun className="h-5 w-5" />
                <span className="font-bold uppercase text-[10px] tracking-[0.2em]">Inmunidad & Huesos</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Vitamina D3 ☀️</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Fortalece tus defensas y regula tu estado de ánimo con nuestra fórmula líquida esencial.
              </p>
            </div>

            {/* Complejo B */}
            <div className="group bg-white p-6 rounded-[2.5rem] border border-border/50 hover:shadow-2xl transition-all hover:-translate-y-2">
              <div className="relative h-64 mb-6 rounded-2xl overflow-hidden shadow-inner bg-secondary/10">
                {featB && <Image src={featB.imageUrl} alt="Complejo B" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" data-ai-hint="energy vitamins" />}
              </div>
              <div className="flex items-center gap-2 text-primary mb-3">
                <Zap className="h-5 w-5" />
                <span className="font-bold uppercase text-[10px] tracking-[0.2em]">Energía & Enfoque</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Complejo B 🧠</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Aumenta tu energía natural y mejora la función cerebral sin bajones de cafeína.
              </p>
            </div>

            {/* Omega-3 */}
            <div className="group bg-white p-6 rounded-[2.5rem] border border-border/50 hover:shadow-2xl transition-all hover:-translate-y-2">
              <div className="relative h-64 mb-6 rounded-2xl overflow-hidden shadow-inner bg-secondary/10">
                {featOmega && <Image src={featOmega.imageUrl} alt="Omega 3" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" data-ai-hint="omega 3" />}
              </div>
              <div className="flex items-center gap-2 text-primary mb-3">
                <Heart className="h-5 w-5" />
                <span className="font-bold uppercase text-[10px] tracking-[0.2em]">Cerebro & Piel</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Omega-3 🐟</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Nutrición vital para un corazón fuerte, una piel radiante y reducción de inflamación.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
