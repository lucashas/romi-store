
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Droplets, Heart } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === "hero-multivitamin");

  return (
    <section className="relative overflow-hidden py-12 sm:py-20 lg:py-32 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-center lg:text-left">
          <div className="flex flex-col items-center lg:items-start space-y-6 sm:space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs sm:text-sm font-semibold w-fit">
              <Droplets className="h-4 w-4" />
              <span>Nutrición Líquida de Alta Absorción</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold font-headline text-foreground leading-tight">
              Energía y Salud con <span className="text-primary">MaryRuth's</span> Organics
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl">
              Nuestro <strong>Liquid Morning Multivitamin</strong> combina vitaminas esenciales con Biotina y Lustriva® para apoyar tu energía diaria y el crecimiento de un cabello espectacular. 🌿
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 text-lg h-14 px-8 rounded-xl shadow-xl shadow-primary/20 group">
                Comprar Ahora
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-accent text-accent hover:bg-accent/5 text-lg h-14 px-8 rounded-xl">
                Ver Beneficios
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1 text-accent font-medium">
                <Heart className="h-4 w-4 fill-accent" />
                <span>Vegano & Sin Azúcar</span>
              </div>
              <div className="hidden sm:block text-muted-foreground/30">|</div>
              <p className="text-center sm:text-left">Sabor Peach Mango 🍑🥭</p>
            </div>
          </div>

          <div className="relative animate-fade-in-up [animation-delay:200ms] w-full max-w-2xl mx-auto lg:max-w-none">
            <div className="relative z-10 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-4 sm:border-8 border-white">
              <Image
                src={heroImage?.imageUrl || ""}
                alt="MaryRuth's Liquid Multivitamin"
                width={1200}
                height={800}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                priority
                data-ai-hint="vitamin bottle"
              />
            </div>
            <div className="absolute -top-10 -right-10 h-32 w-32 sm:h-40 sm:w-40 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 h-48 w-48 sm:h-64 sm:w-64 bg-accent/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
