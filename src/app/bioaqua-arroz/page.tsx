"use client";

import { useState } from "react";
import { TopMarquee } from "@/components/layout/TopMarquee";
import { Testimonials, type TestimonialItem } from "@/components/sections/Testimonials";
import { PurchasePopup, type Product } from "@/components/sections/PurchasePopup";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/toaster";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star, Zap, ShieldCheck, Trophy, Sparkles } from "lucide-react";

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

const RICE_TESTIMONIALS: TestimonialItem[] = [
  {
    name: "Mariana Vélez",
    city: "Guayaquil",
    role: "Piel Suave",
    quote: "Este kit de arroz es increíble. Mi cara se siente como seda y mis poros se han reducido muchísimo. ¡El empaque es hermoso!",
    imageId: "testimonial-user-1",
  },
  {
    name: "Isabel Torres",
    city: "Quito",
    role: "Adiós Brillo",
    quote: "Tengo piel mixta y este kit controla la grasa sin resecar. Lo uso todos los días y mi piel se ve mucho más clara.",
    imageId: "testimonial-user-2",
  },
  {
    name: "Camila Loor",
    city: "Portoviejo",
    role: "Rutina Perfecta",
    quote: "Me encanta que traiga los 6 pasos. Es súper fácil de usar y el aroma es muy sutil y rico. ¡Vale totalmente la pena!",
    imageId: "testimonial-user-4",
  },
];

export default function BioaquaRicePage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const openPopup = () => setIsPopupOpen(true);

  const bannerTopImg = "https://i.imgur.com/tHUWnzw.png";
  const benefitsImg = "https://i.imgur.com/HYiuNZy.png";
  const infoImg = "https://i.imgur.com/ICjJPPO.png";
  const promoMessage = "🌾 ¡OFERTA LANZAMIENTO KIT DE ARROZ! 🌾 - ✨ HIDRATACIÓN PROFUNDA Y PIEL DE PORCELANA - 📦 ENVÍOS A TODO ECUADOR - PAGAS AL RECIBIR - ";

  return (
    <div className="min-h-screen flex flex-col bg-white pb-10 font-body overflow-x-hidden w-full max-w-[500px] mx-auto shadow-2xl relative border-x border-yellow-100/30">
      <TopMarquee text={promoMessage} className="bg-yellow-600 text-white border-yellow-500" />

      <main className="flex-1 w-full overflow-x-hidden">
        {/* Banner Principal */}
        <section className="bg-white overflow-hidden w-full">
          <div className="px-[5px] pt-[5px] cursor-pointer" onClick={openPopup}>
            <div className="relative w-full overflow-hidden rounded-2xl shadow-xl border-2 border-yellow-100">
              <img src={bannerTopImg} alt="Bioaqua Kit de Arroz 6 Piezas" className="w-full h-auto block" />
              <div className="absolute bottom-4 left-4 bg-yellow-600 text-white px-5 py-2 rounded-full font-black text-[13px] animate-pulse shadow-2xl border-2 border-white uppercase tracking-tighter">
                EDICIÓN LIMITADA 🌾
              </div>
            </div>
          </div>

          <div className="p-6 text-center space-y-6">
            <div className="flex justify-center items-center gap-3">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-6 w-6 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest">
                (+1.200 VENTAS ESTE MES)
              </span>
            </div>

            <div className="space-y-3">
              <p className="text-[15px] font-black text-yellow-600 uppercase tracking-[0.2em] flex items-center justify-center gap-2">
                <Sparkles className="h-4 w-4 fill-yellow-600" />
                EFECTO PIEL DE PORCELANA
                <Sparkles className="h-4 w-4 fill-yellow-600" />
              </p>
              <h1 className="text-4xl font-black text-slate-900 uppercase leading-[0.9] tracking-tighter">
                KIT DE ARROZ <br /><span className="text-yellow-600 italic">BIOAQUA</span>
              </h1>
            </div>

            <div className="bg-yellow-50 py-4 rounded-3xl border border-yellow-200/50 px-6">
              <p className="text-[16px] font-black text-yellow-800 uppercase tracking-tight leading-tight">
                6 Pasos • Hidratación • Poros Invisibles
              </p>
            </div>

            <div className="mt-8 text-left space-y-8">
              <h3 className="text-[24px] font-black text-slate-900 text-center uppercase leading-tight tracking-tighter">
                Tu Secreto de <br />
                <span className="text-yellow-600 underline decoration-yellow-200 decoration-8 underline-offset-4 italic">
                  Belleza Asiática
                </span>
              </h3>

              <div className="space-y-4 text-[17px] text-slate-600 font-medium leading-relaxed px-2">
                <p className="text-center">
                  Descubre el poder del extracto de arroz puro. Este kit profesional de 6 pasos transforma tu piel desde la primera aplicación, devolviéndole su brillo natural y suavidad extrema.
                </p>
              </div>

              {/* Imagen de Beneficios Reemplazando la Tarjeta */}
              <div className="mt-8 px-1 flex justify-center cursor-pointer" onClick={openPopup}>
                <div className="relative w-full overflow-hidden rounded-[2.5rem] shadow-2xl border-4 border-yellow-100 bg-slate-50">
                  <img src={benefitsImg} alt="Beneficios Kit de Arroz" className="w-full h-auto block" />
                  <div className="absolute top-4 right-4 bg-yellow-600 text-white p-2 rounded-full shadow-lg">
                    <Zap className="h-5 w-5 fill-white" />
                  </div>
                </div>
              </div>

              {/* Imagen Informativa Secundaria */}
              <div className="mt-10 px-1 flex justify-center cursor-pointer" onClick={openPopup}>
                <div className="relative w-full overflow-hidden rounded-[2rem] shadow-2xl border-2 border-yellow-100 bg-slate-50">
                  <img src={infoImg} alt="Info Kit de Arroz" className="w-full h-auto block" />
                </div>
              </div>

              <section className="py-10 space-y-10">
                <div className="space-y-3">
                  <h3 className="text-[28px] font-black text-slate-900 text-center uppercase leading-none tracking-tighter">
                    💎 ELIGE TU <span className="text-yellow-600">PROMOCIÓN</span> 💎
                  </h3>
                  <p className="text-[13px] font-black text-yellow-600/60 text-center uppercase tracking-[0.3em]">
                    ⚠️ PAGO CONTRA ENTREGA 🇪🇨
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 px-1">
                  <div
                    onClick={openPopup}
                    className="bg-white p-6 rounded-[2.5rem] border-2 border-slate-100 shadow-xl flex flex-col items-center text-center space-y-5 relative overflow-hidden cursor-pointer transition-transform active:scale-95"
                  >
                    <div className="bg-slate-100 text-slate-500 text-[10px] font-black px-4 py-1.5 rounded-full uppercase absolute top-5">
                      BÁSICO
                    </div>
                    <div className="pt-8 space-y-3">
                      <p className="text-[14px] font-black text-slate-900 uppercase leading-none">1 Kit (6 piezas)</p>
                      <p className="text-[38px] font-black text-slate-900 leading-none tracking-tighter">$28</p>
                      <div className="h-px w-10 bg-slate-200 mx-auto" />
                      <p className="text-[12px] font-bold text-slate-400 uppercase leading-tight italic">Envío Gratis</p>
                    </div>
                  </div>

                  <div
                    onClick={openPopup}
                    className="bg-yellow-50 p-6 rounded-[2.5rem] border-2 border-yellow-500 shadow-xl flex flex-col items-center text-center space-y-5 relative overflow-hidden cursor-pointer transition-transform active:scale-95"
                  >
                    <div className="bg-yellow-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase absolute top-5 animate-pulse">
                      MÁS VENDIDO
                    </div>
                    <div className="pt-8 space-y-3">
                      <p className="text-[14px] font-black text-yellow-700 uppercase leading-none">2 Kits (12 piezas)</p>
                      <p className="text-[38px] font-black text-yellow-600 leading-none tracking-tighter">$48</p>
                      <div className="h-px w-10 bg-yellow-300 mx-auto" />
                      <p className="text-[12px] font-black text-yellow-600 uppercase leading-tight italic">
                        + REGALO GRATIS
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-yellow-50/50 p-8 rounded-3xl border-2 border-dashed border-yellow-400 text-center relative overflow-hidden">
                    <div className="absolute -top-3 -left-3 bg-yellow-600 p-2.5 rounded-full text-white shadow-lg">
                      <Trophy className="h-5 w-5" />
                    </div>
                    <p className="text-[17px] font-black text-slate-800 uppercase tracking-tight leading-relaxed">
                      🔥 <span className="text-yellow-600 italic">OFERTA EXTRA:</span> Agrega un producto adicional a tu pedido por solo <br />
                      <span className="text-[24px] text-yellow-600 underline decoration-yellow-300 decoration-4 underline-offset-4">
                        +$8 DÓLARES
                      </span>
                    </p>
                    <Button
                      onClick={openPopup}
                      size="sm"
                      className="mt-6 bg-yellow-600 hover:bg-yellow-700 text-white font-black uppercase text-[13px] px-8 rounded-full h-12 shadow-lg"
                    >
                      ¡AGREGAR AL PEDIDO!
                    </Button>
                  </div>

                  <Button
                    onClick={openPopup}
                    size="lg"
                    className="w-full h-24 text-2xl font-black bg-yellow-600 hover:bg-yellow-700 shadow-[0_10px_30px_rgba(202,138,4,0.4)] rounded-[2rem] animate-heartbeat border-4 border-white uppercase"
                  >
                    <ShoppingCart className="h-8 w-8 mr-3" />
                    ¡ORDENAR AHORA!
                  </Button>
                </div>
              </section>
            </div>
          </div>
        </section>

        {/* Urgencia */}
        <div className="mx-4 bg-slate-900 p-8 rounded-[2rem] flex items-center gap-5 shadow-2xl border-b-8 border-yellow-600">
          <Zap className="h-10 w-10 text-yellow-500 animate-pulse shrink-0" />
          <p className="text-[17px] font-black text-white uppercase leading-tight tracking-wide">
            ¡PROMOCIÓN LIMITADA! <br />
            <span className="text-yellow-500">Solo 50 kits disponibles hoy</span>
          </p>
        </div>

        <Testimonials title="CLIENTAS FELICES" items={RICE_TESTIMONIALS} />

        {/* Garantías */}
        <section className="py-14 bg-white w-full overflow-hidden text-center space-y-12">
          <div className="container px-4">
            <div className="grid grid-cols-2 gap-6 mb-12">
              <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 flex flex-col items-center gap-4 shadow-sm">
                <ShieldCheck className="h-14 w-14 text-yellow-600" />
                <p className="text-[16px] font-black uppercase text-slate-800 tracking-tighter">100% Original</p>
              </div>
              <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 flex flex-col items-center gap-4 shadow-sm">
                <ShoppingCart className="h-14 w-14 text-yellow-600" />
                <p className="text-[16px] font-black uppercase text-slate-800 tracking-tighter">Paga al Recibir</p>
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter leading-[0.9]">
                ¿LISTA PARA TU <br />
                <span className="text-yellow-600 italic underline decoration-yellow-200 underline-offset-[12px]">
                  RUTINA DE LUJO?
                </span>
              </h2>
              <Button
                onClick={openPopup}
                size="lg"
                className="w-full h-24 text-2xl font-black bg-yellow-600 hover:bg-yellow-700 shadow-2xl rounded-[2rem] animate-heartbeat border-4 border-white"
              >
                <ShoppingCart className="h-8 w-8 mr-3" />
                ¡ORDENAR AHORA!
              </Button>
            </div>
          </div>
        </section>
      </main>

      <div className="sticky-cta">
        <Button
          onClick={openPopup}
          size="lg"
          className="w-full h-20 text-xl font-black bg-yellow-600 hover:bg-yellow-700 shadow-[0_10px_30px_rgba(202,138,4,0.4)] rounded-2xl animate-heartbeat border-2 border-white"
        >
          <ShoppingCart className="h-7 w-7 mr-3" />
          ¡COMPRAR AHORA!
        </Button>
      </div>

      <PurchasePopup open={isPopupOpen} onOpenChange={setIsPopupOpen} products={RICE_PRODUCTS} themeColor="amber" />

      <Footer />
      <Toaster />
    </div>
  );
}