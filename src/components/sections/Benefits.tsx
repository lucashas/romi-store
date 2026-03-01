
"use client";

import { Zap, Star, Leaf, ShieldCheck } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "¡Dile adiós a las pastillas!",
    description: "Nuestra fórmula líquida se absorbe hasta un 98% más rápido. No malgastes tu dinero en cápsulas que tu cuerpo apenas procesa."
  },
  {
    icon: Star,
    title: "El sabor que todos aman",
    description: "¿Vitaminas que saben a premio? Nuestro Peach Mango es tan delicioso que tus hijos (y tú) nunca olvidarán su dosis diaria."
  },
  {
    icon: Leaf,
    title: "Pureza sin compromisos",
    description: "100% Vegano, sin azúcar y orgánico. Dale a tu cuerpo solo lo que necesita, sin rellenos químicos ni colorantes artificiales."
  },
  {
    icon: ShieldCheck,
    title: "Calidad Premium Garantizada",
    description: "Utilizamos solo ingredientes de grado farmacéutico natural. La paz mental de saber que estás cuidando tu salud con lo mejor del mundo."
  }
];

export function Benefits() {
  return (
    <section id="beneficios" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-[10px] font-black text-primary tracking-[0.3em] uppercase mb-4">La Revolución de tu Salud</h2>
          <p className="text-3xl font-black font-headline text-foreground mb-6 leading-tight">¿Sabías que tu cuerpo desecha el 80% de las vitaminas en pastilla?</p>
          <p className="text-sm text-muted-foreground leading-relaxed font-medium">
            Con MaryRuth's, cada gota cuenta. Diseñado para una absorción máxima y resultados que puedes sentir desde la primera semana.
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
