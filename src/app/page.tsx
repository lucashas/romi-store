
import { Hero } from "@/components/sections/Hero";
import { Benefits } from "@/components/sections/Benefits";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { Features } from "@/components/sections/Features";
import { Testimonials } from "@/components/sections/Testimonials";
import { ContactForm } from "@/components/sections/ContactForm";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/toaster";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background pb-24">
      <main className="flex-1">
        <Hero />
        <div className="space-y-0">
          <Benefits />
          <ProductShowcase />
          <Features />
          <Testimonials />
          <ContactForm />
        </div>
      </main>
      
      {/* Sticky CTA para Funnel de TikTok */}
      <div className="sticky-cta">
        <Button asChild size="lg" className="w-full h-16 text-xl font-black bg-accent hover:bg-accent/90 shadow-[0_10px_30px_rgba(239,68,68,0.4)] rounded-2xl animate-bounce">
          <Link href="#registro" className="flex items-center gap-3">
            <ShoppingCart className="h-6 w-6" />
            ¡QUIERO MI PROMO!
          </Link>
        </Button>
      </div>

      <Footer />
      <Toaster />
    </div>
  );
}
