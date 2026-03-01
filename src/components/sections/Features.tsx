
"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { CheckCircle2 } from "lucide-react";

export function Features() {
  const feat1 = PlaceHolderImages.find(img => img.id === "feature-1");
  const feat2 = PlaceHolderImages.find(img => img.id === "feature-2");

  return (
    <section id="caracteristicas" className="py-24 space-y-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl aspect-video relative group">
              <Image 
                src={feat1?.imageUrl || ""} 
                alt="Feature Detail"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                data-ai-hint="modern technology"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 h-32 w-32 bg-accent rounded-full -z-10 animate-pulse" />
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-3xl font-bold font-headline text-primary">Interfaz Intuitiva y Adaptable</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              No pierdas tiempo aprendiendo a usar herramientas complejas. Nuestra interfaz ha sido diseñada para ser natural, permitiéndote concentrarte en lo que realmente importa.
            </p>
            <ul className="space-y-4">
              {[
                "Personalización completa del panel de control",
                "Integración con más de 50 aplicaciones externas",
                "Modo oscuro automático basado en la luz ambiental"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-primary/80 font-medium">
                  <CheckCircle2 className="h-5 w-5 text-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold font-headline text-primary">Análisis en Tiempo Real</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Toma decisiones basadas en datos, no en suposiciones. Visualiza el rendimiento de tus proyectos al instante con gráficas interactivas y reportes automáticos.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-secondary/50 border">
                <p className="text-2xl font-bold text-primary">99.9%</p>
                <p className="text-sm text-muted-foreground">Disponibilidad</p>
              </div>
              <div className="p-4 rounded-xl bg-secondary/50 border">
                <p className="text-2xl font-bold text-primary">15ms</p>
                <p className="text-sm text-muted-foreground">Latencia</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl aspect-video relative group">
              <Image 
                src={feat2?.imageUrl || ""} 
                alt="Interface Display"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                data-ai-hint="software interface"
              />
            </div>
            <div className="absolute -top-6 -left-6 h-32 w-32 bg-primary/20 rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
