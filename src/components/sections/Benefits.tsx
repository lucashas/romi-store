
"use client";

import { ShieldCheck, Zap, Leaf, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Seguridad Total",
    description: "Tus datos están protegidos con los estándares de encriptación más altos del mercado."
  },
  {
    icon: Zap,
    title: "Velocidad Extrema",
    description: "Optimizado para ofrecer respuestas instantáneas, sin importar la carga de trabajo."
  },
  {
    icon: Leaf,
    title: "Sostenibilidad",
    description: "Nuestros servidores funcionan con energía 100% renovable para un futuro más verde."
  },
  {
    icon: TrendingUp,
    title: "Escalabilidad",
    description: "Crece sin límites. Nuestra plataforma se adapta al tamaño de tus sueños y proyectos."
  }
];

export function Benefits() {
  return (
    <section id="beneficios" className="py-24 bg-white/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-semibold text-accent tracking-wide uppercase mb-3">Beneficios</h2>
          <p className="text-4xl font-bold font-headline text-primary mb-6">¿Por qué elegir ProductoEstelar?</p>
          <p className="text-lg text-muted-foreground">
            Diseñamos cada característica pensando en tu éxito y tranquilidad. Descubre cómo podemos transformar tu flujo de trabajo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl bg-background border hover:border-accent hover:shadow-xl hover:shadow-accent/5 transition-all duration-300"
            >
              <div className="h-14 w-14 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <benefit.icon className="h-7 w-7 text-primary group-hover:text-accent-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{benefit.title}</h3>
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
