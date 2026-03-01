"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "¡Mensaje Enviado!",
        description: "Nos pondremos en contacto contigo en las próximas 24 horas.",
      });
    }, 1500);
  };

  return (
    <section id="registro" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border flex flex-col lg:flex-row">
          <div className="lg:w-1/2 bg-primary p-8 sm:p-12 lg:p-16 text-primary-foreground space-y-8 sm:space-y-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold font-headline mb-4">¿Hablamos?</h2>
              <p className="text-base sm:text-lg opacity-80">Estamos listos para ayudarte a llevar tu proyecto al siguiente nivel. Cuéntanos qué necesitas.</p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
                </div>
                <div className="min-w-0">
                  <p className="font-medium text-sm sm:text-base">Correo Electrónico</p>
                  <p className="opacity-70 text-sm sm:text-base truncate">hola@productoestelar.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
                </div>
                <div>
                  <p className="font-medium text-sm sm:text-base">Teléfono</p>
                  <p className="opacity-70 text-sm sm:text-base">+34 900 123 456</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
                </div>
                <div>
                  <p className="font-medium text-sm sm:text-base">Ubicación</p>
                  <p className="opacity-70 text-sm sm:text-base">Calle Innovación 42, Madrid</p>
                </div>
              </div>
            </div>

            <div className="pt-4 sm:pt-8">
              <div className="h-px bg-white/20 mb-6 sm:mb-8" />
              <p className="text-xs sm:text-sm opacity-50">Siguenos en redes sociales para estar al día de nuestras novedades y actualizaciones.</p>
            </div>
          </div>

          <div className="lg:w-1/2 p-8 sm:p-12 lg:p-16">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="nombre">Nombre Completo</Label>
                  <Input id="nombre" placeholder="Juan Pérez" required className="bg-background border-none ring-1 ring-border focus-visible:ring-accent" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="juan@ejemplo.com" required className="bg-background border-none ring-1 ring-border focus-visible:ring-accent" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="asunto">Interés principal</Label>
                <Input id="asunto" placeholder="Demo personalizada, Precios..." className="bg-background border-none ring-1 ring-border focus-visible:ring-accent" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="mensaje">Mensaje</Label>
                <Textarea id="mensaje" placeholder="Cuéntanos más sobre tu proyecto..." className="min-h-[100px] sm:min-h-[120px] bg-background border-none ring-1 ring-border focus-visible:ring-accent" required />
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox id="terms" className="mt-1 data-[state=checked]:bg-accent data-[state=checked]:text-accent-foreground border-primary" />
                <Label htmlFor="terms" className="text-xs sm:text-sm text-muted-foreground font-normal cursor-pointer leading-tight">
                  Acepto la política de privacidad y autorizo el tratamiento de mis datos para fines comerciales.
                </Label>
              </div>

              <Button type="submit" disabled={loading} className="w-full h-12 text-lg bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg shadow-accent/20">
                {loading ? "Enviando..." : (
                  <>
                    Enviar Mensaje
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
