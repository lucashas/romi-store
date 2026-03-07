"use client";

import { useState } from "react";
import Image from "next/image";
import { TopMarquee } from "@/components/layout/TopMarquee";
import { Testimonials } from "@/components/sections/Testimonials";
import { PurchasePopup, type Product } from "@/components/sections/PurchasePopup";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/toaster";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Zap, ShieldCheck, CheckCircle2, Flame, Smartphone } from "lucide-react";

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
    <>
      {/* DESKTOP NOTICE - Only visible on screens >= 768px */}
      <div className="hidden md:flex min-h-screen bg-black items-center justify-center p-8 text-center flex-col gap-6">
        <div className="h-24 w-24 bg-[#DAA520]/20 rounded-full flex items-center justify-center text-[#DAA520] border-2 border-[#DAA520]/30">
          <Smartphone className="h-12 w-12" />
        </div>
        <h1 className="text-3xl font-black text-white uppercase tracking-tighter">
          CONTENIDO EXCLUSIVO <br /> <span className="text-[#DAA520]">PARA MÓVILES</span>
        </h1>
        <p className="text-slate-400 max-w-md font-medium leading-relaxed">
          Esta oferta está optimizada para smartphones. Por favor, escanea el código o ingresa desde tu celular para obtener el descuento de Shilajit Ultra.
        </p>
      </div>

      {/* MOBILE CONTENT - Only visible on screens < 768px */}
      <div className="md:hidden min-h-screen flex flex-col bg-black pb-10 font-body overflow-x-hidden w-full max-w-[500px] mx-auto shadow-2xl relative border-x border-[#DAA520]/20 text-white">
        <TopMarquee 
          text="Shilajit Ultra – Energía y Vitalidad Natural • " 
          className="bg-gradient-to-r from-black via-[#DAA520]/50 to-[#DAA520] text-white border-b border-[#DAA520]/30 py-4" 
        />

        <main className="flex-1 w-full">
          <section className="bg-black overflow-hidden w-full relative">
            <div className="px-1.5 pt-1.5 cursor-pointer" onClick={openPopup}>
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

            <div className="p-5 text-center space-y-5">
              <div className="flex justify-center items-center gap-3">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Flame key={i} className="h-5 w-5 fill-[#DAA520] text-[#DAA520]" />
                  ))}
                </div>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">(VITALIDAD PURA)</span>
              </div>

              <div className="space-y-2">
                <p className="text-[#DAA520] font-black text-[12px] uppercase tracking-[0.2em] animate-pulse">
                  Stock Limitado: Energía para 3 Meses.
                </p>
                <h1 className="text-4xl font-black text-white uppercase leading-[0.9] tracking-tighter">
                  ACTIVA TU <br /><span className="text-[#DAA520] italic">VITALIDAD</span>
                </h1>
              </div>

              <section className="bg-zinc-900/50 rounded-[2rem] p-5 border border-[#DAA520]/20 space-y-4 text-left shadow-2xl backdrop-blur-sm">
                <h3 className="text-[18px] font-black text-white uppercase leading-none tracking-tighter text-center">
                  ¿TE SIENTES <span className="text-[#DAA520]">AGOTADO?</span>
                </h3>
                
                <div className="space-y-3.5 pt-2">
                  {[
                    { title: "ENERGÍA INAGOTABLE", desc: "Recupera tu rendimiento natural." },
                    { title: "ENFOQUE MENTAL", desc: "Claridad total para días exigentes." },
                    { title: "VITALIDAD PURA", desc: "Más de 84 minerales esenciales." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <CheckCircle2 className="h-5 w-5 text-[#DAA520] shrink-0 mt-0.5" />
                      <div className="space-y-0.5">
                        <p className="font-black text-white text-[14px] uppercase leading-none">{item.title}</p>
                        <p className="text-slate-400 text-[12px] font-medium leading-tight">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="py-2 space-y-5">
                <h3 className="text-[24px] font-black text-white text-center uppercase tracking-tighter">
                  💎 ELIGE TU <span className="text-[#DAA520]">POTENCIA</span> 💎
                </h3>

                <div className="grid grid-cols-1 gap-4 px-1">
                  {/* Opción 1 Frasco */}
                  <div onClick={openPopup} className="group relative bg-zinc-900 p-5 pt-9 rounded-[2rem] border-2 border-[#DAA520]/10 shadow-xl text-center space-y-2 cursor-pointer transition-all active:scale-[0.98] overflow-hidden">
                    <div className="absolute top-0 left-0 w-full bg-zinc-800 py-1">
                      <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">ENERGÍA BÁSICA</p>
                    </div>
                    <p className="text-[14px] font-black text-white uppercase">1 FRASCO SHILAJIT ULTRA</p>
                    <div className="flex justify-center items-end gap-2">
                      <span className="text-[14px] font-bold text-slate-600 line-through mb-1">$40.00</span>
                      <p className="text-[38px] font-black text-white leading-none">$27.99</p>
                    </div>
                  </div>

                  {/* Opción 3 Frascos - BEST SELLER */}
                  <div onClick={openPopup} className="group relative bg-zinc-900/80 p-5 pt-9 rounded-[2rem] border-2 border-[#DAA520] shadow-2xl text-center space-y-2 cursor-pointer transition-all active:scale-[0.98] overflow-hidden">
                    <div className="absolute top-0 left-0 w-full bg-[#DAA520] py-1">
                      <p className="text-[9px] font-black text-black uppercase tracking-widest">¡MÁS RECOMENDADO!</p>
                    </div>
                    <p className="text-[16px] font-black text-[#DAA520] uppercase leading-none">LLEVA 3 AL PRECIO DE 2</p>
                    <div className="flex justify-center items-end gap-2">
                      <span className="text-[14px] font-bold text-[#DAA520]/30 line-through mb-1">$84.97</span>
                      <p className="text-[44px] font-black text-white leading-none">$44.99</p>
                    </div>
                    <p className="text-[11px] font-black text-[#DAA520] uppercase italic">Ahorras $39.98 - 3ero GRATIS</p>
                  </div>
                </div>

                <div className="px-2 py-2">
                  <Button 
                    onClick={openPopup} 
                    size="lg" 
                    className="w-full h-18 text-xl font-black bg-[#DAA520] text-black shadow-2xl rounded-2xl animate-heartbeat border-2 border-black uppercase transition-all"
                  >
                    <ShoppingCart className="h-6 w-6 mr-2" />
                    ¡QUIERO MI SHILAJIT!
                  </Button>
                </div>
              </section>
            </div>
          </section>

          <Testimonials 
            title="CLIENTES IMPARABLES" 
            subtitle="Resultados que hablan por sí solos" 
            themeColor="orange" 
            testimonialImageUrl="https://i.imgur.com/PTsQyWM.png" 
          />

          <section className="py-8 text-center space-y-6 bg-black">
            <div className="grid grid-cols-2 gap-3 px-4">
              <div className="py-4 px-2 bg-zinc-900 rounded-[1.5rem] border border-[#DAA520]/10 flex flex-col items-center gap-2">
                <ShieldCheck className="h-6 w-6 text-[#DAA520]" />
                <p className="text-[11px] font-black uppercase text-white">Certificado Puro</p>
              </div>
              <div className="py-4 px-2 bg-zinc-900 rounded-[1.5rem] border border-[#DAA520]/10 flex flex-col items-center gap-2">
                <ShoppingCart className="h-6 w-6 text-[#DAA520]" />
                <p className="text-[11px] font-black uppercase text-white">Pago al Recibir</p>
              </div>
            </div>
          </section>
        </main>

        <div className="sticky-cta px-4">
          <Button 
            onClick={openPopup} 
            size="lg" 
            className="w-full h-16 text-lg font-black bg-[#DAA520] text-black shadow-2xl rounded-2xl animate-heartbeat border-2 border-black uppercase"
          >
            <ShoppingCart className="h-6 w-6 mr-2" />
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
    </>
  );
}
