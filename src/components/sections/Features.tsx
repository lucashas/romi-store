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
      <div className="px-[10px] mb-[15px]">
        <Button 
          onClick={onOpenPopup}
          size="lg" 
          className="w-full h-16 text-xl font-black bg-accent hover:bg-accent/90 shadow-xl rounded-2xl animate-heartbeat"
        >
          <ShoppingCart className="h-6 w-6" />
          &iexcl;QUIERO MI COMPRA!
        </Button>
      </div>

      <div className="px-[5px]">
        <div className="w-full overflow-hidden rounded-xl cursor-pointer relative" onClick={onOpenPopup}>
          {featHairHero && (
            <Image 
              src={featHairHero.imageUrl} 
              alt="Impacto MaryRuth&apos;s Cabello"
              width={500}
              height={300}
              className="w-full h-auto block"
            />
          )}
        </div>
      </div>

      <div className="px-[10px] mt-[15px]">
        <Button 
          onClick={onOpenPopup}
          size="lg" 
          className="w-full h-16 text-xl font-black bg-accent hover:bg-accent/90 shadow-xl rounded-2xl animate-heartbeat"
        >
          <ShoppingCart className="h-6 w-6" />
          &iexcl;QUIERO MI COMPRA!
        </Button>
      </div>

      <div className="px-[5px] mt-[15px]">
        <div className="w-full overflow-hidden rounded-xl cursor-pointer relative" onClick={onOpenPopup}>
          {featHairExtra && (
            <Image 
              src={featHairExtra.imageUrl} 
              alt="Resultados Extra MaryRuth&apos;s"
              width={500}
              height={300}
              className="w-full h-auto block"
            />
          )}
        </div>
      </div>

      <div className="py-[20px] bg-white mt-[10px]">
        <div className="container mx-auto px-[15px] space-y-[15px]">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-black text-[11px] tracking-widest uppercase">
            <ShieldCheck className="h-5 w-5" />
            RESULTADOS COMPROBADOS
          </div>
          
          <h2 className="text-3xl font-black text-foreground leading-tight uppercase">
            CABELLO M&Aacute;S LARGO <br />
            <span className="text-primary italic">Y PIEL DE PORCELANA</span>
          </h2>
          
          <p className="text-[15px] text-muted-foreground font-medium leading-relaxed">
            Nuestra Biotina con Lustriva&reg; est&aacute; dise&ntilde;ada para quienes no se conforman con menos. Ver&aacute;s la diferencia en tu espejo desde la primera botella.
          </p>
          
          <div className="relative w-full aspect-square rounded-[2rem] overflow-hidden shadow-xl border-4 border-secondary/20">
            {featHair && (
              <Image 
                src={featHair.imageUrl} 
                alt="Resultados MaryRuth&apos;s"
                fill
                className="object-cover"
                sizes="500px"
              />
            )}
          </div>

          <div className="grid grid-cols-1 gap-2 pt-2">
            {[
              "Crecimiento 3x más rápido",
              "Reduce la caída notablemente",
              "Brillo natural sin químicos",
              "Uñas de acero"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 bg-secondary/10 p-3 rounded-xl border border-secondary/50">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                <span className="text-[14px] font-black text-foreground uppercase">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
