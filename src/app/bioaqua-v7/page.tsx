
"use client";

import { useState } from "react";
import { TopMarquee } from "@/components/layout/TopMarquee";
import { Testimonials, type TestimonialItem } from "@/components/sections/Testimonials";
import { PurchasePopup, type Product } from "@/components/sections/PurchasePopup";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/toaster";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star, Sparkles, Heart, Zap, ShieldCheck, Gift } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const BIOAQUA_PRODUCTS: Product[] = [
  {
    id: "bioaqua_v7_1",
    name: "1 Crema V7 Bioaqua",
    price: 16.00,
    image: "https://i.imgur.com/P4G3s0w.png",
    badge: "ECONÓMICO",
    description: "Efecto aclarante instantáneo (Sin regalo)"
  },
  {
    id: "bioaqua_v7_2",
    name: "2 Cremas V7 Bioaqua",
    price: 26.00,
    image: "https://i.imgur.com/P4G3s0w.png",
    badge: "OFERTA HOY",
    description: "Efecto porcelana + Regalo a elegir"
  }
];

const BIOAQUA_TESTIMONIALS: TestimonialItem[] = [
  {
    name: "Andrea Castro",
    city: "Quito",
    role: "Piel de Porcelana",
    quote: "¡Es mágica! Mi piel se ve mucho más clara y luminosa desde el primer día. El jabón de arroz de regalo es el complemento perfecto para mi rutina.",
    imageId: "testimonial-user-2"
  },
  {
    name: "Valentina Ruiz",
    city: "Cuenca",
    role: "Adiós Manchas",
    quote: "Tenía manchas por el sol y esta crema V7 las ha difuminado increíblemente en solo dos semanas. No salgo de casa sin ella, me encanta su olor.",
    imageId: "testimonial-user-1"
  },
  {
    name: "Gabriela Mendoza",
    city: "Loja",
    role: "Rostro Radiante",
    quote: "El efecto aclarante es instantáneo y muy natural. Me encanta que no deja sensación grasosa, ideal para el clima de acá. ¡100% recomendada!",
    imageId: "testimonial-user-3"
  }
];

const GIFTS = [
  {
    name: "1 Contorno De Ojos Bioaqua Hyalooligo Aci",
    desc: "Hidratación y firmeza profunda",
    img: "https://i.imgur.com/15gxrJI.png",
    tag: "NUEVO"
  },
  {
    name: "1 Jabon Liquido De Arroz Bioaqua",
    desc: "Limpieza profunda y brillo natural",
    img: "https://i.imgur.com/k2LgSRh.png",
    tag: "MÁS PEDIDO"
  },
  {
    name: "1 Serum De Pestanas Bioaqua",
    desc: "Crecimiento y nutrición intensa",
    img: "https://i.imgur.com/NdEF1tQ.png",
    tag: "OFERTA"
  }
];

export default function BioaquaPage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const openPopup = () => setIsPopupOpen(true);

  const bannerTopImg = PlaceHolderImages.find(img => img.id === "bioaqua-banner-top")?.imageUrl;
  const showcaseImg = PlaceHolderImages.find(img => img.id === "bioaqua-showcase")?.imageUrl;

  const womenDayMessage = "🌸 ¡OFERTA ESPECIAL BELLEZA! 🌸 - ✨ REGÁLATE UNA PIEL DE PORCELANA HOY - 📦 PAGO CONTRA ENTREGA EN TODO ECUADOR - ";

  return (
    <div className="min-h-screen flex flex-col bg-white pb-24 font-body overflow-x-hidden w-full max-w-[500px] mx-auto shadow-2xl relative">
      <TopMarquee 
        text={womenDayMessage} 
        className="bg-orange-600 text-white border-orange-500" 
      />
      
      <main className="flex-1 w-full overflow-x-hidden">
        {/* Banner de Impacto Inmediato */}
        <section className="bg-white overflow-hidden w-full">
          <div className="px-[5px] pt-[5px] cursor-pointer" onClick={openPopup}>
            <div className="relative w-full overflow-hidden rounded-xl shadow-lg border-2 border-orange-100">
              <img 
                src={bannerTopImg || "https://i.imgur.com/P4G3s0w.png"} 
                alt="Bioaqua V7 Crema 7 Vitaminas"
                className="w-full h-auto block"
              />
              <div className="absolute bottom-4 left-4 bg-orange-600 text-white px-4 py-1.5 rounded-full font-black text-[10px] animate-pulse shadow-2xl border-2 border-white uppercase tracking-tighter">
                OFERTA EXCLUSIVA ✨
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
                Tu Piel, Tu Mejor Versión
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

        {/* Urgencia */}
        <div className="mx-4 bg-slate-900 p-4 rounded-2xl flex items-center gap-3 shadow-lg border-b-4 border-orange-600">
          <Zap className="h-6 w-6 text-orange-500 animate-pulse" />
          <p className="text-[11px] font-black text-white uppercase leading-tight tracking-wide">
            ¡STOCK LIMITADO! <span className="text-orange-500">Quedan pocas unidades</span> para envío inmediato a todo el país.
          </p>
        </div>

        {/* SECCIÓN DE REGALOS (Informativa - No clickeable) */}
        <section className="py-12 bg-[#fff5f5] mt-10 border-y border-pink-100 w-full overflow-hidden">
          <div className="container px-4 text-center space-y-8">
            <div className="space-y-2">
              <div className="flex justify-center mb-4">
                <div className="bg-pink-100 p-3 rounded-full">
                  <Gift className="h-8 w-8 text-pink-600" />
                </div>
              </div>
              <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter leading-none">
                💎 🎁 ELIGE TU <br /><span className="text-pink-600 italic">REGALO GRATIS</span>
              </h2>
              <p className="text-[12px] font-black text-pink-500 uppercase tracking-[0.2em]">
                ✨ SOLO AL LLEVAR TU PACK DE 2 UNIDADES ✨
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {GIFTS.map((gift, i) => (
                <div key={i} className="bg-white rounded-[2rem] p-4 shadow-xl border border-pink-50 flex items-center gap-4 relative overflow-hidden pointer-events-none">
                  {gift.tag && (
                    <div className="absolute top-3 right-5 bg-pink-500 text-white text-[9px] font-black px-3 py-1 rounded-full uppercase">
                      {gift.tag}
                    </div>
                  )}
                  <div className="h-24 w-24 rounded-2xl overflow-hidden bg-slate-50 border border-pink-50 shrink-0 relative">
                    <Image src={gift.img} alt={gift.name} fill className="object-cover" unoptimized />
                  </div>
                  <div className="text-left flex-1 min-w-0 pr-10">
                    <p className="text-[13px] font-black text-slate-900 uppercase leading-tight">{gift.name}</p>
                    <p className="text-[10px] font-bold text-pink-400 mt-1 uppercase tracking-tight">{gift.desc}</p>
                    <div className="mt-2 flex items-center gap-2">
                      <span className="text-[10px] text-slate-300 line-through">ANTES $20</span>
                      <span className="text-[12px] font-black text-green-600 uppercase tracking-tighter">HOY GRATIS</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Beneficios Profesionales */}
        <section className="py-10 bg-white w-full overflow-hidden">
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
                <div key={i} className="flex gap-4 items-center p-5 bg-slate-50 rounded-[2rem] border border-slate-100 shadow-sm transition-transform active:scale-95 cursor-pointer" onClick={openPopup}>
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

        <Testimonials 
          title="CLIENTAS FELICES EN ECUADOR" 
          items={BIOAQUA_TESTIMONIALS} 
        />

        {/* Garantías Premium */}
        <section className="py-14 bg-white w-full overflow-hidden">
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
