
"use client";

import { Star } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";

const testimonialData = [
  {
    name: "Elena Rodríguez",
    role: "Cambio Total",
    quote: "Llevo 3 meses usando el multivitamínico líquido y mi cabello nunca ha estado tan fuerte. ¡Incluso mi peluquero lo notó!",
    imageId: "testimonial-1"
  },
  {
    name: "Sofía Martínez",
    role: "Piel Radiante",
    quote: "El sabor Peach Mango es delicioso. Noto mi piel mucho más hidratada y luminosa desde que empecé.",
    imageId: "testimonial-2"
  },
  {
    name: "Marcos Santos",
    role: "Energía Diaria",
    quote: "La absorción líquida es real. No más pastillas difíciles de tragar y mi energía está por las nubes.",
    imageId: "testimonial-3"
  }
];

export function Testimonials() {
  return (
    <section id="testimonios" className="py-24 bg-primary text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-black/5 -skew-x-12 transform origin-top" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold font-headline mb-4 tracking-tight">Experiencias Reales</h2>
          <p className="text-xl opacity-90">Únete a los miles que ya eligieron la nutrición líquida.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialData.map((t, i) => {
            const userImg = PlaceHolderImages.find(img => img.id === t.imageId);
            return (
              <Card key={i} className="bg-white text-foreground border-none shadow-2xl rounded-[2rem] overflow-hidden">
                <CardContent className="p-10 space-y-6">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-xl font-medium italic leading-relaxed text-muted-foreground">"{t.quote}"</p>
                  <div className="flex items-center gap-4 pt-6 border-t border-primary/10">
                    <div className="h-14 w-14 rounded-full overflow-hidden border-2 border-primary relative">
                      <Image 
                        src={userImg?.imageUrl || `https://picsum.photos/seed/${i}/150/150`} 
                        alt={t.name} 
                        fill
                        className="object-cover"
                        sizes="56px"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-xl">{t.name}</p>
                      <p className="text-sm text-primary font-bold uppercase tracking-widest">{t.role}</p>
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
