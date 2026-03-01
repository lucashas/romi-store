
"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { ShoppingCart, Package, Truck, AlertTriangle } from "lucide-react";

interface PurchasePopupProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function PurchasePopup({ open, onOpenChange }: PurchasePopupProps) {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onOpenChange(false);
      toast({
        title: "¡PEDIDO RECIBIDO!",
        description: "En breve nos contactaremos por WhatsApp para coordinar la entrega.",
      });
    }, 2000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[450px] w-[95%] p-0 overflow-hidden rounded-3xl border-none">
        <DialogHeader className="bg-primary p-6 text-white text-center">
          <DialogTitle className="text-lg font-black uppercase leading-tight">
            INGRESE SUS DATOS DE FORMA CORRECTA PARA PODER ENVIAR SU PEDIDO
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
          {/* PASO 1 */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-primary">
              <Package className="h-5 w-5" />
              <h3 className="font-black uppercase text-sm">PASO 1: ELIGE LA OFERTA</h3>
            </div>
            
            <RadioGroup defaultValue="promo2" className="grid gap-3">
              <Label
                htmlFor="promo1"
                className="flex items-center justify-between p-4 rounded-xl border-2 border-secondary bg-secondary/10 cursor-pointer hover:border-primary/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="promo1" id="promo1" />
                  <span className="font-bold text-sm">1 Botella Multivitamínico</span>
                </div>
                <span className="font-black text-primary">$35.00</span>
              </Label>

              <Label
                htmlFor="promo2"
                className="flex items-center justify-between p-4 rounded-xl border-2 border-primary bg-primary/5 cursor-pointer relative"
              >
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-[10px] px-3 py-1 rounded-full font-black uppercase">
                  Más Vendido
                </div>
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="promo2" id="promo2" />
                  <span className="font-bold text-sm">2 Botellas (Tratamiento Pro)</span>
                </div>
                <span className="font-black text-primary">$60.00</span>
              </Label>

              <Label
                htmlFor="promo3"
                className="flex items-center justify-between p-4 rounded-xl border-2 border-secondary bg-secondary/10 cursor-pointer hover:border-primary/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="promo3" id="promo3" />
                  <span className="font-bold text-sm">3 Botellas (Ahorro Familiar)</span>
                </div>
                <span className="font-black text-primary">$80.00</span>
              </Label>
            </RadioGroup>
          </div>

          {/* PASO 2 */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-primary">
              <Truck className="h-5 w-5" />
              <h3 className="font-black uppercase text-sm">PASO 2: DATOS DE ENVÍO</h3>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <Label htmlFor="nombre" className="text-[10px] font-black uppercase">Nombre</Label>
                <Input id="nombre" placeholder="Ej: Juan" required className="h-11 text-sm bg-secondary/20 border-none ring-1 ring-border" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="apellido" className="text-[10px] font-black uppercase">Apellido</Label>
                <Input id="apellido" placeholder="Ej: Pérez" required className="h-11 text-sm bg-secondary/20 border-none ring-1 ring-border" />
              </div>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="whatsapp" className="text-[10px] font-black uppercase">Número de WhatsApp</Label>
              <Input id="whatsapp" type="tel" placeholder="099 999 9999" required className="h-11 text-sm bg-secondary/20 border-none ring-1 ring-border" />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="direccion" className="text-[10px] font-black uppercase">Dirección de Entrega</Label>
              <Input id="direccion" placeholder="Calle principal y secundaria" required className="h-11 text-sm bg-secondary/20 border-none ring-1 ring-border" />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <Label htmlFor="provincia" className="text-[10px] font-black uppercase">Provincia</Label>
                <Input id="provincia" placeholder="Pichincha" required className="h-11 text-sm bg-secondary/20 border-none ring-1 ring-border" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="ciudad" className="text-[10px] font-black uppercase">Ciudad</Label>
                <Input id="ciudad" placeholder="Quito" required className="h-11 text-sm bg-secondary/20 border-none ring-1 ring-border" />
              </div>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="pais" className="text-[10px] font-black uppercase">País</Label>
              <Input id="pais" value="ECUADOR" readOnly className="h-11 text-sm bg-secondary/10 border-none ring-1 ring-border font-bold text-muted-foreground" />
            </div>
          </div>

          {/* TARJETA DE ATENCIÓN */}
          <div className="bg-amber-50 border-2 border-amber-200 p-4 rounded-2xl space-y-2">
            <div className="flex items-center gap-2 text-amber-600">
              <AlertTriangle className="h-4 w-4" />
              <span className="font-black text-xs uppercase">⚠️ ATENCIÓN ⚠️</span>
            </div>
            <p className="text-[11px] font-medium text-amber-800 leading-tight">
              *Tu pedido únicamente podrá salir de la bodega si tus datos están completos. Por favor, verifica que tu dirección esté correcta antes de continuar.
            </p>
          </div>

          <Button type="submit" disabled={loading} className="w-full h-14 text-lg font-black uppercase bg-accent hover:bg-accent/90 shadow-xl rounded-2xl animate-heartbeat">
            {loading ? "PROCESANDO..." : (
              <>
                <ShoppingCart className="mr-2 h-5 w-5" />
                CONFIRMAR MI COMPRA
              </>
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
