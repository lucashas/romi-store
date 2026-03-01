"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { CheckCircle2, ShieldCheck, Sun, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Features() {
  const featHairHero = PlaceHolderImages.find(img => img.id === "feature-hair-hero");
  const featHair = PlaceHolderImages.find(img => img.id === "feature-hair");
  const featD3 = PlaceHolderImages.find(img => img.id === "supplement-d3");

  return (
    <section id="caracteristicas" className="bg-white">
      {/* Botón CTA ANTES de la imagen de cabello */}
      <div className="px-[10px] py-[10px]">
        <Button asChild size="lg" className="w-full h-14 text-lg font-black bg-accent hover:bg-accent/90 shadow-xl rounded-2xl animate-heartbeat">
          <Link href="#registro" className="flex items-center gap-3">
            <ShoppingCart className="h-5 w-5" />
            ¡QUIERO MI COMPRA!
          </Link>
        </Button>
      </div>

      {/* Imagen de Impacto CABELLO */}
      <div className="relative w-full h-screen bg-white px-[5px]">
        <div className="relative w-full h-full overflow-hidden">
          {featHairHero && (
            <Image 
              src={featHairHero.imageUrl} 
              alt="Impacto MaryRuth's Cabello"
              fill
              className="object-contain"
              sizes="500px"
              priority
            />
          )}
        </div>
      </div>

      {/* Sección Detalle Resultados */}
      <div className="py-[10px] border-b border-secondary">
        <div className="container mx-auto px-[10px] space-y-[10px]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-black text-[10px] tracking-widest uppercase">
            <ShieldCheck className="h-4 w-4" />
            RESULTADOS COMPROBADOS
          </div>
          
          <h2 className="text-2xl font-black text-foreground leading-tight uppercase">
            CABELLO MÁS LARGO <br />
            <span className="text-primary italic">Y PIEL DE PORCELANA</span>
          </h2>
          
          <p className="text-[12px] text-muted-foreground font-medium leading-snug">
            Nuestra Biotina con Lustriva® está diseñada para quienes no se conforman con menos. Verás la diferencia en tu espejo desde la primera botella.
          </p>
          
          <div className="relative w-full aspect-square rounded-[2rem] overflow-hidden shadow-xl border-4 border-secondary/20">
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

          <div className="grid grid-cols-1 gap-[10px]">
            {[
              "Crecimiento 3x más rápido",
              "Reduce la caída notablemente",
              "Brillo natural sin químicos",
              "Uñas de acero"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-secondary/10 p-3 rounded-xl border border-secondary/50">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                <span className="text-[12px] font-black text-foreground uppercase">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sección Salud Diaria */}
      <div className="py-[10px] bg-[#4a2c1d] text-white">
        <div className="container mx-auto px-[10px] space-y-[10px]">
          <div className="text-center">
            <h2 className="text-xl font-black uppercase leading-tight">MÁS QUE VITAMINAS, <br/>ES TU NUEVA ENERGÍA</h2>
          </div>
          
          <div className="bg-white/5 p-[10px] rounded-[1.5rem] border border-white/10 backdrop-blur-sm space-y-[10px]">
             <div className="flex items-center gap-2">
              <Sun className="h-5 w-5 text-primary" />
              <h3 className="text-sm font-black uppercase">VITAMINA D3 + K2</h3>
            </div>
            <p className="text-[11px] opacity-80 leading-tight">
              El combo perfecto para un sistema inmune invencible y huesos que no fallan. Absorción instantánea.
            </p>
            <div className="relative h-40 rounded-xl overflow-hidden">
              {featD3 && <Image src={featD3.imageUrl} alt="D3 MaryRuth's" fill className="object-cover" sizes="500px" />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
