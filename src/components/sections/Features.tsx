
"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { CheckCircle2, ShieldCheck, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FeaturesProps {
  onOpenPopup: () => void;
}

export function Features({ onOpenPopup }: FeaturesProps) {
  const featHairHero = PlaceHolderImages.find(img => img.id === "feature-hair-hero");
  const featHairExtra = PlaceHolderImages.find(img => img.id === "feature-hair-extra");
  const featHair = PlaceHolderImages.find(img => img.id === "feature-hair");

  return (
    <section id="caracteristicas" className="bg-white">
      {/* Botón CTA Superior */}
      <div className="px-[5px] mb-[10px]">
        <Button 
          onClick={onOpenPopup}
          size="lg" 
          className="w-full h-14 text-lg font-black bg-accent hover:bg-accent/90 shadow-xl rounded-2xl animate-heartbeat"
        >
          <ShoppingCart className="h-5 w-5" />
          ¡QUIERO MI COMPRA!
        </Button>
      </div>

      {/* Imagen Impacto Cabello */}
      <div className="px-[5px]">
        <div className="w-full overflow-hidden rounded-xl cursor-pointer" onClick={onOpenPopup}>
          {featHairHero && (
            <img 
              src={featHairHero.imageUrl} 
              alt="Impacto MaryRuth's Cabello"
              className="w-full h-auto block"
            />
          )}
        </div>
      </div>

      {/* Botón CTA Intermedio */}
      <div className="px-[5px] mt-[10px]">
        <Button 
          onClick={onOpenPopup}
          size="lg" 
          className="w-full h-14 text-lg font-black bg-accent hover:bg-accent/90 shadow-xl rounded-2xl animate-heartbeat"
        >
          <ShoppingCart className="h-5 w-5" />
          ¡QUIERO MI COMPRA!
        </Button>
      </div>

      {/* Imagen Extra antes de Resultados */}
      <div className="px-[5px] mt-[10px]">
        <div className="w-full overflow-hidden rounded-xl cursor-pointer" onClick={onOpenPopup}>
          {featHairExtra && (
            <img 
              src={featHairExtra.imageUrl} 
              alt="Resultados Extra MaryRuth's"
              className="w-full h-auto block"
            />
          )}
        </div>
      </div>

      {/* Detalles Resultados */}
      <div className="py-[10px] bg-white mt-[10px]">
        <div className="container mx-auto px-[10px] space-y-[10px]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-black text-[10px] tracking-widest uppercase">
            < ShieldCheck className="h-4 w-4" />
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
    </section>
  );
}
