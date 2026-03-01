
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
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-8 items-center">
            <div className="w-full space-y-6 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-wider mx-auto">
                <ShieldCheck className="h-4 w-4" />
                Belleza Real
              </div>
              <h2 className="text-3xl font-black font-headline text-foreground leading-tight">Recupera el Brillo y la <br /><span className="text-primary italic">Fuerza de tu Cabello</span></h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Nuestra Biotina líquida con Lustriva® no solo promete, ¡cumple! Mira cómo tu cabello crece más grueso y tu piel recupera su elasticidad juvenil.
              </p>
              
              <div className="relative w-full aspect-square rounded-[2rem] overflow-hidden shadow-xl border-4 border-secondary/10">
                {featHair && (
                  <Image 
                    src={featHair.imageUrl} 
                    alt="Resultados MaryRuth's Cabello"
                    fill
                    className="object-cover"
                    sizes="(max-width: 500px) 100vw, 500px"
                    data-ai-hint="healthy hair"
                  />
                )}
              </div>

              <ul className="grid grid-cols-1 gap-3 pt-4">
                {[
                  "Crecimiento acelerado probado",
                  "Piel visiblemente más hidratada",
                  "Uñas que ya no se quiebran",
                  "Resultados sin efectos secundarios"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground/90 font-bold bg-secondary/20 p-4 rounded-xl text-left">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* MaryRuth's Kids */}
      <div className="py-12 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-8 items-center">
            <div className="w-full space-y-6 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent font-bold text-xs uppercase tracking-wider mx-auto">
                <Baby className="h-4 w-4" />
                Escudo para tus Hijos
              </div>
              <h2 className="text-3xl font-black font-headline text-foreground leading-tight">Nutrición que <br /><span className="text-accent italic">Ellos Mismos Pedirán</span></h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Olvida las peleas por las vitaminas. Nuestras gomitas orgánicas son el aliado perfecto para un crecimiento sano sin un gramo de azúcar añadida.
              </p>

              <div className="relative w-full aspect-square rounded-[2rem] overflow-hidden shadow-xl border-4 border-white">
                {featKids && (
                  <Image 
                    src={featKids.imageUrl} 
                    alt="Niños saludables MaryRuth's"
                    fill
                    className="object-cover"
                    sizes="(max-width: 500px) 100vw, 500px"
                    data-ai-hint="happy child"
                  />
                )}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-white shadow-sm border border-border/50">
                  <p className="text-2xl font-black text-primary">100%</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground leading-tight">Natural y Orgánico</p>
                </div>
                <div className="p-4 rounded-2xl bg-white shadow-sm border border-border/50">
                  <p className="text-2xl font-black text-primary">Zero</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground leading-tight">Químicos Tóxicos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Suplementos Específicos */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-foreground mb-4 leading-tight">Potencia tu <br/>Bienestar Diario</h2>
            <p className="text-base text-muted-foreground font-medium">Soluciones específicas para necesidades reales.</p>
          </div>
          
          <div className="space-y-8">
            {/* Vitamina D3 */}
            <div className="group bg-white p-6 rounded-[2.5rem] border border-border/50 shadow-lg">
              <div className="relative h-56 mb-6 rounded-2xl overflow-hidden shadow-inner bg-secondary/10">
                {featD3 && <Image src={featD3.imageUrl} alt="Vitamina D3" fill className="object-cover" sizes="(max-width: 500px) 100vw, 500px" data-ai-hint="vitamin D3" />}
              </div>
              <div className="flex items-center gap-2 text-primary mb-3">
                <Sun className="h-5 w-5" />
                <span className="font-bold uppercase text-[10px] tracking-[0.2em]">Inmunidad de Acero</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Vitamina D3 Líquida ☀️</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Fortalece tus huesos y mantén tus defensas al 100% durante todo el año con la forma más absorbible de Vitamina D.
              </p>
            </div>

            {/* Complejo B */}
            <div className="group bg-white p-6 rounded-[2.5rem] border border-border/50 shadow-lg">
              <div className="relative h-56 mb-6 rounded-2xl overflow-hidden shadow-inner bg-secondary/10">
                {featB && <Image src={featB.imageUrl} alt="Complejo B" fill className="object-cover" sizes="(max-width: 500px) 100vw, 500px" data-ai-hint="energy vitamins" />}
              </div>
              <div className="flex items-center gap-2 text-primary mb-3">
                <Zap className="h-5 w-5" />
                <span className="font-bold uppercase text-[10px] tracking-[0.2em]">Energía Sin Bajones</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Complejo B Inteligente 🧠</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Aumenta tu enfoque mental y energía física de forma natural. Sin cafeína, sin nervios, solo vitalidad pura.
              </p>
            </div>

            {/* Omega-3 */}
            <div className="group bg-white p-6 rounded-[2.5rem] border border-border/50 shadow-lg">
              <div className="relative h-56 mb-6 rounded-2xl overflow-hidden shadow-inner bg-secondary/10">
                {featOmega && <Image src={featOmega.imageUrl} alt="Omega 3" fill className="object-cover" sizes="(max-width: 500px) 100vw, 500px" data-ai-hint="omega 3" />}
              </div>
              <div className="flex items-center gap-2 text-primary mb-3">
                <Heart className="h-5 w-5" />
                <span className="font-bold uppercase text-[10px] tracking-[0.2em]">Corazón y Mente</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Omega-3 Vegano 🐟</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Protege tu salud cardiovascular y mejora tu concentración con nuestra fórmula limpia y sostenible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
