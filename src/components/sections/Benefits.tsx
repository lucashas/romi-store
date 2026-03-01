
"use client";

import { Zap, Star, Leaf, AlertCircle } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "98% DE ABSORCIÓN REAL",
    description: "Mientras que las pastillas se quedan en tu estómago, nuestro líquido entra directo a tu torrente sanguíneo. Resultados en días."
  },
  {
    icon: Star,
    title: "EL SABOR QUE TE HARÁ ADICTO",
    description: "Peach Mango natural. Tan delicioso que no creerás que es medicina. Ideal para quienes odian el mal sabor."
  },
  {
    icon: Leaf,
    title: "PUREZA TOTAL SIN AZÚCAR",
    description: "Vegano, sin gluten y sin químicos. Solo ingredientes que tu cuerpo aprovecha al 100%."
  }
];

export function Benefits() {
  return (
    <section id="beneficios" className="py-6 bg-white border-b border-secondary">
      <div className="container mx-auto px-6">
        {/* Alerta de impacto - Muy compacta */}
        <div className="bg-red-50 border-2 border-red-100 p-3 rounded-xl mb-4 flex items-start gap-3">
          <AlertCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
          <p className="text-[12px] font-black text-accent leading-tight">
            ¿SABÍAS QUE TU CUERPO DESECHA EL 80% DE LAS PASTILLAS? DEJA DE TIRAR TU DINERO.
          </p>
        </div>

        {/* Titular - Margen mínimo */}
        <div className="text-center mb-4">
          <h2 className="text-lg font-black text-foreground mb-1 uppercase">POR QUÉ SOMOS #1 EN TIKTOK</h2>
          <div className="h-1 w-12 bg-primary mx-auto rounded-full" />
        </div>

        {/* Lista de beneficios - Muy pegada */}
        <div className="space-y-2">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="p-3 rounded-xl bg-secondary/30 border border-primary/10 flex items-center gap-4 text-left"
            >
              <div className="h-10 w-10 rounded-lg bg-white flex items-center justify-center shadow-sm border border-secondary shrink-0">
                <benefit.icon className="h-5 w-5 text-primary" />
              </div>
              <div className="min-w-0">
                <h3 className="text-sm font-black text-foreground leading-tight uppercase">{benefit.title}</h3>
                <p className="text-[12px] text-muted-foreground font-medium leading-tight">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
