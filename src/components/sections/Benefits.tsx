
"use client";

import { Zap, Heart, Leaf, Star, ShieldCheck } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Absorción Líquida",
    description: "Biodisponibilidad máxima. Los nutrientes llegan a tus células mucho más rápido que las píldoras."
  },
  {
    icon: Star,
    title: "Sabor Increíble",
    description: "Sabor Peach Mango delicioso que toda la familia disfrutará tomar cada mañana."
  },
  {
    icon: Leaf,
    title: "100% Vegano",
    description: "Sin azúcar añadido, sin gluten y elaborado con ingredientes orgánicos certificados."
  },
  {
    icon: ShieldCheck,
    title: "Sin Químicos",
    description: "Sin colorantes artificiales ni rellenos innecesarios. Solo nutrición pura y honesta."
  }
];

export function Benefits() {
  return (
    <section id="beneficios" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-[10px] font-black text-primary tracking-[0.3em] uppercase mb-4">El Poder de MaryRuth's</h2>
          <p className="text-3xl font-black font-headline text-foreground mb-6 leading-tight">¿Por qué elegir <br/>Nutrición Líquida?</p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Move Forward with MaryRuth's. Diseñadas para que tu cuerpo aproveche cada gota.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group p-8 rounded-3xl bg-secondary/10 border border-transparent active:scale-[0.98] transition-all duration-300"
            >
              <div className="h-12 w-12 rounded-xl bg-white flex items-center justify-center mb-6 shadow-sm">
                <benefit.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
