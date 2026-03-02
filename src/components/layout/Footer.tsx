"use client";

import { Leaf, ShieldCheck, Mail, Phone, MapPin } from "lucide-react";
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

          <div className="grid grid-cols-1 gap-4 text-center text-[13px] font-medium text-muted-foreground">
            <div className="flex items-center justify-center gap-2">
              <Phone className="h-4 w-4 text-primary" />
              <span>Soporte: +593 99 999 9999</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Mail className="h-4 w-4 text-primary" />
              <span>Email: contacto@romi-store.com</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              <span>Quito, Ecuador - Envíos Nacionales</span>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-[12px] font-black text-muted-foreground/80 uppercase tracking-tighter">
            <Link href="#" className="hover:text-primary transition-colors underline decoration-primary/30">Política de Privacidad</Link>
            <Link href="#" className="hover:text-primary transition-colors underline decoration-primary/30">Términos de Servicio</Link>
            <Link href="#" className="hover:text-primary transition-colors underline decoration-primary/30">Política de Envío</Link>
          </div>
          
          <div className="text-center space-y-4">
            <p className="text-[11px] text-muted-foreground">
              © {year ?? "..."} Romi Store EC. <br />
              Hecho para Ecuador con ❤️
            </p>
            <p className="text-[9px] text-muted-foreground/60 max-w-[350px] mx-auto leading-tight italic border-t border-primary/5 pt-4">
              Este sitio no es parte del sitio web de Facebook ni de Facebook Inc. o TikTok. Además, este sitio NO está respaldado por Facebook o TikTok de ninguna manera. FACEBOOK y TIKTOK son marcas comerciales de sus respectivos dueños. <br /><br />
              MaryRuth's Organics es una marca registrada utilizada bajo autorización de distribución. Toda la gestión de pedidos se realiza de forma segura a través de nuestra plataforma oficial.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
