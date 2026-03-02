
"use client";

import { useState } from "react";
import { TopMarquee } from "@/components/layout/TopMarquee";
import { Hero } from "@/components/sections/Hero";
import { Benefits } from "@/components/sections/Benefits";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { Features } from "@/components/sections/Features";
import { Testimonials } from "@/components/sections/Testimonials";
import { PurchasePopup, type Product } from "@/components/sections/PurchasePopup";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/toaster";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star, Sparkles, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const BIOAQUA_PRODUCTS: Product[] = [
  {
    id: "bioaqua_1",
    name: "1 Crema V7 Bioaqua",
    price: 15.00,
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=400",
    badge: null,
    description: "Efecto aclarante instantáneo"
  },
  {
    id: "bioaqua_2",
    name: "2 Cremas (Dúo Piel Perfecta)",
    price: 25.00,
    image: "https://images.unsplash.com/photo-1611082216373-7c1bc0412822?q=80&w=400",
    badge: "Más Vendido",
    description: "Envío Gratis a todo Ecuador"
  },
  {
    id: "bioaqua_3",
    name: "3 Cremas (Tratamiento Completo)",
    price: 32.00,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=400",
    badge: "Mejor Precio",
    description: "Máximo ahorro + Regalo sorpresa"
  }
];

export default function BioaquaPage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const openPopup = () => setIsPopupOpen(true);

  const heroImg = PlaceHolderImages.find(img => img.id === "bioaqua-hero")?.imageUrl;
  const showcaseImg = PlaceHolderImages.find(img => img.id === "bioaqua-showcase")?.imageUrl;
  const resultsImg = PlaceHolderImages.find(img => img.id === "bioaqua-results")?.imageUrl;

  return (
    <div className="min-h-screen flex flex-col bg-background pb-24 font-body">
      <TopMarquee />
      
      <main className="flex-1">
        {/* Custom Hero for Bioaqua */}
        <section className="bg-white border-b overflow-hidden">
          <div className="px-1 pt-1 cursor-pointer" onClick={openPopup}>
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-lg border-2 border-primary/10">
              <Image 
                src={heroImg || "https://picsum.photos/seed/bio1/800/1000"} 
                alt="Bioaqua V7 Crema 7 Vitaminas"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute top-4 right-4 bg-accent text-white px-4 py-2 rounded-full font-black text-sm animate-bounce shadow-xl">
                ¡OFERTA TIKTOK!
              </div>
            </div>
          </div>
          
          <div className="p-6 text-center space-y-4">
            <h1 className="text-3xl font-black text-foreground uppercase leading-none tracking-tighter">
              CREMA V7 <span className="text-primary italic">BIOAQUA</span>
            </h1>
            <p className="text-sm font-bold text-muted-foreground uppercase tracking-[0.2em]">
              7 Vitaminas • Hidratación • Efecto Aclarante
            </p>
            <div className="flex justify-center gap-1">
              {[1,2,3,4,5].map(i => <Star key={i} className="h-5 w-5 fill-primary text-primary" />)}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-8 bg-secondary/10">
          <div className="container px-4 space-y-6">
            <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-primary/5 space-y-4">
              <h2 className="text-xl font-black text-center uppercase tracking-tight">7 Beneficios en 1 Sola Crema</h2>
              <div className="grid grid-cols-1 gap-3">
                {[
                  { t: "Hidratación Instantánea", d: "Piel suave y fresca todo el día." },
                  { t: "Efecto Tono Parejo", d: "Aclara visualmente manchas y pecas." },
                  { t: "Nutrición Multivitamínica", d: "Vitaminas A, B12, C, E, F y H." },
                  { t: "Control de Grasa", d: "Adiós al brillo facial molesto." },
                  { t: "Base de Maquillaje", d: "Prepara tu piel para un acabado perfecto." },
                  { t: "Textura Ligera", d: "No deja sensación grasosa ni pegajosa." },
                  { t: "Poros Invisibles", d: "Minimiza la apariencia de poros abiertos." }
                ].map((b, i) => (
                  <div key={i} className="flex gap-4 items-start p-3 bg-white rounded-xl border border-secondary">
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                    <div>
                      <p className="font-black text-sm uppercase leading-tight">{b.t}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{b.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Showcase Bioaqua */}
        <section className="py-8 bg-white">
          <div className="px-2 cursor-pointer" onClick={openPopup}>
             <div className="relative aspect-video w-full overflow-hidden rounded-[2rem] shadow-xl">
                <Image 
                  src={showcaseImg || "https://picsum.photos/seed/bio2/800/450"} 
                  alt="Textura Bioaqua"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <p className="text-white font-black text-xl uppercase italic">"Textura tipo yogurt que tu piel amará"</p>
                </div>
             </div>
          </div>
        </section>

        {/* Testimonials Special */}
        <Testimonials />

        {/* CTA Bottom Section */}
        <section className="py-12 px-6 text-center space-y-6 bg-primary text-white">
          <Sparkles className="h-12 w-12 mx-auto animate-pulse" />
          <h2 className="text-3xl font-black uppercase tracking-tighter leading-none">
            ¿LISTA PARA UNA PIEL DE PORCELANA?
          </h2>
          <p className="text-sm font-medium opacity-90 uppercase tracking-widest">
            Envíos gratis y pago contra entrega en todo el país
          </p>
          <Button 
            onClick={openPopup}
            size="lg" 
            className="w-full h-16 text-xl font-black bg-accent hover:bg-accent/90 shadow-2xl rounded-2xl animate-heartbeat"
          >
            <ShoppingCart className="h-6 w-6" />
            ¡COMPRAR CON DESCUENTO!
          </Button>
        </section>
      </main>
      
      <div className="sticky-cta">
        <Button 
          onClick={openPopup}
          size="lg" 
          className="w-full h-16 text-xl font-black bg-accent hover:bg-accent/90 shadow-[0_10px_30px_rgba(239,68,68,0.4)] rounded-2xl animate-heartbeat"
        >
          <ShoppingCart className="h-6 w-6" />
          ¡COMPRAR AHORA!
        </Button>
      </div>

      <PurchasePopup 
        open={isPopupOpen} 
        onOpenChange={setIsPopupOpen} 
        products={BIOAQUA_PRODUCTS}
      />
      
      <Footer />
      <Toaster />
    </div>
  );
}
