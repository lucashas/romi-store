
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Benefits } from "@/components/sections/Benefits";
import { Features } from "@/components/sections/Features";
import { Testimonials } from "@/components/sections/Testimonials";
import { ContactForm } from "@/components/sections/ContactForm";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/toaster";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Benefits />
        <Features />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
