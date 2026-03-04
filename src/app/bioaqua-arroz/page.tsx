"use client";

import { useState } from "react";
import { TopMarquee } from "@/components/layout/TopMarquee";
import { Testimonials, type TestimonialItem } from "@/components/sections/Testimonials";
import { PurchasePopup, type Product } from "@/components/sections/PurchasePopup";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/toaster";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star, Heart, Zap, ShieldCheck, Gift, Trophy } from "lucide-react";
import Image from "next/image";

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

const GIFTS = [
  {
    name: "1 Contorno De Ojos Bioaqua Hyalooligo Aci",
    desc: "Hidratación y firmeza profunda",
    img: "https://i.imgur.com/15gxrJI.png",
    tag: "NUEVO",
  },
  {
    name: "1 Jabon Liquido De Arroz Bioaqua",
    desc: "Hidratación y brillo natural",
    img: "https://i.imgur.com/k2LgSRh.png",
    tag: "MÁS PEDIDO",
  },
  {
    name: "1 Serum De Pestanas Bioaqua",
    desc: "Crecimiento y nutrición intensa",
    img: "https://i.imgur.com/NdEF1tQ.png",
    tag: "OFERTA",
  },
];

export default function BioaquaRicePage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const openPopup = () => setIsPopupOpen(true);

  const bannerTopImg = "https://i.imgur.com/tHUWnzw.png";
  const infoImg = "https://i.imgur.com/ICjJPPO.png";
  const trustBadgeImg = "https://i.imgur.com/bk1DAl0.png";

  const promoMessage = "🌾 ¡OFERTA LANZAMIENTO KIT DE ARROZ! 🌾 - ✨ HIDRATACIÓN PROFUNDA Y PIEL DE PORCELANA - 📦 ENVÍOS A TODO ECUADOR - ";

  return (
    <div className="min-h-screen flex flex-col bg-white pb-10 font-body overflow-x-hidden w-full max-w-[500px] mx-auto shadow-2xl relative border-x border-amber-100/50">
      <TopMarquee text={promoMessage} className="bg-amber-600 text-white border-amber-500" />

      <main className="flex-1 w-full overflow-x-hidden">
        {/* Banner Principal */}
        <section className="bg-white overflow-hidden w-full">
          <div className="px-[5px] pt-[5px] cursor-pointer" onClick={openPopup}>
            <div className="relative w-full overflow-hidden rounded-xl shadow-lg border-2 border-amber-100">
              <img src={bannerTopImg} alt="Bioaqua Kit de Arroz 6 Piezas" className="w-full h-auto block" />
              <div className="absolute bottom-4 left-4 bg-amber-600 text-white px-4 py-2 rounded-full font-black text-[14px] animate-pulse shadow-2xl border-2 border-white uppercase tracking-tighter">
                NUEVO LANZAMIENTO 🌾
              </div>
            </div>
          </div>

          <div className="p-5 text-center space-y-4">
            <div className="flex justify-center items-center gap-2">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-6 w-6 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <span className="text-[12px] font-black text-slate-400 uppercase tracking-widest">
                (+1,200 CLIENTAS FELICES)
              </span>
            </div>

            <div className="space-y-2">
              <p className="text-[16px] font-black text-amber-600 uppercase tracking-[0.2em] flex items-center justify-center gap-2">
                <Heart className="h-4 w-4 fill-amber-600" />
                Tu Piel, Tu Mejor Versión
                <Heart className="h-4 w-4 fill-amber-600" />
              </p>
              <h1 className="text-4xl font-black text-slate-900 uppercase leading-none tracking-tighter">
                KIT DE ARROZ <span className="text-amber-600 italic">BIOAQUA</span>
              </h1>
            </div>

            <div className="bg-amber-50 py-4 rounded-2xl border border-amber-100 px-4">
              <p className="text-[16px] font-black text-amber-700 uppercase tracking-[0.15em] leading-tight">
                6 Pasos • Hidratación • Poros Invisibles
              </p>
            </div>

            <div className="mt-8 text-left space-y-6">
              <h3 className="text-[22px] font-black text-slate-900 text-center uppercase leading-tight tracking-tight px-4">
                🌾 PIEL RADIANTE CON <br />
                <span className="text-amber-600 underline decoration-amber-200 decoration-4 underline-offset-4">
                  RICE RAW PULP
                </span>{" "}
                🌾
              </h3>

              <div className="space-y-4 text-[16px] text-slate-600 font-medium leading-relaxed">
                <p>
                  Descubre el poder del extracto de arroz puro. Este kit completo de 6 piezas está diseñado para
                  transformar tu piel, devolviéndole su brillo natural y suavidad de porcelana.
                </p>
                <p>
                  Incluye: Limpiador, Tónico, Loción, Serum, Crema Facial y Crema de Ojos. Una rutina completa en un solo
                  set.
                </p>
              </div>

              {/* TARJETA DE BENEFICIOS */}
              <div className="bg-slate-900 p-8 rounded-[2.5rem] border-b-4 border-amber-500 shadow-xl relative">
                <h4 className="text-[20px] font-black text-amber-500 text-center uppercase mb-6 tracking-widest">
                  🌾 BENEFICIOS 🌾
                </h4>
                <ul className="grid grid-cols-1 gap-4">
                  {[
                    "Hidratación intensiva 24h",
                    "Minimiza poros abiertos",
                    "Aclara manchas gradualmente",
                    "Suaviza la textura de la piel",
                    "Controla el exceso de grasa",
                    "Nutrición profunda con arroz",
                    "Efecto rejuvenecedor natural",
                  ].map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-4">
                      <div className="h-8 w-8 rounded-full bg-amber-500 text-white flex items-center justify-center text-[14px] font-black shrink-0 shadow-lg">
                        {idx + 1}
                      </div>
                      <span className="text-[16px] font-black text-white uppercase leading-tight tracking-tight">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Imagen Informativa Centrada */}
              <div className="mt-8 px-1 flex justify-center cursor-pointer" onClick={openPopup}>
                <div className="relative w-full max-w-[460px] overflow-hidden rounded-2xl shadow-xl border-2 border-slate-100 bg-slate-50">
                  <img src={infoImg} alt="Información Adicional Bioaqua Arroz" className="w-full h-auto block" />
                </div>
              </div>

              <section className="py-6 space-y-8">
                <div className="space-y-2">
                  <h3 className="text-[24px] font-black text-slate-900 text-center uppercase leading-tight tracking-tight">
                    💎 ELIGE TU <span className="text-amber-600">PROMOCIÓN</span> 💎
                  </h3>
                  <p className="text-[12px] font-black text-slate-400 text-center uppercase tracking-widest">
                    ⚠️ STOCK LIMITADO 🇪🇨
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 px-1">
                  <div
                    onClick={openPopup}
                    className="bg-white p-5 rounded-[2rem] border-2 border-slate-100 shadow-xl flex flex-col items-center text-center space-y-4 relative overflow-hidden cursor-pointer transition-transform active:scale-95"
                  >
                    <div className="bg-slate-100 text-slate-500 text-[10px] font-black px-3 py-1.5 rounded-full uppercase absolute top-4">
                      BÁSICO
                    </div>
                    <div className="pt-8 space-y-2">
                      <p className="text-[14px] font-black text-slate-900 uppercase leading-none">1 Kit (6 piezas)</p>
                      <p className="text-[34px] font-black text-slate-900 leading-none">$28</p>
                      <div className="h-px w-8 bg-slate-200 mx-auto" />
                      <p className="text-[12px] font-bold text-slate-400 uppercase leading-tight italic">Envío Gratis</p>
                    </div>
                  </div>

                  <div
                    onClick={openPopup}
                    className="bg-amber-50 p-5 rounded-[2rem] border-2 border-amber-500 shadow-xl flex flex-col items-center text-center space-y-4 relative overflow-hidden cursor-pointer transition-transform active:scale-95"
                  >
                    <div className="bg-amber-600 text-white text-[10px] font-black px-3 py-1.5 rounded-full uppercase absolute top-4 animate-pulse">
                      AHORRO PRO
                    </div>
                    <div className="pt-8 space-y-2">
                      <p className="text-[14px] font-black text-amber-700 uppercase leading-none">2 Kits (12 piezas)</p>
                      <p className="text-[34px] font-black text-amber-600 leading-none">$48</p>
                      <div className="h-px w-8 bg-amber-200 mx-auto" />
                      <p className="text-[12px] font-black text-amber-600 uppercase leading-tight italic">
                        + REGALO GRATIS
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-slate-50 p-6 rounded-2xl border-2 border-dashed border-slate-200 text-center relative overflow-hidden">
                    <div className="absolute -top-3 -left-3 bg-amber-600 p-2 rounded-full text-white shadow-lg">
                      <Trophy className="h-4 w-4" />
                    </div>
                    <p className="text-[16px] font-black text-slate-700 uppercase tracking-tight leading-relaxed">
                      🔥 <span className="text-amber-600 italic">OFERTA EXTRA:</span> Agrega cualquier producto de
                      regalo adicional a tu pedido por solo <br />
                      <span className="text-[20px] text-amber-600 underline decoration-amber-200 decoration-4 underline-offset-4">
                        +$8 DÓLARES C/U
                      </span>
                    </p>
                    <Button
                      onClick={openPopup}
                      size="sm"
                      className="mt-4 bg-amber-600 hover:bg-amber-700 text-white font-black uppercase text-[12px]"
                    >
                      ¡AGREGAR AL PEDIDO!
                    </Button>
                  </div>

                  <Button
                    onClick={openPopup}
                    size="lg"
                    className="w-full h-20 text-2xl font-black bg-amber-600 hover:bg-amber-700 shadow-xl rounded-2xl animate-heartbeat border-2 border-white uppercase"
                  >
                    <ShoppingCart className="h-7 w-7 mr-3" />
                    ¡ORDENAR AHORA!
                  </Button>
                </div>
              </section>
            </div>
          </div>
        </section>

        {/* Urgencia */}
        <div className="mx-4 bg-slate-900 p-6 rounded-2xl flex items-center gap-4 shadow-lg border-b-4 border-amber-600">
          <Zap className="h-8 w-8 text-amber-500 animate-pulse shrink-0" />
          <p className="text-[16px] font-black text-white uppercase leading-tight tracking-wide">
            ¡LANZAMIENTO LIMITADO! <br />
            <span className="text-amber-500">Solo 50 kits disponibles</span>
          </p>
        </div>

        {/* SECCIÓN DE REGALOS */}
        <section className="py-10 bg-[#fffdf5] mt-8 border-y border-amber-100 w-full overflow-hidden">
          <div className="container px-4 text-center space-y-8">
            <div className="space-y-3">
              <div className="flex justify-center mb-3">
                <div className="bg-amber-100 p-4 rounded-full">
                  <Gift className="h-10 w-10 text-amber-600" />
                </div>
              </div>
              <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter leading-none">
                🎁 REGALO EXTRA <br />
                <span className="text-amber-600 italic">CON TU PACK DE 2</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {GIFTS.map((gift, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-5 shadow-md border border-amber-50 flex items-center gap-5 relative overflow-hidden pointer-events-none"
                >
                  <div className="h-24 w-24 rounded-xl overflow-hidden bg-slate-50 border border-amber-50 shrink-0 relative">
                    <Image src={gift.img} alt={gift.name} fill className="object-cover" unoptimized />
                  </div>
                  <div className="text-left flex-1 min-w-0 pr-8">
                    <p className="text-[17px] font-black text-slate-900 uppercase leading-tight">{gift.name}</p>
                    <p className="text-[14px] font-bold text-amber-400 mt-1 uppercase tracking-tight">{gift.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Testimonials title="CLIENTAS FELICES" items={RICE_TESTIMONIALS} />

        {/* Garantías */}
        <section className="py-10 bg-white w-full overflow-hidden text-center space-y-10">
          <div className="container px-4">
            <div className="grid grid-cols-2 gap-5 mb-10">
              <div className="p-6 bg-slate-50 rounded-[2rem] border border-slate-100 flex flex-col items-center gap-4 shadow-sm">
                <ShieldCheck className="h-12 w-12 text-amber-600" />
                <p className="text-[15px] font-black uppercase text-slate-800 tracking-tighter">100% Original</p>
              </div>
              <div className="p-6 bg-slate-50 rounded-[2rem] border border-slate-100 flex flex-col items-center gap-4 shadow-sm">
                <ShoppingCart className="h-12 w-12 text-amber-600" />
                <p className="text-[15px] font-black uppercase text-slate-800 tracking-tighter">Pagas al Recibir</p>
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter leading-none">
                ¿LISTA PARA TU <br />
                <span className="text-amber-600 italic underline decoration-amber-200 underline-offset-8">
                  RUTINA DE LUJO?
                </span>
              </h2>
              <Button
                onClick={openPopup}
                size="lg"
                className="w-full h-24 text-2xl font-black bg-amber-600 hover:bg-amber-700 shadow-xl rounded-2xl animate-heartbeat border-4 border-white"
              >
                <ShoppingCart className="h-8 w-8 mr-3" />
                ¡ORDENAR AHORA!
              </Button>
              <div className="space-y-6">
                <p className="text-[16px] font-bold text-slate-400 uppercase tracking-widest">
                  Envíos seguros a todo Ecuador 🇪🇨
                </p>
                <div className="flex justify-center">
                  <img src={trustBadgeImg} alt="Sellos de confianza Ecuador" className="w-[280px] h-auto opacity-90" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <div className="sticky-cta px-4 mb-2">
        <Button
          onClick={openPopup}
          size="lg"
          className="w-full h-20 text-xl font-black bg-amber-600 hover:bg-amber-700 shadow-2xl rounded-2xl animate-heartbeat border-2 border-white"
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
