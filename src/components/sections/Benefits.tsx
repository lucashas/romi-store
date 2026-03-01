
"use client";

import { Zap, Heart, Leaf, Star, Sparkles, ShieldCheck } from "lucide-react";

const benefits = [
  {
    icon: Sparkles,
    title: "Crecimiento Capilar",
    description: "Con Biotina y Lustriva® clínicamente probados para un cabello más grueso y fuerte."
  },
  {
    icon: Zap,
    title: "Absorción Líquida",
    description: "Máxima biodisponibilidad. Los nutrientes llegan más rápido a tu sistema que las cápsulas."
  },
  {
    icon: ShieldCheck,
    title: "Anti-Envejecimiento",
    description: "Apoya la elasticidad de la piel y reduce la apariencia de líneas finas."
  },
  {
    icon: Heart,
    title: "Nutrición 100% Vegana",
    description: "Sin azúcar añadido, sin gluten y elaborado con ingredientes orgánicos de confianza."
  }
];

export function Benefits() {
  return (
    <section id="beneficios" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-lg font-black text-primary tracking-[0.2em] uppercase mb-4">El Poder de MaryRuth's</h2>
          <p className="text-4xl sm:text-5xl font-bold font-headline text-foreground mb-6">Ciencia y Naturaleza en cada gota</p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Nuestras fórmulas líquidas están diseñadas para que tu cuerpo absorba lo que realmente necesita, sin rellenos innecesarios.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group p-10 rounded-3xl bg-secondary/20 border border-transparent hover:border-primary/20 hover:bg-white hover:shadow-2xl transition-all duration-500"
            >
              <div className="h-16 w-16 rounded-2xl bg-white flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all shadow-md group-hover:-translate-y-2">
                <benefit.icon className="h-8 w-8 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
