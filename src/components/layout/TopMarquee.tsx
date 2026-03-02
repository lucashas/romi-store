"use client";

import { cn } from "@/lib/utils";

interface TopMarqueeProps {
  text?: string;
  className?: string;
}

export function TopMarquee({ 
  text = "🚀 ROMI STORE EC TIENDA EN LINEA - 📦 PAGAS AL RECIBIR EL PRODUCTO - 🇪🇨 ENTREGAS EN TODO ECUADOR - ",
  className 
}: TopMarqueeProps) {
  return (
    <div className={cn("w-full py-2 overflow-hidden border-b border-white/10 relative", className || "bg-accent text-white")}>
      <div className="animate-marquee whitespace-nowrap flex">
        <span className="text-[11px] font-black uppercase tracking-wider flex items-center">
          {text.repeat(10)}
        </span>
      </div>
    </div>
  );
}
