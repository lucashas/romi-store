
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === "hero-product");

  return (
    <section className="relative overflow-hidden py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-primary text-sm font-medium w-fit">
              <Sparkles className="h-4 w-4 text-accent" />
              <span>Nueva Versión 2.0 ya disponible</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold font-headline text-primary leading-tight">
              Lleva tu productividad al <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Siguiente Nivel</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
              ProductoEstelar combina elegancia y potencia para ofrecerte la herramienta definitiva de gestión y crecimiento. Diseñado para quienes no se conforman con menos.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg h-14 px-8 rounded-xl shadow-xl shadow-accent/20 group">
                Empieza Gratis
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-secondary text-lg h-14 px-8 rounded-xl">
                Ver Demo
              </Button>
            </div>

            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-8 w-8 rounded-full border-2 border-background bg-muted overflow-hidden">
                    <img src={`https://picsum.photos/seed/${i + 10}/32/32`} alt="User" />
                  </div>
                ))}
              </div>
              <p>+2,000 profesionales ya confían en nosotros</p>
            </div>
          </div>

          <div className="relative animate-fade-in-up [animation-delay:200ms]">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white/50">
              <Image
                src={heroImage?.imageUrl || ""}
                alt={heroImage?.description || "ProductoEstelar"}
                width={1200}
                height={800}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                priority
                data-ai-hint="premium product"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 h-40 w-40 bg-accent/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 h-64 w-64 bg-primary/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
