"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

interface ProductShowcaseProps {
  onOpenPopup: () => void;
}

export function ProductShowcase({ onOpenPopup }: ProductShowcaseProps) {
  const showcaseImg = PlaceHolderImages.find(img => img.id === "product-showcase");
  const imgUrl = showcaseImg?.imageUrl || "https://i.imgur.com/j8pwxGX.png";

  return (
    <section className="bg-white">
      <div className="px-[5px]">
        <div className="w-full overflow-hidden rounded-xl cursor-pointer relative" onClick={onOpenPopup}>
          <Image 
            src={imgUrl} 
            alt="Detalle Producto MaryRuth&apos;s"
            width={500}
            height={300}
            className="w-full h-auto block"
          />
        </div>
      </div>

      <div className="px-[15px] mt-[15px]">
        <div className="bg-secondary/20 p-5 rounded-2xl border border-secondary text-center space-y-3">
          <h2 className="text-xl font-black text-foreground leading-tight uppercase">
            Tu Ritual de <span className="text-primary">30 Segundos</span>
          </h2>
          <p className="text-[14px] text-muted-foreground font-medium italic leading-snug">
            &quot;La forma m&aacute;s deliciosa de nutrir tu cuerpo sin pastillas.&quot;
          </p>
          <div className="pt-2">
            <button 
              onClick={onOpenPopup}
              className="inline-flex items-center gap-2 text-primary font-black uppercase tracking-widest text-[12px] hover:underline"
            >
              Ver disponibilidad ahora
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
