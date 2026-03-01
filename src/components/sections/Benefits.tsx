
"use client";

import { Zap, Star, Leaf, AlertCircle } from "lucide-react";

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
    <section id="beneficios" className="py-10 bg-white border-b border-secondary">
      <div className="container mx-auto px-6">
        {/* Alerta de impacto - Margen reducido */}
        <div className="bg-red-50 border-2 border-red-100 p-4 rounded-2xl mb-6 flex items-start gap-3">
          <AlertCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
          <p className="text-[13px] font-black text-accent leading-tight">
            ¿SABÍAS QUE TU CUERPO DESECHA HASTA EL 80% DE LAS VITAMINAS EN PASTILLAS? DEJA DE TIRAR TU DINERO.
          </p>
        </div>

        {/* Titular - Margen reducido */}
        <div className="text-center mb-6">
          <h2 className="text-xl font-black text-foreground mb-1">POR QUÉ SOMOS #1 EN TIKTOK</h2>
          <div className="h-1 w-16 bg-primary mx-auto rounded-full" />
        </div>

        {/* Lista de beneficios - Espaciado entre items reducido */}
        <div className="space-y-3">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="p-4 rounded-2xl bg-secondary/30 border border-primary/10 flex flex-col items-center text-center"
            >
              <div className="h-10 w-10 rounded-xl bg-white flex items-center justify-center mb-2 shadow-sm border border-secondary">
                <benefit.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-base font-black text-foreground mb-1">{benefit.title}</h3>
              <p className="text-[13px] text-muted-foreground font-medium leading-tight">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
