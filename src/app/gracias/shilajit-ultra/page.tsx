"use client";

import { useSearchParams } from "next/navigation";
import { CheckCircle2, Truck, Home, MessageCircle, ShieldCheck } from "lucide-react";
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
  const whatsappMessage = `Hola Romi Store EC, soy ${nombre}. Acabo de pedir ${producto} para ${ubicacionCompleta}. Confirmo mi pedido para env&iacute;o inmediato.`;
  const whatsappUrl = `https://wa.me/593997740583?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center p-6 text-center animate-in fade-in duration-700 text-white">
      {/* TikTok CompletePayment Event - Din&aacute;mico para Shilajit */}
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

      <div className="mt-12 mb-8">
        <div className="h-24 w-24 bg-amber-600/20 rounded-full flex items-center justify-center text-amber-500 shadow-inner mx-auto border-2 border-amber-600/30">
          <CheckCircle2 className="h-14 w-14" />
        </div>
      </div>

      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-600/10 text-amber-500 font-black text-[12px] tracking-widest uppercase mb-4 border border-amber-600/20">
        <ShieldCheck className="h-4 w-4" />
        PODER NATURAL ACTIVADO
      </div>

      <h1 className="text-3xl font-black text-white uppercase leading-tight mb-4">
        &iexcl;GRACIAS POR <span className="text-amber-500">TU COMPRA!</span>
      </h1>
      
      <p className="text-lg text-slate-400 font-medium leading-relaxed mb-8">
        Hola <strong>{nombre}</strong>, tu pedido de <strong>{producto}</strong> est&aacute; siendo procesado para <strong>{ubicacionCompleta}</strong>.
      </p>

      <div className="w-full bg-slate-900 p-6 rounded-[2rem] border border-slate-800 text-left space-y-6 mb-8 shadow-2xl">
        <p className="text-[13px] font-black uppercase text-amber-500 border-b border-amber-500/10 pb-2 tracking-widest text-center">
          PR&Oacute;XIMOS PASOS:
        </p>
        
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="h-8 w-8 rounded-full bg-amber-600 text-white flex items-center justify-center shrink-0 font-bold text-sm shadow-md">1</div>
            <div className="space-y-1">
              <p className="font-black text-white text-sm uppercase">DESPACHO INMEDIATO</p>
              <p className="text-sm text-slate-400">Nuestro equipo est&aacute; preparando tu pedido para env&iacute;o prioritario.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="h-8 w-8 rounded-full bg-amber-600 text-white flex items-center justify-center shrink-0 font-bold text-sm shadow-md">2</div>
            <div className="space-y-1">
              <p className="font-black text-white text-sm uppercase">CONTACTO WHATSAPP</p>
              <p className="text-sm text-slate-400">Recibir&aacute;s un mensaje para confirmar el horario de entrega.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full space-y-4 mb-12">
        <Button asChild className="w-full h-16 text-lg font-black uppercase bg-green-600 hover:bg-green-700 shadow-xl rounded-2xl transition-transform active:scale-95">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="mr-2 h-6 w-6" />
            CONFIRMAR POR WHATSAPP
          </a>
        </Button>
        <Button asChild variant="outline" className="w-full h-14 text-sm font-bold uppercase border-2 border-slate-700 rounded-2xl text-slate-300">
          <Link href={volverUrl}>
            <Home className="mr-2 h-4 w-4" />
            VOLVER A LA TIENDA
          </Link>
        </Button>
      </div>

      <div className="flex items-center justify-center gap-2 opacity-50 text-[10px] font-bold uppercase tracking-widest text-slate-400">
        <Truck className="h-4 w-4" />
        Env&iacute;os r&aacute;pidos a todo el Ecuador
      </div>
    </div>
  );
}

export default function ShilajitGraciasPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-950 flex items-center justify-center font-black uppercase text-white">Cargando confirmaci&oacute;n...</div>}>
      <ShilajitGraciasContent />
    </Suspense>
  );
}