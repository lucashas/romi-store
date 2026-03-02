
"use client";

import { useState, useMemo, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { ShoppingCart, Package, Truck, ShieldCheck, Lock } from "lucide-react";
import Image from "next/image";
import { useFirestore } from "@/firebase";
import { collection, addDoc } from "firebase/firestore";
import { errorEmitter } from "@/firebase/error-emitter";
import { FirestorePermissionError } from "@/firebase/errors";
import { useRouter, usePathname } from "next/navigation";

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
  themeColor?: "brown" | "orange";
}

export function PurchasePopup({ open, onOpenChange, products, themeColor = "brown" }: PurchasePopupProps) {
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
  const pathname = usePathname();

  // Colores dinámicos según el producto
  const colors = {
    bg: themeColor === "orange" ? "bg-orange-600" : "bg-primary",
    text: themeColor === "orange" ? "text-orange-600" : "text-primary",
    border: themeColor === "orange" ? "border-orange-600" : "border-primary",
    ring: themeColor === "orange" ? "ring-orange-600" : "ring-primary",
    button: themeColor === "orange" ? "bg-orange-600 hover:bg-orange-700 shadow-orange-200" : "bg-accent hover:bg-accent/90 shadow-accent/20",
    light: themeColor === "orange" ? "bg-orange-50" : "bg-primary/5",
    borderLight: themeColor === "orange" ? "border-orange-100" : "border-primary/10",
  };

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
        description: "Por favor complete todos los campos obligatorios.",
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
      landingPageContentId: pathname.replace("/", "") || "principal"
    };

    try {
      const leadsRef = collection(firestore, "leadSubmissions");
      await addDoc(leadsRef, orderData);
      setLoading(false);
      onOpenChange(false);
      router.push(`/gracias?nombre=${encodeURIComponent(nombre)}&ciudad=${encodeURIComponent(ciudad)}&whatsapp=${encodeURIComponent(whatsapp)}&producto=${encodeURIComponent(product.name)}&back=${encodeURIComponent(pathname)}`);
    } catch (err) {
      setLoading(false);
      errorEmitter.emit("permission-error", new FirestorePermissionError({
        path: "leadSubmissions",
        operation: "create",
        requestResourceData: orderData
      }));
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent 
        className="w-[98%] max-w-[480px] p-0 overflow-hidden rounded-[2.5rem] border-none shadow-2xl font-body bg-white mx-auto !translate-x-[-50%] !left-[50%]"
      >
        <DialogHeader className="sr-only">
          <DialogTitle>Formulario de Compra</DialogTitle>
          <DialogDescription>Ingresa tus datos para registrar tu pedido pago contra entrega.</DialogDescription>
        </DialogHeader>

        <div className="max-h-[85vh] overflow-y-auto">
          <div className={`${colors.bg} p-8 text-white text-center`}>
            <h2 className="text-[20px] font-black uppercase leading-tight tracking-tight px-2">
              ESTÁS A UN PASO DE <br />TU PIEL DE PORCELANA
            </h2>
            <div className="mt-5 flex justify-center">
              <div className="relative h-14 w-full max-w-[300px]">
                <Image 
                  src="https://i.imgur.com/Jh61uYJ.png" 
                  alt="Garantía de Confianza" 
                  fill
                  className="object-contain brightness-0 invert"
                  sizes="300px"
                  priority
                />
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-5 space-y-8 bg-white pb-10">
            <div className="space-y-4">
              <div className={`flex items-center gap-2 ${colors.text} border-b-2 ${colors.borderLight} pb-3`}>
                <Package className="h-6 w-6" />
                <h3 className="font-black uppercase text-[15px] tracking-[0.15em]">PASO 1: ELIGE TU OFERTA</h3>
              </div>
              
              <RadioGroup value={selectedProduct} onValueChange={setSelectedProduct} className="grid gap-4">
                {products.map((product) => (
                  <Label
                    key={product.id}
                    htmlFor={product.id}
                    className={`flex items-center gap-2 p-5 rounded-3xl border-2 transition-all cursor-pointer relative w-full ${
                      selectedProduct === product.id 
                      ? `${colors.border} ${colors.light} shadow-md` 
                      : "border-slate-100 bg-white hover:border-slate-200"
                    }`}
                  >
                    {product.badge && (
                      <div className={`absolute -top-3 right-5 ${themeColor === 'orange' ? 'bg-[#f97316]' : 'bg-accent'} text-white text-[10px] px-4 py-1.5 rounded-full font-black uppercase shadow-lg z-10 animate-pulse border-2 border-white`}>
                        {product.badge}
                      </div>
                    )}
                    
                    <div className="flex items-center gap-4 w-full">
                      <RadioGroupItem value={product.id} id={product.id} className="shrink-0 h-6 w-6" />
                      <div className="h-16 w-16 rounded-2xl overflow-hidden bg-slate-50 border border-slate-100 shrink-0 relative">
                        <Image src={product.image} alt={product.name} fill className="object-cover" sizes="64px" />
                      </div>
                      <div className="flex-1 min-w-0 text-left">
                        <p className="font-black text-[15px] text-slate-900 uppercase leading-tight">{product.name}</p>
                        <p className="text-[11px] text-slate-400 font-bold mt-1 uppercase tracking-tight">{product.description}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <p className={`font-black ${colors.text} text-[24px]`}>${product.price.toFixed(0)}</p>
                      </div>
                    </div>
                  </Label>
                ))}
              </RadioGroup>
            </div>

            <div className="space-y-5">
              <div className={`flex items-center gap-2 ${colors.text} border-b-2 ${colors.borderLight} pb-3`}>
                <Truck className="h-6 w-6" />
                <h3 className="font-black uppercase text-[15px] tracking-[0.15em]">PASO 2: DATOS DE ENVÍO</h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2 text-left">
                  <Label htmlFor="nombre" className="text-[12px] font-black uppercase text-slate-400 tracking-widest">Nombre</Label>
                  <Input 
                    id="nombre" placeholder="Juan" required value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    className="h-14 rounded-2xl bg-slate-50 border-2 border-slate-50 focus:border-orange-500 transition-all font-bold" 
                  />
                </div>
                <div className="space-y-2 text-left">
                  <Label htmlFor="apellido" className="text-[12px] font-black uppercase text-slate-400 tracking-widest">Apellido</Label>
                  <Input 
                    id="apellido" placeholder="Pérez" required value={apellido}
                    onChange={(e) => setApellido(e.target.value)}
                    className="h-14 rounded-2xl bg-slate-50 border-2 border-slate-50 focus:border-orange-500 transition-all font-bold" 
                  />
                </div>
              </div>

              <div className="space-y-2 text-left">
                <Label htmlFor="whatsapp" className="text-[12px] font-black uppercase text-slate-400 tracking-widest">Número de WhatsApp</Label>
                <Input 
                  id="whatsapp" type="tel" placeholder="0999999999" required value={whatsapp}
                  onChange={handleWhatsappChange}
                  className="h-14 rounded-2xl bg-slate-50 border-2 border-slate-50 focus:border-orange-500 transition-all font-bold" 
                />
              </div>

              <div className="space-y-2 text-left">
                <Label htmlFor="direccion" className="text-[12px] font-black uppercase text-slate-400 tracking-widest">Dirección Exacta</Label>
                <Input 
                  id="direccion" placeholder="Calle principal, secundaria y referencia" required value={direccion}
                  onChange={(e) => setDireccion(e.target.value)}
                  className="h-14 rounded-2xl bg-slate-50 border-2 border-slate-50 focus:border-orange-500 transition-all font-bold" 
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2 text-left">
                  <Label className="text-[12px] font-black uppercase text-slate-400 tracking-widest">Provincia</Label>
                  <Select onValueChange={(val) => { setProvincia(val); setCiudad(""); }} required value={provincia}>
                    <SelectTrigger className="h-14 rounded-2xl bg-slate-50 border-2 border-slate-50 font-bold">
                      <SelectValue placeholder="Elegir" />
                    </SelectTrigger>
                    <SelectContent className="max-h-[250px]">
                      {Object.keys(ecuadorData).sort().map((p) => (
                        <SelectItem key={p} value={p}>{p}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2 text-left">
                  <Label className="text-[12px] font-black uppercase text-slate-400 tracking-widest">Ciudad</Label>
                  <Select onValueChange={setCiudad} disabled={!provincia} required value={ciudad}>
                    <SelectTrigger className="h-14 rounded-2xl bg-slate-50 border-2 border-slate-50 font-bold">
                      <SelectValue placeholder={provincia ? "Elegir" : "---"} />
                    </SelectTrigger>
                    <SelectContent className="max-h-[250px]">
                      {ciudadesDisponibles.map((c) => (
                        <SelectItem key={c} value={c}>{c}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <Button 
              type="submit" 
              disabled={loading} 
              className={`w-full h-20 text-xl font-black uppercase rounded-3xl animate-heartbeat mt-4 border-4 border-white shadow-xl ${colors.button}`}
            >
              {loading ? "PROCESANDO..." : (
                <>
                  <ShoppingCart className="mr-3 h-7 w-7" />
                  CONFIRMAR PEDIDO
                </>
              )}
            </Button>

            <div className="flex justify-center items-center gap-8 pt-4 pb-4 opacity-40">
              <ShieldCheck className="h-7 w-7" />
              <Lock className="h-7 w-7" />
              <Truck className="h-7 w-7" />
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
