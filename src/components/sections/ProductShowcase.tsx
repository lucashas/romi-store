"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function ProductShowcase() {
  const imgUrl = "https://i.imgur.com/Rjwp6dT.jpeg";

  return (
    <section className="relative w-full h-screen bg-white flex flex-col">
      {/* Imagen a pantalla completa */}
      <div className="relative flex-1 w-full">
        <Image 
          src={imgUrl} 
          alt="Detalle Producto MaryRuth's"
          fill
          className="object-cover"
          sizes="500px"
          priority
        />
        
        {/* Overlay sutil para legibilidad de texto si se añade después */}
        <div className="absolute inset-0 bg-black/5" />
      </div>

      {/* Texto vendedor debajo de la sección de impacto visual */}
      <div className="bg-white p-8 space-y-4 text-center border-t-8 border-secondary">
        <h2 className="text-2xl font-black text-foreground leading-tight uppercase">
          Tu Ritual de <span className="text-primary">30 Segundos</span>
        </h2>
        <p className="text-base text-muted-foreground font-medium italic px-4">
          "La forma más deliciosa de nutrir tu cuerpo sin pastillas difíciles de tragar."
        </p>
        
        <div className="pt-4">
          <Link 
            href="#registro" 
            className="inline-flex items-center gap-2 text-primary font-black uppercase tracking-widest text-sm hover:underline"
          >
            Ver disponibilidad ahora
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
