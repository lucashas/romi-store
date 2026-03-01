
"use client";

import { Quote, Star } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Elena Rodríguez",
    role: "Mamá de dos",
    quote: "Mis hijos aman las gomitas. Por fin encontré una vitamina que es orgánica y que realmente quieren tomar.",
    image: PlaceHolderImages.find(img => img.id === "testimonial-2")?.imageUrl
  },
  {
    name: "Sofía Martínez",
    role: "Entusiasta del Fitness",
    quote: "El multivitamínico líquido es increíble. Noto la diferencia en mi energía y mi cabello se ve mucho más fuerte.",
    image: PlaceHolderImages.find(img => img.id === "testimonial-1")?.imageUrl
  },
  {
    name: "Marcos Santos",
    role: "Arquitecto",
    quote: "El complejo B me ayuda a mantenerme enfocado durante los días largos. La absorción líquida realmente se nota.",
    image: "https://picsum.photos/seed/user3/150/150"
  }
];

export function Testimonials() {
  return (
    <section id="testimonios" className="py-24 bg-accent text-accent-foreground overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 -skew-x-12 transform origin-top" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold font-headline mb-4">Lo que dicen nuestras familias</h2>
          <p className="text-lg opacity-90">Miles de personas ya han transformado su salud con MaryRuth's.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <Card key={i} className="bg-white text-foreground border-none shadow-2xl rounded-2xl">
              <CardContent className="p-8 space-y-6">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-lg italic leading-relaxed text-muted-foreground">"{t.quote}"</p>
                <div className="flex items-center gap-4 border-t border-muted/10 pt-6">
                  <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-primary">
                    <Image src={t.image || ""} alt={t.name} width={48} height={48} className="object-cover" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">{t.name}</p>
                    <p className="text-sm text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
