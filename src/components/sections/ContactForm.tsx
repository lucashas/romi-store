"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, Send, Leaf } from "lucide-react";

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
    <section id="registro" className="py-[10px] bg-secondary/20">
      <div className="container mx-auto px-[5px]">
        <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border-none">
          <div className="bg-accent p-6 text-accent-foreground space-y-4 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                <Leaf className="h-32 w-32 absolute -bottom-4 -left-4 rotate-12" />
            </div>
            
            <div className="relative z-10">
              <h2 className="text-xl font-black font-headline uppercase leading-tight">¿Dudas sobre tu suplementación?</h2>
              <p className="text-[12px] opacity-90">Estamos aquí para ayudarte a elegir el mejor camino para tu bienestar.</p>
            </div>

            <div className="space-y-3 relative z-10">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
                  <Mail className="h-4 w-4 text-white" />
                </div>
                <p className="text-[12px] font-bold">hola@maryruthsorganics.es</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
                  <Phone className="h-4 w-4 text-white" />
                </div>
                <p className="text-[12px] font-bold">+34 912 345 678</p>
              </div>
            </div>
          </div>

          <div className="p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="nombre" className="text-[11px] font-black uppercase">Nombre</Label>
                <Input id="nombre" placeholder="Tu nombre" required className="h-10 text-[13px] bg-background/50 border-none ring-1 ring-border focus-visible:ring-primary" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-[11px] font-black uppercase">Email</Label>
                <Input id="email" type="email" placeholder="tu@email.com" required className="h-10 text-[13px] bg-background/50 border-none ring-1 ring-border focus-visible:ring-primary" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="mensaje" className="text-[11px] font-black uppercase">Consulta</Label>
                <Textarea id="mensaje" placeholder="¿En qué podemos ayudarte?" className="min-h-[80px] text-[13px] bg-background/50 border-none ring-1 ring-border focus-visible:ring-primary" required />
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox id="terms" className="mt-1 data-[state=checked]:bg-primary border-primary" />
                <Label htmlFor="terms" className="text-[10px] text-muted-foreground font-medium cursor-pointer leading-tight">
                  Acepto recibir consejos de salud y promociones exclusivas.
                </Label>
              </div>

              <Button type="submit" disabled={loading} className="w-full h-12 text-md font-black uppercase bg-primary text-white hover:bg-primary/90 shadow-lg rounded-xl animate-heartbeat">
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
