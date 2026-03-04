
"use client";

import { useState } from "react";
import { TopMarquee } from "@/components/layout/TopMarquee";
import { Testimonials } from "@/components/sections/Testimonials";
import { PurchasePopup, type Product } from "@/components/sections/PurchasePopup";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/toaster";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star, ShieldCheck, CheckCircle2, Gift } from "lucide-react";

const BIOAQUA_PRODUCTS: Product[] = [
  {
    id: "bioaqua_v7_1",
    name: "1 Crema V7 Bioaqua",
    price: 16.00,
    image: "https://i.imgur.com/bUaJbMD.png",
    badge: "ECONÓMICO",
    description: "Efecto aclarante instantáneo"
  },
  {
    id: "bioaqua_v7_2",
    name: "2 Cremas V7 Bioaqua",
    price: 26.00,
    image: "https://i.imgur.com/bUaJbMD.png",
    badge: "OFERTA HOY",
    description: "Efecto porcelana + 6 Regalos"
  }
];

export default function BioaquaV7Page() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const openPopup = () => setIsPopupOpen(true);

  return (
    <div className="min-h-screen flex flex-col bg-white pb-10 font-body overflow-x-hidden w-full max-w-[500px] mx-auto shadow-2xl relative border-x border-slate-100">
      <TopMarquee text="🌸 ¡OFERTA ESPECIAL BELLEZA V7! 🌸 - ✨ PIEL DE PORCELANA HOY - 📦 PAGO CONTRA ENTREGA - " className="bg-orange-600 text-white border-orange-700" />
      
      <main className="flex-1 w-full">
        <section className="bg-white overflow-hidden w-full">
          <div className="px-[5px] pt-[5px] cursor-pointer" onClick={openPopup}>
            <div className="relative w-full overflow-hidden rounded-2xl shadow-xl border-2 border-orange-100">
              <img src="https://i.imgur.com/P4G3s0w.png" alt="Bioaqua V7" className="w-full h-auto block" />
            </div>
          </div>
          
          <div className="p-6 text-center space-y-6">
            <div className="flex justify-center items-center gap-3">
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map(i => <Star key={i} className="h-6 w-6 fill-orange-500 text-orange-500" />)}
              </div>
              <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest">(+2.400 VENTAS)</span>
            </div>
            
            <h1 className="text-4xl font-black text-slate-900 uppercase leading-[0.9] tracking-tighter">
              CREMA V7 <br /><span className="text-orange-600 italic">BIOAQUA</span>
            </h1>

            <div className="bg-orange-50 py-4 rounded-3xl border border-orange-200 px-6">
              <p className="text-[16px] font-black text-orange-700 uppercase leading-tight">
                7 Vitaminas • Aclarante • Efecto Porcelana
              </p>
            </div>

            <section className="bg-slate-50 rounded-[2.5rem] p-6 border border-slate-100 space-y-4">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Gift className="h-5 w-5 text-orange-600" />
                <h2 className="text-[18px] font-black text-slate-900 uppercase tracking-tight">¡COMPRA HOY Y RECIBE GRATIS!</h2>
              </div>
              <div className="grid grid-cols-2 gap-3 text-left">
                {[
                  "Jabón de Arroz",
                  "Serum Vitamina C",
                  "Mascarilla Facial",
                  "Crema de Manos",
                  "Contorno Ojos",
                  "Cintillo Spa"
                ].map((gift, i) => (
                  <div key={i} className="flex items-center gap-2 bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
                    <CheckCircle2 className="h-4 w-4 text-orange-500 shrink-0" />
                    <span className="text-[11px] font-black text-slate-700 uppercase leading-none">{gift}</span>
                  </div>
                ))}
              </div>
            </section>

            <div className="grid grid-cols-2 gap-4 mt-8 px-1">
              <img src="https://i.imgur.com/RAj8Ar4.png" className="rounded-[2rem] shadow-xl border-2 border-slate-100 aspect-square object-cover" onClick={openPopup} />
              <img src="https://i.imgur.com/zv8hWi4.png" className="rounded-[2rem] shadow-xl border-2 border-slate-100 aspect-square object-cover" onClick={openPopup} />
            </div>

            <section className="py-10 space-y-8">
              <h3 className="text-[28px] font-black text-slate-900 text-center uppercase tracking-tighter">
                💎 ELIGE TU <span className="text-orange-600">PROMOCIÓN</span> 💎
              </h3>

              <div className="grid grid-cols-2 gap-4 px-1">
                <div onClick={openPopup} className="bg-white p-6 rounded-[2.5rem] border-2 border-slate-100 shadow-xl text-center space-y-3 cursor-pointer transition-transform active:scale-95">
                  <p className="text-[14px] font-black text-slate-900 uppercase">1 Crema V7</p>
                  <p className="text-[38px] font-black text-slate-900 leading-none">$16</p>
                  <p className="text-[12px] font-bold text-slate-400 uppercase italic">Envío Gratis</p>
                </div>

                <div onClick={openPopup} className="bg-orange-50 p-6 rounded-[2.5rem] border-2 border-orange-600 shadow-xl text-center space-y-3 cursor-pointer transition-transform active:scale-95">
                  <p className="text-[14px] font-black text-orange-700 uppercase">2 Cremas V7</p>
                  <p className="text-[38px] font-black text-orange-600 leading-none">$26</p>
                  <p className="text-[12px] font-black text-orange-600 uppercase italic">+ 6 REGALOS</p>
                </div>
              </div>

              {/* Imagen de Garantía */}
              <div className="px-2 mt-4 cursor-pointer" onClick={openPopup}>
                <img src="https://i.imgur.com/qOmlzPP.png" alt="Garantía de Satisfacción" className="w-full h-auto rounded-2xl shadow-lg border border-slate-100" />
              </div>

              <Button onClick={openPopup} size="lg" className="w-full h-24 text-2xl font-black bg-orange-600 hover:bg-orange-700 text-white shadow-xl rounded-[2rem] animate-heartbeat border-4 border-white uppercase">
                <ShoppingCart className="h-8 w-8 mr-3" />
                ¡ORDENAR AHORA!
              </Button>
            </section>
          </div>
        </section>

        <Testimonials themeColor="orange" />

        <section className="py-14 text-center space-y-12 bg-white">
          <div className="grid grid-cols-2 gap-6 px-4">
            <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 flex flex-col items-center gap-4">
              <ShieldCheck className="h-14 w-14 text-orange-600" />
              <p className="text-[16px] font-black uppercase text-slate-800">100% Original</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 flex flex-col items-center gap-4">
              <ShoppingCart className="h-14 w-14 text-orange-600" />
              <p className="text-[16px] font-black uppercase text-slate-800">Paga al Recibir</p>
            </div>
          </div>
        </section>
      </main>

      <div className="sticky-cta">
        <Button onClick={openPopup} size="lg" className="w-full h-20 text-xl font-black bg-orange-600 hover:bg-orange-700 text-white shadow-2xl rounded-2xl animate-heartbeat border-2 border-white">
          <ShoppingCart className="h-7 w-7 mr-3" />
          ¡COMPRAR AHORA!
        </Button>
      </div>

      <PurchasePopup open={isPopupOpen} onOpenChange={setIsPopupOpen} products={BIOAQUA_PRODUCTS} themeColor="orange" />
      <Footer />
      <Toaster />
    </div>
  );
}
