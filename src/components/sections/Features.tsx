
"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { CheckCircle2, Sun, Brain, Shield, HeartPulse } from "lucide-react";

export function Features() {
  const featHair = PlaceHolderImages.find(img => img.id === "feature-hair");
  const featKids = PlaceHolderImages.find(img => img.id === "feature-kids");

  return (
    <section id="caracteristicas" className="py-24 space-y-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/5] relative group border-8 border-white">
              <Image 
                src={featHair?.imageUrl || ""} 
                alt="Salud Capilar"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                data-ai-hint="healthy hair"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>
            <div className="absolute -bottom-10 -right-10 h-40 w-40 bg-primary rounded-full -z-10 animate-pulse opacity-10 blur-2xl" />
          </div>
          <div className="order-1 lg:order-2 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-sm uppercase tracking-wider">
              <HeartPulse className="h-4 w-4" />
              Especialidad Capilar
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold font-headline text-foreground leading-tight">Multivitamínico + <br /><span className="text-primary">Crecimiento Capilar</span></h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Formulado con Lustriva®, que ha demostrado clínicamente ayudar a que el cabello crezca más grueso y reducir las líneas finas de expresión.
            </p>
            <ul className="grid grid-cols-1 gap-4">
              {[
                "Clínicamente probado para el volumen capilar",
                "Fomenta una piel radiante y saludable",
                "Absorción inmediata de vitaminas A, C, D3 y E",
                "Sabor Peach Mango irresistible"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-foreground/90 font-bold">
                  <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <CheckCircle2 className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold font-headline text-foreground">Suplementos para <br />toda la <span className="text-primary">Familia</span></h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Desde gomitas orgánicas para los más pequeños hasta complejos avanzados para adultos.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { icon: Sun, label: "Vitamina D3", desc: "Huesos" },
                { icon: Brain, label: "Complejo B", desc: "Energía" },
                { icon: Shield, label: "Omega-3", desc: "Cerebro" }
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white border border-primary/10 shadow-xl flex flex-col items-center text-center group hover:bg-primary transition-colors">
                  <item.icon className="h-10 w-10 text-primary mb-4 group-hover:text-white transition-colors" />
                  <p className="font-bold text-foreground group-hover:text-white transition-colors">{item.label}</p>
                  <p className="text-sm text-muted-foreground group-hover:text-white/80 transition-colors">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/5] relative group border-8 border-white">
              <Image 
                src={featKids?.imageUrl || ""} 
                alt="Línea Infantil"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                data-ai-hint="happy child"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
