
"use client";

import { useState } from "react";
import { TopMarquee } from "@/components/layout/TopMarquee";
import { Testimonials } from "@/components/sections/Testimonials";
import { PurchasePopup, type Product } from "@/components/sections/PurchasePopup";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/toaster";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star, CheckCircle2, ShieldCheck, Zap } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const BIOAQUA_PRODUCTS: Product[] = [
  {
    id: "bioaqua_1",
    name: "1 Crema V7 Bioaqua",
    price: 15.00,
    image: "https://i.imgur.com/P4G3s0w.png",
    badge: null,
    description: "Efecto aclarante instantáneo"
  },
  {
    id: "bioaqua_2",
    name: "2 Cremas (Dúo Piel Perfecta)",
    price: 25.00,
    image: "https://i.imgur.com/P4G3s0w.png",
    badge: "Más Vendido",
    description: "Envío Gratis a todo Ecuador"
  },
  {
    id: "bioaqua_3",
    name: "3 Cremas (Tratamiento Completo)",
    price: 32.00,
    image: "https://i.imgur.com/P4G3s0w.png",
    badge: "Mejor Precio",
    description: "Máximo ahorro + Regalo sorpresa"
  }
];

export default function BioaquaPage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const openPopup = () => setIsPopupOpen(true);

  const bannerTopImg = PlaceHolderImages.find(img => img.id === "bioaqua-banner-top")?.imageUrl;
  const showcaseImg = PlaceHolderImages.find(img => img.id === "bioaqua-showcase")?.imageUrl;

  return (
    <div className="min-h-screen flex flex-col bg-background pb-24 font-body">
      <TopMarquee />
      
      <main className="flex-1">
        {/* Banner de Impacto Inmediato - Imagen de Imgur */}
        <section className="bg-white overflow-hidden">
          <div className="px-[5px] pt-[5px] cursor-pointer" onClick={openPopup}>
            <div className="relative w-full overflow-hidden rounded-xl shadow-lg border-2 border-primary/10">
              <img 
                src={bannerTopImg || "https://i.imgur.com/P4G3s0w.png"} 
                alt="Bioaqua V7 Crema 7 Vitaminas"
                className="w-full h-auto block"
              />
              <div className="absolute top-4 right-4 bg-accent text-white px-4 py-2 rounded-full font-black text-xs animate-bounce shadow-xl">
                ¡OFERTA TIKTOK!
              </div>
            </div>
          </div>
          
          <div className="p-6 text-center space-y-4">
            <div className="flex justify-center gap-1 mb-2">
              {[1,2,3,4,5].map(i => <Star key={i} className="h-5 w-5 fill-primary text-primary" />)}
              <span className="text-xs font-bold text-muted-foreground ml-2">(+2,400 reseñas)</span>
            </div>
            <h1 className="text-4xl font-black text-foreground uppercase leading-none tracking-tighter">
              CREMA V7 <span className="text-primary italic">BIOAQUA</span>
            </h1>
            <p className="text-sm font-bold text-muted-foreground uppercase tracking-[0.2em] bg-secondary/30 py-2 rounded-full">
              7 Vitaminas • Tono Parejo • Hidratación
            </p>
          </div>
        </section>

        {/* Urgencia */}
        <div className="bg-red-50 border-y border-red-100 p-4 flex items-center gap-3">
          <Zap className="h-6 w-6 text-accent fill-accent animate-pulse" />
          <p className="text-[12px] font-black text-accent uppercase leading-tight">
            ¡ALERTA! Quedan menos de 15 unidades en stock para envío hoy mismo a todo Ecuador.
          </p>
        </div>

        {/* Beneficios */}
        <section className="py-8 bg-white">
          <div className="container px-4 space-y-6">
            <h2 className="text-2xl font-black text-center uppercase tracking-tight leading-none">
              ¿POR QUÉ ES <span className="text-primary">VIRAL EN TIKTOK?</span>
            </h2>
            <div className="grid grid-cols-1 gap-3">
              {[
                { t: "ACLARA AL INSTANTE", d: "Efecto blanqueador natural y parejo desde la primera aplicación." },
                { t: "PIEL DE PORCELANA", d: "Minimiza poros y cubre imperfecciones sin pesadez." },
                { t: "NUTRICIÓN VITAMÍNICA", d: "Enriquecida con Vitaminas A, B12, C, E, F y H." }
              ].map((b, i) => (
                <div key={i} className="flex gap-4 items-start p-4 bg-secondary/20 rounded-2xl border border-secondary" onClick={openPopup}>
                  <div className="h-10 w-10 bg-primary rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                    <CheckCircle2 className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-black text-sm uppercase leading-tight">{b.t}</p>
                    <p className="text-xs text-muted-foreground mt-1 font-medium">{b.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Visual de Textura */}
        <section className="py-8 bg-secondary/10">
          <div className="px-4 text-center space-y-4">
             <div className="relative aspect-video w-full overflow-hidden rounded-[2rem] shadow-2xl border-4 border-white cursor-pointer" onClick={openPopup}>
                <Image 
                  src={showcaseImg || "https://picsum.photos/seed/bio2/800/450"} 
                  alt="Textura Bioaqua"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6">
                  <p className="text-white font-black text-2xl uppercase italic leading-none">Textura tipo Yogurt</p>
                  <p className="text-white/80 text-xs font-bold uppercase tracking-widest mt-2">Absorción inmediata sin grasa</p>
                </div>
             </div>
          </div>
        </section>

        <Testimonials />

        {/* Garantías */}
        <section className="py-12 bg-white">
          <div className="container px-4 text-center space-y-8">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-green-50 rounded-2xl border border-green-100 flex flex-col items-center gap-2">
                <ShieldCheck className="h-8 w-8 text-green-600" />
                <p className="text-[10px] font-black uppercase">100% Original</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100 flex flex-col items-center gap-2">
                <ShoppingCart className="h-8 w-8 text-blue-600" />
                <p className="text-[10px] font-black uppercase">Pagas al Recibir</p>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-black uppercase tracking-tighter leading-none">
                ¿LISTA PARA LUCIR <br /><span className="text-primary italic">UNA PIEL RADIANTE?</span>
              </h2>
              <Button 
                onClick={openPopup}
                size="lg" 
                className="w-full h-20 text-2xl font-black bg-accent hover:bg-accent/90 shadow-xl rounded-2xl animate-heartbeat"
              >
                <ShoppingCart className="h-8 w-8 mr-2" />
                ¡COMPRAR AHORA!
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <div className="sticky-cta">
        <Button 
          onClick={openPopup}
          size="lg" 
          className="w-full h-16 text-xl font-black bg-accent hover:bg-accent/90 shadow-[0_10px_30px_rgba(239,68,68,0.4)] rounded-2xl animate-heartbeat"
        >
          <ShoppingCart className="h-6 w-6 mr-2" />
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
