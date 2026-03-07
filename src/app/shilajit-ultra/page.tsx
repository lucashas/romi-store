
"use client";

import { useState } from "react";
import Image from "next/image";
import { TopMarquee } from "@/components/layout/TopMarquee";
import { PurchasePopup, type Product } from "@/components/sections/PurchasePopup";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/toaster";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Flame, ShieldCheck, CheckCircle2, Smartphone, Star } from "lucide-react";

const SHILAJIT_PRODUCTS: Product[] = [
  {
    id: "shilajit_ultra_1",
    name: "1 Frasco de Shilajit Ultra (30g)",
    price: 27.99,
    image: "https://i.imgur.com/S1VGamv.png",
    badge: "ENERGÍA MENSUAL",
    description: "Resina Pura • 84+ Minerales",
  },
  {
    id: "shilajit_ultra_3",
    name: "Lleva 3 al precio de 2 (90g)",
    price: 44.99,
    image: "https://i.imgur.com/S1VGamv.png",
    badge: "¡MÁS RECOMENDADO!",
    description: "Vitalidad Total para 3 Meses • Envío Gratis",
  },
];

const TESTIMONIALS_DATA = [
  {
    name: "Carlos R.",
    city: "Guayaquil",
    date: "Enero 2027",
    image: "https://picsum.photos/seed/sh-man-1/200/200",
    imageHint: "illustration man",
    quote: "“¡La firmeza que recuperé es increíble! Llevaba unos meses notando que mis erecciones no eran del 100%. Probé este Shilajit por la Arginina y vaya cambio. A la segunda semana ya me despertaba con una firmeza que no sentía hace años. Mi esposa está encantada.”"
  },
  {
    name: "Andrés A.",
    city: "Quito",
    date: "Febrero 2027",
    image: "https://picsum.photos/seed/sh-man-2/200/200",
    imageHint: "illustration athletic",
    quote: "“Energía brutal para el día y la noche. Lo compré para el gimnasio, pero el beneficio sexual fue el verdadero premio. Llego del trabajo con ganas y aguanto mucho más en la cama. Se nota que te sube la testosterona de verdad.”"
  },
  {
    name: "Lucas F.",
    city: "Ambato",
    date: "Marzo 2027",
    image: "https://picsum.photos/seed/sh-man-3/200/200",
    imageHint: "illustration mature",
    quote: "“Volví a sentirme de 25 años. Tengo 48 años y mi líbido estaba por los suelos. Flynew me devolvió el impulso. Me siento más 'macho', con más confianza y siempre listo. Recomendado al 100%.”"
  }
];

export default function ShilajitUltraPage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const openPopup = () => setIsPopupOpen(true);

  return (
    <>
      {/* DESKTOP NOTICE - Solo visible en pantallas >= 768px */}
      <div className="hidden md:flex min-h-screen bg-black items-center justify-center p-8 text-center flex-col gap-6">
        <div className="h-24 w-24 bg-[#DAA520]/20 rounded-full flex items-center justify-center text-[#DAA520] border-2 border-[#DAA520]/30">
          < Smartphone className="h-12 w-12" />
        </div>
        <h1 className="text-[38px] font-black text-white uppercase tracking-tighter">
          CONTENIDO EXCLUSIVO <br /> <span className="text-[#DAA520]">PARA MÓVILES</span>
        </h1>
        <p className="text-slate-400 max-w-md font-medium leading-relaxed">
          Esta oferta está optimizada para smartphones. Por favor, ingresa desde tu celular para obtener el descuento de Shilajit Ultra.
        </p>
      </div>

      {/* MOBILE CONTENT - Solo visible en smartphones */}
      <div className="md:hidden min-h-screen flex flex-col bg-black pb-10 font-body overflow-x-hidden w-full max-w-[500px] mx-auto shadow-2xl relative border-x border-[#DAA520]/20 text-white">
        <TopMarquee 
          text="SHILAJIT ULTRA – ENERGÍA Y VITALIDAD NATURAL • " 
          className="bg-gradient-to-r from-black via-[#DAA520]/40 to-black text-white border-b border-[#DAA520]/30 py-4" 
        />

        <main className="flex-1 w-full">
          {/* HERO SECTION */}
          <section className="relative w-full overflow-hidden bg-black">
            <div className="w-full relative cursor-pointer" onClick={openPopup}>
              <Image 
                src="https://i.imgur.com/S1VGamv.png" 
                alt="Shilajit Ultra Hero" 
                width={600} 
                height={800} 
                className="w-full h-auto object-cover block" 
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
              <div className="absolute top-14 right-4 bg-[#DAA520] text-black px-4 py-1 rounded-full font-black text-[10px] uppercase tracking-widest shadow-xl animate-pulse z-20">
                ENVÍO GRATUITO 🇪🇨
              </div>
            </div>

            <div className="p-6 text-center space-y-6 relative z-10">
              <div className="space-y-3">
                <div className="flex justify-center items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Flame key={i} className="h-4 w-4 fill-[#DAA520] text-[#DAA520]" />
                  ))}
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">(+3.400 CLIENTES)</span>
                </div>
                <h1 className="text-[38px] font-black text-white uppercase leading-[0.85] tracking-tighter">
                  RECUPERA TU <br /><span className="text-[#DAA520] italic">POTENCIAL</span>
                </h1>
                <p className="text-[13px] font-black text-slate-300 uppercase tracking-widest leading-tight px-4">
                  Stock Limitado: Abastece tu Energía para 3 Meses.
                </p>
              </div>

              {/* IMAGEN DESTACADA ANTES DE BENEFICIOS */}
              <div className="w-full px-2 py-2" onClick={openPopup}>
                <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-[#DAA520]/20">
                  <Image 
                    src="https://i.imgur.com/ptwUqIZ.png" 
                    alt="Vitalidad Shilajit" 
                    width={500} 
                    height={400} 
                    className="w-full h-auto object-cover block"
                  />
                </div>
              </div>

              <section className="bg-zinc-900/60 rounded-[2.5rem] p-6 border border-[#DAA520]/20 space-y-5 text-left backdrop-blur-md shadow-2xl">
                <h3 className="text-[18px] font-black text-white uppercase tracking-tighter text-center">
                  VITALIDAD QUE <span className="text-[#DAA520]">NO SE DETIENE</span>
                </h3>
                
                <div className="space-y-4">
                  {[
                    { title: "MÁXIMO RENDIMIENTO", desc: "Recupera la fuerza de forma natural." },
                    { title: "ENERGÍA INAGOTABLE", desc: "Supera los días más exigentes sin fatiga." },
                    { title: "PURA POTENCIA", desc: "Resina del Himalaya con 84+ minerales." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <div className="h-6 w-6 rounded-full bg-[#DAA520]/20 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="h-4 w-4 text-[#DAA520]" />
                      </div>
                      <div className="space-y-0.5">
                        <p className="font-black text-white text-[14px] uppercase leading-none">{item.title}</p>
                        <p className="text-slate-400 text-[12px] font-medium leading-tight">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* TARJETA VISUAL DE CONFIANZA */}
              <div className="w-full py-2 cursor-pointer" onClick={openPopup}>
                <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-[#DAA520]/20 bg-zinc-900/40">
                  <Image 
                    src="https://i.imgur.com/vDe4Joa.png" 
                    alt="Confianza Shilajit" 
                    width={500} 
                    height={400} 
                    className="w-full h-auto object-cover block"
                  />
                </div>
              </div>

              {/* TARJETA VISUAL DE RESULTADOS */}
              <div className="w-full py-2 cursor-pointer" onClick={openPopup}>
                <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-[#DAA520]/20 bg-zinc-900/40">
                  <Image 
                    src="https://i.imgur.com/dWq39By.png" 
                    alt="Resultados Shilajit" 
                    width={500} 
                    height={400} 
                    className="w-full h-auto object-cover block"
                  />
                </div>
              </div>

              {/* SECCIÓN DE PROMOCIONES */}
              <section className="py-2 w-full">
                <div className="space-y-4">
                  <h2 className="text-[26px] font-black text-white text-center uppercase tracking-tighter">
                    💎 ELIGE TU <span className="text-[#DAA520]">OFERTA</span> 💎
                  </h2>

                  <div className="grid grid-cols-1 gap-4">
                    <div onClick={openPopup} className="relative bg-zinc-900 p-6 pt-10 rounded-[2rem] border-2 border-zinc-800 shadow-xl text-center space-y-2 cursor-pointer transition-all active:scale-[0.97] overflow-hidden group hover:border-[#DAA520]/30">
                      <div className="absolute top-0 left-0 w-full bg-zinc-800 py-1">
                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">OFERTA BÁSICA</p>
                      </div>
                      <p className="text-[14px] font-black text-white uppercase leading-none">1 FRASCO SHILAJIT ULTRA</p>
                      <div className="flex justify-center items-baseline gap-2">
                        <span className="text-[14px] font-bold text-slate-600 line-through mb-1">$40.00</span>
                        <p className="text-[42px] font-black text-white leading-none">$27.99</p>
                      </div>
                    </div>

                    <div onClick={openPopup} className="relative bg-zinc-900/90 p-6 pt-10 rounded-[2.5rem] border-4 border-[#DAA520] shadow-2xl text-center space-y-2 cursor-pointer transition-all active:scale-[0.97] overflow-hidden group">
                      <div className="absolute top-0 left-0 w-full bg-[#DAA520] py-1">
                        <p className="text-[9px] font-black text-black uppercase tracking-widest">¡OFERTA MÁS VENDIDA!</p>
                      </div>
                      <p className="text-[17px] font-black text-[#DAA520] uppercase leading-none">LLEVA 3 AL PRECIO DE 2</p>
                      <div className="flex justify-center items-baseline gap-2">
                        <span className="text-[14px] font-bold text-[#DAA520]/30 line-through mb-1">$84.97</span>
                        <p className="text-[48px] font-black text-white leading-none">$44.99</p>
                      </div>
                      <p className="text-[11px] font-black text-[#DAA520] uppercase italic tracking-tighter">Recibes el 3ero TOTALMENTE GRATIS</p>
                    </div>
                  </div>

                  <div className="py-2">
                    <Button 
                      onClick={openPopup} 
                      className="w-full h-20 text-2xl font-black bg-[#DAA520] text-black shadow-[0_0_30px_rgba(218,165,32,0.4)] rounded-3xl animate-heartbeat border-2 border-black uppercase transition-all active:scale-95"
                    >
                      <ShoppingCart className="h-7 w-7 mr-3" />
                      ¡PEDIR AHORA!
                    </Button>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em] mt-2 flex items-center justify-center gap-2">
                      <ShieldCheck className="h-4 w-4" />
                      Pago Seguro Contra Entrega
                    </p>
                  </div>
                </div>
              </section>

              {/* Imagen de Beneficios Adicional */}
              <div className="w-full py-1 cursor-pointer" onClick={openPopup}>
                <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-[#DAA520]/10 bg-zinc-900/40">
                  <Image 
                    src="https://i.imgur.com/cwYEkAt.png" 
                    alt="Beneficios Shilajit Ultra" 
                    width={500} 
                    height={600} 
                    className="w-full h-auto object-contain block"
                  />
                </div>
              </div>

              {/* TARJETA VISUAL DE POTENCIA MASCULINA */}
              <div className="w-full py-1 cursor-pointer" onClick={openPopup}>
                <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-[#DAA520]/20 bg-zinc-900/40">
                  <Image 
                    src="https://i.imgur.com/UKBZSjL.png" 
                    alt="Fuerza Masculina Shilajit" 
                    width={500} 
                    height={400} 
                    className="w-full h-auto object-cover block"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* SECCIÓN DE TESTIMONIOS CON AVATARES CIRCULARES */}
          <section id="testimonios" className="pt-12 pb-4 bg-black overflow-hidden border-t border-[#DAA520]/20">
            <div className="px-6 space-y-10">
              <div className="text-center space-y-3">
                <div className="flex justify-center gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="h-5 w-5 fill-[#DAA520] text-[#DAA520]" />
                  ))}
                </div>
                <div className="space-y-1">
                  <h2 className="text-3xl font-black uppercase tracking-tighter leading-none text-white">
                    RESULTADOS REALES
                  </h2>
                  <p className="text-[14px] font-black uppercase tracking-widest text-[#DAA520]">
                    Hombres imparables cada día
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                {TESTIMONIALS_DATA.map((testi, idx) => (
                  <div key={idx} className="bg-zinc-900/50 p-5 rounded-[2rem] border border-[#DAA520]/10 flex gap-4 items-start shadow-xl">
                    <div className="relative w-20 h-20 shrink-0 rounded-full overflow-hidden border-2 border-[#DAA520]/30 shadow-lg bg-zinc-800">
                      <Image 
                        src={testi.image} 
                        alt={testi.name} 
                        fill 
                        className="object-cover" 
                        sizes="80px" 
                        data-ai-hint={testi.imageHint}
                      />
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex justify-between items-start">
                        <div className="min-w-0">
                          <p className="font-black text-white uppercase text-md leading-none truncate">{testi.name}</p>
                          <p className="text-[9px] font-bold text-[#DAA520] uppercase tracking-widest mt-1">{testi.city} – {testi.date}</p>
                        </div>
                        <div className="flex gap-0.5 shrink-0 ml-1">
                          {[1,2,3,4,5].map(s => <Star key={s} className="h-2.5 w-2.5 fill-[#DAA520] text-[#DAA520]" />)}
                        </div>
                      </div>
                      <p className="text-[13px] text-slate-300 font-medium leading-tight italic">
                        {testi.quote}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SECCIÓN GIF IMPACTO */}
          <section className="px-6 py-4 bg-black flex flex-col items-center text-center space-y-5">
            <div className="relative w-[120px] h-[120px] rounded-[2.5rem] overflow-hidden shadow-[0_0_25px_rgba(218,165,32,0.4)] border-2 border-[#DAA520]/40 bg-zinc-900">
              <img 
                src="https://i.imgur.com/AF9JlOo.gif" 
                alt="Impacto Vitalidad" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-2 px-2">
              <h3 className="text-[22px] font-black text-white uppercase tracking-tighter leading-none">
                ¡SIÉNTETE <span className="text-[#DAA520]">IMPARABLE!</span>
              </h3>
              <p className="text-[13px] text-slate-400 font-bold uppercase tracking-widest leading-tight max-w-[280px] mx-auto">
                MÁXIMA POTENCIA Y ENERGÍA <br /> EN CADA MOMENTO DEL DÍA.
              </p>
            </div>
          </section>

          <section className="py-10 text-center space-y-8 bg-black">
            <div className="grid grid-cols-2 gap-4 px-6">
              <div className="py-6 px-2 bg-zinc-900 rounded-[2rem] border border-zinc-800 flex flex-col items-center gap-3">
                <ShieldCheck className="h-8 w-8 text-[#DAA520]" />
                <p className="text-[10px] font-black uppercase text-white tracking-widest">100% Puro</p>
              </div>
              <div className="py-6 px-2 bg-zinc-900 rounded-[2rem] border border-zinc-800 flex flex-col items-center gap-3">
                <ShoppingCart className="h-8 w-8 text-[#DAA520]" />
                <p className="text-[10px] font-black uppercase text-white tracking-widest">Paga al Recibir</p>
              </div>
            </div>
            
            <div className="px-6">
              <Image 
                src="https://i.imgur.com/bk1DAl0.png" 
                alt="Sello Confianza Ecuador" 
                width={500} 
                height={100} 
                className="w-full h-auto rounded-2xl shadow-xl border-2 border-[#DAA520]/20" 
              />
            </div>
          </section>
        </main>

        <div className="sticky-cta px-6">
          <Button 
            onClick={openPopup} 
            className="w-full h-18 text-xl font-black bg-[#DAA520] text-black shadow-2xl rounded-2xl animate-heartbeat border-2 border-black uppercase"
          >
            <ShoppingCart className="h-6 w-6 mr-3" />
            ¡QUIERO MI SHILAJIT!
          </Button>
        </div>

        <PurchasePopup 
          open={isPopupOpen} 
          onOpenChange={setIsPopupOpen} 
          products={SHILAJIT_PRODUCTS} 
          themeColor="orange" 
          redirectPath="/gracias/shilajit-ultra"
          landingId="shilajit-ultra-v1"
        />
        <Footer theme="dark" />
        <Toaster />
      </div>
    </>
  );
}
