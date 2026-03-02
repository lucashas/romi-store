
"use client";

import { useState, useMemo, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { ShoppingCart, Package, Truck, AlertTriangle, CheckCircle2 } from "lucide-react";
import Image from "next/image";

// Estructura de datos para los productos
export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  badge: string | null;
  description: string;
}

// Base de datos completa de Provincias y Ciudades (Cantones) de Ecuador
const ecuadorData: Record<string, string[]> = {
  "AZUAY": ["CUENCA", "GUALACEO", "PAUTE", "CAMILO PONCE ENRIQUEZ", "SIGSIG", "CHORDELEG", "GIRON", "SANTA ISABEL", "NABON", "PUCARA", "OÑA", "SEVILLA DE ORO", "GUACHAPALA", "EL PAN"],
  "BOLIVAR": ["GUARANDA", "SAN MIGUEL", "CHILLANES", "ECHEANDIA", "CALUMA", "CHIMBO", "LAS NAVES"],
  "CAÑAR": ["AZOGUES", "CAÑAR", "LA TRONCAL", "BIBLIAN", "DELEG", "EL TAMBO", "SUSCAL"],
  "CARCHI": ["TULCAN", "MONTUFAR", "ESPEJO", "BOLIVAR", "MIRA", "HUACA"],
  "CHIMBORAZO": ["RIOBAMBA", "GUANO", "COLTA", "ALAUSI", "CHAMBO", "CUMANDA", "GUAMOTE", "PALLATANGA", "PENIPE", "CHUNCHI"],
  "COTOPAXI": ["LATACUNGA", "PUJILI", "SALCEDO", "LA MANA", "SAQUISILI", "SIGCHOS", "PANGUA"],
  "EL ORO": ["MACHALA", "PASAJE", "HUAQUILLAS", "SANTA ROSA", "ARENILLAS", "BALSAS", "CHILLA", "EL GUABO", "LAS LAJAS", "MARCABELI", "PIÑAS", "PORTOVELO", "ZARUMA", "ATAHUALPA"],
  "ESMERALDAS": ["ESMERALDAS", "QUININDE", "ATACAMES", "SAN LORENZO", "ELOY ALFARO", "MUISNE", "RIO VERDE"],
  "GALAPAGOS": ["PUERTO BAQUERIZO MORENO", "PUERTO AYORA", "PUERTO VILLAMIL"],
  "GUAYAS": ["GUAYAQUIL", "SAMBORONDON", "DURAN", "DAULE", "MILAGRO", "PLAYAS", "NARANJAL", "EL EMPALME", "BALZAR", "BALAO", "COLIMES", "CORONEL MARCELINO MARIDUEÑA", "EL TRIUNFO", "GENERAL ANTONIO ELIZALDE", "ISIDRO AYORA", "LOMAS DE SARGENTILLO", "NARANJITO", "NOBOL", "PALESTINA", "PEDRO CHUNCHI", "SANTA LUCIA", "SIMON BOLIVAR", "YAGUACHI", "SALITRE"],
  "IMBABURA": ["IBARRA", "OTAVALO", "COTACACHI", "ANTONIO ANTE", "PIMAMPIRO", "URCUQUI"],
  "LOJA": ["LOJA", "CATAMAYO", "CALVAS", "SARAGURO", "MACARA", "CELICA", "CHAGUARPAMBA", "ESPINDOLA", "GONZANAMA", "PALTAS", "PUYANGO", "QUILANGA", "PINDAL", "SOZORANGA", "ZAPOTILLO", "OLMEDO"],
  "LOS RIOS": ["BABAHOYO", "QUEVEDO", "BABA", "VINCES", "VENTANAS", "MOCACHE", "BUENA FE", "PALENQUE", "PUEBLOVIEJO", "URDANETA", "VALENCIA", "QUINSALOMA", "MONTALVO"],
  "MANABI": ["PORTOVIEJO", "MANTA", "CHONE", "MONTECRISTI", "JIPIJAPA", "BAHIA DE CARAQUEZ", "BOLIVAR", "EL CARMEN", "FLAVIO ALFARO", "JAMA", "JARAMIJO", "JUNIN", "OLMEDO", "PAJAN", "PEDERNALES", "PICHINCHA", "ROCAFUERTE", "SANTA ANA", "SUCRE", "TOSAGUA", "24 DE MAYO", "PUERTO LOPEZ"],
  "MORONA SANTIAGO": ["MACAS", "GUALAQUIZA", "SUCUA", "SANTIAGO", "HUAMBOYA", "LIMON INDANZA", "LOGROÑO", "PABLO SEXTO", "PALORA", "SAN JUAN BOSCO", "TAISHA", "TIWINTZA"],
  "NAPO": ["TENA", "ARCHIDONA", "EL CHACO", "QUIJOS", "CARLOS JULIO AROSEMENA TOLA"],
  "ORELLANA": ["PUERTO FRANCISCO DE ORELLANA", "LA JOYA DE LOS SACHAS", "LORETO", "AGUARICO"],
  "PASTAZA": ["PUYO", "MERA", "SANTA CLARA", "ARAJUNO"],
  "PICHINCHA": ["QUITO", "SANGOLQUI", "MACHACHI", "CAYAMBE", "TABACUNDO", "PEDRO MONCAYO", "PEDRO VICENTE MALDONADO", "PUERTO QUITO", "SAN MIGUEL DE LOS BANCOS"],
  "SANTA ELENA": ["SANTA ELENA", "SALINAS", "LA LIBERTAD"],
  "SANTO DOMINGO DE LOS TSACHILAS": ["SANTO DOMINGO", "LA CONCORDIA"],
  "SUCUMBIOS": ["NUEVA LOJA", "SHUSHUFINDI", "CASCALES", "CUYABENO", "GONZALOP IZARRO", "PUTUMAYO", "SUCUMBIOS"],
  "TUNGURAHUA": ["AMBATO", "BAÑOS", "PELILEO", "PILLARO", "CEVALLOS", "MOCHA", "QUERO", "TISALEO", "PATATE"],
  "ZAMORA CHINCHIPE": ["ZAMORA", "YANTZAZA", "EL PANGUI", "CENTINELA DEL CONDOR", "CHINCHIPE", "NANGARITZA", "PALANDA", "PAQUISHA", "YACUAMBI"]
};

interface PurchasePopupProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  products: Product[];
}

export function PurchasePopup({ open, onOpenChange, products }: PurchasePopupProps) {
  const [loading, setLoading] = useState(false);
  const [provincia, setProvincia] = useState<string>("");
  const [ciudad, setCiudad] = useState<string>("");
  const [whatsapp, setWhatsapp] = useState<string>("");
  const [selectedProduct, setSelectedProduct] = useState("");
  const { toast } = useToast();

  useEffect(() => {
    if (open && products.length > 0 && !selectedProduct) {
      setSelectedProduct(products[0].id);
    }
  }, [open, products, selectedProduct]);

  const ciudadesDisponibles = useMemo(() => {
    return provincia ? ecuadorData[provincia].sort() : [];
  }, [provincia]);

  const handleWhatsappChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Solo permitir números y máximo 10 dígitos
    const value = e.target.value.replace(/\D/g, "").slice(0, 10);
    setWhatsapp(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (whatsapp.length !== 10) {
      toast({
        variant: "destructive",
        title: "NÚMERO INVÁLIDO",
        description: "El WhatsApp debe tener exactamente 10 dígitos.",
      });
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onOpenChange(false);
      toast({
        title: "¡PEDIDO RECIBIDO!",
        description: "En breve nos contactaremos por WhatsApp para coordinar la entrega.",
      });
      setWhatsapp("");
      setProvincia("");
      setCiudad("");
    }, 2000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[500px] w-[95%] p-0 overflow-hidden rounded-[2.5rem] border-none shadow-2xl font-body">
        <DialogHeader className="bg-primary p-6 text-white text-center">
          <DialogTitle className="text-lg font-black uppercase leading-tight tracking-tighter">
            INGRESE SUS DATOS DE FORMA CORRECTA PARA ENVIAR SU PEDIDO
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="p-6 space-y-8 max-h-[75vh] overflow-y-auto bg-white">
          {/* PASO 1: PRODUCTOS DINÁMICOS */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-primary border-b pb-2">
              <Package className="h-5 w-5" />
              <h3 className="font-black uppercase text-sm tracking-widest">PASO 1: ELIGE TU OFERTA</h3>
            </div>
            
            <RadioGroup value={selectedProduct} onValueChange={setSelectedProduct} className="grid gap-4">
              {products.map((product) => (
                <Label
                  key={product.id}
                  htmlFor={product.id}
                  className={`flex items-center gap-4 p-4 rounded-3xl border-2 transition-all cursor-pointer relative ${
                    selectedProduct === product.id 
                    ? "border-primary bg-primary/5 shadow-inner" 
                    : "border-secondary bg-white hover:border-primary/30"
                  }`}
                >
                  {product.badge && (
                    <div className="absolute -top-3 right-6 bg-accent text-white text-[10px] px-4 py-1 rounded-full font-black uppercase shadow-lg animate-pulse z-10">
                      {product.badge}
                    </div>
                  )}
                  
                  <div className="flex items-center gap-3 w-full">
                    <RadioGroupItem value={product.id} id={product.id} className="shrink-0" />
                    
                    <div className="h-14 w-14 rounded-xl overflow-hidden bg-secondary/20 border border-secondary shrink-0 relative">
                      <Image 
                        src={product.image} 
                        alt={product.name} 
                        fill 
                        className="object-cover"
                        sizes="56px"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <p className="font-black text-[13px] text-foreground uppercase leading-tight truncate">
                        {product.name}
                      </p>
                      <p className="text-[10px] text-muted-foreground font-medium">
                        {product.description}
                      </p>
                    </div>

                    <div className="text-right">
                      <p className="font-black text-primary text-base">
                        ${product.price.toFixed(2)}
                      </p>
                    </div>
                  </div>
                </Label>
              ))}
            </RadioGroup>
          </div>

          {/* PASO 2: DATOS DE ENVÍO */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-primary border-b pb-2">
              <Truck className="h-5 w-5" />
              <h3 className="font-black uppercase text-sm tracking-widest">PASO 2: DATOS DE ENVÍO</h3>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="nombre" className="text-[11px] font-black uppercase text-muted-foreground ml-1">Nombre</Label>
                <Input id="nombre" placeholder="Ej: Juan" required className="h-12 rounded-2xl bg-secondary/20 border-none ring-1 ring-border focus-visible:ring-primary" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="apellido" className="text-[11px] font-black uppercase text-muted-foreground ml-1">Apellido</Label>
                <Input id="apellido" placeholder="Ej: Pérez" required className="h-12 rounded-2xl bg-secondary/20 border-none ring-1 ring-border focus-visible:ring-primary" />
              </div>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="whatsapp" className="text-[11px] font-black uppercase text-muted-foreground ml-1">WhatsApp (10 dígitos)</Label>
              <div className="relative">
                <Input 
                  id="whatsapp" 
                  type="tel" 
                  placeholder="09XXXXXXXX" 
                  required 
                  value={whatsapp}
                  onChange={handleWhatsappChange}
                  className="h-12 rounded-2xl bg-secondary/20 border-none ring-1 ring-border focus-visible:ring-primary pl-4" 
                />
                {whatsapp.length === 10 && <CheckCircle2 className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-green-500" />}
              </div>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="direccion" className="text-[11px] font-black uppercase text-muted-foreground ml-1">Dirección de Entrega</Label>
              <Input id="direccion" placeholder="Calle principal y transversal" required className="h-12 rounded-2xl bg-secondary/20 border-none ring-1 ring-border focus-visible:ring-primary" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label className="text-[11px] font-black uppercase text-muted-foreground ml-1">Provincia</Label>
                <Select onValueChange={(val) => { setProvincia(val); setCiudad(""); }} required>
                  <SelectTrigger className="h-12 rounded-2xl bg-secondary/20 border-none ring-1 ring-border">
                    <SelectValue placeholder="Seleccione" />
                  </SelectTrigger>
                  <SelectContent className="rounded-2xl max-h-[300px]">
                    {Object.keys(ecuadorData).sort().map((p) => (
                      <SelectItem key={p} value={p}>{p}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1.5">
                <Label className="text-[11px] font-black uppercase text-muted-foreground ml-1">Ciudad</Label>
                <Select onValueChange={setCiudad} disabled={!provincia} required value={ciudad}>
                  <SelectTrigger className="h-12 rounded-2xl bg-secondary/20 border-none ring-1 ring-border">
                    <SelectValue placeholder={provincia ? "Seleccione" : "---"} />
                  </SelectTrigger>
                  <SelectContent className="rounded-2xl max-h-[250px]">
                    {ciudadesDisponibles.map((c) => (
                      <SelectItem key={c} value={c}>{c}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="pais" className="text-[11px] font-black uppercase text-muted-foreground ml-1">País</Label>
              <Input id="pais" value="ECUADOR" readOnly className="h-12 rounded-2xl bg-secondary/10 border-none ring-1 ring-border font-bold text-muted-foreground/50" />
            </div>
          </div>

          {/* TARJETA DE ADVERTENCIA */}
          <div className="bg-amber-50 border-2 border-amber-100 p-5 rounded-[2rem] space-y-2">
            <div className="flex items-center gap-2 text-amber-600">
              <AlertTriangle className="h-5 w-5" />
              <span className="font-black text-xs uppercase tracking-tighter">⚠️ ATENCIÓN ⚠️</span>
            </div>
            <p className="text-[11px] font-medium text-amber-800/80 leading-relaxed italic">
              *Tu pedido únicamente podrá salir de la bodega si tus datos están completos. Por favor, verifica que tu dirección esté correcta antes de continuar.
            </p>
          </div>

          <Button 
            type="submit" 
            disabled={loading} 
            className="w-full h-16 text-xl font-black uppercase bg-accent hover:bg-accent/90 shadow-[0_10px_30px_rgba(239,68,68,0.3)] rounded-[2rem] animate-heartbeat"
          >
            {loading ? "PROCESANDO PEDIDO..." : (
              <>
                <ShoppingCart className="mr-2 h-6 w-6" />
                CONFIRMAR MI COMPRA
              </>
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
