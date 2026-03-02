
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

// CONFIGURACIÓN GLOBAL DE PRODUCTOS
// Modifica este array para cambiar los productos del Checkout fácilmente.
const CUSTOM_PRODUCTS: Product[] = [
  {
    id: "promo1",
    name: "1 Botella Multivitamínico",
    price: 35.00,
    image: "https://i.imgur.com/XfmwUEJ.png",
    badge: null,
    description: "Suministro para 30 días"
  },
  {
    id: "promo2",
    name: "2 Botellas (Tratamiento Pro)",
    price: 60.00,
    image: "https://i.imgur.com/j8pwxGX.png",
    badge: "Más Vendido",
    description: "Envío Prioritario Gratis"
  },
  {
    id: "promo3",
    name: "3 Botellas (Ahorro Familiar)",
    price: 80.00,
    image: "https://i.imgur.com/WIgHnKZ.png",
    badge: "Mejor Valor",
    description: "Máximo Descuento Aplicado"
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
          ¡QUIERO MI PROMO!
        </Button>
      </div>

      {/* El popup ahora recibe los productos como Prop */}
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
