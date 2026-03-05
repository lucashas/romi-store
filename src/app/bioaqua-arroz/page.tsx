
"use client";

import { useState } from "react";
import { TopMarquee } from "@/components/layout/TopMarquee";
import { Testimonials } from "@/components/sections/Testimonials";
import { PurchasePopup, type Product } from "@/components/sections/PurchasePopup";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/toaster";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star, ShieldCheck, CheckCircle2 } from "lucide-react";

const RICE_PRODUCTS: Product[] = [
  {
    id: "bioaqua_rice_1",
    name: "1 Kit de Arroz Bioaqua (6 productos)",
    price: 35.0,
    image: "https://i.imgur.com/tHUWnzw.png",
    badge: "BÁSICO",
    description: "Tratamiento completo",
  },
  {
    id: "bioaqua_rice_2",
    name: "2 Kits de Arroz Bioaqua (12 productos)",
    price: 55.0,
    image: "https://i.imgur.com/tHUWnzw.png",
    badge: "OFERTA HOY",
    description: "PIEL DE PORCELANA • Envío Gratis",
  },
];

export default function BioaquaRicePage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const openPopup = () => setIsPopupOpen(true);

  return (
    <div className="min-h-screen flex flex-col bg-white pb-10 font-body overflow-x-hidden w-full max-w-[500px] mx-auto shadow-2xl relative border-x border-slate-100">
      <TopMarquee text="🌾 ¡OFERTA LANZAMIENTO KIT DE ARROZ! 🌾 - ✨ HIDRATACIÓN PROFUNDA - 📦 ENVÍOS A TODO ECUADOR - " className="bg-yellow-600 text-white border-yellow-700" />

      <main className="flex-1 w-full">
        <section className="bg-white overflow-hidden w-full">
          <div className="px-[5px] pt-[5px] cursor-pointer" onClick={openPopup}>
            <div className="relative w-full overflow-hidden rounded-2xl shadow-xl border-2 border-yellow-100">
              <img src="https://i.imgur.com/tHUWnzw.png" alt="Bioaqua Kit de Arroz" className="w-full h-auto block" />
            </div>
          </div>

          <div className="p-6 text-center space-y-6">
            <div className="flex justify-center items-center gap-3">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-6 w-6 fill-yellow-600 text-yellow-600" />
                ))}
              </div>
              <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest">(+1.200 VENTAS)</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl font-black text-slate-900 uppercase leading-[0.9] tracking-tighter">
                KIT DE ARROZ <br /><span className="text-yellow-600 italic">BIOAQUA</span>
              </h1>
              
              <div className="space-y-1">
                <h2 className="text-2xl font-black text-slate-800 uppercase tracking-tight leading-none">BIOAQUA Rice Raw Pulp:</h2>
                <p className="text-lg font-bold text-yellow-600">🌾✨ ¡Tu piel merece brillar!</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 px-1">
              <img src="https://i.imgur.com/XFQg77J.png" className="w-full h-auto rounded-2xl shadow-md border border-slate-100" />
              <img src="https://i.imgur.com/aSjVyM2.png" className="w-full h-auto rounded-2xl shadow-md border border-slate-100" />
            </div>

            <div className="text-left px-2 space-y-3">
              <p className="text-[15px] font-medium text-slate-700 leading-relaxed">
                Con el kit <span className="font-black text-slate-900">BIOAQUA Rice Raw Pulp</span> disfruta de una rutina completa que limpia, hidrata y nutre tu rostro con el poder del arroz y ácido hialurónico. 💧🌸
              </p>
            </div>

            <section className="bg-slate-50 rounded-[2.5rem] p-6 border border-slate-100 space-y-6 text-left">
              <h3 className="text-[22px] font-black text-slate-900 uppercase leading-none tracking-tighter">
                BIOAQUA Rice Raw Pulp: <span className="text-yellow-600">6 pasos para una piel radiante</span>
              </h3>
              
              <div className="w-full rounded-2xl overflow-hidden shadow-md border border-slate-100 my-4">
                <img src="https://i.imgur.com/Ze3pVGV.png" alt="6 pasos Bioaqua Arroz" className="w-full h-auto block" />
              </div>

              <p className="text-[14px] font-medium text-slate-600 leading-relaxed">
                Descubre la rutina completa que tu piel necesita con el kit BIOAQUA Rice Raw Pulp. Cada producto está diseñado para hidratar, nutrir y revitalizar con el poder del arroz y ácido hialurónico:
              </p>
              <div className="space-y-3">
                {[
                  { name: "Eye Cream", desc: "cuida la delicada zona de los ojos, reduciendo líneas finas y ojeras." },
                  { name: "Cleanser", desc: "limpia profundamente, eliminando impurezas y dejando la piel fresca." },
                  { name: "Toner", desc: "equilibra, hidrata y ayuda a reducir la apariencia de poros." },
                  { name: "Lotion", desc: "aporta hidratación ligera y mejora la textura de la piel." },
                  { name: "Cream", desc: "con ácido hialurónico, brinda hidratación intensa y elasticidad." },
                  { name: "Essence", desc: "concentrado nutritivo que potencia la luminosidad y revitaliza el rostro." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-yellow-600 shrink-0 mt-0.5" />
                    <p className="text-[13px] leading-tight">
                      <span className="font-black text-slate-900 uppercase">{item.name}:</span> <span className="text-slate-600 font-medium">{item.desc}</span>
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-[14px] font-bold text-yellow-700 italic">
                Un kit pensado para transformar tu rutina diaria en un ritual de belleza que deja tu piel más suave, uniforme y saludable. 🌸✨
              </p>
            </section>

            <section className="py-10 space-y-8">
              <h3 className="text-[28px] font-black text-slate-900 text-center uppercase tracking-tighter">
                💎 ELIGE TU <span className="text-yellow-600">PROMOCIÓN</span> 💎
              </h3>

              <div className="grid grid-cols-2 gap-4 px-1">
                <div onClick={openPopup} className="bg-white p-6 rounded-[2.5rem] border-2 border-slate-100 shadow-xl text-center space-y-3 cursor-pointer transition-transform active:scale-95">
                  <p className="text-[14px] font-black text-slate-900 uppercase">1 Kit (6 productos)</p>
                  <p className="text-[38px] font-black text-slate-900 leading-none">$35</p>
                  <p className="text-[12px] font-bold text-slate-400 uppercase italic">Envío Gratis</p>
                </div>

                <div onClick={openPopup} className="bg-yellow-50 p-6 rounded-[2.5rem] border-2 border-yellow-600 shadow-xl text-center space-y-3 cursor-pointer transition-transform active:scale-95">
                  <p className="text-[14px] font-black text-yellow-700 uppercase">2 Kits (12 productos)</p>
                  <p className="text-[38px] font-black text-yellow-600 leading-none">$55</p>
                  <p className="text-[12px] font-black text-yellow-600 uppercase italic">PIEL DE PORCELANA</p>
                </div>
              </div>

              <div className="px-[5px] mt-4 cursor-pointer" onClick={openPopup}>
                <img src="https://i.imgur.com/qOmlzPP.png" alt="Garantía de Satisfacción" className="w-full h-auto rounded-2xl shadow-lg border border-slate-100" />
              </div>

              <Button onClick={openPopup} size="lg" className="w-full h-24 text-2xl font-black bg-yellow-600 hover:bg-yellow-700 text-white shadow-xl rounded-[2rem] animate-heartbeat border-4 border-white uppercase">
                <ShoppingCart className="h-8 w-8 mr-3" />
                ¡ORDENAR AHORA!
              </Button>
            </section>
          </div>
        </section>

        <div className="p-8 text-center space-y-3">
          <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter leading-none">
            Belleza natural, <span className="text-yellow-600">resultados visibles</span>
          </h2>
          <p className="text-[16px] font-bold text-yellow-700 uppercase tracking-tight">
            Nutrición y frescura con cada aplicación.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2 px-6 mb-6">
          <img src="https://i.imgur.com/1izaYPo.png" className="w-full h-auto rounded-2xl shadow-md border border-slate-100" onClick={openPopup} />
          <img src="https://i.imgur.com/FdpmjYk.png" className="w-full h-auto rounded-2xl shadow-md border border-slate-100" onClick={openPopup} />
        </div>

        <div className="px-8 mb-10">
          <p className="text-[15px] font-medium text-slate-700 leading-relaxed text-center italic">
            Descubre el poder del arroz en tu piel. El kit BIOAQUA Rice Raw Pulp ofrece limpieza profunda, hidratación duradera y un acabado luminoso que realza tu belleza natural. 🌾🌟
          </p>
        </div>

        <Testimonials 
          title="CLIENTAS FELICES" 
          subtitle="Resultados que hablan por sí solos" 
          themeColor="gold" 
          testimonialImageUrl="https://i.imgur.com/PTsQyWM.png" 
        />

        <div className="px-[5px] mb-8 cursor-pointer" onClick={openPopup}>
          <img src="https://i.imgur.com/bk1DAl0.png" alt="Sello de Confianza Ecuador" className="w-full h-auto rounded-2xl shadow-xl border-2 border-yellow-50" />
        </div>

        <section className="py-14 text-center space-y-12 bg-white">
          <div className="grid grid-cols-2 gap-6 px-4">
            <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 flex flex-col items-center gap-4">
              <ShieldCheck className="h-14 w-14 text-yellow-600" />
              <p className="text-[16px] font-black uppercase text-slate-800">100% Original</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 flex flex-col items-center gap-4">
              <ShoppingCart className="h-14 w-14 text-yellow-600" />
              <p className="text-[16px] font-black uppercase text-slate-800">Paga al Recibir</p>
            </div>
          </div>
        </section>
      </main>

      <div className="sticky-cta">
        <Button onClick={openPopup} size="lg" className="w-full h-20 text-xl font-black bg-yellow-600 hover:bg-yellow-700 text-white shadow-2xl rounded-2xl animate-heartbeat border-2 border-white">
          <ShoppingCart className="h-7 w-7 mr-3" />
          ¡COMPRAR AHORA!
        </Button>
      </div>

      <PurchasePopup open={isPopupOpen} onOpenChange={setIsPopupOpen} products={RICE_PRODUCTS} themeColor="gold" />
      <Footer />
      <Toaster />
    </div>
  );
}
