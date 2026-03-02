
"use client";

import { Zap, Star, Leaf, AlertCircle, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BenefitsProps {
  onOpenPopup: () => void;
}

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
    description: "Vegano, sin gluten y sin químicos. Solo ingredientes que tu cuerpo reconoce y aprovecha al 100%."
  }
];

export function Benefits({ onOpenPopup }: BenefitsProps) {
  return (
    <section id="beneficios" className="py-[15px] bg-white border-b border-secondary">
      <div className="container mx-auto px-[15px]">
        {/* Alerta de impacto */}
        <div className="bg-red-50 border-2 border-red-100 p-4 rounded-xl mb-[15px] flex items-start gap-[12px]">
          <AlertCircle className="h-6 w-6 text-accent shrink-0 mt-0.5" />
          <p className="text-[14px] font-black text-accent leading-tight uppercase">
            ¿SABÍAS QUE TU CUERPO DESECHA EL 80% DE LAS PASTILLAS? DEJA DE TIRAR TU DINERO.
          </p>
        </div>

        {/* Titular */}
        <div className="text-center mb-[15px]">
          <h2 className="text-xl font-black text-foreground mb-1 uppercase tracking-tighter leading-none">POR QUÉ SOMOS #1 EN TIKTOK</h2>
          <div className="h-1.5 w-16 bg-primary mx-auto rounded-full" />
        </div>

        {/* Lista de beneficios */}
        <div className="space-y-[12px] mb-[15px]">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="p-4 rounded-xl bg-secondary/30 border border-primary/10 flex items-center gap-[12px] text-left"
            >
              <div className="h-12 w-12 rounded-lg bg-white flex items-center justify-center shadow-sm border border-secondary shrink-0">
                <benefit.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="min-w-0">
                <h3 className="text-[15px] font-black text-foreground leading-tight uppercase">{benefit.title}</h3>
                <p className="text-[13px] text-muted-foreground font-medium leading-tight mt-1">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Botón CTA */}
        <Button 
          onClick={onOpenPopup}
          size="lg" 
          className="w-full h-16 text-xl font-black bg-accent hover:bg-accent/90 shadow-xl rounded-2xl animate-heartbeat"
        >
          <ShoppingCart className="h-6 w-6" />
          ¡QUIERO MI COMPRA!
        </Button>
      </div>
    </section>
  );
}
