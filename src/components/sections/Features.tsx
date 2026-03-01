
"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { CheckCircle2, ShieldCheck, Zap, Heart, Sun } from "lucide-react";

export function Features() {
  const featHair = PlaceHolderImages.find(img => img.id === "feature-hair");
  const featD3 = PlaceHolderImages.find(img => img.id === "supplement-d3");

  return (
    <section id="caracteristicas" className="bg-white">
      {/* Sección Cabello - Foco en Vanidad y Resultado */}
      <div className="py-12 border-b border-secondary">
        <div className="container mx-auto px-6">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-black text-[10px] tracking-widest">
              <ShieldCheck className="h-4 w-4" />
              RESULTADOS COMPROBADOS
            </div>
            <h2 className="text-3xl font-black text-foreground leading-tight">
              CABELLO MÁS LARGO <br />
              <span className="text-primary italic">Y PIEL DE PORCELANA</span>
            </h2>
            <p className="text-sm text-muted-foreground font-medium">
              Nuestra Biotina con Lustriva® está diseñada para quienes no se conforman con menos. Verás la diferencia en tu espejo desde la primera botella.
            </p>
            
            <div className="relative w-full aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-secondary/20">
              {featHair && (
                <Image 
                  src={featHair.imageUrl} 
                  alt="Resultados MaryRuth's"
                  fill
                  className="object-cover"
                  sizes="500px"
                />
              )}
            </div>

            <div className="grid grid-cols-1 gap-3">
              {[
                "Crecimiento 3x más rápido",
                "Reduce la caída notablemente",
                "Brillo natural sin químicos",
                "Uñas de acero"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-secondary/20 p-4 rounded-2xl border border-secondary">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-sm font-black text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Sección Salud Diaria - Foco en Energía */}
      <div className="py-16 bg-[#4a2c1d] text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-black mb-4">MÁS QUE VITAMINAS, <br/>ES TU NUEVA ENERGÍA</h2>
            <p className="text-sm opacity-80 font-medium">Olvídate de los bajones de la tarde.</p>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white/10 p-6 rounded-[2rem] border border-white/10 backdrop-blur-sm">
               <div className="flex items-center gap-3 mb-4">
                <Sun className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-black">VITAMINA D3 + K2</h3>
              </div>
              <p className="text-sm opacity-90 leading-relaxed mb-6">
                El combo perfecto para un sistema inmune invencible y huesos que no fallan. Absorción instantánea para protegerte hoy mismo.
              </p>
              <div className="relative h-48 rounded-2xl overflow-hidden">
                {featD3 && <Image src={featD3.imageUrl} alt="D3 MaryRuth's" fill className="object-cover" sizes="500px" />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
