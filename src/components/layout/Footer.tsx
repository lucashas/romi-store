"use client";

import { Leaf, ShieldCheck, Mail, Phone, MapPin, MessageSquare } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-white border-t py-8 pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-8">
          {/* Brand Logo & Authority */}
          <div className="flex flex-col items-center gap-1">
            <div className="flex items-center gap-2">
              <div className="bg-primary p-1 rounded-lg text-white">
                <Leaf className="h-5 w-5 fill-white" />
              </div>
              <span className="text-xl font-black font-headline text-foreground uppercase tracking-tighter">
                Romi Store <span className="text-primary">EC</span>
              </span>
            </div>
            <p className="text-[10px] font-black text-primary/60 uppercase tracking-widest flex items-center gap-1">
              <ShieldCheck className="h-3 w-3" />
              distribuidor autorizado BIOAQUA Rice Raw Pulp
            </p>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 gap-4 text-center text-[13px] font-bold text-slate-600">
            <div className="flex items-center justify-center gap-2">
              <div className="bg-primary/10 p-2 rounded-full">
                <MessageSquare className="h-4 w-4 text-primary" />
              </div>
              <span>WhatsApp: 0959461399 (Solo Chat)</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="bg-primary/10 p-2 rounded-full">
                <Mail className="h-4 w-4 text-primary" />
              </div>
              <span>Email: orozco.pancho73@hotmail.com</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="bg-primary/10 p-2 rounded-full">
                <MapPin className="h-4 w-4 text-primary" />
              </div>
              <span>Quito, Ecuador - Envíos a todo el país</span>
            </div>
          </div>
          
          {/* TikTok Ads Required Links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[11px] font-black text-slate-400 uppercase tracking-tighter">
            <Link href="/politicas/privacidad" className="hover:text-primary transition-colors underline decoration-primary/20">Política de Privacidad</Link>
            <Link href="/politicas/terminos" className="hover:text-primary transition-colors underline decoration-primary/20">Términos de Servicio</Link>
            <Link href="/politicas/envio" className="hover:text-primary transition-colors underline decoration-primary/20">Políticas de Envío</Link>
          </div>
          
          {/* Disclaimers for Ad Platforms */}
          <div className="text-center space-y-4 max-w-[420px]">
            <div className="space-y-1">
              <p className="text-[14px] text-slate-500 font-medium">
                © {year ?? "..."} Romi Store EC. Todos los derechos reservados.
              </p>
              <p className="text-[16px] font-black text-slate-900 uppercase tracking-tight">
                Hecho para Ecuador con ❤️
              </p>
            </div>
            
            <div className="border-t border-slate-100 pt-4 space-y-2">
              <p className="text-[9px] text-slate-400 leading-tight italic uppercase tracking-tighter">
                * Los resultados pueden variar de persona a persona. Este producto no pretende diagnosticar, tratar, curar o prevenir ninguna enfermedad.
              </p>
              <p className="text-[9px] text-slate-400 leading-tight italic uppercase tracking-tighter">
                Este sitio no es parte del sitio web de TikTok o de TikTok Inc. Además, este sitio NO está respaldado por TikTok de ninguna manera. TIKTOK es una marca registrada de TIKTOK, Inc.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}