
"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function ProductShowcase() {
  const showcaseImg = PlaceHolderImages.find(img => img.id === "product-showcase");
  const imgUrl = showcaseImg?.imageUrl || "https://i.imgur.com/j8pwxGX.png";

  return (
    <section className="relative w-full h-[90vh] bg-white flex flex-col border-b-8 border-secondary">
      {/* Imagen de impacto total - Ocupa todo el ancho y alto asignado */}
      <div className="relative flex-1 w-full h-full overflow-hidden">
        <Image 
          src={imgUrl} 
          alt="Detalle Producto MaryRuth's"
          fill
          className="object-cover object-center"
          sizes="500px"
          priority
        />
      </div>

      {/* Texto vendedor compacto superpuesto o pegado al final */}
      <div className="bg-white p-6 space-y-3 text-center">
        <h2 className="text-xl font-black text-foreground leading-tight uppercase">
          Tu Ritual de <span className="text-primary">30 Segundos</span>
        </h2>
        <p className="text-[13px] text-muted-foreground font-medium italic px-2">
          "La forma más deliciosa de nutrir tu cuerpo sin pastillas difíciles de tragar."
        </p>
        
        <div className="pt-2">
          <Link 
            href="#registro" 
            className="inline-flex items-center gap-2 text-primary font-black uppercase tracking-widest text-[12px] hover:underline"
          >
            Ver disponibilidad ahora
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
