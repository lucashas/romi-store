
"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function ProductShowcase() {
  const showcaseImg = PlaceHolderImages.find(img => img.id === "product-showcase");
  const imgUrl = showcaseImg?.imageUrl || "https://i.imgur.com/j8pwxGX.png";

  return (
    <section className="bg-white space-y-[10px]">
      <div className="relative w-full aspect-[9/16] bg-white px-[5px]">
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
      </div>

      <div className="px-[10px]">
        <div className="bg-secondary/20 p-[15px] rounded-2xl border border-secondary text-center space-y-2">
          <h2 className="text-lg font-black text-foreground leading-tight uppercase">
            Tu Ritual de <span className="text-primary">30 Segundos</span>
          </h2>
          <p className="text-[12px] text-muted-foreground font-medium italic leading-tight">
            "La forma más deliciosa de nutrir tu cuerpo sin pastillas."
          </p>
          <div className="pt-1">
            <Link 
              href="#registro" 
              className="inline-flex items-center gap-1 text-primary font-black uppercase tracking-widest text-[11px] hover:underline"
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
