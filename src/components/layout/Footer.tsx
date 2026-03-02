"use client";

import { Leaf, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-white border-t py-12 pb-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-2">
              <div className="bg-primary p-1.5 rounded-lg text-white">
                <Leaf className="h-5 w-5 fill-white" />
              </div>
              <span className="text-xl font-bold font-headline text-foreground">
                Romi Store <span className="text-primary">EC</span>
              </span>
            </div>
            <p className="text-[10px] font-black text-primary/60 uppercase tracking-widest flex items-center gap-1">
              <ShieldCheck className="h-3 w-3" />
              Distribuidor Autorizado MaryRuth's
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground font-medium">
            <Link href="#" className="hover:text-primary transition-colors">Privacidad</Link>
            <Link href="#" className="hover:text-primary transition-colors">Términos de Envío</Link>
            <Link href="#" className="hover:text-primary transition-colors">Contacto</Link>
          </div>
          
          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground">
              © {year ?? "..."} Romi Store EC. <br />
              Hecho para Ecuador con ❤️
            </p>
            <p className="text-[9px] text-muted-foreground/60 max-w-[250px] mx-auto leading-tight italic">
              Este sitio es operado por Romi Store. MaryRuth's Organics es una marca registrada utilizada bajo autorización de distribución. Toda la gestión de pedidos se realiza de forma privada y segura a través de nuestra plataforma oficial.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
