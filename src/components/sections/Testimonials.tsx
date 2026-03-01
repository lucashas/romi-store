
"use client";

import { Quote } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Elena Rodríguez",
    role: "Directora Creativa",
    quote: "ProductoEstelar ha cambiado la forma en que gestionamos nuestros lanzamientos. Es simple, rápido y visualmente increíble.",
    image: PlaceHolderImages.find(img => img.id === "testimonial-1")?.imageUrl
  },
  {
    name: "Marcos Santos",
    role: "Desarrollador Senior",
    quote: "La API es una maravilla. Integrar ProductoEstelar en nuestro stack actual tomó menos de una hora. Altamente recomendado.",
    image: PlaceHolderImages.find(img => img.id === "testimonial-2")?.imageUrl
  },
  {
    name: "Sofía Martínez",
    role: "CEO en TechLeaf",
    quote: "Buscábamos algo que creciera con nosotros y lo encontramos. El soporte al cliente es el mejor que he experimentado.",
    image: "https://picsum.photos/seed/user3/150/150"
  }
];

export function Testimonials() {
  return (
    <section id="testimonios" className="py-24 bg-primary text-primary-foreground overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 -skew-x-12 transform origin-top" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold font-headline mb-4">Lo que dicen nuestros clientes</h2>
          <p className="text-lg opacity-80">Únete a cientos de empresas que ya están brillando con ProductoEstelar.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <Card key={i} className="bg-white/10 border-white/20 backdrop-blur-md text-white border-none shadow-2xl">
              <CardContent className="p-8 space-y-6">
                <Quote className="h-10 w-10 text-accent opacity-50" />
                <p className="text-lg italic leading-relaxed opacity-90">"{t.quote}"</p>
                <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                  <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-accent">
                    <Image src={t.image || ""} alt={t.name} width={48} height={48} className="object-cover" />
                  </div>
                  <div>
                    <p className="font-bold">{t.name}</p>
                    <p className="text-sm opacity-60">{t.role}</p>
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
