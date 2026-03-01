
"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function ProductShowcase() {
  const showcaseImg = PlaceHolderImages.find(img => img.id === "product-showcase");
  const imgUrl = showcaseImg?.imageUrl || "https://i.imgur.com/j8pwxGX.png";

  return (
    <section className="relative w-full h-[90vh] bg-white overflow-hidden border-b-8 border-secondary">
      {/* Imagen de impacto total - Ocupa todo el ancho y alto asignado */}
      <Image 
        src={imgUrl} 
        alt="Detalle Producto MaryRuth's"
        fill
        className="object-cover object-center"
        sizes="500px"
        priority
      />

      {/* Texto vendedor compacto superpuesto al final */}
      <div className="absolute bottom-0 left-0 w-full bg-white/95 backdrop-blur-sm p-6 space-y-2 text-center z-10">
        <h2 className="text-xl font-black text-foreground leading-tight uppercase">
          Tu Ritual de <span className="text-primary">30 Segundos</span>
        </h2>
        <p className="text-[12px] text-muted-foreground font-medium italic px-2">
          "La forma más deliciosa de nutrir tu cuerpo sin pastillas difíciles de tragar."
        </p>
        
        <div className="pt-1">
          <Link 
            href="#registro" 
            className="inline-flex items-center gap-2 text-primary font-black uppercase tracking-widest text-[11px] hover:underline"
          >
            Ver disponibilidad ahora
            <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </div>
    </section>
  );
}
