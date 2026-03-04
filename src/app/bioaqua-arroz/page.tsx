
"use client";

import { useState } from "react";
import { TopMarquee } from "@/components/layout/TopMarquee";
import { Testimonials } from "@/components/sections/Testimonials";
import { PurchasePopup, type Product } from "@/components/sections/PurchasePopup";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/toaster";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star, ShieldCheck } from "lucide-react";

const RICE_PRODUCTS: Product[] = [
  {
    id: "bioaqua_rice_1",
    name: "1 Kit de Arroz Bioaqua (6 piezas)",
    price: 28.0,
    image: "https://i.imgur.com/tHUWnzw.png",
    badge: "BÁSICO",
    description: "Tratamiento completo de 6 pasos",
  },
  {
    id: "bioaqua_rice_2",
    name: "2 Kits de Arroz Bioaqua (12 piezas)",
    price: 48.0,
    image: "https://i.imgur.com/tHUWnzw.png",
    badge: "OFERTA HOY",
    description: "Piel de Porcelana + Regalo Gratis",
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

            <h1 className="text-4xl font-black text-slate-900 uppercase leading-[0.9] tracking-tighter">
              KIT DE ARROZ <br /><span className="text-yellow-600 italic">BIOAQUA</span>
            </h1>

            <div className="bg-yellow-50 py-4 rounded-3xl border border-yellow-200 px-6">
              <p className="text-[16px] font-black text-yellow-700 uppercase leading-tight">
                6 Pasos • Hidratación • Poros Invisibles
              </p>
            </div>

            <div className="mt-8 px-1 flex justify-center cursor-pointer" onClick={openPopup}>
              <div className="relative w-full overflow-hidden rounded-[2.5rem] shadow-2xl border-2 border-slate-100 bg-white">
                <img src="https://i.imgur.com/HYiuNZy.png" alt="Beneficios Kit de Arroz" className="w-full h-auto block" />
              </div>
            </div>

            <section className="py-10 space-y-8">
              <h3 className="text-[28px] font-black text-slate-900 text-center uppercase tracking-tighter">
                💎 ELIGE TU <span className="text-yellow-600">PROMOCIÓN</span> 💎
              </h3>

              <div className="grid grid-cols-2 gap-4 px-1">
                <div onClick={openPopup} className="bg-white p-6 rounded-[2.5rem] border-2 border-slate-100 shadow-xl text-center space-y-3 cursor-pointer transition-transform active:scale-95">
                  <p className="text-[14px] font-black text-slate-900 uppercase">1 Kit (6 piezas)</p>
                  <p className="text-[38px] font-black text-slate-900 leading-none">$28</p>
                  <p className="text-[12px] font-bold text-slate-400 uppercase italic">Envío Gratis</p>
                </div>

                <div onClick={openPopup} className="bg-yellow-50 p-6 rounded-[2.5rem] border-2 border-yellow-600 shadow-xl text-center space-y-3 cursor-pointer transition-transform active:scale-95">
                  <p className="text-[14px] font-black text-yellow-700 uppercase">2 Kits (12 piezas)</p>
                  <p className="text-[38px] font-black text-yellow-600 leading-none">$48</p>
                  <p className="text-[12px] font-black text-yellow-600 uppercase italic">+ REGALO GRATIS</p>
                </div>
              </div>

              {/* Imagen de garantía solicitada debajo de los precios */}
              <div className="px-2 mt-4 cursor-pointer" onClick={openPopup}>
                <img src="https://i.imgur.com/qOmlzPP.png" alt="Garantía de Satisfacción" className="w-full h-auto rounded-2xl shadow-lg border border-slate-100" />
              </div>

              <Button onClick={openPopup} size="lg" className="w-full h-24 text-2xl font-black bg-yellow-600 hover:bg-yellow-700 text-white shadow-xl rounded-[2rem] animate-heartbeat border-4 border-white uppercase">
                <ShoppingCart className="h-8 w-8 mr-3" />
                ¡ORDENAR AHORA!
              </Button>
            </section>
          </div>
        </section>

        {/* Sección de testimonios rediseñada */}
        <Testimonials themeColor="gold" />

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
