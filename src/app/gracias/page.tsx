
"use client";

import { useSearchParams } from "next/navigation";
import { CheckCircle2, Phone, Truck, Home, ShoppingBag, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Suspense } from "react";

function GraciasContent() {
  const searchParams = useSearchParams();
  const nombre = searchParams.get("nombre") || "Cliente";
  const ciudad = searchParams.get("ciudad") || "tu ciudad";
  const whatsapp = searchParams.get("whatsapp") || "";

  return (
    <div className="min-h-screen bg-white flex flex-col items-center p-6 text-center animate-in fade-in duration-500">
      <div className="mt-12 mb-8">
        <div className="h-24 w-24 bg-green-100 rounded-full flex items-center justify-center text-green-600 shadow-inner mx-auto">
          <CheckCircle2 className="h-14 w-14" />
        </div>
      </div>

      <h1 className="text-3xl font-black text-foreground uppercase leading-tight mb-4">
        ¡PEDIDO <span className="text-green-600">RECIBIDO!</span>
      </h1>
      
      <p className="text-lg text-muted-foreground font-medium leading-relaxed mb-8">
        Gracias <strong>{nombre}</strong>, tu solicitud ha sido registrada correctamente en Romi Store EC.
      </p>

      <div className="w-full bg-secondary/20 p-6 rounded-[2rem] border border-secondary/50 text-left space-y-6 mb-8">
        <p className="text-[13px] font-black uppercase text-primary border-b border-primary/10 pb-2 tracking-widest text-center">
          PRÓXIMOS PASOS IMPORTANTES:
        </p>
        
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center shrink-0 font-bold text-sm shadow-md">1</div>
            <div className="space-y-1">
              <p className="font-black text-foreground text-sm uppercase">VALIDACIÓN DE DIRECCIÓN</p>
              <p className="text-sm text-muted-foreground">Nuestro equipo está verificando la cobertura para <strong>{ciudad}</strong>.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center shrink-0 font-bold text-sm shadow-md">2</div>
            <div className="space-y-1">
              <p className="font-black text-foreground text-sm uppercase">LLAMADA DE CONFIRMACIÓN</p>
              <p className="text-sm text-muted-foreground">Te contactaremos al <strong>{whatsapp}</strong> para coordinar el despacho inmediato.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center shrink-0 font-bold text-sm shadow-md">3</div>
            <div className="space-y-1">
              <p className="font-black text-foreground text-sm uppercase">PAGO CONTRA ENTREGA</p>
              <p className="text-sm text-muted-foreground">¡Prepara el efectivo! Pagas el valor total cuando el repartidor llegue a tu puerta.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full space-y-4 mb-12">
        <Button asChild className="w-full h-16 text-lg font-black uppercase bg-green-600 hover:bg-green-700 shadow-xl rounded-2xl">
          <a href={`https://wa.me/593999999999?text=Hola,%20soy%20${nombre}.%20Acabo%20de%20hacer%20un%20pedido%20para%20${ciudad}.`} target="_blank">
            <MessageCircle className="mr-2 h-6 w-6" />
            HABLAR CON UN ASESOR
          </a>
        </Button>
        
        <Button asChild variant="outline" className="w-full h-14 text-sm font-bold uppercase border-2 rounded-2xl">
          <Link href="/">
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
