"use client";

import { useSearchParams } from "next/navigation";
import { CheckCircle2, Truck, Home, MessageCircle, ShieldCheck, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Suspense, useState, useEffect } from "react";
import Script from 'next/script';

function ShilajitGraciasContent() {
  const searchParams = useSearchParams();
  const [nombre, setNombre] = useState("Cliente");
  const [ciudad, setCiudad] = useState("Ecuador");
  const [provincia, setProvincia] = useState("");
  const [producto, setProducto] = useState("Shilajit Ultra");
  const [volverUrl, setVolverUrl] = useState("/shilajit-ultra");

  useEffect(() => {
    setNombre(searchParams.get("nombre") || "Cliente");
    setProvincia(searchParams.get("provincia") || "");
    setCiudad(searchParams.get("ciudad") || "Ecuador");
    setProducto(searchParams.get("producto") || "Shilajit Ultra");
    setVolverUrl(searchParams.get("back") || "/shilajit-ultra");
  }, [searchParams]);

  const ubicacionCompleta = provincia ? `${ciudad}, ${provincia}` : ciudad;
  const whatsappMessage = `Hola Romi Store EC, soy ${nombre}. Acabo de pedir ${producto} para ${ubicacionCompleta}. Confirmo mi pedido para envío inmediato.`;
  const whatsappUrl = `https://wa.me/593997740583?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <>
      {/* DESKTOP NOTICE */}
      <div className="hidden md:flex min-h-screen bg-black items-center justify-center p-8 text-center flex-col gap-6">
        <div className="h-24 w-24 bg-[#DAA520]/20 rounded-full flex items-center justify-center text-[#DAA520] border-2 border-[#DAA520]/30">
          <Smartphone className="h-12 w-12" />
        </div>
        <h1 className="text-3xl font-black text-white uppercase tracking-tighter">
          SOLO DISPONIBLE <br /> <span className="text-[#DAA520]">EN MÓVIL</span>
        </h1>
      </div>

      {/* MOBILE CONTENT */}
      <div className="md:hidden min-h-screen bg-black flex flex-col items-center p-6 text-center animate-in fade-in duration-700 text-white">
        {/* TikTok CompletePayment Event */}
        <Script id="tiktok-complete-payment-shilajit" strategy="afterInteractive">
          {`
            if(typeof ttq !== 'undefined') {
              let value = 0;
              let quantity = 1;
              let prodName = "${producto}";
              let contents = [];
              
              if (prodName.includes("3 al precio de 2") || prodName.includes("Lleva 3")) {
                value = 44.99;
                quantity = 3;
                contents = [
                  { content_id: "shilajit-ultra-3", content_type: 'product', quantity: 3, price: 44.99 }
                ];
              } else {
                value = 27.99;
                quantity = 1;
                contents = [
                  { content_id: "shilajit-ultra-1", content_type: 'product', quantity: 1, price: 27.99 }
                ];
              }

              ttq.track('CompletePayment', {
                value: value,
                currency: 'USD',
                contents: contents
              });
            }
          `}
        </Script>

        <div className="mt-10 mb-6">
          <div className="h-20 w-20 bg-[#DAA520]/20 rounded-full flex items-center justify-center text-[#DAA520] shadow-inner mx-auto border-2 border-[#DAA520]/30">
            <CheckCircle2 className="h-12 w-12" />
          </div>
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#DAA520]/10 text-[#DAA520] font-black text-[11px] tracking-widest uppercase mb-4 border border-[#DAA520]/20">
          <ShieldCheck className="h-4 w-4" />
          PEDIDO REGISTRADO
        </div>

        <h1 className="text-2xl font-black text-white uppercase leading-tight mb-4">
          ¡GRACIAS POR <span className="text-[#DAA520]">TU COMPRA!</span>
        </h1>
        
        <p className="text-md text-slate-400 font-medium leading-relaxed mb-8 px-2">
          Hola <strong>{nombre}</strong>, tu pedido de <strong>{producto}</strong> para <strong>{ubicacionCompleta}</strong> está siendo procesado.
        </p>

        <div className="w-full bg-zinc-900 p-5 rounded-[1.8rem] border border-[#DAA520]/10 text-left space-y-5 mb-8 shadow-2xl">
          <p className="text-[11px] font-black uppercase text-[#DAA520] border-b border-[#DAA520]/10 pb-2 tracking-widest text-center">
            PRÓXIMOS PASOS:
          </p>
          
          <div className="space-y-5">
            <div className="flex items-start gap-3">
              <div className="h-7 w-7 rounded-full bg-[#DAA520] text-black flex items-center justify-center shrink-0 font-bold text-xs">1</div>
              <div className="space-y-0.5">
                <p className="font-black text-white text-xs uppercase">CONTACTO WHATSAPP</p>
                <p className="text-xs text-slate-400">Recibirás un mensaje para confirmar tu dirección.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="h-7 w-7 rounded-full bg-[#DAA520] text-black flex items-center justify-center shrink-0 font-bold text-xs">2</div>
              <div className="space-y-0.5">
                <p className="font-black text-white text-xs uppercase">PAGO AL RECIBIR</p>
                <p className="text-xs text-slate-400">Ten el efectivo listo cuando el repartidor llegue.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full space-y-4 mb-10 px-2">
          <Button asChild className="w-full h-16 text-md font-black uppercase bg-[#DAA520] text-black shadow-xl rounded-2xl border-2 border-black active:scale-[0.98]">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              CONFIRMAR PEDIDO
            </a>
          </Button>
          <Button asChild variant="outline" className="w-full h-14 text-xs font-bold uppercase border-2 border-zinc-700 rounded-2xl text-white bg-black active:scale-[0.98]">
            <Link href={volverUrl}>
              <Home className="mr-2 h-4 w-4" />
              VOLVER A LA TIENDA
            </Link>
          </Button>
        </div>

        <div className="flex items-center justify-center gap-2 opacity-50 text-[9px] font-bold uppercase tracking-widest text-slate-400 mb-8">
          <Truck className="h-4 w-4" />
          Envíos rápidos a todo el Ecuador
        </div>
      </div>
    </>
  );
}

export default function ShilajitGraciasPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-black flex items-center justify-center font-black uppercase text-white">Cargando confirmación...</div>}>
      <ShilajitGraciasContent />
    </Suspense>
  );
}
