
"use client";

import { useSearchParams } from "next/navigation";
import { CheckCircle2, Truck, Home, MessageCircle, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Suspense, useState, useEffect } from "react";

function GraciasContent() {
  const searchParams = useSearchParams();
  const [nombre, setNombre] = useState("Cliente");
  const [ciudad, setCiudad] = useState("Ecuador");
  const [whatsapp, setWhatsapp] = useState("");
  const [producto, setProducto] = useState("su pedido");
  const [volverUrl, setVolverUrl] = useState("/");

  useEffect(() => {
    // Extraemos los datos de la URL para personalizar la página de forma dinámica
    setNombre(searchParams.get("nombre") || "Cliente");
    setCiudad(searchParams.get("ciudad") || "Ecuador");
    setWhatsapp(searchParams.get("whatsapp") || "");
    setProducto(searchParams.get("producto") || "su pedido");
    setVolverUrl(searchParams.get("back") || "/");
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center p-6 text-center animate-in fade-in duration-700">
      <div className="mt-12 mb-8">
        <div className="h-24 w-24 bg-green-100 rounded-full flex items-center justify-center text-green-600 shadow-inner mx-auto">
          <CheckCircle2 className="h-14 w-14" />
        </div>
      </div>

      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-50 text-green-700 font-black text-[12px] tracking-widest uppercase mb-4 border border-green-200">
        <ShieldCheck className="h-4 w-4" />
        PEDIDO REGISTRADO CON ÉXITO
      </div>

      <h1 className="text-3xl font-black text-foreground uppercase leading-tight mb-4">
        ¡GRACIAS POR <span className="text-green-600">TU COMPRA!</span>
      </h1>
      
      <p className="text-lg text-muted-foreground font-medium leading-relaxed mb-8">
        Hola <strong>{nombre}</strong>, tu solicitud para <strong>{ciudad}</strong> ha sido recibida en Romi Store EC.
      </p>

      <div className="w-full bg-secondary/20 p-6 rounded-[2rem] border border-secondary/50 text-left space-y-6 mb-8 shadow-sm">
        <p className="text-[13px] font-black uppercase text-primary border-b border-primary/10 pb-2 tracking-widest text-center">
          PRÓXIMOS PASOS IMPORTANTES:
        </p>
        
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center shrink-0 font-bold text-sm shadow-md">1</div>
            <div className="space-y-1">
              <p className="font-black text-foreground text-sm uppercase">VERIFICACIÓN DE DATOS</p>
              <p className="text-sm text-muted-foreground">Un asesor revisará tu dirección para el despacho inmediato de <strong>{producto}</strong>.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center shrink-0 font-bold text-sm shadow-md">2</div>
            <div className="space-y-1">
              <p className="font-black text-foreground text-sm uppercase">CONTACTO POR WHATSAPP</p>
              <p className="text-sm text-muted-foreground">Te escribiremos al <strong>{whatsapp || "tu número"}</strong> para confirmar la hora de entrega.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center shrink-0 font-bold text-sm shadow-md">3</div>
            <div className="space-y-1">
              <p className="font-black text-foreground text-sm uppercase">PAGO AL RECIBIR</p>
              <p className="text-sm text-muted-foreground">Recuerda tener el efectivo listo cuando el repartidor llegue a tu casa.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full space-y-4 mb-12">
        <Button asChild className="w-full h-16 text-lg font-black uppercase bg-green-600 hover:bg-green-700 shadow-xl rounded-2xl transition-transform active:scale-95">
          <a href={`https://wa.me/593999999999?text=Hola,%20soy%20${nombre}.%20Acabo%20de%20pedir%20${producto}%20para%20${ciudad}.`} target="_blank">
            <MessageCircle className="mr-2 h-6 w-6" />
            CONFIRMAR POR WHATSAPP
          </a>
        </Button>
        
        <Button asChild variant="outline" className="w-full h-14 text-sm font-bold uppercase border-2 rounded-2xl">
          <Link href={volverUrl}>
            <Home className="mr-2 h-4 w-4" />
            VOLVER A LA TIENDA
          </Link>
        </Button>
      </div>

      <div className="flex items-center justify-center gap-2 opacity-50 text-[10px] font-bold uppercase tracking-widest">
        <Truck className="h-4 w-4" />
        Envíos rápidos a todo el Ecuador
      </div>
    </div>
  );
}

export default function GraciasPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center font-black uppercase">Cargando confirmación...</div>}>
      <GraciasContent />
    </Suspense>
  );
}
