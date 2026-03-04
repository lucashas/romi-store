
"use client";

import { Star } from "lucide-react";

interface TestimonialsProps {
  title?: string;
  subtitle?: string;
  testimonialImageUrl?: string;
  themeColor?: "gold" | "orange" | "slate";
}

export function Testimonials({ 
  title = "CLIENTAS FELICES", 
  subtitle = "Resultados que hablan por sí solos",
  testimonialImageUrl = "https://i.imgur.com/qOmlzPP.png", 
  themeColor = "orange"
}: TestimonialsProps) {
  const isGold = themeColor === "gold";
  const starColor = isGold ? "fill-yellow-600 text-yellow-600" : "fill-orange-500 text-orange-500";
  const textColor = isGold ? "text-yellow-600" : "text-orange-600";

  return (
    <section id="testimonios" className="py-12 bg-white overflow-hidden relative border-t border-slate-100">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10 space-y-4">
          <div className="flex justify-center gap-1.5">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} className={`h-6 w-6 ${starColor}`} />
            ))}
          </div>
          
          <div className="space-y-2">
            <h2 className="text-4xl font-black uppercase tracking-tighter leading-none text-slate-900">
              {title}
            </h2>
            <p className={`text-[16px] font-black uppercase tracking-widest ${textColor}`}>
              {subtitle}
            </p>
          </div>
        </div>

        <div className="max-w-[450px] mx-auto">
          <div className="relative w-full rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-slate-50">
            <img 
              src={testimonialImageUrl} 
              alt="Testimonios de clientes" 
              className="w-full h-auto block"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
