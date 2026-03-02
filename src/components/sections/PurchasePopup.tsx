
"use client";

import { useState, useMemo, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { ShoppingCart, Package, Truck, AlertTriangle, CheckCircle2, ShieldCheck, Lock } from "lucide-react";
import Image from "next/image";
import { useFirestore } from "@/firebase";
import { collection, addDoc } from "firebase/firestore";
import { errorEmitter } from "@/firebase/error-emitter";
import { FirestorePermissionError } from "@/firebase/errors";
import { useRouter } from "next/navigation";

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
  const router = useRouter();

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

    if (!nombre.trim() || !apellido.trim() || !whatsapp.trim() || !direccion.trim() || !provincia || !ciudad) {
      toast({
        variant: "destructive",
        title: "DATOS FALTANTES",
        description: "Por favor complete todos los campos obligatorios para confirmar su pedido.",
      });
      return;
    }

    if (whatsapp.length !== 10) {
      toast({
        variant: "destructive",
        title: "NÚMERO INVÁLIDO",
        description: "El WhatsApp debe tener 10 dígitos (ej: 09XXXXXXXX).",
      });
      return;
    }

    const product = products.find(p => p.id === selectedProduct);
    if (!product) return;

    setLoading(true);

    const orderData = {
      name: `${nombre.trim()} ${apellido.trim()}`,
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
        router.push(`/gracias?nombre=${encodeURIComponent(nombre)}&ciudad=${encodeURIComponent(ciudad)}&whatsapp=${encodeURIComponent(whatsapp)}`);
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
        className="w-[98%] max-w-[480px] p-0 overflow-hidden rounded-[2rem] border-none shadow-2xl font-body bg-white mx-auto !translate-x-[-50%] !left-[50%]"
      >
        <DialogHeader className="sr-only">
          <DialogTitle>Formulario de Compra</DialogTitle>
          <DialogDescription>Ingresa tus datos para registrar tu pedido pago contra entrega.</DialogDescription>
        </DialogHeader>

        <div className="max-h-[85vh] overflow-y-auto overflow-x-hidden">
          <div className="bg-primary p-6 text-white text-center">
            <h2 className="text-[18px] font-black uppercase leading-tight tracking-tight px-4">
              INGRESE SUS DATOS CORRECTAMENTE PARA ENVIAR SU PEDIDO
            </h2>
            <p className="text-[14px] font-medium opacity-90 mt-1">
              Pago al recibir en casa • Envío 100% Seguro
            </p>
            
            <div className="mt-4 flex justify-center">
              <div className="relative h-14 w-full max-w-[320px]">
                <Image 
                  src="https://i.imgur.com/Jh61uYJ.png" 
                  alt="Garantía de Confianza" 
                  fill
                  className="object-contain"
                  sizes="320px"
                  priority
                />
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-4 space-y-6 bg-white overflow-x-hidden">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-primary border-b border-primary/10 pb-1.5">
                <Package className="h-6 w-6" />
                <h3 className="font-black uppercase text-[15px] tracking-widest text-primary">PASO 1: ELIGE TU OFERTA</h3>
              </div>
              
              <RadioGroup value={selectedProduct} onValueChange={setSelectedProduct} className="grid gap-4">
                {products.map((product) => (
                  <Label
                    key={product.id}
                    htmlFor={product.id}
                    className={`flex items-center gap-2 p-4 rounded-2xl border-2 transition-all cursor-pointer relative w-full box-border ${
                      selectedProduct === product.id 
                      ? "border-primary bg-primary/5 shadow-sm" 
                      : "border-secondary bg-white hover:border-primary/20"
                    }`}
                  >
                    {product.badge && (
                      <div className="absolute -top-3 right-3 bg-accent text-white text-[11px] px-3 py-1.5 rounded-full font-black uppercase shadow-sm z-10 animate-bounce">
                        {product.badge}
                      </div>
                    )}
                    
                    <div className="flex items-center gap-4 w-full">
                      <RadioGroupItem value={product.id} id={product.id} className="shrink-0 h-6 w-6" />
                      
                      <div className="h-14 w-14 rounded-xl overflow-hidden bg-secondary/20 border border-secondary shrink-0 relative">
                        <Image 
                          src={product.image} 
                          alt={product.name} 
                          fill 
                          className="object-cover"
                          sizes="56px"
                        />
                      </div>

                      <div className="flex-1 min-w-0 text-left">
                        <p className="font-black text-[15px] text-foreground uppercase leading-tight">
                          {product.name}
                        </p>
                        <p className="text-[12px] text-muted-foreground font-medium mt-0.5">
                          {product.description}
                        </p>
                      </div>

                      <div className="text-right shrink-0">
                        <p className="font-black text-primary text-[22px]">
                          ${product.price.toFixed(0)}
                        </p>
                      </div>
                    </div>
                  </Label>
                ))}
              </RadioGroup>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2 text-primary border-b border-primary/10 pb-1.5">
                <Truck className="h-6 w-6" />
                <h3 className="font-black uppercase text-[15px] tracking-widest text-primary">PASO 2: DATOS DE ENVÍO</h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5 text-left">
                  <Label htmlFor="nombre" className="text-[14px] font-black uppercase text-muted-foreground ml-1">Nombre</Label>
                  <Input 
                    id="nombre" 
                    placeholder="Juan" 
                    required 
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    className="h-14 rounded-xl bg-secondary/20 border-none ring-1 ring-border text-[16px] w-full px-4 focus:ring-primary focus:bg-white" 
                  />
                </div>
                <div className="space-y-1.5 text-left">
                  <Label htmlFor="apellido" className="text-[14px] font-black uppercase text-muted-foreground ml-1">Apellido</Label>
                  <Input 
                    id="apellido" 
                    placeholder="Pérez" 
                    required 
                    value={apellido}
                    onChange={(e) => setApellido(e.target.value)}
                    className="h-14 rounded-xl bg-secondary/20 border-none ring-1 ring-border text-[16px] w-full px-4 focus:ring-primary focus:bg-white" 
                  />
                </div>
              </div>

              <div className="space-y-1.5 text-left">
                <Label htmlFor="whatsapp" className="text-[14px] font-black uppercase text-muted-foreground ml-1">Número de WhatsApp (para notificaciones de envío)</Label>
                <div className="relative">
                  <Input 
                    id="whatsapp" 
                    type="tel" 
                    placeholder="Ingresa tu celular" 
                    required 
                    value={whatsapp}
                    onChange={handleWhatsappChange}
                    className="h-14 rounded-xl bg-secondary/20 border-none ring-1 ring-border text-[16px] pl-4 pr-10 w-full focus:ring-primary focus:bg-white" 
                  />
                  {whatsapp.length === 10 && <CheckCircle2 className="absolute right-3 top-1/2 -translate-y-1/2 h-6 w-6 text-green-500" />}
                </div>
              </div>

              <div className="space-y-1.5 text-left">
                <Label htmlFor="direccion" className="text-[14px] font-black uppercase text-muted-foreground ml-1">Dirección Entrega: (2 calles y una referencia para el envío a domicilio)</Label>
                <Input 
                  id="direccion" 
                  placeholder="Calle, Nro de casa y referencia" 
                  required 
                  value={direccion}
                  onChange={(e) => setDireccion(e.target.value)}
                  className="h-14 rounded-xl bg-secondary/20 border-none ring-1 ring-border text-[16px] w-full px-4 focus:ring-primary focus:bg-white" 
                />
                <p className="text-[12px] text-muted-foreground font-medium italic mt-1 px-1 leading-tight text-left">
                  Ejemplo: Av. Vicente y Jose Albaca al frente del supermaxi casa de 2 pisos, # 23-3, color blanco, barrio La Pradera bloque #...
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5 text-left">
                  <Label className="text-[14px] font-black uppercase text-muted-foreground ml-1">Provincia</Label>
                  <Select onValueChange={(val) => { setProvincia(val); setCiudad(""); }} required value={provincia}>
                    <SelectTrigger className="h-14 rounded-xl bg-secondary/20 border-none ring-1 ring-border text-[15px] w-full px-4 focus:ring-primary">
                      <SelectValue placeholder="Elegir" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl max-h-[250px]">
                      {Object.keys(ecuadorData).sort().map((p) => (
                        <SelectItem key={p} value={p}>{p}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-1.5 text-left">
                  <Label className="text-[14px] font-black uppercase text-muted-foreground ml-1">Ciudad</Label>
                  <Select onValueChange={setCiudad} disabled={!provincia} required value={ciudad}>
                    <SelectTrigger className="h-14 rounded-xl bg-secondary/20 border-none ring-1 ring-border text-[15px] w-full px-4 focus:ring-primary">
                      <SelectValue placeholder={provincia ? "Elegir" : "---"} />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl max-h-[250px]">
                      {ciudadesDisponibles.map((c) => (
                        <SelectItem key={c} value={c}>{c}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 border-2 border-amber-100 p-6 rounded-2xl space-y-4 text-center">
              <div className="flex items-center justify-center gap-2 text-amber-600">
                <AlertTriangle className="h-6 w-6" />
                <span className="font-black text-[16px] uppercase tracking-tighter">⚠️ VERIFICA TUS DATOS ⚠️</span>
              </div>
              <div className="space-y-3">
                <p className="text-[16px] font-black text-amber-900 leading-tight">
                  Al confirmar, tu pedido se registrará y te escribiremos via whatsapp para coordinar la entrega.
                </p>
                <p className="text-[15px] font-bold text-amber-800 leading-tight">
                  Una vez realizada la compra, la empresa pagará el flete de tu producto a la transportadora. Por favor, comprometete con tu compra, así como nosotros lo hacemos brindándote el mejor servicio.
                </p>
              </div>
            </div>

            <Button 
              type="submit" 
              disabled={loading} 
              className="w-full h-16 text-xl font-black uppercase bg-accent hover:bg-accent/90 shadow-xl rounded-[1rem] animate-heartbeat mt-2"
            >
              {loading ? "REGISTRANDO..." : (
                <>
                  <ShoppingCart className="mr-2 h-6 w-6" />
                  CONFIRMAR COMPRA
                </>
              )}
            </Button>

            <div className="flex justify-center items-center gap-6 pt-2 pb-6 opacity-60 grayscale scale-90">
              <div className="flex flex-col items-center gap-1">
                <ShieldCheck className="h-6 w-6" />
                <span className="text-[9px] font-black uppercase">Seguro</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <Lock className="h-6 w-6" />
                <span className="text-[9px] font-black uppercase">Privado</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <Truck className="h-6 w-6" />
                <span className="text-[9px] font-black uppercase">Ecuador</span>
              </div>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
