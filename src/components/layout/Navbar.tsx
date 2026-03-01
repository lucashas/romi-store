
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-primary p-1.5 rounded-lg text-white transition-transform group-hover:scale-110">
            <Star className="h-6 w-6 fill-accent text-accent" />
          </div>
          <span className="text-xl font-bold font-headline text-primary">ProductoEstelar</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <Link href="#beneficios" className="text-sm font-medium hover:text-primary transition-colors">Beneficios</Link>
          <Link href="#caracteristicas" className="text-sm font-medium hover:text-primary transition-colors">Características</Link>
          <Link href="#testimonios" className="text-sm font-medium hover:text-primary transition-colors">Testimonios</Link>
        </div>

        <div className="flex items-center gap-4">
          <Button asChild variant="default" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg shadow-accent/20">
            <Link href="#registro">Comenzar Ahora</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
