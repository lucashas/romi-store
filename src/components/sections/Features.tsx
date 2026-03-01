
"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { CheckCircle2, Sparkles, Baby, ShieldCheck, Sun, Zap, Heart } from "lucide-react";

export function Features() {
  const featHair = PlaceHolderImages.find(img => img.id === "feature-hair");
  const featKids = PlaceHolderImages.find(img => img.id === "feature-kids");
  const featD3 = PlaceHolderImages.find(img => img.id === "supplement-d3");
  const featB = PlaceHolderImages.find(img => img.id === "supplement-complex-b");
  const featOmega = PlaceHolderImages.find(img => img.id === "supplement-omega");

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
          </div>
          
          <div className="order-1 lg:order-2 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-sm uppercase tracking-wider">
              <ShieldCheck className="h-4 w-4" />
              Belleza desde el interior
            </div>
            <h2 className="text-4xl sm:text-5xl font-black font-headline text-foreground leading-tight">Tu Cabello, <br /><span className="text-primary italic">Más Fuerte que Nunca</span></h2>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Fórmula con Biotina y Lustriva® clínicamente probados para aumentar el volumen capilar y mejorar la elasticidad de la piel.
            </p>
            <ul className="space-y-4">
              {[
                "Promueve el crecimiento de cabello nuevo",
                "Reduce líneas finas y arrugas",
                "Absorción líquida 10x más rápida",
                "Ingredientes 100% Orgánicos"
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
              Gomitas y líquidos que a los niños les encanta tomar. Sin químicos dañinos, solo los nutrientes que necesitan para crecer fuertes.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-secondary/20 border border-secondary">
                <p className="text-2xl font-black text-primary">0%</p>
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Azúcar Añadido</p>
              </div>
              <div className="p-6 rounded-2xl bg-secondary/20 border border-secondary">
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
            </div>
          </div>
        </div>
      </div>

      {/* Sección Suplementos Específicos */}
      <div className="bg-secondary/10 py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-4">Suplementos Especializados</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Objetivos claros para cada necesidad de tu salud diaria.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Vitamina D3 */}
            <div className="bg-white p-8 rounded-[2rem] shadow-xl hover:-translate-y-2 transition-transform">
              <div className="relative h-48 mb-6 rounded-2xl overflow-hidden">
                <Image src={featD3?.imageUrl || ""} alt="Vitamina D3" fill className="object-cover" data-ai-hint="vitamin D3" />
              </div>
              <div className="flex items-center gap-2 text-primary mb-3">
                <Sun className="h-5 w-5" />
                <span className="font-bold uppercase text-xs tracking-widest">Inmunidad</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Vitamina D3 ☀️</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Fortalece huesos y dientes, mejora el sistema inmune y regula el estado de ánimo.</p>
            </div>

            {/* Complejo B */}
            <div className="bg-white p-8 rounded-[2rem] shadow-xl hover:-translate-y-2 transition-transform">
              <div className="relative h-48 mb-6 rounded-2xl overflow-hidden">
                <Image src={featB?.imageUrl || ""} alt="Complejo B" fill className="object-cover" data-ai-hint="energy vitamins" />
              </div>
              <div className="flex items-center gap-2 text-primary mb-3">
                <Zap className="h-5 w-5" />
                <span className="font-bold uppercase text-xs tracking-widest">Energía Natural</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Complejo B 🧠</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Aumenta tu energía, mejora la función cerebral y reduce el estrés diario.</p>
            </div>

            {/* Omega 3 */}
            <div className="bg-white p-8 rounded-[2rem] shadow-xl hover:-translate-y-2 transition-transform">
              <div className="relative h-48 mb-6 rounded-2xl overflow-hidden">
                <Image src={featOmega?.imageUrl || ""} alt="Omega-3" fill className="object-cover" data-ai-hint="omega 3" />
              </div>
              <div className="flex items-center gap-2 text-primary mb-3">
                <Heart className="h-5 w-5" />
                <span className="font-bold uppercase text-xs tracking-widest">Cardiovascular</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Omega-3 🐟</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Mejora la salud del corazón y el cerebro, además de beneficiar piel y cabello.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
