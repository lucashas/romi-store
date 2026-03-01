
"use client";

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
        <div className="w-full overflow-hidden rounded-xl cursor-pointer" onClick={onOpenPopup}>
          <img 
            src={imgUrl} 
            alt="Detalle Producto MaryRuth's"
            className="w-full h-auto block"
          />
        </div>
      </div>

      <div className="px-[10px] mt-[10px]">
        <div className="bg-secondary/20 p-[15px] rounded-2xl border border-secondary text-center space-y-2">
          <h2 className="text-lg font-black text-foreground leading-tight uppercase">
            Tu Ritual de <span className="text-primary">30 Segundos</span>
          </h2>
          <p className="text-[12px] text-muted-foreground font-medium italic leading-tight">
            "La forma más deliciosa de nutrir tu cuerpo sin pastillas."
          </p>
          <div className="pt-1">
            <button 
              onClick={onOpenPopup}
              className="inline-flex items-center gap-1 text-primary font-black uppercase tracking-widest text-[11px] hover:underline"
            >
              Ver disponibilidad ahora
              <ArrowRight className="h-3 w-3" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
