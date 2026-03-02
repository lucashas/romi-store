"use client";

import { useState, useMemo, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { ShoppingCart, Package, Truck, AlertTriangle, CheckCircle2, Phone } from "lucide-react";
import Image from "next/image";
import { useFirestore } from "@/firebase";
import { collection, addDoc } from "firebase/firestore";
import { errorEmitter } from "@/firebase/error-emitter";
import { FirestorePermissionError } from "@/firebase/errors";

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
  const [submitted, setSubmitted] = useState(false);
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

  useEffect(() => {
    if (!open) {
      setTimeout(() => setSubmitted(false), 300);
    }
  }, [open]);

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
      email: `${whatsapp}@romistore.com`, 
      phoneNumber: whatsapp,
      message: `PRODUCTO: ${product.name} | PRECIO: $${product.price.toFixed(2)} | CIUDAD: ${ciudad} | PROVINCIA: ${provincia} | DIRECCIÓN: ${direccion}`,
      submissionDateTime: new Date().toISOString(),
      landingPageContentId: "main-landing"
    };

    const leadsRef = collection(firestore, "leadSubmissions");
    addDoc(leadsRef, orderData)
      .then(() => {
        setLoading(false);
        setSubmitted(true);
      })
      .catch((err) => {
        setLoading(false);
        errorEmitter.emit("permission-error", new FirestorePermissionError({
          path: "leadSubmissions",
          operation: "create",
          requestResourceData: orderData
        }));
      });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent 
        className="w-[95%] max-w-[450px] p-0 overflow-hidden rounded-[2.5rem] border-none shadow-2xl font-body bg-white mx-auto translate-x-[-50%] left-[50%] overflow-x-hidden"
      >
        <DialogHeader className="sr-only">
          <DialogTitle>Formulario de Compra</DialogTitle>
          <DialogDescription>Ingresa tus datos para registrar tu pedido pago contra entrega.</DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="p-8 text-center space-y-6 animate-in fade-in zoom-in duration-300">
            <div className="flex justify-center">
              <div className="h-20 w-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 shadow-inner">
                <CheckCircle2 className="h-10 w-10" />
              </div>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-2xl font-black text-foreground uppercase leading-tight">
                ¡PEDIDO <span className="text-green-600">RECIBIDO!</span>
              </h3>
              <p className="text-[14px] text-muted-foreground font-medium leading-relaxed">
                Gracias <strong>{nombre}</strong>, tu solicitud ha sido registrada correctamente.
              </p>
            </div>

            <div className="bg-secondary/20 p-5 rounded-3xl border border-secondary/50 text-left space-y-3">
              <p className="text-[11px] font-black uppercase text-primary/70 border-b border-primary/10 pb-1">Pasos a seguir:</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-[12px] font-medium text-foreground">
                  <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary font-bold text-[10px]">1</div>
                  <span>Nuestro equipo validará tu dirección en <strong>{ciudad}</strong>.</span>
                </li>
                <li className="flex items-start gap-3 text-[12px] font-medium text-foreground">
                  <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary font-bold text-[10px]">2</div>
                  <span>Te llamaremos al <strong>{whatsapp}</strong> para confirmar el despacho.</span>
                </li>
                <li className="flex items-start gap-3 text-[12px] font-medium text-foreground">
                  <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary font-bold text-[10px]">3</div>
                  <span>¡Pagas cuando recibas el producto en tu puerta!</span>
                </li>
              </ul>
            </div>

            <Button 
              onClick={() => onOpenChange(false)}
              className="w-full h-14 text-lg font-black uppercase bg-accent hover:bg-accent/90 shadow-xl rounded-[1.2rem]"
            >
              CERRAR Y CONTINUAR
            </Button>
            
            <p className="text-[10px] text-muted-foreground italic">
              * Mantente atento a tu celular para la confirmación de envío.
            </p>
          </div>
        ) : (
          <>
            <div className="bg-primary p-5 text-white text-center">
              <h2 className="text-[14px] font-black uppercase leading-tight tracking-tighter">
                INGRESE SUS DATOS DE FORMA CORRECTA PARA ENVIAR SU PEDIDO
              </h2>
              <p className="text-[11px] font-medium opacity-90 mt-1">
                Pago al recibir en casa • Envío 100% Seguro
              </p>
            </div>

            <form onSubmit={handleSubmit} className="p-4 space-y-5 max-h-[70vh] overflow-y-auto overflow-x-hidden bg-white">
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
                        ? "border-primary bg-primary/5 shadow-sm scale-[1.01]" 
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
                        
                        <div className="h-10 w-10 rounded-xl overflow-hidden bg-secondary/20 border border-secondary shrink-0 relative">
                          <Image 
                            src={product.image} 
                            alt={product.name} 
                            fill 
                            className="object-cover"
                            sizes="40px"
                          />
                        </div>

                        <div className="flex-1 min-w-0 overflow-hidden text-left">
                          <p className="font-black text-[11px] text-foreground uppercase leading-tight truncate">
                            {product.name}
                          </p>
                          <p className="text-[9px] text-muted-foreground font-medium truncate">
                            {product.description}
                          </p>
                        </div>

                        <div className="text-right shrink-0">
                          <p className="font-black text-primary text-[13px]">
                            ${product.price.toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </Label>
                  ))}
                </RadioGroup>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-primary border-b pb-1">
                  <Truck className="h-4 w-4" />
                  <h3 className="font-black uppercase text-[10px] tracking-widest text-primary/80">PASO 2: DATOS DE ENVÍO</h3>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-1 text-left">
                    <Label htmlFor="nombre" className="text-[10px] font-black uppercase text-muted-foreground ml-1">Nombre</Label>
                    <Input 
                      id="nombre" 
                      placeholder="Juan" 
                      required 
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                      className="h-10 rounded-xl bg-secondary/20 border-none ring-1 ring-border text-[13px] w-full" 
                    />
                  </div>
                  <div className="space-y-1 text-left">
                    <Label htmlFor="apellido" className="text-[10px] font-black uppercase text-muted-foreground ml-1">Apellido</Label>
                    <Input 
                      id="apellido" 
                      placeholder="Pérez" 
                      required 
                      value={apellido}
                      onChange={(e) => setApellido(e.target.value)}
                      className="h-10 rounded-xl bg-secondary/20 border-none ring-1 ring-border text-[13px] w-full" 
                    />
                  </div>
                </div>

                <div className="space-y-1 text-left">
                  <Label htmlFor="whatsapp" className="text-[10px] font-black uppercase text-muted-foreground ml-1">WhatsApp (10 dígitos)</Label>
                  <div className="relative">
                    <Input 
                      id="whatsapp" 
                      type="tel" 
                      placeholder="09XXXXXXXX" 
                      required 
                      value={whatsapp}
                      onChange={handleWhatsappChange}
                      className="h-10 rounded-xl bg-secondary/20 border-none ring-1 ring-border text-[13px] pl-3 w-full" 
                    />
                    {whatsapp.length === 10 && <CheckCircle2 className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-green-500" />}
                  </div>
                </div>

                <div className="space-y-1 text-left">
                  <Label htmlFor="direccion" className="text-[10px] font-black uppercase text-muted-foreground ml-1">Dirección Exacta</Label>
                  <Input 
                    id="direccion" 
                    placeholder="Calle, Nro de casa y referencia" 
                    required 
                    value={direccion}
                    onChange={(e) => setDireccion(e.target.value)}
                    className="h-10 rounded-xl bg-secondary/20 border-none ring-1 ring-border text-[13px] w-full" 
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-1 text-left">
                    <Label className="text-[10px] font-black uppercase text-muted-foreground ml-1">Provincia</Label>
                    <Select onValueChange={(val) => { setProvincia(val); setCiudad(""); }} required value={provincia}>
                      <SelectTrigger className="h-10 rounded-xl bg-secondary/20 border-none ring-1 ring-border text-[11px] w-full">
                        <SelectValue placeholder="Elegir" />
                      </SelectTrigger>
                      <SelectContent className="rounded-xl max-h-[180px]">
                        {Object.keys(ecuadorData).sort().map((p) => (
                          <SelectItem key={p} value={p}>{p}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-1 text-left">
                    <Label className="text-[10px] font-black uppercase text-muted-foreground ml-1">Ciudad</Label>
                    <Select onValueChange={setCiudad} disabled={!provincia} required value={ciudad}>
                      <SelectTrigger className="h-10 rounded-xl bg-secondary/20 border-none ring-1 ring-border text-[11px] w-full">
                        <SelectValue placeholder={provincia ? "Elegir" : "---"} />
                      </SelectTrigger>
                      <SelectContent className="rounded-xl max-h-[160px]">
                        {ciudadesDisponibles.map((c) => (
                          <SelectItem key={c} value={c}>{c}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-100 p-3 rounded-2xl space-y-1 text-left">
                <div className="flex items-center gap-2 text-amber-600">
                  <AlertTriangle className="h-3 w-3" />
                  <span className="font-black text-[9px] uppercase tracking-tighter">⚠️ VERIFICA TUS DATOS ⚠️</span>
                </div>
                <p className="text-[9px] font-medium text-amber-800/80 leading-tight italic">
                  Al confirmar, tu pedido se registrará y te llamaremos para coordinar la entrega.
                </p>
              </div>

              <Button 
                type="submit" 
                disabled={loading} 
                className="w-full h-14 text-lg font-black uppercase bg-accent hover:bg-accent/90 shadow-2xl rounded-[1.2rem] animate-heartbeat"
              >
                {loading ? "REGISTRANDO..." : (
                  <>
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    CONFIRMAR COMPRA
                  </>
                )}
              </Button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
