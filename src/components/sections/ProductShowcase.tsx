"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function ProductShowcase() {
  const showcaseImg = PlaceHolderImages.find(img => img.id === "product-showcase");
  const imgUrl = showcaseImg?.imageUrl || "https://i.imgur.com/j8pwxGX.png";

  return (
    <section className="relative w-full aspect-[9/16] bg-white px-[5px]">
      <div className="relative w-full h-full overflow-hidden">
        <Image 
          src={imgUrl} 
          alt="Detalle Producto MaryRuth's"
          fill
          className="object-contain"
          sizes="500px"
          priority
        />
      </div>

      <div className="absolute bottom-[10px] left-0 w-full px-[10px] z-10">
        <div className="bg-white/95 backdrop-blur-sm p-[10px] rounded-2xl shadow-lg border border-secondary text-center space-y-1">
          <h2 className="text-lg font-black text-foreground leading-tight uppercase">
            Tu Ritual de <span className="text-primary">30 Segundos</span>
          </h2>
          <p className="text-[11px] text-muted-foreground font-medium italic leading-tight">
            "La forma más deliciosa de nutrir tu cuerpo sin pastillas."
          </p>
          <div className="pt-1">
            <Link 
              href="#registro" 
              className="inline-flex items-center gap-1 text-primary font-black uppercase tracking-widest text-[10px] hover:underline"
            >
              Ver disponibilidad ahora
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
