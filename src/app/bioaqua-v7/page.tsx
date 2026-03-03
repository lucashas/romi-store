
"use client";

import { useState } from "react";
import { TopMarquee } from "@/components/layout/TopMarquee";
import { Testimonials, type TestimonialItem } from "@/components/sections/Testimonials";
import { PurchasePopup, type Product } from "@/components/sections/PurchasePopup";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/toaster";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star, Sparkles, Heart, Zap, ShieldCheck, Gift, Trophy } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

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
    name: "1 Contorno De Ojos Bioaqua Hyalooligo Aci",
    desc: "Hidratación y firmeza profunda",
    img: "https://i.imgur.com/15gxrJI.png",
    tag: "NUEVO"
  },
  {
    name: "1 Jabon Liquido De Arroz Bioaqua",
    desc: "Hidratación y brillo natural",
    img: "https://i.imgur.com/k2LgSRh.png",
    tag: "MÁS PEDIDO"
  },
  {
    name: "1 Serum De Pestanas Bioaqua",
    desc: "Crecimiento y nutrición intensa",
    img: "https://i.imgur.com/NdEF1tQ.png",
    tag: "OFERTA"
  }
];

export default function BioaquaPage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const openPopup = () => setIsPopupOpen(true);

  const bannerTopImg = PlaceHolderImages.find(img => img.id === "bioaqua-banner-top")?.imageUrl || "https://i.imgur.com/P4G3s0w.png";
  const sideImg1 = PlaceHolderImages.find(img => img.id === "bioaqua-benefit-side-1")?.imageUrl || "https://i.imgur.com/RAj8Ar4.png";
  const sideImg2 = PlaceHolderImages.find(img => img.id === "bioaqua-benefit-side-2")?.imageUrl || "https://i.imgur.com/zv8hWi4.png";
  const trustBadgeImg = PlaceHolderImages.find(img => img.id === "shipping-trust-badge")?.imageUrl || "https://i.imgur.com/bk1DAl0.png";

  const womenDayMessage = "🌸 ¡OFERTA ESPECIAL BELLEZA! 🌸 - ✨ REGÁLATE UNA PIEL DE PORCELANA HOY - 📦 PAGO CONTRA ENTREGA EN TODO ECUADOR - ";

  return (
    <div className="min-h-screen flex flex-col bg-white pb-10 font-body overflow-x-hidden w-full max-w-[500px] mx-auto shadow-2xl relative">
      <TopMarquee 
        text={womenDayMessage} 
        className="bg-orange-600 text-white border-orange-500" 
      />
      
      <main className="flex-1 w-full overflow-x-hidden">
        {/* Banner de Impacto Inmediato */}
        <section className="bg-white overflow-hidden w-full">
          <div className="px-[5px] pt-[5px] cursor-pointer" onClick={openPopup}>
            <div className="relative w-full overflow-hidden rounded-xl shadow-lg border-2 border-orange-100">
              <img 
                src={bannerTopImg} 
                alt="Bioaqua V7 Crema 7 Vitaminas"
                className="w-full h-auto block"
              />
              <div className="absolute bottom-4 left-4 bg-orange-600 text-white px-4 py-2 rounded-full font-black text-[14px] animate-pulse shadow-2xl border-2 border-white uppercase tracking-tighter">
                OFERTA EXCLUSIVA ✨
              </div>
            </div>
          </div>
          
          <div className="p-5 text-center space-y-4">
            <div className="flex justify-center items-center gap-2">
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map(i => <Star key={i} className="h-6 w-6 fill-orange-500 text-orange-500" />)}
              </div>
              <span className="text-[12px] font-black text-slate-400 uppercase tracking-widest">(+2,400 CLIENTAS FELICES)</span>
            </div>
            
            <div className="space-y-2">
              <p className="text-[16px] font-black text-orange-600 uppercase tracking-[0.2em] flex items-center justify-center gap-2">
                <Heart className="h-4 w-4 fill-orange-600" />
                Tu Piel, Tu Mejor Versión
                <Heart className="h-4 w-4 fill-orange-600" />
              </p>
              <h1 className="text-4xl font-black text-slate-900 uppercase leading-none tracking-tighter">
                CREMA V7 <span className="text-orange-600 italic">BIOAQUA</span>
              </h1>
            </div>

            <div className="bg-orange-50 py-4 rounded-2xl border border-orange-100 px-4">
              <p className="text-[16px] font-black text-orange-700 uppercase tracking-[0.15em] leading-tight">
                7 Vitaminas • Aclarante • Efecto Porcelana
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-4">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border-2 border-slate-100 bg-slate-50 aspect-square cursor-pointer" onClick={openPopup}>
                <img 
                  src={sideImg1} 
                  alt="Bioaqua Beneficios 1" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-lg border-2 border-slate-100 bg-slate-50 aspect-square cursor-pointer" onClick={openPopup}>
                <img 
                  src={sideImg2} 
                  alt="Bioaqua Beneficios 2" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="mt-8 text-left space-y-6">
              <h3 className="text-[22px] font-black text-slate-900 text-center uppercase leading-tight tracking-tight px-4">
                💙🩷 CREMA VEGANA <br /><span className="text-orange-600 underline decoration-orange-200 decoration-4 underline-offset-4">7 BENEFICIOS</span> 💙🩷
              </h3>
              
              <div className="space-y-4 text-[16px] text-slate-600 font-medium leading-relaxed">
                <p>
                  La Crema Hidratante 7 Vegana Ácido Hialurónico de Bioaqua es un producto de cuidado de la piel diseñado para hidratar y mejorar la apariencia de la piel.
                </p>
                <p>
                  La crema hidratante está formulada con una mezcla de ingredientes naturales y veganos, como el ácido hialurónico, la manteca de karité, el aceite de jojoba, el aceite de almendras y la vitamina E.
                </p>
              </div>

              {/* TARJETA DE BENEFICIOS OSCURA */}
              <div className="bg-slate-900 p-8 rounded-[2.5rem] border-b-4 border-orange-500 shadow-xl relative">
                <h4 className="text-[20px] font-black text-orange-500 text-center uppercase mb-6 tracking-widest">
                  🩷 BENEFICIOS 💙
                </h4>
                <ul className="grid grid-cols-1 gap-4">
                  {[
                    "Hidratación profunda",
                    "Nutre y revitaliza",
                    "Brinda Suavidad y tersura",
                    "Aporta elasticidad y firmeza",
                    "Combate los radicales libres",
                    "Ayuda a reponer la humedad",
                    "Regula la producción de grasa"
                  ].map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-4">
                      <div className="h-8 w-8 rounded-full bg-orange-500 text-white flex items-center justify-center text-[14px] font-black shrink-0 shadow-lg">
                        {idx + 1}
                      </div>
                      <span className="text-[16px] font-black text-white uppercase leading-tight tracking-tight">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-white/10 space-y-3">
                  <h4 className="text-[18px] font-black text-orange-500 uppercase tracking-tight">¿Cómo usarla?</h4>
                  <p className="text-[16px] text-white/80 font-medium leading-relaxed italic border-l-4 border-orange-500 pl-4">
                    Se puede aplicar en el rostro y cuello tanto de día como de noche sobre la piel limpia.
                  </p>
                </div>
              </div>

              {/* IMAGEN ESTRATÉGICA FORZADA - DEBAJO DE BENEFICIOS */}
              <div className="mt-8 px-1 flex justify-center cursor-pointer" onClick={openPopup}>
                <div className="relative w-full max-w-[460px] overflow-hidden rounded-2xl shadow-xl border-2 border-slate-100 bg-slate-50">
                  <img 
                    src="https://i.imgur.com/ICjJPPO.png" 
                    alt="Información Adicional Bioaqua V7" 
                    className="w-full h-auto block"
                  />
                </div>
              </div>

              <section className="py-6 space-y-8">
                <div className="space-y-2">
                  <h3 className="text-[24px] font-black text-slate-900 text-center uppercase leading-tight tracking-tight">
                    💎 ELIGE TU <span className="text-orange-600">PROMOCIÓN</span> 💎
                  </h3>
                  <p className="text-[12px] font-black text-slate-400 text-center uppercase tracking-widest">⚠️ STOCK LIMITADO 🇪🇨</p>
                </div>
                
                <div className="grid grid-cols-2 gap-3 px-1">
                  <div 
                    onClick={openPopup}
                    className="bg-white p-5 rounded-[2rem] border-2 border-slate-100 shadow-xl flex flex-col items-center text-center space-y-4 relative overflow-hidden cursor-pointer transition-transform active:scale-95"
                  >
                    <div className="bg-slate-100 text-slate-500 text-[10px] font-black px-3 py-1.5 rounded-full uppercase absolute top-4">BÁSICO</div>
                    <div className="pt-8 space-y-2">
                      <p className="text-[16px] font-black text-slate-900 uppercase leading-none">1 Crema V7</p>
                      <p className="text-[34px] font-black text-slate-900 leading-none">$16</p>
                      <div className="h-px w-8 bg-slate-200 mx-auto" />
                      <p className="text-[12px] font-bold text-slate-400 uppercase leading-tight italic">Efecto Aclarante</p>
                    </div>
                  </div>

                  <div 
                    onClick={openPopup}
                    className="bg-orange-50 p-5 rounded-[2rem] border-2 border-orange-500 shadow-xl flex flex-col items-center text-center space-y-4 relative overflow-hidden cursor-pointer transition-transform active:scale-95"
                  >
                    <div className="bg-orange-600 text-white text-[10px] font-black px-3 py-1.5 rounded-full uppercase absolute top-4 animate-pulse">RECOMENDADO</div>
                    <div className="pt-8 space-y-2">
                      <p className="text-[16px] font-black text-orange-700 uppercase leading-none">2 Cremas V7</p>
                      <p className="text-[34px] font-black text-orange-600 leading-none">$26</p>
                      <div className="h-px w-8 bg-orange-200 mx-auto" />
                      <p className="text-[12px] font-black text-orange-600 uppercase leading-tight italic">+ REGALO GRATIS</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-slate-50 p-6 rounded-2xl border-2 border-dashed border-slate-200 text-center relative overflow-hidden">
                    <div className="absolute -top-3 -left-3 bg-orange-600 p-2 rounded-full text-white shadow-lg">
                      <Trophy className="h-4 w-4" />
                    </div>
                    <p className="text-[16px] font-black text-slate-700 uppercase tracking-tight leading-relaxed">
                      🔥 <span className="text-orange-600 italic">OFERTA EXTRA:</span> Agrega cualquier producto de regalo adicional a tu pedido por solo <br />
                      <span className="text-[20px] text-orange-600 underline decoration-orange-200 decoration-4 underline-offset-4">+$8 DÓLARES C/U</span>
                    </p>
                  </div>
                  
                  <Button 
                    onClick={openPopup}
                    size="lg" 
                    className="w-full h-20 text-2xl font-black bg-orange-600 hover:bg-orange-700 shadow-xl rounded-2xl animate-heartbeat border-2 border-white uppercase"
                  >
                    <ShoppingCart className="h-7 w-7 mr-3" />
                    ¡ORDENAR AHORA!
                  </Button>
                </div>
              </section>
            </div>
          </div>
        </section>

        {/* Urgencia Banner */}
        <div className="mx-4 bg-slate-900 p-6 rounded-2xl flex items-center gap-4 shadow-lg border-b-4 border-orange-600">
          <Zap className="h-8 w-8 text-orange-500 animate-pulse shrink-0" />
          <p className="text-[16px] font-black text-white uppercase leading-tight tracking-wide">
            ¡STOCK LIMITADO! <br /><span className="text-orange-500">Pocas unidades en bodega</span>
          </p>
        </div>

        {/* SECCIÓN DE REGALOS */}
        <section className="py-10 bg-[#fff5f5] mt-8 border-y border-pink-100 w-full overflow-hidden">
          <div className="container px-4 text-center space-y-8">
            <div className="space-y-3">
              <div className="flex justify-center mb-3">
                <div className="bg-pink-100 p-4 rounded-full">
                  <Gift className="h-10 w-10 text-pink-600" />
                </div>
              </div>
              <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter leading-none">
                🎁 ELIGE TU <br /><span className="text-pink-600 italic">REGALO GRATIS</span>
              </h2>
              <p className="text-[16px] font-black text-pink-500 uppercase tracking-[0.2em]">
                ✨ SOLO EN TU PACK DE 2 ✨
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {GIFTS.map((gift, i) => (
                <div key={i} className="bg-white rounded-2xl p-5 shadow-md border border-pink-50 flex items-center gap-5 relative overflow-hidden pointer-events-none">
                  {gift.tag && (
                    <div className="absolute top-3 right-4 bg-pink-500 text-white text-[10px] font-black px-3 py-1.5 rounded-full uppercase">
                      {gift.tag}
                    </div>
                  )}
                  <div className="h-24 w-24 rounded-xl overflow-hidden bg-slate-50 border border-pink-50 shrink-0 relative">
                    <Image src={gift.img} alt={gift.name} fill className="object-cover" unoptimized />
                  </div>
                  <div className="text-left flex-1 min-w-0 pr-8">
                    <p className="text-[17px] font-black text-slate-900 uppercase leading-tight">{gift.name}</p>
                    <p className="text-[14px] font-bold text-pink-400 mt-1 uppercase tracking-tight">{gift.desc}</p>
                    <div className="mt-2 flex items-center gap-3">
                      <span className="text-[12px] text-slate-300 line-through">ANTES $20</span>
                      <span className="text-[16px] font-black text-green-600 uppercase">HOY GRATIS</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Beneficios Adicionales */}
        <section className="py-10 bg-white w-full overflow-hidden">
          <div className="container px-4 space-y-8">
            <h2 className="text-3xl font-black text-center text-slate-900 uppercase tracking-tighter leading-none">
              RESULTADOS <br /><span className="text-orange-600 underline decoration-orange-200 underline-offset-4">EN TU PIEL</span>
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {[
                { t: "ACLARA AL INSTANTE", d: "Tecnología V7 que unifica el tono desde la primera aplicación." },
                { t: "COCTEL DE VITAMINAS", d: "Enriquecida con Vitaminas A, B12, C, E, F y H." },
                { t: "CERO GRASA", d: "Textura ligera de rápida absorción para Ecuador." }
              ].map((b, i) => (
                <div key={i} className="flex gap-5 items-center p-5 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm transition-transform active:scale-95 cursor-pointer" onClick={openPopup}>
                  <div className="h-14 w-14 bg-white rounded-xl flex items-center justify-center shrink-0 shadow-md border border-orange-100 text-orange-600">
                    <Sparkles className="h-8 w-8" />
                  </div>
                  <div>
                    <p className="font-black text-[18px] text-slate-900 uppercase leading-tight">{b.t}</p>
                    <p className="text-[16px] text-slate-500 mt-1 font-medium leading-tight">{b.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Testimonials 
          title="CLIENTAS FELICES" 
          items={BIOAQUA_TESTIMONIALS} 
        />

        {/* Garantías */}
        <section className="py-10 bg-white w-full overflow-hidden">
          <div className="container px-4 text-center space-y-10">
            <div className="grid grid-cols-2 gap-5">
              <div className="p-6 bg-slate-50 rounded-[2rem] border border-slate-100 flex flex-col items-center gap-4 shadow-sm">
                <ShieldCheck className="h-12 w-12 text-orange-600" />
                <p className="text-[15px] font-black uppercase text-slate-800 tracking-tighter">100% Original</p>
              </div>
              <div className="p-6 bg-slate-50 rounded-[2rem] border border-slate-100 flex flex-col items-center gap-4 shadow-sm">
                <ShoppingCart className="h-12 w-12 text-orange-600" />
                <p className="text-[15px] font-black uppercase text-slate-800 tracking-tighter">Pagas al Recibir</p>
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter leading-none">
                ¿LISTA PARA TU <br /><span className="text-orange-600 italic underline decoration-orange-200 underline-offset-8">PIEL DE PORCELANA?</span>
              </h2>
              <Button 
                onClick={openPopup}
                size="lg" 
                className="w-full h-24 text-2xl font-black bg-orange-600 hover:bg-orange-700 shadow-xl rounded-2xl animate-heartbeat border-4 border-white"
              >
                <ShoppingCart className="h-8 w-8 mr-3" />
                ¡ORDENAR AHORA!
              </Button>
              <div className="space-y-6">
                <p className="text-[16px] font-bold text-slate-400 uppercase tracking-widest">Envíos seguros a todo Ecuador 🇪🇨</p>
                <div className="flex justify-center">
                  <img 
                    src="https://i.imgur.com/bk1DAl0.png" 
                    alt="Sellos de confianza Ecuador" 
                    className="w-full max-w-[300px] h-auto opacity-90"
                  />
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
          className="w-full h-20 text-xl font-black bg-orange-600 hover:bg-orange-700 shadow-2xl rounded-2xl animate-heartbeat border-2 border-white"
        >
          <ShoppingCart className="h-7 w-7 mr-3" />
          ¡COMPRAR AHORA!
        </Button>
      </div>

      <PurchasePopup 
        open={isPopupOpen} 
        onOpenChange={setIsPopupOpen} 
        products={BIOAQUA_PRODUCTS}
        themeColor="orange"
      />
      
      <Footer />
      <Toaster />
    </div>
  );
}
