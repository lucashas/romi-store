
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send, Leaf } from "lucide-react";

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "¡Gracias por tu interés!",
        description: "Un asesor de salud se pondrá en contacto contigo pronto.",
      });
    }, 1500);
  };

  return (
    <section id="registro" className="py-16 sm:py-24 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto bg-white rounded-3xl overflow-hidden shadow-2xl border-none flex flex-col lg:flex-row">
          <div className="lg:w-1/2 bg-accent p-8 sm:p-12 lg:p-16 text-accent-foreground space-y-8 sm:space-y-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                <Leaf className="h-64 w-64 absolute -bottom-10 -left-10 rotate-12" />
            </div>
            
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold font-headline mb-4">¿Dudas sobre tu suplementación?</h2>
              <p className="text-base sm:text-lg opacity-90">Estamos aquí para ayudarte a elegir el mejor camino para tu bienestar y el de tu familia.</p>
            </div>

            <div className="space-y-4 sm:space-y-6 relative z-10">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <div className="min-w-0">
                  <p className="font-medium text-sm sm:text-base">Atención al Cliente</p>
                  <p className="opacity-90 text-sm sm:text-base truncate">hola@maryruthsorganics.es</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <div>
                  <p className="font-medium text-sm sm:text-base">Línea Saludable</p>
                  <p className="opacity-90 text-sm sm:text-base">+34 912 345 678</p>
                </div>
              </div>
            </div>

            <div className="pt-4 sm:pt-8 relative z-10">
              <div className="h-px bg-white/20 mb-6 sm:mb-8" />
              <p className="text-xs sm:text-sm opacity-80 italic">"Move Forward with MaryRuth's"</p>
            </div>
          </div>

          <div className="lg:w-1/2 p-8 sm:p-12 lg:p-16">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="nombre">Nombre</Label>
                  <Input id="nombre" placeholder="Tu nombre" required className="bg-background/50 border-none ring-1 ring-border focus-visible:ring-primary" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="tu@email.com" required className="bg-background/50 border-none ring-1 ring-border focus-visible:ring-primary" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="asunto">Interés</Label>
                <Input id="asunto" placeholder="Multivitamínicos, Línea Kids..." className="bg-background/50 border-none ring-1 ring-border focus-visible:ring-primary" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="mensaje">Consulta</Label>
                <Textarea id="mensaje" placeholder="¿En qué podemos ayudarte hoy?" className="min-h-[100px] bg-background/50 border-none ring-1 ring-border focus-visible:ring-primary" required />
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox id="terms" className="mt-1 data-[state=checked]:bg-primary border-primary" />
                <Label htmlFor="terms" className="text-xs sm:text-sm text-muted-foreground font-normal cursor-pointer leading-tight">
                  Acepto recibir consejos de salud y promociones exclusivas de MaryRuth's Organics.
                </Label>
              </div>

              <Button type="submit" disabled={loading} className="w-full h-12 text-lg bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20 rounded-xl">
                {loading ? "Enviando..." : (
                  <>
                    Contactar Ahora
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
