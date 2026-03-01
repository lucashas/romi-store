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
    <section id="caracteristicas" className="bg-white space-y-[10px]">
      <div className="px-[5px] py-[5px]">
        <Button asChild size="lg" className="w-full h-14 text-lg font-black bg-accent hover:bg-accent/90 shadow-xl rounded-2xl animate-heartbeat">
          <Link href="#registro" className="flex items-center gap-3">
            <ShoppingCart className="h-5 w-5" />
            ¡QUIERO MI COMPRA!
          </Link>
        </Button>
      </div>

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

      <div className="px-[5px] py-[5px]">
        <Button asChild size="lg" className="w-full h-14 text-lg font-black bg-accent hover:bg-accent/90 shadow-xl rounded-2xl animate-heartbeat">
          <Link href="#registro" className="flex items-center gap-3">
            <ShoppingCart className="h-5 w-5" />
            ¡QUIERO MI COMPRA!
          </Link>
        </Button>
      </div>

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
    </section>
  );
}
