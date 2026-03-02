
"use client";

import { useState } from "react";
import { TopMarquee } from "@/components/layout/TopMarquee";
import { Hero } from "@/components/sections/Hero";
import { Benefits } from "@/components/sections/Benefits";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { Features } from "@/components/sections/Features";
import { Testimonials } from "@/components/sections/Testimonials";
import { PurchasePopup, type Product } from "@/components/sections/PurchasePopup";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/toaster";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

/**
 * 🛠️ PANEL DE CONTROL DE PRODUCTOS (CHECKOUT)
 * Versión de Seguridad: 15.1.9 - Memoria: 2GB
 * Despliegue Final Forzado para Ecuador
 */
const CUSTOM_PRODUCTS: Product[] = [
  {
    id: "oferta_1",
    name: "1 Botella Multivitamínico",
    price: 35.00,
    image: "https://i.imgur.com/XfmwUEJ.png",
    badge: null,
    description: "Tratamiento básico para 30 días"
  },
  {
    id: "oferta_2",
    name: "2 Botellas (Tratamiento Pro)",
    price: 60.00,
    image: "https://i.imgur.com/j8pwxGX.png",
    badge: "Más Vendido",
    description: "Envío Prioritario Gratis a todo Ecuador"
  },
  {
    id: "oferta_3",
    name: "3 Botellas (Ahorro Familiar)",
    price: 80.00,
    image: "https://i.imgur.com/WIgHnKZ.png",
    badge: "Mejor Valor",
    description: "Máximo Descuento + Regalo Sorpresa"
  }
];

export default function Home() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);

  return (
    <div className="min-h-screen flex flex-col bg-background pb-24 font-body">
      <TopMarquee />
      <main className="flex-1">
        <Hero onOpenPopup={openPopup} />
        <div className="space-y-[10px]">
          <Benefits onOpenPopup={openPopup} />
          <ProductShowcase onOpenPopup={openPopup} />
          <Features onOpenPopup={openPopup} />
          <Testimonials />
        </div>
      </main>
      
      <div className="sticky-cta">
        <Button 
          onClick={openPopup}
          size="lg" 
          className="w-full h-16 text-xl font-black bg-accent hover:bg-accent/90 shadow-[0_10px_30px_rgba(239,68,68,0.4)] rounded-2xl animate-heartbeat"
        >
          <ShoppingCart className="h-6 w-6" />
          ¡COMPRAR AHORA!
        </Button>
      </div>

      <PurchasePopup 
        open={isPopupOpen} 
        onOpenChange={setIsPopupOpen} 
        products={CUSTOM_PRODUCTS}
      />
      
      <Footer />
      <Toaster />
    </div>
  );
}
