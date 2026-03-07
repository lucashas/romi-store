
"use client";

import { Leaf, ShieldCheck, Mail, MessageSquare, MapPin } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface FooterProps {
  theme?: "light" | "dark";
}

export function Footer({ theme = "light" }: FooterProps) {
  const [year, setYear] = useState<number | null>(null);
  const isDark = theme === "dark";

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className={cn(
      "py-4 pb-24 border-t transition-colors duration-300",
      isDark ? "bg-black border-zinc-900" : "bg-white border-slate-100"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-3">
          {/* Brand Section */}
          <div className="flex flex-col items-center gap-1">
            <div className="flex items-center gap-2">
              <div className={cn("p-1 rounded-lg", isDark ? "bg-[#DAA520]" : "bg-primary")}>
                <Leaf className={cn("h-4 w-4 fill-white", isDark ? "text-black" : "text-white")} />
              </div>
              <span className={cn(
                "text-[18px] md:text-[20px] font-black uppercase tracking-tighter leading-none",
                isDark ? "text-white" : "text-foreground"
              )}>
                Romi Store <span className={isDark ? "text-[#DAA520]" : "text-primary"}>EC</span>
              </span>
            </div>
            <p className={cn(
              "text-[14px] md:text-[16px] font-black uppercase tracking-tight flex items-center gap-1.5",
              isDark ? "text-white" : "text-primary/60"
            )}>
              <ShieldCheck className="h-4 w-4" />
              distribuidor autorizado {isDark ? "SHILAJIT ULTRA" : "BIOAQUA Rice Raw Pulp"}
            </p>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 gap-1.5 text-center text-[14px] md:text-[16px] font-bold">
            <div className="flex items-center justify-center gap-2">
              <MessageSquare className={cn("h-4 w-4", isDark ? "text-[#DAA520]" : "text-primary")} />
              <span className={isDark ? "text-[#DDDDDD]" : "text-slate-600"}>WhatsApp: 0997740583 (Solo Chat)</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Mail className={cn("h-4 w-4", isDark ? "text-[#DAA520]" : "text-primary")} />
              <span className={isDark ? "text-[#DDDDDD]" : "text-slate-600"}>Email: orozco.pancho73@hotmail.com</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <MapPin className={cn("h-4 w-4", isDark ? "text-[#DAA520]" : "text-primary")} />
              <span className={isDark ? "text-[#DDDDDD]" : "text-slate-600"}>Quito, Ecuador - Envíos a todo el país</span>
            </div>
          </div>
          
          {/* Links */}
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-[14px] md:text-[16px] font-black uppercase tracking-tighter">
            <Link href="/politicas/privacidad" className={cn(
              "transition-colors underline decoration-current/10",
              isDark ? "text-[#AAAAAA] hover:text-white" : "text-slate-400 hover:text-primary"
            )}>Política de Privacidad</Link>
            <Link href="/politicas/terminos" className={cn(
              "transition-colors underline decoration-current/10",
              isDark ? "text-[#AAAAAA] hover:text-white" : "text-slate-400 hover:text-primary"
            )}>Términos de Servicio</Link>
            <Link href="/politicas/envio" className={cn(
              "transition-colors underline decoration-current/10",
              isDark ? "text-[#AAAAAA] hover:text-white" : "text-slate-400 hover:text-primary"
            )}>Políticas de Envío</Link>
          </div>
          
          {/* Disclaimers */}
          <div className="text-center space-y-2 max-w-[450px] pt-2 border-t border-zinc-900/50 w-full">
            <p className={cn("text-[12px] md:text-[14px] font-medium", isDark ? "text-[#CCCCCC]" : "text-slate-500")}>
              © {year ?? "..."} Romi Store EC. Todos los derechos reservados.
            </p>
            
            <div className="space-y-1">
              <p className={cn("text-[10px] md:text-[12px] leading-tight italic uppercase tracking-tighter", isDark ? "text-[#CCCCCC]" : "text-slate-400")}>
                * Los resultados pueden variar de persona a persona. Este producto no pretende diagnosticar, tratar, curar o prevenir ninguna enfermedad.
              </p>
              <p className={cn("text-[10px] md:text-[12px] leading-tight italic uppercase tracking-tighter", isDark ? "text-[#CCCCCC]" : "text-slate-400")}>
                Este sitio no es parte del sitio web de TikTok o de TikTok Inc. Además, este sitio NO está respaldado por TikTok de ninguna manera. TIKTOK es una marca registrada de TIKTOK, Inc.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
