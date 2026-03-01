
"use client";

import { Leaf } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="bg-primary p-1.5 rounded-lg text-white">
              <Leaf className="h-5 w-5 fill-white" />
            </div>
            <span className="text-xl font-bold font-headline text-foreground">MaryRuth's <span className="text-primary">Organics</span></span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground font-medium">
            <Link href="#" className="hover:text-primary transition-colors">Privacidad</Link>
            <Link href="#" className="hover:text-primary transition-colors">Términos</Link>
            <Link href="#" className="hover:text-primary transition-colors">Cookies</Link>
            <Link href="#" className="hover:text-primary transition-colors">Contacto</Link>
          </div>
          
          <p className="text-sm text-muted-foreground">
            © {currentYear} MaryRuth's Organics. Nutrición Líquida de Confianza.
          </p>
        </div>
      </div>
    </footer>
  );
}
