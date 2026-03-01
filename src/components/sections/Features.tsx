
"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { CheckCircle2, Sun, Brain, Shield } from "lucide-react";

export function Features() {
  const featKids = PlaceHolderImages.find(img => img.id === "feature-kids");
  const featOmega = PlaceHolderImages.find(img => img.id === "feature-omega");

  return (
    <section id="caracteristicas" className="py-24 space-y-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl aspect-square relative group border-8 border-white">
              <Image 
                src={featKids?.imageUrl || ""} 
                alt="Vitaminas para Niños"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                data-ai-hint="happy child"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 h-32 w-32 bg-primary rounded-full -z-10 animate-pulse opacity-20" />
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-3xl font-bold font-headline text-foreground">Gomitas Orgánicas para Niños 👶</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Haz que la salud sea divertida. Nuestras gomitas están diseñadas para que los niños las pidan cada mañana, sin colorantes artificiales ni químicos dañinos.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Ingredientes orgánicos certificados",
                "Sin colorantes artificiales",
                "Nutrientes esenciales para el crecimiento",
                "Sabor natural delicioso"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-foreground/80 font-medium">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold font-headline text-foreground">Suplementos Específicos 🎯</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Cubrimos todas tus necesidades nutricionales con fórmulas optimizadas para cada objetivo.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-white border border-primary/10 shadow-sm flex flex-col items-center text-center">
                <Sun className="h-8 w-8 text-primary mb-2" />
                <p className="font-bold text-foreground">Vitamina D3</p>
                <p className="text-xs text-muted-foreground">Huesos & Inmunidad</p>
              </div>
              <div className="p-4 rounded-xl bg-white border border-primary/10 shadow-sm flex flex-col items-center text-center">
                <Brain className="h-8 w-8 text-primary mb-2" />
                <p className="font-bold text-foreground">Complejo B</p>
                <p className="text-xs text-muted-foreground">Energía & Enfoque</p>
              </div>
              <div className="p-4 rounded-xl bg-white border border-primary/10 shadow-sm flex flex-col items-center text-center">
                <Shield className="h-8 w-8 text-primary mb-2" />
                <p className="font-bold text-foreground">Omega-3</p>
                <p className="text-xs text-muted-foreground">Salud Cardiovascular</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl aspect-square relative group border-8 border-white">
              <Image 
                src={featOmega?.imageUrl || ""} 
                alt="Omega-3 y otros suplementos"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                data-ai-hint="supplements display"
              />
            </div>
            <div className="absolute -top-6 -left-6 h-32 w-32 bg-accent/10 rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
