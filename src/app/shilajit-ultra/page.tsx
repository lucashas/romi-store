"use client";

import { useState } from "react";
import Image from "next/image";
import { TopMarquee } from "@/components/layout/TopMarquee";
import { Testimonials } from "@/components/sections/Testimonials";
import { PurchasePopup, type Product } from "@/components/sections/PurchasePopup";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/toaster";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Zap, ShieldCheck, CheckCircle2, Flame, BatteryLow } from "lucide-react";

const SHILAJIT_PRODUCTS: Product[] = [
  {
    id: "shilajit_ultra_1",
    name: "1 Frasco de Shilajit Ultra (30g)",
    price: 27.99,
    image: "https://i.imgur.com/W2P6V5x.png", // Reemplazar con imagen real si está disponible
    badge: "OFERTA B&Aacute;SICA",
    description: "Energ&iacute;a para 1 mes &bull; Resina Pura",
  },
  {
    id: "shilajit_ultra_3",
    name: "Lleva 3 al precio de 2 (90g)",
    price: 44.99,
    image: "https://i.imgur.com/W2P6V5x.png", // Reemplazar con imagen real si está disponible
    badge: "&iexcl;M&Aacute;S VENDIDO!",
    description: "Abastece tu Energ&iacute;a para 3 Meses &bull; Env&iacute;o Gratis",
  },
];

export default function ShilajitUltraPage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const openPopup = () => setIsPopupOpen(true);

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 pb-10 font-body overflow-x-hidden w-full max-w-[500px] mx-auto shadow-2xl relative border-x border-slate-900 text-white">
      <TopMarquee text="&iexcl;STOCK LIMITADO! &bull; ENERG&Iacute;A PURA DE LAS MONTA&Ntilde;AS &bull; VITALIDAD TOTAL &bull; " className="bg-amber-600 text-white border-amber-700" />

      <main className="flex-1 w-full">
        {/* Hero Section */}
        <section className="bg-slate-950 overflow-hidden w-full relative">
          <div className="px-[5px] pt-[5px] cursor-pointer" onClick={openPopup}>
            <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl border-2 border-amber-600/30">
              <Image 
                src="https://i.imgur.com/W2P6V5x.png" // Placeholder - Reemplazar con banner de Shilajit
                alt="Shilajit Ultra Banner" 
                width={500} 
                height={250} 
                className="w-full h-auto block" 
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
            </div>
          </div>

          <div className="p-6 text-center space-y-5">
            <div className="flex justify-center items-center gap-3">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Flame key={i} className="h-6 w-6 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest">(PODER NATURAL)</span>
            </div>

            <div className="space-y-2">
              <h1 className="text-5xl font-black text-white uppercase leading-[0.85] tracking-tighter">
                ACTIVA TU <br /><span className="text-amber-500 italic">VITALIDAD</span>
              </h1>
              <p className="text-lg font-bold text-amber-500 uppercase tracking-tight">🏔️ El tesoro de las monta&ntilde;as en tus manos</p>
            </div>

            <section className="bg-slate-900 rounded-[2rem] p-5 border border-slate-800 space-y-4 text-left shadow-2xl">
              <h3 className="text-[19px] font-black text-white uppercase leading-none tracking-tighter text-center">
                &iquest;TE SIENTES <span className="text-amber-500">AGOTADO?</span>
              </h3>
              
              <div className="space-y-3 pt-2">
                {[
                  { title: "ENERG&Iacute;A INAGOTABLE", desc: "Recupera el rendimiento que pensabas perdido." },
                  { title: "ENFOQUE MENTAL", desc: "Claridad total para tus d&iacute;as m&aacute;s exigentes." },
                  { title: "RECUPERACI&Oacute;N R&Aacute;PIDA", desc: "Vuelve a la acci&oacute;n sin cansancio acumulado." },
                  { title: "VITALIDAD NATURAL", desc: "M&aacute;s de 84 minerales en cada dosis." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <CheckCircle2 className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                    <p className="text-[14px] leading-tight">
                      <span className="font-black text-white uppercase">{item.title}:</span> <br />
                      <span className="text-slate-400 font-medium">{item.desc}</span>
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Pricing Section */}
            <section className="py-4 space-y-6">
              <h3 className="text-[24px] font-black text-white text-center uppercase tracking-tighter">
                💎 ELIGE TU <span className="text-amber-500">POTENCIA</span> 💎
              </h3>

              <div className="grid grid-cols-1 gap-4 px-2">
                {/* Promo 1 */}
                <div onClick={openPopup} className="relative bg-slate-900 p-6 pt-10 rounded-[2.5rem] border-2 border-slate-800 shadow-xl text-center space-y-2 cursor-pointer transition-transform active:scale-95 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full bg-slate-800 py-1">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">ENERG&Iacute;A B&Aacute;SICA</p>
                  </div>
                  <p className="text-[16px] font-black text-white uppercase">1 FRASCO SHILAJIT ULTRA</p>
                  <div className="flex justify-center items-end gap-2">
                    <span className="text-lg font-bold text-slate-600 line-through mb-1">$40.00</span>
                    <p className="text-[48px] font-black text-white leading-none">$27.99</p>
                  </div>
                  <p className="text-[12px] font-black text-amber-500 uppercase italic">Env&iacute;o Gratis a todo Ecuador</p>
                </div>

                {/* Promo 3x2 - MAS VENDIDO */}
                <div onClick={openPopup} className="relative bg-amber-600/10 p-6 pt-10 rounded-[2.5rem] border-2 border-amber-600 shadow-2xl text-center space-y-2 cursor-pointer transition-transform active:scale-95 overflow-hidden ring-4 ring-amber-600/20">
                  <div className="absolute top-0 left-0 w-full bg-amber-600 py-1">
                    <p className="text-[10px] font-black text-white uppercase tracking-widest">&iexcl;M&Aacute;S RECOMENDADO!</p>
                  </div>
                  <p className="text-[18px] font-black text-amber-500 uppercase">LLEVA 3 AL PRECIO DE 2</p>
                  <div className="flex justify-center items-end gap-2">
                    <span className="text-lg font-bold text-amber-500/30 line-through mb-1">$84.97</span>
                    <p className="text-[54px] font-black text-white leading-none">$44.99</p>
                  </div>
                  <p className="text-[13px] font-black text-amber-500 uppercase italic">Ahorras $39.98 - El 3ero es GRATIS</p>
                </div>
              </div>

              <div className="px-4 py-4">
                <Button onClick={openPopup} size="lg" className="w-full h-20 text-2xl font-black bg-amber-600 hover:bg-amber-700 text-white shadow-2xl rounded-[2.5rem] animate-heartbeat border-4 border-slate-950 uppercase">
                  <ShoppingCart className="h-8 w-8 mr-3" />
                  &iexcl;QUIERO MI SHILAJIT!
                </Button>
              </div>
            </section>
          </div>
        </section>

        <Testimonials 
          title="CLIENTES IMPARABLES" 
          subtitle="Energ&iacute;a real, resultados inmediatos" 
          themeColor="orange" 
          testimonialImageUrl="https://i.imgur.com/PTsQyWM.png" 
        />

        <section className="py-8 text-center space-y-6 bg-slate-950">
          <div className="grid grid-cols-2 gap-4 px-4">
            <div className="py-4 px-4 bg-slate-900 rounded-[1.5rem] border border-slate-800 flex flex-col items-center gap-2">
              <ShieldCheck className="h-8 w-8 text-amber-500" />
              <p className="text-[13px] font-black uppercase text-white">Certificado Puro</p>
            </div>
            <div className="py-4 px-4 bg-slate-900 rounded-[1.5rem] border border-slate-800 flex flex-col items-center gap-2">
              <ShoppingCart className="h-8 w-8 text-amber-500" />
              <p className="text-[13px] font-black uppercase text-white">Pago al Recibir</p>
            </div>
          </div>
          <div className="px-6">
            <Image 
              src="https://i.imgur.com/bk1DAl0.png" 
              alt="Confianza Ecuador" 
              width={460} 
              height={100} 
              className="w-full h-auto rounded-2xl opacity-80" 
            />
          </div>
        </section>
      </main>

      <div className="sticky-cta">
        <Button onClick={openPopup} size="lg" className="w-full h-18 text-xl font-black bg-amber-600 hover:bg-amber-700 text-white shadow-2xl rounded-2xl animate-heartbeat border-2 border-white/20 uppercase">
          <ShoppingCart className="h-7 w-7 mr-3" />
          &iexcl;COMPRAR AHORA!
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
