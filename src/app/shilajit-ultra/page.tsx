"use client";

import { useState } from "react";
import Image from "next/image";
import { TopMarquee } from "@/components/layout/TopMarquee";
import { Testimonials } from "@/components/sections/Testimonials";
import { PurchasePopup, type Product } from "@/components/sections/PurchasePopup";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/toaster";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Zap, ShieldCheck, Flame, Trophy } from "lucide-react";

const SHILAJIT_PRODUCTS: Product[] = [
  {
    id: "shilajit-ultra-1",
    name: "1 Frasco Shilajit Ultra (30 d&iacute;as)",
    price: 27.99,
    image: "https://i.imgur.com/W2P6V5x.png",
    badge: "OFERTA INDIVIDUAL",
    description: "Ideal para probar el poder del Himalaya",
  },
  {
    id: "shilajit-ultra-3",
    name: "Lleva 3 al precio de 2 (90 d&iacute;as)",
    price: 44.99,
    image: "https://i.imgur.com/W2P6V5x.png",
    badge: "&iexcl;M&Aacute;S VENDIDO!",
    description: "Recibe el 3ero GRATIS &bull; Ahorro de $39.98",
  },
];

export default function ShilajitUltraPage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const openPopup = () => setIsPopupOpen(true);

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 pb-10 font-body overflow-x-hidden w-full max-w-[500px] mx-auto shadow-2xl relative border-x border-slate-800">
      <TopMarquee 
        text="&iexcl;OFERTA LIMITADA SHILAJIT ULTRA! &bull; ENERG&Iacute;A INAGOTABLE &bull; RENDIMIENTO M&Aacute;XIMO &bull; ENV&Iacute;OS A TODO ECUADOR &bull; " 
        className="bg-amber-600 text-white border-amber-700" 
      />

      <main className="flex-1 w-full bg-slate-900">
        <section className="relative overflow-hidden w-full">
          <div className="px-[5px] pt-[5px] cursor-pointer" onClick={openPopup}>
            <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl border-2 border-amber-500/30">
              <Image 
                src="https://i.imgur.com/XfmwUEJ.png" 
                alt="Shilajit Ultra Banner" 
                width={500} 
                height={250} 
                className="w-full h-auto block" 
                priority
              />
              <div className="absolute top-4 left-4 bg-amber-600 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
                Original 100% Puro
              </div>
            </div>
          </div>

          <div className="p-6 text-center space-y-4">
            <div className="flex justify-center items-center gap-2">
              <Zap className="h-5 w-5 fill-amber-500 text-amber-500 animate-pulse" />
              <span className="text-[12px] font-black text-amber-500 uppercase tracking-[0.2em]">&iexcl;Siente el poder natural!</span>
            </div>

            <div className="space-y-2">
              <h1 className="text-4xl font-black text-white uppercase leading-[0.9] tracking-tighter">
                RESCATA TU <br /><span className="text-amber-500 italic">VITALIDAD</span>
              </h1>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-tight">
                El secreto milenario para un rendimiento inagotable
              </p>
            </div>

            <div className="bg-amber-600/10 border border-amber-600/30 p-4 rounded-2xl text-left">
              <p className="text-[14px] text-amber-200 font-medium leading-relaxed italic text-center">
                &quot;Sent&iacute; un cambio total en mi energ&iacute;a desde el primer d&iacute;a. Es como si mi cuerpo hubiera encendido un motor nuevo.&quot;
              </p>
            </div>

            <div className="space-y-4 py-4">
              <div onClick={openPopup} className="relative bg-slate-800 p-5 rounded-[2rem] border-2 border-amber-600 shadow-2xl text-center space-y-1 cursor-pointer transition-transform active:scale-95 overflow-hidden">
                <div className="absolute top-0 right-0 bg-amber-600 py-1 px-4 rounded-bl-xl">
                  <p className="text-[10px] font-black text-white uppercase tracking-tighter">&iexcl;OFERTA ESTRELLA!</p>
                </div>
                <p className="text-[14px] font-black text-amber-500 uppercase leading-none">LLEVA 3 AL PRECIO DE 2</p>
                <div className="flex flex-col items-center">
                  <span className="text-[12px] font-bold text-slate-500 line-through leading-none">$84.97</span>
                  <p className="text-[48px] font-black text-white leading-none">$44.99</p>
                </div>
                <p className="text-[11px] font-black text-green-500 uppercase italic">Ahorra $39.98 + Env&iacute;o Gratis</p>
              </div>

              <div onClick={openPopup} className="relative bg-slate-800/50 p-4 rounded-[2rem] border-2 border-slate-700 text-center space-y-1 cursor-pointer transition-transform active:scale-95">
                <p className="text-[12px] font-black text-slate-400 uppercase leading-none">1 FRASCO (30 D&Iacute;AS)</p>
                <p className="text-[32px] font-black text-white leading-none">$27.99</p>
                <p className="text-[10px] font-black text-amber-500 uppercase">Energ&iacute;a inmediata</p>
              </div>
            </div>

            <Button onClick={openPopup} size="lg" className="w-full h-18 text-2xl font-black bg-amber-600 hover:bg-amber-700 text-white shadow-xl rounded-[2rem] animate-heartbeat border-4 border-white/10 uppercase">
              <ShoppingCart className="h-8 w-8 mr-3" />
              &iexcl;PEDIR AHORA!
            </Button>
          </div>
        </section>

        <section className="p-6 bg-slate-950 space-y-6">
          <h3 className="text-[22px] font-black text-white uppercase leading-none tracking-tighter text-center">
            M&Aacute;S QUE UN SUPLEMENTO, <br /><span className="text-amber-500">TU MEJOR VERSI&Oacute;N</span>
          </h3>

          <div className="grid grid-cols-1 gap-4">
            {[
              { icon: Flame, title: "ENERG&Iacute;A INAGOTABLE", desc: "Combate el cansancio y mantente activo todo el d&iacute;a sin bajones." },
              { icon: Trophy, title: "RENDIMIENTO M&Aacute;XIMO", desc: "Potencia tu capacidad f&iacute;sica y mental en cada desaf&iacute;o." },
              { icon: ShieldCheck, title: "RECUPERACI&Oacute;N R&Aacute;PIDA", desc: "Siente c&oacute;mo tu cuerpo se regenera m&aacute;s r&aacute;pido despu&eacute;s del esfuerzo." }
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-4 bg-slate-900 rounded-2xl border border-slate-800 shadow-lg">
                <div className="h-12 w-12 rounded-xl bg-amber-600/20 flex items-center justify-center shrink-0">
                  <item.icon className="h-6 w-6 text-amber-500" />
                </div>
                <div className="space-y-1 text-left">
                  <p className="text-[14px] font-black text-white uppercase leading-none">{item.title}</p>
                  <p className="text-[12px] text-slate-400 leading-tight">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Testimonials 
          title="TESTIMONIOS REALES" 
          subtitle="Hombres que recuperaron su fuego" 
          themeColor="gold" 
        />
      </main>

      <div className="sticky-cta">
        <Button onClick={openPopup} size="lg" className="w-full h-16 text-xl font-black bg-amber-600 hover:bg-amber-700 text-white shadow-2xl rounded-2xl animate-heartbeat border-2 border-white/20 uppercase">
          <ShoppingCart className="h-6 w-6 mr-3" />
          &iexcl;RESCATA TU ENERG&Iacute;A!
        </Button>
      </div>

      <PurchasePopup open={isPopupOpen} onOpenChange={setIsPopupOpen} products={SHILAJIT_PRODUCTS} themeColor="gold" />
      <Footer />
      <Toaster />
    </div>
  );
}
