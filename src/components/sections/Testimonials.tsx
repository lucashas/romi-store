
"use client";

import { Star } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";

export interface TestimonialItem {
  name: string;
  city: string;
  role: string;
  quote: string;
  imageId: string;
}

interface TestimonialsProps {
  title?: string;
  items?: TestimonialItem[];
}

const defaultTestimonials: TestimonialItem[] = [
  {
    name: "Elena Rodríguez",
    city: "Guayaquil",
    role: "Cambio Total",
    quote: "Llevo 3 meses usando el multivitamínico líquido y mi cabello nunca ha estado tan fuerte. ¡Incluso mi peluquero lo notó!",
    imageId: "testimonial-user-1"
  },
  {
    name: "Sofía Martínez",
    city: "Quito",
    role: "Piel Radiante",
    quote: "El sabor Peach Mango es delicioso. Noto mi piel mucho más hidratada y luminosa desde que empecé.",
    imageId: "testimonial-user-2"
  },
  {
    name: "Marcos Santos",
    city: "Cuenca",
    role: "Energía Diaria",
    quote: "La absorción líquida es real. No más pastillas difíciles de tragar y mi energía está por las nubes.",
    imageId: "testimonial-user-3"
  }
];

export function Testimonials({ 
  title = "Experiencias Reales", 
  items = defaultTestimonials 
}: TestimonialsProps) {
  return (
    <section id="testimonios" className="py-[30px] bg-slate-900 text-white overflow-hidden relative">
      <div className="container mx-auto px-[15px] relative z-10">
        <div className="text-center mb-8">
          <div className="flex justify-center gap-1 mb-2">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} className="h-4 w-4 fill-orange-500 text-orange-500" />
            ))}
          </div>
          <h2 className="text-3xl font-black font-headline uppercase tracking-tight leading-none text-white">
            {title}
          </h2>
          <p className="text-[10px] font-black text-orange-500 uppercase tracking-[0.3em] mt-2">
            Resultados que hablan por sí solos
          </p>
        </div>

        <div className="space-y-6">
          {items.map((t, i) => {
            const userImg = PlaceHolderImages.find(img => img.id === t.imageId);
            return (
              <Card key={i} className="bg-white text-slate-900 border-none shadow-2xl rounded-[2.5rem] overflow-hidden transform transition-all active:scale-95">
                <CardContent className="p-6 space-y-4">
                  <p className="text-[15px] font-bold italic leading-relaxed text-slate-600">
                    "{t.quote}"
                  </p>
                  
                  <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                    <div className="h-14 w-14 rounded-full overflow-hidden border-2 border-orange-500 relative shrink-0 shadow-lg">
                      <Image 
                        src={userImg?.imageUrl || `https://picsum.photos/seed/${i + 10}/150/150`} 
                        alt={t.name} 
                        fill
                        unoptimized
                        className="object-cover"
                        sizes="56px"
                      />
                    </div>
                    <div>
                      <p className="font-black text-[16px] leading-tight text-slate-900">
                        {t.name}
                      </p>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-[11px] font-black text-orange-600 uppercase tracking-widest">{t.role}</span>
                        <span className="h-1 w-1 bg-slate-300 rounded-full" />
                        <span className="text-[11px] font-bold text-slate-400 uppercase">{t.city}, EC</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
