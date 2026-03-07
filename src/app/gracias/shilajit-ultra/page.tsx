"use client";

import { useSearchParams } from "next/navigation";
import { CheckCircle2, Truck, Home, MessageCircle, ShieldCheck, Smartphone, ClipboardCheck, PhoneCall, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Suspense, useState, useEffect } from "react";

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
      <div className="md:hidden min-h-screen bg-[#111111] flex flex-col items-center p-6 text-center animate-in fade-in duration-700 text-white">
        <div className="mt-10 mb-6">
          <div className="h-20 w-20 bg-green-500/20 rounded-full flex items-center justify-center text-green-500 shadow-inner mx-auto border-2 border-green-500/30">
            <CheckCircle2 className="h-12 w-12" />
          </div>
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#DAA520]/10 text-[#DAA520] font-black text-[11px] tracking-widest uppercase mb-4 border border-[#DAA520]/20">
          <ShieldCheck className="h-4 w-4" />
          PEDIDO REGISTRADO CON ÉXITO
        </div>

        <h1 className="text-2xl font-black text-white uppercase leading-tight mb-2">
          ¡GRACIAS POR <span className="text-[#DAA520]">TU COMPRA!</span>
        </h1>
        
        <p className="text-sm text-slate-300 font-medium leading-relaxed mb-8 px-4">
          Hola <strong>{nombre}</strong>, tu solicitud para <strong>{ubicacionCompleta}</strong> de <strong>{producto}</strong> ha sido recibida correctamente.
        </p>

        <div className="w-full space-y-4 mb-8">
          <p className="text-[12px] font-black uppercase text-[#DAA520] tracking-[0.2em] mb-4">
            PRÓXIMOS PASOS IMPORTANTES:
          </p>
          
          <div className="grid gap-3">
            <div className="bg-zinc-900/80 p-4 rounded-2xl border border-white/5 text-left flex items-start gap-4">
              <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                <ClipboardCheck className="h-5 w-5 text-primary" />
              </div>
              <div className="space-y-0.5">
                <p className="font-black text-white text-[13px] uppercase">1. VERIFICACIÓN DE DATOS</p>
                <p className="text-[12px] text-slate-400 leading-tight">Un asesor revisará tu dirección para el despacho de su pedido.</p>
              </div>
            </div>

            <div className="bg-zinc-900/80 p-4 rounded-2xl border border-white/5 text-left flex items-start gap-4">
              <div className="h-10 w-10 rounded-xl bg-green-500/10 flex items-center justify-center shrink-0 border border-green-500/20">
                <PhoneCall className="h-5 w-5 text-green-500" />
              </div>
              <div className="space-y-0.5">
                <p className="font-black text-white text-[13px] uppercase">2. CONTACTO POR WHATSAPP</p>
                <p className="text-[12px] text-slate-400 leading-tight">Te escribiremos al número proporcionado para coordinar la entrega.</p>
              </div>
            </div>

            <div className="bg-zinc-900/80 p-4 rounded-2xl border border-white/5 text-left flex items-start gap-4">
              <div className="h-10 w-10 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0 border border-blue-500/20">
                <Wallet className="h-5 w-5 text-blue-500" />
              </div>
              <div className="space-y-0.5">
                <p className="font-black text-white text-[13px] uppercase">3. PAGO AL RECIBIR</p>
                <p className="text-[12px] text-slate-400 leading-tight">Recuerda tener el efectivo listo cuando el repartidor llegue a tu casa.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full space-y-4 mb-10">
          <Button asChild className="w-full h-16 text-md font-black uppercase bg-[#2E7D32] hover:bg-[#1B5E20] text-white shadow-xl rounded-2xl transition-transform active:scale-95">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-6 w-6" />
              CONFIRMAR POR WHATSAPP
            </a>
          </Button>
          
          <Button asChild variant="outline" className="w-full h-14 text-sm font-bold uppercase border-2 border-zinc-700 rounded-2xl text-white bg-zinc-800 hover:bg-zinc-700 active:scale-95">
            <Link href={volverUrl}>
              <Home className="mr-2 h-4 w-4" />
              VOLVER A LA TIENDA
            </Link>
          </Button>
        </div>

        <div className="flex items-center justify-center gap-2 opacity-40 text-[10px] font-bold uppercase tracking-widest text-slate-400 pb-10">
          <Truck className="h-4 w-4" />
          Envíos rápidos a todo el Ecuador
        </div>
      </div>
    </>
  );
}

export default function ShilajitGraciasPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#111111] flex items-center justify-center font-black uppercase text-white">Cargando confirmación...</div>}>
      <ShilajitGraciasContent />
    </Suspense>
  );
}
