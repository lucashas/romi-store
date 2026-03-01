
"use client";

import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Hero() {
  const heroImg = PlaceHolderImages.find(img => img.id === "hero-main");
  const heroImgUrl = heroImg?.imageUrl || "https://i.imgur.com/XfmwUEJ.png"; 

  return (
    <section className="bg-[#4a2c1d]">
      <div className="px-[5px] pt-[5px]">
        <div className="w-full overflow-hidden rounded-xl">
          <img 
            src={heroImgUrl} 
            alt="MaryRuth's Organics - Promo TikTok"
            className="w-full h-auto block"
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
              ENVÍO GRATIS • ABSORCIÓN INMEDIATA • 100% ORGÁNICO
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
