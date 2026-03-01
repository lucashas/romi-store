
"use client";

import { Zap, Star, Leaf, ShieldCheck, AlertCircle } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "98% DE ABSORCIÓN REAL",
    description: "Mientras que las pastillas se quedan en tu estómago, nuestro líquido entra directo a tu torrente sanguíneo. Resultados en días, no meses."
  },
  {
    icon: Star,
    title: "EL SABOR QUE TE HARÁ ADICTO",
    description: "Peach Mango natural. Tan delicioso que no creerás que es medicina. Ideal para quienes odian las vitaminas con mal sabor."
  },
  {
    icon: Leaf,
    title: "PUREZA TOTAL SIN AZÚCAR",
    description: "Vegano, sin gluten, sin soja y sin químicos. Solo ingredientes que tu cuerpo reconoce y aprovecha al 100%."
  }
];

export function Benefits() {
  return (
    <section id="beneficios" className="py-16 bg-white border-b border-secondary">
      <div className="container mx-auto px-6">
        <div className="bg-red-50 border-2 border-red-100 p-6 rounded-3xl mb-12 flex items-start gap-4">
          <AlertCircle className="h-6 w-6 text-accent shrink-0 mt-1" />
          <p className="text-sm font-bold text-accent leading-snug">
            ¿SABÍAS QUE TU CUERPO DESECHA HASTA EL 80% DE LAS VITAMINAS EN PASTILLAS? DEJA DE TIRAR TU DINERO.
          </p>
        </div>

        <div className="text-center mb-10">
          <h2 className="text-2xl font-black text-foreground mb-2">POR QUÉ SOMOS #1 EN TIKTOK</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </div>

        <div className="space-y-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="p-6 rounded-3xl bg-secondary/30 border border-primary/10 flex flex-col items-center text-center"
            >
              <div className="h-14 w-14 rounded-2xl bg-white flex items-center justify-center mb-4 shadow-sm border border-secondary">
                <benefit.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-lg font-black text-foreground mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground font-medium leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
