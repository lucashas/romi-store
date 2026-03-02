
"use client";

import { useState } from "react";
import { TopMarquee } from "@/components/layout/TopMarquee";
import { Testimonials } from "@/components/sections/Testimonials";
import { PurchasePopup, type Product } from "@/components/sections/PurchasePopup";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/toaster";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star, Sparkles, Heart, Zap, ShieldCheck, CheckCircle2 } from "lucide-react";
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

  const womenDayMessage = "🌸 ¡FELIZ DÍA DE LA MUJER! 🌸 - ✨ REGÁLATE UNA PIEL DE PORCELANA HOY - 📦 PAGO CONTRA ENTREGA EN TODO ECUADOR - ";

  return (
    <div className="min-h-screen flex flex-col bg-white pb-24 font-body">
      {/* Marquesina especial Día de la Mujer con colores Bioaqua */}
      <TopMarquee 
        text={womenDayMessage} 
        className="bg-orange-600 text-white border-orange-500" 
      />
      
      <main className="flex-1">
        {/* Banner de Impacto Inmediato */}
        <section className="bg-white overflow-hidden">
          <div className="px-[5px] pt-[5px] cursor-pointer" onClick={openPopup}>
            <div className="relative w-full overflow-hidden rounded-xl shadow-lg border-2 border-orange-100">
              <img 
                src={bannerTopImg || "https://i.imgur.com/P4G3s0w.png"} 
                alt="Bioaqua V7 Crema 7 Vitaminas"
                className="w-full h-auto block"
              />
              {/* Distintivo reposicionado a la izquierda para no obstruir */}
              <div className="absolute top-3 left-3 bg-orange-600 text-white px-3 py-1.5 rounded-full font-black text-[10px] animate-pulse shadow-xl border-2 border-white uppercase tracking-tighter">
                OFERTA MUJER ✨
              </div>
            </div>
          </div>
          
          <div className="p-6 text-center space-y-4">
            <div className="flex justify-center items-center gap-2 mb-2">
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4 fill-orange-500 text-orange-500" />)}
              </div>
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">(+2,400 CLIENTAS FELICES)</span>
            </div>
            
            <div className="space-y-1">
              <p className="text-[12px] font-black text-orange-600 uppercase tracking-[0.2em] flex items-center justify-center gap-2">
                <Heart className="h-3 w-3 fill-orange-600" />
                Celebrando tu Belleza Natural
                <Heart className="h-3 w-3 fill-orange-600" />
              </p>
              <h1 className="text-4xl font-black text-slate-900 uppercase leading-none tracking-tighter">
                CREMA V7 <span className="text-orange-600 italic">BIOAQUA</span>
              </h1>
            </div>

            <div className="bg-orange-50 py-3 rounded-2xl border border-orange-100 px-4">
              <p className="text-[11px] font-black text-orange-700 uppercase tracking-[0.2em] leading-tight">
                7 Vitaminas • Aclarante • Efecto Porcelana
              </p>
            </div>
          </div>
        </section>

        {/* Urgencia con estilo elegante */}
        <div className="mx-4 bg-slate-900 p-4 rounded-2xl flex items-center gap-3 shadow-lg border-b-4 border-orange-600">
          <Zap className="h-6 w-6 text-orange-500 animate-pulse" />
          <p className="text-[11px] font-black text-white uppercase leading-tight tracking-wide">
            ¡STOCK LIMITADO! <span className="text-orange-500">Quedan 12 unidades</span> para envío inmediato en Quito y Guayaquil.
          </p>
        </div>

        {/* Beneficios Profesionales */}
        <section className="py-10 bg-white">
          <div className="container px-4 space-y-8">
            <h2 className="text-2xl font-black text-center text-slate-900 uppercase tracking-tighter leading-none">
              RESULTADOS DE <span className="text-orange-600 underline decoration-orange-200 underline-offset-4">CLÍNICA EN TU PIEL</span>
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {[
                { t: "ACLARA AL INSTANTE", d: "Tecnología V7 que unifica el tono de tu piel desde la primera aplicación." },
                { t: "COCTEL DE VITAMINAS", d: "Enriquecida con Vitaminas A, B12, C, E, F y H para nutrición celular profunda." },
                { t: "CERO GRASA", d: "Textura ligera de rápida absorción. Ideal para el clima de Ecuador." }
              ].map((b, i) => (
                <div key={i} className="flex gap-4 items-center p-5 bg-slate-50 rounded-[2rem] border border-slate-100 shadow-sm transition-transform active:scale-95" onClick={openPopup}>
                  <div className="h-12 w-12 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-md border border-orange-100 text-orange-600">
                    <Sparkles className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-black text-[14px] text-slate-900 uppercase leading-tight">{b.t}</p>
                    <p className="text-[12px] text-slate-500 mt-1 font-medium leading-tight">{b.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Visual de Calidad */}
        <section className="py-10 bg-slate-50 rounded-t-[3rem]">
          <div className="px-4 text-center space-y-6">
             <div className="relative aspect-[4/5] w-full max-w-[400px] mx-auto overflow-hidden rounded-[3rem] shadow-2xl border-8 border-white cursor-pointer group" onClick={openPopup}>
                <Image 
                  src={showcaseImg || "https://images.unsplash.com/photo-1611082216373-7c1bc0412822?q=80&w=1080"} 
                  alt="Textura Bioaqua"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  data-ai-hint="skincare woman"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-950/90 via-transparent to-transparent flex flex-col justify-end p-8 text-left">
                  <div className="bg-orange-600 w-fit px-3 py-1 rounded-full text-[10px] font-black text-white uppercase mb-2">Piel Perfecta</div>
                  <p className="text-white font-black text-3xl uppercase italic leading-none">HIDRATACIÓN <br />EXTREMA</p>
                  <p className="text-orange-200 text-[10px] font-bold uppercase tracking-widest mt-2 border-l-2 border-orange-500 pl-3">Para todo tipo de piel, incluso sensible</p>
                </div>
             </div>
          </div>
        </section>

        <Testimonials />

        {/* Garantías Premium */}
        <section className="py-14 bg-white">
          <div className="container px-4 text-center space-y-10">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-slate-50 rounded-[2.5rem] border border-slate-100 flex flex-col items-center gap-3 shadow-sm">
                <ShieldCheck className="h-10 w-10 text-orange-600" />
                <p className="text-[10px] font-black uppercase text-slate-800 tracking-tighter">100% Original</p>
              </div>
              <div className="p-6 bg-slate-50 rounded-[2.5rem] border border-slate-100 flex flex-col items-center gap-3 shadow-sm">
                <ShoppingCart className="h-10 w-10 text-orange-600" />
                <p className="text-[10px] font-black uppercase text-slate-800 tracking-tighter">Pagas al Recibir</p>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter leading-none">
                ¿LISTA PARA TU <br /><span className="text-orange-600 italic underline decoration-orange-200 underline-offset-8">PIEL DE PORCELANA?</span>
              </h2>
              <Button 
                onClick={openPopup}
                size="lg" 
                className="w-full h-20 text-2xl font-black bg-orange-600 hover:bg-orange-700 shadow-[0_15px_35px_rgba(249,115,22,0.4)] rounded-[2rem] animate-heartbeat border-4 border-white"
              >
                <ShoppingCart className="h-8 w-8 mr-2" />
                ¡ORDENAR AHORA!
              </Button>
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Envíos seguros a todo el Ecuador 🇪🇨</p>
            </div>
          </div>
        </section>
      </main>
      
      <div className="sticky-cta px-4">
        <Button 
          onClick={openPopup}
          size="lg" 
          className="w-full h-16 text-xl font-black bg-orange-600 hover:bg-orange-700 shadow-[0_15px_40px_rgba(249,115,22,0.5)] rounded-2xl animate-heartbeat border-2 border-white"
        >
          <ShoppingCart className="h-6 w-6 mr-2" />
          ¡COMPRAR AHORA!
        </Button>
      </div>

      <PurchasePopup 
        open={isPopupOpen} 
        onOpenChange={setIsPopupOpen} 
        products={BIOAQUA_PRODUCTS}
        themeColor="orange"
      />
      
      <Footer />
      <Toaster />
    </div>
  );
}
