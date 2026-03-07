"use client";

import { useState } from "react";
import Image from "next/image";
import { TopMarquee } from "@/components/layout/TopMarquee";
import { Testimonials } from "@/components/sections/Testimonials";
import { PurchasePopup, type Product } from "@/components/sections/PurchasePopup";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/toaster";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Zap, ShieldCheck, CheckCircle2, Flame } from "lucide-react";

const SHILAJIT_PRODUCTS: Product[] = [
  {
    id: "shilajit_ultra_1",
    name: "1 Frasco de Shilajit Ultra (30g)",
    price: 27.99,
    image: "https://i.imgur.com/W2P6V5x.png",
    badge: "OFERTA BÁSICA",
    description: "Energía para 1 mes • Resina Pura",
  },
  {
    id: "shilajit_ultra_3",
    name: "Lleva 3 al precio de 2 (90g)",
    price: 44.99,
    image: "https://i.imgur.com/W2P6V5x.png",
    badge: "¡MÁS RECOMENDADO!",
    description: "Abastece tu Energía para 3 Meses • Envío Gratis",
  },
];

export default function ShilajitUltraPage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const openPopup = () => setIsPopupOpen(true);

  return (
    <div className="min-h-screen flex flex-col bg-black pb-10 font-body overflow-x-hidden w-full max-w-[500px] mx-auto shadow-2xl relative border-x border-[#DAA520]/20 text-white">
      {/* Marquesina con Degradado Negro a Dorado */}
      <TopMarquee 
        text="Shilajit Ultra – Energía y Vitalidad Natural • " 
        className="bg-gradient-to-r from-black via-[#DAA520]/50 to-[#DAA520] text-white border-b border-[#DAA520]/30 py-3" 
      />

      <main className="flex-1 w-full">
        <section className="bg-black overflow-hidden w-full relative">
          <div className="px-[5px] pt-[5px] cursor-pointer" onClick={openPopup}>
            <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl border-2 border-[#DAA520]/30">
              <Image 
                src="https://i.imgur.com/W2P6V5x.png" 
                alt="Shilajit Ultra Banner" 
                width={500} 
                height={250} 
                className="w-full h-auto block" 
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
            </div>
          </div>

          <div className="p-6 text-center space-y-6">
            <div className="flex justify-center items-center gap-3">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Flame key={i} className="h-6 w-6 fill-[#DAA520] text-[#DAA520]" />
                ))}
              </div>
              <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest">(VITALIDAD PURA)</span>
            </div>

            <div className="space-y-3">
              <p className="text-[#DAA520] font-black text-sm uppercase tracking-[0.2em] animate-pulse">
                Stock Limitado: Abastece tu Energía para 3 Meses.
              </p>
              <h1 className="text-5xl font-black text-white uppercase leading-[0.85] tracking-tighter">
                ACTIVA TU <br /><span className="text-[#DAA520] italic">VITALIDAD</span>
              </h1>
            </div>

            <section className="bg-zinc-900/50 rounded-[2rem] p-6 border border-[#DAA520]/20 space-y-4 text-left shadow-2xl backdrop-blur-sm">
              <h3 className="text-[20px] font-black text-white uppercase leading-none tracking-tighter text-center">
                ¿TE SIENTES <span className="text-[#DAA520]">AGOTADO?</span>
              </h3>
              
              <div className="space-y-4 pt-2">
                {[
                  { title: "ENERGÍA INAGOTABLE", desc: "Recupera el rendimiento que pensabas perdido." },
                  { title: "ENFOQUE MENTAL", desc: "Claridad total para tus días más exigentes." },
                  { title: "RECUPERACIÓN RÁPIDA", desc: "Vuelve a la acción sin cansancio acumulado." },
                  { title: "VITALIDAD NATURAL", desc: "Más de 84 minerales en cada dosis." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <CheckCircle2 className="h-5 w-5 text-[#DAA520] shrink-0 mt-0.5" />
                    <div className="space-y-0.5">
                      <p className="font-black text-white text-[15px] uppercase leading-none">{item.title}</p>
                      <p className="text-slate-400 text-[13px] font-medium leading-tight">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="py-4 space-y-6">
              <h3 className="text-[26px] font-black text-white text-center uppercase tracking-tighter">
                💎 ELIGE TU <span className="text-[#DAA520]">POTENCIA</span> 💎
              </h3>

              <div className="grid grid-cols-1 gap-5 px-2">
                {/* Opción 1 Frasco */}
                <div onClick={openPopup} className="group relative bg-zinc-900 p-6 pt-10 rounded-[2.5rem] border-2 border-[#DAA520]/10 shadow-xl text-center space-y-2 cursor-pointer transition-all hover:border-[#DAA520]/40 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full bg-zinc-800 py-1.5">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">ENERGÍA BÁSICA</p>
                  </div>
                  <p className="text-[16px] font-black text-white uppercase">1 FRASCO SHILAJIT ULTRA</p>
                  <div className="flex justify-center items-end gap-2">
                    <span className="text-lg font-bold text-slate-600 line-through mb-1">$40.00</span>
                    <p className="text-[48px] font-black text-white leading-none">$27.99</p>
                  </div>
                  <p className="text-[12px] font-black text-[#DAA520] uppercase italic">Envío Gratis a todo Ecuador</p>
                </div>

                {/* Opción 3 Frascos - BEST SELLER */}
                <div onClick={openPopup} className="group relative bg-zinc-900/80 p-6 pt-10 rounded-[2.5rem] border-2 border-[#DAA520] shadow-2xl text-center space-y-2 cursor-pointer transition-all hover:scale-[1.02] overflow-hidden ring-4 ring-[#DAA520]/10">
                  <div className="absolute top-0 left-0 w-full bg-[#DAA520] py-1.5">
                    <p className="text-[10px] font-black text-black uppercase tracking-widest">¡MÁS RECOMENDADO!</p>
                  </div>
                  <p className="text-[18px] font-black text-[#DAA520] uppercase">LLEVA 3 AL PRECIO DE 2</p>
                  <div className="flex justify-center items-end gap-2">
                    <span className="text-lg font-bold text-[#DAA520]/30 line-through mb-1">$84.97</span>
                    <p className="text-[54px] font-black text-white leading-none">$44.99</p>
                  </div>
                  <p className="text-[13px] font-black text-[#DAA520] uppercase italic">Ahorras $39.98 - El 3ero es GRATIS</p>
                </div>
              </div>

              <div className="px-4 py-4">
                <Button 
                  onClick={openPopup} 
                  size="lg" 
                  className="w-full h-20 text-2xl font-black bg-[#DAA520] hover:bg-black hover:text-[#DAA520] text-black shadow-2xl rounded-[2.5rem] animate-heartbeat border-4 border-black uppercase transition-all duration-500"
                >
                  <ShoppingCart className="h-8 w-8 mr-3" />
                  ¡QUIERO MI SHILAJIT!
                </Button>
              </div>
            </section>
          </div>
        </section>

        <Testimonials 
          title="CLIENTES IMPARABLES" 
          subtitle="Energía real, resultados inmediatos" 
          themeColor="orange" 
          testimonialImageUrl="https://i.imgur.com/PTsQyWM.png" 
        />

        <section className="py-10 text-center space-y-8 bg-black">
          <div className="grid grid-cols-2 gap-4 px-4">
            <div className="py-5 px-4 bg-zinc-900 rounded-[1.8rem] border border-[#DAA520]/10 flex flex-col items-center gap-2">
              <ShieldCheck className="h-8 w-8 text-[#DAA520]" />
              <p className="text-[13px] font-black uppercase text-white">Certificado Puro</p>
            </div>
            <div className="py-5 px-4 bg-zinc-900 rounded-[1.8rem] border border-[#DAA520]/10 flex flex-col items-center gap-2">
              <ShoppingCart className="h-8 w-8 text-[#DAA520]" />
              <p className="text-[13px] font-black uppercase text-white">Pago al Recibir</p>
            </div>
          </div>
          <div className="px-8 opacity-70">
            <Image 
              src="https://i.imgur.com/bk1DAl0.png" 
              alt="Confianza Ecuador" 
              width={460} 
              height={100} 
              className="w-full h-auto rounded-2xl grayscale hover:grayscale-0 transition-all duration-700" 
            />
          </div>
        </section>
      </main>

      <div className="sticky-cta">
        <Button 
          onClick={openPopup} 
          size="lg" 
          className="w-full h-18 text-xl font-black bg-[#DAA520] hover:bg-black hover:text-[#DAA520] text-black shadow-2xl rounded-2xl animate-heartbeat border-2 border-black uppercase transition-all duration-500"
        >
          <ShoppingCart className="h-7 w-7 mr-3" />
          ¡COMPRAR AHORA!
        </Button>
      </div>

      <PurchasePopup 
        open={isPopupOpen} 
        onOpenChange={setIsPopupOpen} 
        products={SHILAJIT_PRODUCTS} 
        themeColor="orange" 
        redirectPath="/gracias/shilajit-ultra"
        landingId="shilajit-ultra"
      />
      <Footer />
      <Toaster />
    </div>
  );
}