"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

interface HeroProps {
  onOpenPopup: () => void;
}

export function Hero({ onOpenPopup }: HeroProps) {
  const heroImg = PlaceHolderImages.find(img => img.id === "hero-main");
  const heroImgUrl = heroImg?.imageUrl || "https://i.imgur.com/XfmwUEJ.png"; 

  return (
    <section className="bg-[#4a2c1d]">
      <div className="px-[5px] pt-[5px] cursor-pointer" onClick={onOpenPopup}>
        <div className="w-full overflow-hidden rounded-xl relative">
          <Image 
            src={heroImgUrl} 
            alt="MaryRuth&apos;s Organics - Promo TikTok"
            width={500}
            height={300}
            className="w-full h-auto block"
            priority
          />
        </div>
      </div>
      
      <div className="bg-[#4a2c1d] py-[10px] border-y border-white/10 mt-[10px]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center gap-1">
            <div className="flex items-center gap-2 w-full justify-center">
              <span className="h-px flex-1 bg-white/20" />
              <p className="text-white font-black text-[10px] uppercase tracking-[0.2em] whitespace-nowrap">
                Vitalidad Premium
              </p>
              <span className="h-px flex-1 bg-white/20" />
            </div>
            <p className="text-center text-white font-bold text-[11px] uppercase tracking-[0.1em] leading-tight">
              ENV&Iacute;O GRATIS &bull; ABSORCI&Oacute;N INMEDIATA &bull; 100% ORG&Aacute;NICO
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
