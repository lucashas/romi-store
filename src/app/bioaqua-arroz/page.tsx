"use client";

import { useState } from "react";
import Image from "next/image";
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
    name: "1 Kit Piel de Porcelana (6 productos)",
    price: 35.0,
    image: "https://i.imgur.com/aSjVyM2.png",
    badge: "OFERTA B&Aacute;SICA",
    description: "Tratamiento completo de 6 pasos",
  },
  {
    id: "bioaqua_rice_2",
    name: "2 Kits Piel de Porcelana (12 productos)",
    price: 55.0,
    image: "https://i.imgur.com/aSjVyM2.png",
    badge: "&iexcl;M&Aacute;S VENDIDO!",
    description: "Resultados profesionales &bull; Env&iacute;o Gratis",
  },
];

export default function BioaquaRicePage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const openPopup = () => setIsPopupOpen(true);

  return (
    <div className="min-h-screen flex flex-col bg-white pb-10 font-body overflow-x-hidden w-full max-w-[500px] mx-auto shadow-2xl relative border-x border-slate-100">
      <TopMarquee text="&iexcl;OFERTA LANZAMIENTO PIEL DE PORCELANA! &bull; HIDRATACI&Oacute;N PROFUNDA &bull; ENV&Iacute;OS A TODO ECUADOR &bull; " className="bg-yellow-600 text-white border-yellow-700" />

      <main className="flex-1 w-full">
        <section className="bg-white overflow-hidden w-full">
          <div className="px-[5px] pt-[5px] cursor-pointer" onClick={openPopup}>
            <div className="relative w-full overflow-hidden rounded-2xl shadow-xl border-2 border-yellow-100">
              <Image 
                src="https://i.imgur.com/tHUWnzw.png" 
                alt="Bioaqua Kit de Arroz Banner" 
                width={500} 
                height={200} 
                className="w-full h-auto block" 
                priority
              />
            </div>
          </div>

          <div className="p-4 text-center space-y-4">
            <div className="flex justify-center items-center gap-3">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-6 w-6 fill-yellow-600 text-yellow-600" />
                ))}
              </div>
              <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest">(+1.200 VENTAS)</span>
            </div>

            <div className="space-y-1">
              <h1 className="text-4xl font-black text-slate-900 uppercase leading-[0.9] tracking-tighter">
                KIT PIEL DE <br /><span className="text-yellow-600 italic">PORCELANA</span>
              </h1>
              <p className="text-lg font-bold text-yellow-600 uppercase tracking-tight">🌾&iexcl;Tu rostro merece brillar!</p>
            </div>

            <div className="grid grid-cols-2 gap-2 px-1" onClick={openPopup}>
              <div className="relative w-full overflow-hidden rounded-2xl shadow-md border border-slate-100 cursor-pointer">
                <Image src="https://i.imgur.com/XFQg77J.png" alt="Detalle 1" width={250} height={250} className="w-full h-auto block" />
              </div>
              <div className="relative w-full overflow-hidden rounded-2xl shadow-md border border-slate-100 cursor-pointer">
                <Image src="https://i.imgur.com/aSjVyM2.png" alt="Detalle 2" width={250} height={250} className="w-full h-auto block" />
              </div>
            </div>

            <section className="bg-slate-50 rounded-[2rem] p-4 border border-slate-100 space-y-3 text-left">
              <h3 className="text-[19px] font-black text-slate-900 uppercase leading-none tracking-tighter text-center">
                RUTINA DE <span className="text-yellow-600">6 PASOS</span>
              </h3>
              
              <div className="w-full rounded-2xl overflow-hidden shadow-md border border-slate-100 my-2 cursor-pointer" onClick={openPopup}>
                <Image src="https://i.imgur.com/Ze3pVGV.png" alt="6 Pasos Bioaqua" width={450} height={300} className="w-full h-auto block" />
              </div>

              <div className="space-y-1.5 pt-2">
                {[
                  { name: "Eye Cream", desc: "cuida la zona de los ojos, reduciendo ojeras." },
                  { name: "Cleanser", desc: "limpia profundamente eliminando impurezas." },
                  { name: "Toner", desc: "equilibra e hidrata, cerrando los poros." },
                  { name: "Lotion", desc: "aporta hidrataci&oacute;n ligera y mejora textura." },
                  { name: "Cream", desc: "brinda hidrataci&oacute;n intensa y elasticidad." },
                  { name: "Essence", desc: "potencia la luminosidad y revitaliza." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-yellow-600 shrink-0 mt-0.5" />
                    <p className="text-[13px] leading-tight">
                      <span className="font-black text-slate-900 uppercase">{item.name}:</span> <span className="text-slate-600 font-medium">{item.desc}</span>
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="py-2 space-y-6">
              <h3 className="text-[26px] font-black text-slate-900 text-center uppercase tracking-tighter">
                💎 ELIGE TU <span className="text-yellow-600">PROMOCI&Oacute;N</span> 💎
              </h3>

              <div className="grid grid-cols-2 gap-3 px-1">
                <div onClick={openPopup} className="relative bg-white p-4 pt-7 rounded-[2.5rem] border-2 border-slate-100 shadow-xl text-center space-y-1 cursor-pointer transition-transform active:scale-95 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full bg-slate-100 py-0.5">
                    <p className="text-[9px] font-black text-slate-500 uppercase tracking-tighter">OFERTA B&Aacute;SICA</p>
                  </div>
                  <p className="text-[11px] font-black text-slate-900 uppercase leading-none">1 KIT (6 PROD.)</p>
                  <div className="flex flex-col items-center">
                    <span className="text-[12px] font-bold text-slate-400 line-through leading-none">$45</span>
                    <p className="text-[38px] font-black text-slate-900 leading-none">$35</p>
                  </div>
                  <p className="text-[10px] font-black text-yellow-600 uppercase italic">Env&iacute;o Gratis</p>
                </div>

                <div onClick={openPopup} className="relative bg-yellow-50 p-4 pt-7 rounded-[2.5rem] border-2 border-yellow-600 shadow-xl text-center space-y-1 cursor-pointer transition-transform active:scale-95 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full bg-yellow-600 py-0.5">
                    <p className="text-[9px] font-black text-white uppercase tracking-tighter">&iexcl;M&Aacute;S VENDIDO!</p>
                  </div>
                  <p className="text-[11px] font-black text-yellow-800 uppercase leading-none">2 KITS (12 PROD.)</p>
                  <div className="flex flex-col items-center">
                    <span className="text-[12px] font-bold text-yellow-700/40 line-through leading-none">$70</span>
                    <p className="text-[38px] font-black text-yellow-600 leading-none">$55</p>
                  </div>
                  <p className="text-[10px] font-black text-yellow-600 uppercase italic">Ahorra $15</p>
                </div>
              </div>

              <div className="px-4 py-2">
                <Button onClick={openPopup} size="lg" className="w-full h-18 text-2xl font-black bg-yellow-600 hover:bg-yellow-700 text-white shadow-xl rounded-[2rem] animate-heartbeat border-4 border-white uppercase">
                  <ShoppingCart className="h-8 w-8 mr-3" />
                  &iexcl;ORDENAR AHORA!
                </Button>
              </div>

              <div className="pt-6 pb-4 space-y-5 text-center px-2">
                <div className="space-y-1.5">
                  <h3 className="text-[22px] font-black text-slate-900 uppercase tracking-tighter leading-none">
                    BELLEZA NATURAL <br /> <span className="text-yellow-600">RESULTADOS VISIBLES</span>
                  </h3>
                  <p className="text-[12px] font-black text-yellow-600 uppercase tracking-widest leading-none">
                    NUTRICI&Oacute;N Y FRESCURA CON CADA APLICACI&Oacute;N
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3" onClick={openPopup}>
                  <div className="relative w-full aspect-square overflow-hidden rounded-2xl shadow-xl border-2 border-white cursor-pointer transition-transform active:scale-95">
                    <Image src="https://i.imgur.com/1izaYPo.png" alt="Belleza Natural 1" fill className="object-cover" sizes="200px" />
                  </div>
                  <div className="relative w-full aspect-square overflow-hidden rounded-2xl shadow-xl border-2 border-white cursor-pointer transition-transform active:scale-95">
                    <Image src="https://i.imgur.com/FdpmjYk.png" alt="Belleza Natural 2" fill className="object-cover" sizes="200px" />
                  </div>
                </div>

                <p className="text-[14px] font-medium text-slate-600 leading-relaxed italic px-2">
                  Descubre el poder del arroz en tu piel. El kit BIOAQUA Rice Raw Pulp ofrece limpieza profunda, hidrataci&oacute;n duradera y un acabado luminoso que realza tu belleza natural. 🌾🌟
                </p>
              </div>
            </section>
          </div>
        </section>

        <Testimonials 
          title="CLIENTAS FELICES" 
          subtitle="Resultados que hablan por s&iacute; solos" 
          themeColor="gold" 
          testimonialImageUrl="https://i.imgur.com/PTsQyWM.png" 
        />

        <section className="py-2 text-center space-y-4 bg-white">
          <div className="grid grid-cols-2 gap-4 px-4">
            <div className="py-2 px-4 bg-slate-50 rounded-[1.2rem] border border-slate-100 flex flex-col items-center gap-1">
              <ShieldCheck className="h-6 w-6 text-yellow-600" />
              <p className="text-[12px] font-black uppercase text-slate-800">100% Original</p>
            </div>
            <div className="py-2 px-4 bg-slate-50 rounded-[1.2rem] border border-slate-100 flex flex-col items-center gap-1">
              <ShoppingCart className="h-6 w-6 text-yellow-600" />
              <p className="text-[12px] font-black uppercase text-slate-800">Paga al Recibir</p>
            </div>
          </div>
          <div className="px-4">
            <Image 
              src="https://i.imgur.com/bk1DAl0.png" 
              alt="Sello de Confianza Ecuador" 
              width={460} 
              height={100} 
              className="w-full h-auto rounded-2xl shadow-xl border-2 border-yellow-50" 
            />
          </div>
        </section>
      </main>

      <div className="sticky-cta">
        <Button onClick={openPopup} size="lg" className="w-full h-16 text-xl font-black bg-yellow-600 hover:bg-yellow-700 text-white shadow-2xl rounded-2xl animate-heartbeat border-2 border-white uppercase">
          <ShoppingCart className="h-6 w-6 mr-3" />
          &iexcl;COMPRAR AHORA!
        </Button>
      </div>

      <PurchasePopup open={isPopupOpen} onOpenChange={setIsPopupOpen} products={RICE_PRODUCTS} themeColor="gold" />
      <Footer />
      <Toaster />
    </div>
  );
}