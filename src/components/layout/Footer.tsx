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
    <footer className="bg-white border-t py-8 pb-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-col items-center gap-1">
            <div className="flex items-center gap-2">
              <div className="bg-primary p-1 rounded-lg text-white">
                <Leaf className="h-4 w-4 fill-white" />
              </div>
              <span className="text-lg font-bold font-headline text-foreground">
                Romi Store <span className="text-primary">EC</span>
              </span>
            </div>
            <p className="text-[10px] font-black text-primary/60 uppercase tracking-widest flex items-center gap-1">
              <ShieldCheck className="h-3 w-3" />
              distribuidor autorizado BIOAQUA Rice Raw Pulp
            </p>
          </div>

          <div className="grid grid-cols-1 gap-2 text-center text-[13px] font-bold text-muted-foreground">
            <div className="flex items-center justify-center gap-2">
              <MessageSquare className="h-4 w-4 text-primary" />
              <span>WhatsApp: 0959461399 (Solo Chat)</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Mail className="h-4 w-4 text-primary" />
              <span>Email: orozco.pancho73@hotmail.com</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              <span>Quito, Ecuador - Envíos Nacionales</span>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 text-[10px] font-black text-muted-foreground/80 uppercase tracking-tighter">
            <Link href="#" className="hover:text-primary transition-colors underline decoration-primary/30">Privacidad</Link>
            <Link href="#" className="hover:text-primary transition-colors underline decoration-primary/30">Términos</Link>
            <Link href="#" className="hover:text-primary transition-colors underline decoration-primary/30">Envíos</Link>
          </div>
          
          <div className="text-center space-y-2">
            <div className="space-y-0.5">
              <p className="text-[14px] text-muted-foreground font-medium">
                © {year ?? "..."} Romi Store EC.
              </p>
              <p className="text-[16px] font-black text-slate-900 uppercase tracking-tight">
                Hecho para Ecuador con ❤️
              </p>
            </div>
            <p className="text-[11px] text-muted-foreground/70 max-w-[340px] mx-auto leading-tight italic border-t border-primary/5 pt-3">
              Bioaqua es una marca registrada. Esta página no está afiliada con TikTok o Facebook.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
