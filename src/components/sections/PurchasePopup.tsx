
"use client";

import { useState, useMemo, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { ShoppingCart, Package, Truck, AlertTriangle, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { useFirestore } from "@/firebase";
import { collection, addDoc } from "firebase/firestore";
import { errorEmitter } from "@/firebase/error-emitter";
import { FirestorePermissionError } from "@/firebase/errors";

/**
 * 📱 CONFIGURACIÓN DE RECEPCIÓN DE PEDIDOS
 * Tu número de WhatsApp Business (formato internacional sin el +)
 */
const VENDEDOR_WHATSAPP = "593959461399"; 

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  badge: string | null;
  description: string;
}

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
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [direccion, setDireccion] = useState("");
  const [provincia, setProvincia] = useState<string>("");
  const [ciudad, setCiudad] = useState<string>("");
  const [whatsapp, setWhatsapp] = useState<string>("");
  const [selectedProduct, setSelectedProduct] = useState("");
  const { toast } = useToast();
  const firestore = useFirestore();

  useEffect(() => {
    if (open && products.length > 0 && !selectedProduct) {
      setSelectedProduct(products[0].id);
    }
  }, [open, products, selectedProduct]);

  const ciudadesDisponibles = useMemo(() => {
    return provincia ? ecuadorData[provincia].sort() : [];
  }, [provincia]);

  const handleWhatsappChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 10);
    setWhatsapp(value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (whatsapp.length !== 10) {
      toast({
        variant: "destructive",
        title: "NÚMERO INVÁLIDO",
        description: "El WhatsApp debe tener exactamente 10 dígitos.",
      });
      return;
    }

    const product = products.find(p => p.id === selectedProduct);
    if (!product) return;

    setLoading(true);

    const orderData = {
      name: `${nombre} ${apellido}`,
      email: `${whatsapp}@tienda.com`, // Email dummy para el esquema LeadSubmission
      phoneNumber: whatsapp,
      message: `PRODUCTO: ${product.name} | PRECIO: $${product.price.toFixed(2)} | CIUDAD: ${ciudad} | PROVINCIA: ${provincia} | DIRECCIÓN: ${direccion}`,
      submissionDateTime: new Date().toISOString(),
      landingPageContentId: "main-landing"
    };

    // 1. Guardar en Base de Datos (Funnelish Mode)
    // Esto asegura que si el cliente no envía el WhatsApp, tú ya tengas sus datos.
    const leadsRef = collection(firestore, "leadSubmissions");
    addDoc(leadsRef, orderData).catch((err) => {
      errorEmitter.emit("permission-error", new FirestorePermissionError({
        path: "leadSubmissions",
        operation: "create",
        requestResourceData: orderData
      }));
    });

    // 2. Construcción del mensaje para WhatsApp
    const message = `¡Hola! Acabo de realizar un pedido desde la tienda:\n\n` +
      `📦 *PRODUCTO:* ${product.name}\n` +
      `💰 *PRECIO:* $${product.price.toFixed(2)}\n\n` +
      `👤 *CLIENTE:* ${nombre} ${apellido}\n` +
      `📱 *WHATSAPP:* ${whatsapp}\n` +
      `📍 *PROVINCIA:* ${provincia}\n` +
      `🏙️ *CIUDAD:* ${ciudad}\n` +
      `🏠 *DIRECCIÓN:* ${direccion}\n\n` +
      `*PAGO AL RECIBIR*`;

    const whatsappUrl = `https://wa.me/${VENDEDOR_WHATSAPP}?text=${encodeURIComponent(message)}`;

    // Pequeño delay para asegurar que el usuario vea el éxito antes de redirigir
    setTimeout(() => {
      setLoading(false);
      onOpenChange(false);
      
      // Redirigir a WhatsApp
      window.open(whatsappUrl, '_blank');

      toast({
        title: "¡PEDIDO REGISTRADO!",
        description: "Tus datos han sido guardados. Ahora abre WhatsApp para el envío.",
      });

      // Limpiar campos
      setNombre("");
      setApellido("");
      setDireccion("");
      setWhatsapp("");
      setProvincia("");
      setCiudad("");
    }, 800);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent 
        className="w-[95%] max-w-[450px] p-0 overflow-hidden rounded-[2.5rem] border-none shadow-2xl font-body bg-white mx-auto translate-x-[-50%] left-[50%]"
      >
        <DialogHeader className="bg-primary p-5 text-white text-center">
          <DialogTitle className="text-[14px] font-black uppercase leading-tight tracking-tighter">
            INGRESE SUS DATOS DE FORMA CORRECTA PARA ENVIAR SU PEDIDO
          </DialogTitle>
          <DialogDescription className="sr-only">
            Formulario de pedido para pago al recibir en toda la puerta de tu casa.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="p-4 space-y-5 max-h-[70vh] overflow-y-auto overflow-x-hidden bg-white custom-scrollbar">
          {/* PASO 1: PRODUCTOS */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-primary border-b pb-1">
              <Package className="h-4 w-4" />
              <h3 className="font-black uppercase text-[10px] tracking-widest text-primary/80">PASO 1: ELIGE TU OFERTA</h3>
            </div>
            
            <RadioGroup value={selectedProduct} onValueChange={setSelectedProduct} className="grid gap-2">
              {products.map((product) => (
                <Label
                  key={product.id}
                  htmlFor={product.id}
                  className={`flex items-center gap-2 p-3 rounded-2xl border-2 transition-all cursor-pointer relative w-full box-border ${
                    selectedProduct === product.id 
                    ? "border-primary bg-primary/5 shadow-sm scale-[1.02]" 
                    : "border-secondary bg-white hover:border-primary/20"
                  }`}
                >
                  {product.badge && (
                    <div className="absolute -top-2 right-2 bg-accent text-white text-[9px] px-2.5 py-1 rounded-full font-black uppercase shadow-sm z-10 animate-bounce">
                      {product.badge}
                    </div>
                  )}
                  
                  <div className="flex items-center gap-3 w-full overflow-hidden">
                    <RadioGroupItem value={product.id} id={product.id} className="shrink-0" />
                    
                    <div className="h-12 w-12 rounded-xl overflow-hidden bg-secondary/20 border border-secondary shrink-0 relative">
                      <Image 
                        src={product.image} 
                        alt={product.name} 
                        fill 
                        className="object-cover"
                        sizes="48px"
                      />
                    </div>

                    <div className="flex-1 min-w-0 overflow-hidden">
                      <p className="font-black text-[12px] text-foreground uppercase leading-tight truncate">
                        {product.name}
                      </p>
                      <p className="text-[10px] text-muted-foreground font-medium truncate">
                        {product.description}
                      </p>
                    </div>

                    <div className="text-right shrink-0">
                      <p className="font-black text-primary text-[14px]">
                        ${product.price.toFixed(2)}
                      </p>
                    </div>
                  </div>
                </Label>
              ))}
            </RadioGroup>
          </div>

          {/* PASO 2: DATOS DE ENVÍO */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-primary border-b pb-1">
              <Truck className="h-4 w-4" />
              <h3 className="font-black uppercase text-[10px] tracking-widest text-primary/80">PASO 2: DATOS DE ENVÍO</h3>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="space-y-1">
                <Label htmlFor="nombre" className="text-[10px] font-black uppercase text-muted-foreground ml-1">Nombre</Label>
                <Input 
                  id="nombre" 
                  placeholder="Ej: Juan" 
                  required 
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  className="h-11 rounded-xl bg-secondary/20 border-none ring-1 ring-border text-[14px] w-full" 
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="apellido" className="text-[10px] font-black uppercase text-muted-foreground ml-1">Apellido</Label>
                <Input 
                  id="apellido" 
                  placeholder="Ej: Pérez" 
                  required 
                  value={apellido}
                  onChange={(e) => setApellido(e.target.value)}
                  className="h-11 rounded-xl bg-secondary/20 border-none ring-1 ring-border text-[14px] w-full" 
                />
              </div>
            </div>

            <div className="space-y-1">
              <Label htmlFor="whatsapp" className="text-[10px] font-black uppercase text-muted-foreground ml-1">WhatsApp (10 dígitos)</Label>
              <div className="relative">
                <Input 
                  id="whatsapp" 
                  type="tel" 
                  placeholder="09XXXXXXXX" 
                  required 
                  value={whatsapp}
                  onChange={handleWhatsappChange}
                  className="h-11 rounded-xl bg-secondary/20 border-none ring-1 ring-border text-[14px] pl-3 w-full" 
                />
                {whatsapp.length === 10 && <CheckCircle2 className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-green-500" />}
              </div>
            </div>

            <div className="space-y-1">
              <Label htmlFor="direccion" className="text-[10px] font-black uppercase text-muted-foreground ml-1">Dirección Exacta</Label>
              <Input 
                id="direccion" 
                placeholder="Calle y Nro de casa" 
                required 
                value={direccion}
                onChange={(e) => setDireccion(e.target.value)}
                className="h-11 rounded-xl bg-secondary/20 border-none ring-1 ring-border text-[14px] w-full" 
              />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="space-y-1">
                <Label className="text-[10px] font-black uppercase text-muted-foreground ml-1">Provincia</Label>
                <Select onValueChange={(val) => { setProvincia(val); setCiudad(""); }} required value={provincia}>
                  <SelectTrigger className="h-11 rounded-xl bg-secondary/20 border-none ring-1 ring-border text-[12px] w-full">
                    <SelectValue placeholder="Elegir" />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl max-h-[200px]">
                    {Object.keys(ecuadorData).sort().map((p) => (
                      <SelectItem key={p} value={p}>{p}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1">
                <Label className="text-[10px] font-black uppercase text-muted-foreground ml-1">Ciudad</Label>
                <Select onValueChange={setCiudad} disabled={!provincia} required value={ciudad}>
                  <SelectTrigger className="h-11 rounded-xl bg-secondary/20 border-none ring-1 ring-border text-[12px] w-full">
                    <SelectValue placeholder={provincia ? "Elegir" : "---"} />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl max-h-[180px]">
                    {ciudadesDisponibles.map((c) => (
                      <SelectItem key={c} value={c}>{c}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* ADVERTENCIA */}
          <div className="bg-amber-50 border border-amber-100 p-4 rounded-2xl space-y-1">
            <div className="flex items-center gap-2 text-amber-600">
              <AlertTriangle className="h-4 w-4" />
              <span className="font-black text-[10px] uppercase tracking-tighter">⚠️ ATENCIÓN ⚠️</span>
            </div>
            <p className="text-[10px] font-medium text-amber-800/80 leading-snug italic">
              *Al confirmar, tu pedido se guardará y te redirigiremos a WhatsApp para finalizar.
            </p>
          </div>

          <Button 
            type="submit" 
            disabled={loading} 
            className="w-full h-16 text-xl font-black uppercase bg-accent hover:bg-accent/90 shadow-2xl rounded-[1.5rem] animate-heartbeat"
          >
            {loading ? "REGISTRANDO..." : (
              <>
                <ShoppingCart className="mr-2 h-6 w-6" />
                CONFIRMAR COMPRA
              </>
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
