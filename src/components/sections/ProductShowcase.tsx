
"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function ProductShowcase() {
  const showcaseImg = PlaceHolderImages.find(img => img.id === "product-showcase");
  const imgUrl = showcaseImg?.imageUrl || "https://i.imgur.com/j8pwxGX.png";

  return (
    <section className="relative w-full min-h-[80vh] bg-white flex flex-col">
      {/* Imagen ajustada para que el producto se vea completo */}
      <div className="relative flex-1 w-full min-h-[60vh]">
        <Image 
          src={imgUrl} 
          alt="Detalle Producto MaryRuth's"
          fill
          className="object-contain object-center"
          sizes="500px"
          priority
        />
      </div>

      {/* Texto vendedor debajo de la sección de impacto visual */}
      <div className="bg-white p-8 space-y-4 text-center border-t-4 border-secondary">
        <h2 className="text-2xl font-black text-foreground leading-tight uppercase">
          Tu Ritual de <span className="text-primary">30 Segundos</span>
        </h2>
        <p className="text-base text-muted-foreground font-medium italic px-4">
          "La forma más deliciosa de nutrir tu cuerpo sin pastillas difíciles de tragar."
        </p>
        
        <div className="pt-4">
          <Link 
            href="#registro" 
            className="inline-flex items-center gap-2 text-primary font-black uppercase tracking-widest text-[14px] hover:underline"
          >
            Ver disponibilidad ahora
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
