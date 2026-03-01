"use client";

export function TopMarquee() {
  const text = "🚀 ROMI STORE EC TIENDA EN LINEA - 📦 PAGAS AL RECIBIR EL PRODUCTO - 🇪🇨 ENTREGAS EN TODO ECUADOR - ";
  
  return (
    <div className="w-full bg-accent text-white py-2 overflow-hidden border-b border-white/10 z-[100] sticky top-0">
      <div className="animate-marquee whitespace-nowrap flex">
        <span className="text-[11px] font-black uppercase tracking-wider flex items-center">
          {text.repeat(10)}
        </span>
      </div>
    </div>
  );
}
