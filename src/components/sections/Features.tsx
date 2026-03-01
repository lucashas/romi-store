
"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { CheckCircle2, Sparkles, Baby, ShieldCheck } from "lucide-react";

export function Features() {
  const featHair = PlaceHolderImages.find(img => img.id === "feature-hair");
  const featKids = PlaceHolderImages.find(img => img.id === "feature-kids");

  return (
    <section id="caracteristicas" className="py-20 sm:py-32 space-y-32 bg-white">
      {/* Sección Cabello/Belleza */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/5] relative group border-4 border-secondary/20">
              <Image 
                src={featHair?.imageUrl || ""} 
                alt="Crecimiento Capilar"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                data-ai-hint="healthy hair"
              />
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors" />
            </div>
            <div className="absolute -top-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-secondary hidden sm:block">
              <Sparkles className="h-8 w-8 text-primary mb-2" />
              <p className="font-black text-xs uppercase tracking-tighter">Resultados Reales</p>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-sm uppercase tracking-wider">
              <ShieldCheck className="h-4 w-4" />
              Belleza desde el interior
            </div>
            <h2 className="text-4xl sm:text-5xl font-black font-headline text-foreground leading-tight">Tu Cabello, <br /><span className="text-primary">Más Fuerte que Nunca</span></h2>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Nuestra fórmula con <span className="text-foreground font-bold italic">Lustriva®</span> está clínicamente probada para aumentar el volumen capilar y reducir líneas de expresión en solo semanas.
            </p>
            <ul className="space-y-4">
              {[
                "Promueve el crecimiento de cabello nuevo",
                "Mejora la elasticidad de la piel",
                "Fortalece uñas quebradizas",
                "Absorción líquida 10 veces más rápida"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-foreground/90 font-bold">
                  <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <CheckCircle2 className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-base sm:text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Sección Niños/Familia */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent font-bold text-sm uppercase tracking-wider">
              <Baby className="h-4 w-4" />
              Línea MaryRuth's Kids
            </div>
            <h2 className="text-4xl sm:text-5xl font-black font-headline text-foreground leading-tight">Nutrición para <br /><span className="text-accent italic">Toda la Familia</span></h2>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Desde gomitas orgánicas sin azúcar hasta suplementos líquidos que a los niños les encanta tomar. Sin químicos, solo lo mejor.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-secondary/20 border border-secondary flex flex-col gap-2">
                <p className="text-2xl font-black text-primary">0%</p>
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Azúcar Añadido</p>
              </div>
              <div className="p-6 rounded-2xl bg-secondary/20 border border-secondary flex flex-col gap-2">
                <p className="text-2xl font-black text-primary">100%</p>
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Orgánico</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/5] relative group border-8 border-secondary/10">
              <Image 
                src={featKids?.imageUrl || ""} 
                alt="Línea Infantil MaryRuth's"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                data-ai-hint="happy child"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent pointer-events-none" />
            </div>
            {/* Elemento decorativo circular */}
            <div className="absolute -bottom-10 -right-10 h-40 w-40 bg-accent rounded-full -z-10 opacity-10 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
