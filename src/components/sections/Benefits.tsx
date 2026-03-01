
"use client";

import { Zap, Star, Leaf, AlertCircle, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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

export function Benefits() {
  return (
    <section id="beneficios" className="py-4 bg-white border-b border-secondary">
      <div className="container mx-auto px-6">
        {/* Alerta de impacto - Muy compacta y pegada */}
        <div className="bg-red-50 border-2 border-red-100 p-3 rounded-xl mb-3 flex items-start gap-3">
          <AlertCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
          <p className="text-[12px] font-black text-accent leading-tight">
            ¿SABÍAS QUE TU CUERPO DESECHA EL 80% DE LAS PASTILLAS? DEJA DE TIRAR TU DINERO.
          </p>
        </div>

        {/* Titular - Margen mínimo para que se vea "pegado" */}
        <div className="text-center mb-3">
          <h2 className="text-lg font-black text-foreground mb-1 uppercase tracking-tighter leading-none">POR QUÉ SOMOS #1 EN TIKTOK</h2>
          <div className="h-1 w-12 bg-primary mx-auto rounded-full" />
        </div>

        {/* Lista de beneficios - Sin espacios muertos */}
        <div className="space-y-1.5 mb-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="p-3 rounded-xl bg-secondary/30 border border-primary/10 flex items-center gap-3 text-left"
            >
              <div className="h-10 w-10 rounded-lg bg-white flex items-center justify-center shadow-sm border border-secondary shrink-0">
                <benefit.icon className="h-5 w-5 text-primary" />
              </div>
              <div className="min-w-0">
                <h3 className="text-[13px] font-black text-foreground leading-tight uppercase">{benefit.title}</h3>
                <p className="text-[11px] text-muted-foreground font-medium leading-tight">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Botón CTA debajo de Pureza Total con efecto de latido */}
        <Button asChild size="lg" className="w-full h-14 text-lg font-black bg-accent hover:bg-accent/90 shadow-xl rounded-2xl mb-4 animate-heartbeat">
          <Link href="#registro" className="flex items-center gap-3">
            <ShoppingCart className="h-5 w-5" />
            ¡QUIERO MI COMPRA!
          </Link>
        </Button>
      </div>
    </section>
  );
}
