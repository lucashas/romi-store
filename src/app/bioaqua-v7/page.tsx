"use client";

import { useState } from "react";
import { TopMarquee } from "@/components/layout/TopMarquee";
import { Testimonials, type TestimonialItem } from "@/components/sections/Testimonials";
import { PurchasePopup, type Product } from "@/components/sections/PurchasePopup";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/toaster";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star, Heart, Zap, ShieldCheck, Gift, Trophy, Sparkles } from "lucide-react";
import Image from "next/image";

const BIOAQUA_PRODUCTS: Product[] = [
  {
    id: "bioaqua_v7_1",
    name: "1 Crema V7 Bioaqua",
    price: 16.00,
    image: "https://i.imgur.com/bUaJbMD.png",
    badge: "ECONÓMICO",
    description: "Efecto aclarante instantáneo (Sin regalo)"
  },
  {
    id: "bioaqua_v7_2",
    name: "2 Cremas V7 Bioaqua",
    price: 26.00,
    image: "https://i.imgur.com/bUaJbMD.png",
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
    imageId: "testimonial-user-1"
  },
  {
    name: "Valentina Ruiz",
    city: "Cuenca",
    role: "Adiós Manchas",
    quote: "Tenía manchas por el sol y esta crema V7 las ha difuminado increíblemente en solo dos semanas. No salgo de casa sin ella, me encanta su olor.",
    imageId: "testimonial-user-4"
  },
  {
    name: "Gabriela Mendoza",
    city: "Loja",
    role: "Rostro Radiante",
    quote: "El efecto aclarante es instantáneo y muy natural. Me encanta que no deja sensación grasosa, ideal para el clima de acá. ¡100% recomendada!",
    imageId: "testimonial-user-2"
  }
];

const GIFTS = [
  {
    name: "1 Contorno De Ojos Bioaqua",
    desc: "Hidratación profunda",
    img: "https://i.imgur.com/15gxrJI.png",
    tag: "NUEVO"
  },
  {
    name: "1 Jabon Liquido De Arroz",
    desc: "Brillo natural",
    img: "https://i.imgur.com/k2LgSRh.png",
    tag: "MÁS PEDIDO"
  },
  {
    name: "1 Serum De Pestanas",
    desc: "Nutrición intensa",
    img: "https://i.imgur.com/NdEF1tQ.png",
    tag: "OFERTA"
  }
];

export default function BioaquaV7Page() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const openPopup = () => setIsPopupOpen(true);

  return (
    <div className="min-h-screen flex flex-col bg-white pb-10 font-body overflow-x-hidden w-full max-w-[500px] mx-auto shadow-2xl relative">
      <TopMarquee text="🌸 ¡OFERTA ESPECIAL BELLEZA! 🌸 - ✨ REGÁLATE UNA PIEL DE PORCELANA HOY - 📦 PAGO CONTRA ENTREGA - " className="bg-orange-600 text-white border-orange-500" />
      
      <main className="flex-1 w-full">
        <section className="bg-white overflow-hidden w-full">
          <div className="px-[5px] pt-[5px] cursor-pointer" onClick={openPopup}>
            <div className="relative w-full overflow-hidden rounded-xl shadow-lg border-2 border-orange-100">
              <img src="https://i.imgur.com/P4G3s0w.png" alt="Bioaqua V7" className="w-full h-auto block" />
              <div className="absolute bottom-4 left-4 bg-orange-600 text-white px-4 py-2 rounded-full font-black text-[14px] animate-pulse shadow-2xl border-2 border-white uppercase">
                OFERTA EXCLUSIVA ✨
              </div>
            </div>
          </div>
          
          <div className="p-5 text-center space-y-4">
            <div className="flex justify-center items-center gap-2">
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map(i => <Star key={i} className="h-6 w-6 fill-orange-500 text-orange-500" />)}
              </div>
              <span className="text-[12px] font-black text-slate-400 uppercase tracking-widest">(+2,400 CLIENTAS)</span>
            </div>
            
            <h1 className="text-4xl font-black text-slate-900 uppercase leading-none tracking-tighter">
              CREMA V7 <span className="text-orange-600 italic">BIOAQUA</span>
            </h1>

            <div className="bg-orange-50 py-4 rounded-2xl border border-orange-100 px-4">
              <p className="text-[16px] font-black text-orange-700 uppercase leading-tight">
                7 Vitaminas • Aclarante • Efecto Porcelana
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-4">
              <img src="https://i.imgur.com/RAj8Ar4.png" className="rounded-2xl shadow-lg border-2 border-slate-100 aspect-square object-cover" onClick={openPopup} />
              <img src="https://i.imgur.com/zv8hWi4.png" className="rounded-2xl shadow-lg border-2 border-slate-100 aspect-square object-cover" onClick={openPopup} />
            </div>

            <div className="bg-slate-900 p-8 rounded-[2.5rem] border-b-4 border-orange-500 shadow-xl mt-8">
              <h4 className="text-[20px] font-black text-orange-500 text-center uppercase mb-6">🩷 BENEFICIOS 💙</h4>
              <ul className="space-y-4 text-left">
                {["Hidratación profunda", "Nutre y revitaliza", "Aporta elasticidad", "Regula la grasa"].map((b, idx) => (
                  <li key={idx} className="flex items-center gap-4">
                    <div className="h-8 w-8 rounded-full bg-orange-500 text-white flex items-center justify-center text-[14px] font-black shrink-0">{idx + 1}</div>
                    <span className="text-[16px] font-black text-white uppercase">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-3 px-1 mt-8">
              <div onClick={openPopup} className="bg-white p-5 rounded-[2rem] border-2 border-slate-100 shadow-xl text-center space-y-2 cursor-pointer transition-transform active:scale-95">
                <p className="text-[16px] font-black text-slate-900 uppercase">1 Crema V7</p>
                <p className="text-[34px] font-black text-slate-900">$16</p>
                <p className="text-[12px] font-bold text-slate-400 uppercase italic">Efecto Aclarante</p>
              </div>

              <div onClick={openPopup} className="bg-orange-50 p-5 rounded-[2rem] border-2 border-orange-500 shadow-xl text-center space-y-2 cursor-pointer transition-transform active:scale-95">
                <p className="text-[16px] font-black text-orange-700 uppercase">2 Cremas V7</p>
                <p className="text-[34px] font-black text-orange-600">$26</p>
                <p className="text-[12px] font-black text-orange-600 uppercase italic">+ REGALO GRATIS</p>
              </div>
            </div>

            <Button onClick={openPopup} size="lg" className="w-full h-20 text-2xl font-black bg-orange-600 hover:bg-orange-700 text-white shadow-xl rounded-2xl animate-heartbeat border-2 border-white uppercase mt-4">
              <ShoppingCart className="h-7 w-7 mr-3" />
              ¡ORDENAR AHORA!
            </Button>
          </div>
        </section>

        <Testimonials title="CLIENTAS FELICES" items={BIOAQUA_TESTIMONIALS} />
      </main>

      <div className="sticky-cta px-4">
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
