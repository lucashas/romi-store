
"use client";

import { Star } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";

const testimonialData = [
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

export function Testimonials() {
  return (
    <section id="testimonios" className="py-[20px] bg-primary text-white overflow-hidden relative">
      <div className="container mx-auto px-[15px] relative z-10">
        <div className="text-center mb-[15px]">
          <h2 className="text-3xl font-black font-headline uppercase tracking-tight leading-none">Experiencias Reales</h2>
        </div>

        <div className="space-y-[15px]">
          {testimonialData.map((t, i) => {
            const userImg = PlaceHolderImages.find(img => img.id === t.imageId);
            return (
              <Card key={i} className="bg-white text-foreground border-none shadow-xl rounded-2xl overflow-hidden">
                <CardContent className="p-5 space-y-4">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-[15px] font-medium italic leading-relaxed text-muted-foreground">"{t.quote}"</p>
                  <div className="flex items-center gap-4 pt-4 border-t border-primary/10">
                    <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-primary relative shrink-0">
                      <Image 
                        src={userImg?.imageUrl || `https://picsum.photos/seed/${i}/150/150`} 
                        alt={t.name} 
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                    </div>
                    <div>
                      <p className="font-black text-[15px] leading-tight">
                        {t.name} <span className="text-muted-foreground font-medium text-[13px]">- {t.city}</span>
                      </p>
                      <p className="text-[11px] text-primary font-black uppercase tracking-widest">{t.role}</p>
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
