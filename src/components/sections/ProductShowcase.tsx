
"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function ProductShowcase() {
  const showcaseImg = PlaceHolderImages.find(img => img.id === "product-showcase");
  const imgUrl = showcaseImg?.imageUrl || "https://i.imgur.com/Rjwp6dT.jpeg";

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <div className="space-y-6 text-center">
          <h2 className="text-3xl font-black text-foreground leading-tight">
            TU RITUAL DE <span className="text-primary">30 SEGUNDOS</span>
          </h2>
          <p className="text-base text-muted-foreground font-medium italic">
            "La forma más deliciosa de cuidar tu cuerpo, sin pastillas difíciles de tragar."
          </p>
          
          <div className="relative w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-secondary">
            <Image 
              src={imgUrl} 
              alt="Detalle MaryRuth's"
              fill
              className="object-cover"
              sizes="(max-width: 500px) 100vw, 500px"
              priority
            />
          </div>

          <div className="bg-primary/5 p-6 rounded-3xl border-2 border-primary/10">
            <p className="text-sm font-bold text-foreground leading-relaxed">
              VIVIR CON ENERGÍA NO DEBERÍA SER COMPLICADO. <br />
              <span className="text-primary">NUESTRA FÓRMULA LÍQUIDA ES LA CLAVE.</span>
            </p>
          </div>
          
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
      </div>
    </section>
  );
}
