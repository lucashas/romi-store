
"use client";

import { Zap, Heart, Leaf, Star } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Absorción Rápida",
    description: "Al ser líquido, ofrece una mejor biodisponibilidad que las píldoras tradicionales."
  },
  {
    icon: Star,
    title: "Sabor Increíble",
    description: "Delicioso sabor a Peach Mango que hace que tomar tus vitaminas sea el mejor momento del día."
  },
  {
    icon: Leaf,
    title: "100% Vegano",
    description: "Ingredientes orgánicos y naturales, aptos para dietas plant-based y sin gluten."
  },
  {
    icon: Heart,
    title: "Sin Azúcar Añadido",
    description: "Endulzados naturalmente para cuidar tu salud sin sacrificar el sabor."
  }
];

export function Benefits() {
  return (
    <section id="beneficios" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-bold text-accent tracking-wide uppercase mb-3">¿Por qué MaryRuth's?</h2>
          <p className="text-4xl font-bold font-headline text-foreground mb-6">Nutrición de confianza para tu familia</p>
          <p className="text-lg text-muted-foreground">
            Creemos en crear suplementos que nosotros mismos daríamos a nuestros seres queridos, usando solo los mejores ingredientes orgánicos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl bg-secondary/30 border border-transparent hover:border-primary/20 hover:bg-white hover:shadow-xl transition-all duration-300"
            >
              <div className="h-14 w-14 rounded-xl bg-white flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                <benefit.icon className="h-7 w-7 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{benefit.title}</h3>
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
