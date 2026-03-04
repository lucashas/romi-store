
"use client";

import { useState, useMemo, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { ShoppingCart, Package, Truck, Gift, CheckCircle2, AlertTriangle } from "lucide-react";
import Image from "next/image";
import { useFirestore } from "@/firebase";
import { collection, addDoc } from "firebase/firestore";
import { errorEmitter } from "@/firebase/error-emitter";
import { FirestorePermissionError } from "@/firebase/errors";
import { useRouter, usePathname } from "next/navigation";
import { Checkbox } from "@/components/ui/checkbox";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  badge: string | null;
  description: string;
}

const GIFTS = [
  { id: "gift_contorno", name: "1 Contorno De Ojos Bioaqua Hyalooligo Aci", img: "https://i.imgur.com/15gxrJI.png", desc: "Hidratación profunda" },
  { id: "gift_arroz", name: "1 Jabon Liquido De Arroz Bioaqua", img: "https://i.imgur.com/k2LgSRh.png", desc: "Limpieza y brillo" },
  { id: "gift_pestanas", name: "1 Serum De Pestanas Bioaqua", img: "https://i.imgur.com/NdEF1tQ.png", desc: "Crecimiento intenso" }
];

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
  "GUAYAS": ["GUAYAQUIL", "SAMBORONDON", "DAULE", "DURAN", "MILAGRO", "PLAYAS", "NARANJAL", "EL EMPALME", "BALZAR", "BALAO", "COLIMES", "CORONEL MARCELINO MARIDUEÑA", "EL TRIUNFO", "GENERAL ANTONIO ELIZALDE", "ISIDRO AYORA", "LOMAS DE SARGENTILLO", "NARANJITO", "NOBOL", "PALESTINA", "PEDRO CHUNCHI", "SANTA LUCIA", "SIMON BOLIVAR", "YAGUACHI", "SALITRE"],
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
  themeColor?: "brown" | "orange" | "amber";
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
  const [selectedGift, setSelectedGift] = useState("");
  const [wantsUpsell, setWantsUpsell] = useState(false);
  const [selectedUpsellProduct, setSelectedUpsellProduct] = useState("");
  
  const { toast } = useToast();
  const firestore = useFirestore();
  const router = useRouter();
  const pathname = usePathname();

  // Definición explícita de temas para evitar fallos de renderizado dinámico
  const theme = useMemo(() => {
    if (themeColor === "amber") {
      return {
        bg: "bg-amber-600",
        bgHover: "hover:bg-amber-700",
        text: "text-amber-600",
        border: "border-amber-600",
        borderLight: "border-amber-100",
        ring: "ring-amber-600",
        light: "bg-amber-50",
        button: "bg-amber-600 hover:bg-amber-700 shadow-amber-200",
        checkbox: "data-[state=checked]:bg-amber-600",
      };
    }
    if (themeColor === "orange") {
      return {
        bg: "bg-orange-600",
        bgHover: "hover:bg-orange-700",
        text: "text-orange-600",
        border: "border-orange-600",
        borderLight: "border-orange-100",
        ring: "ring-orange-600",
        light: "bg-orange-50",
        button: "bg-orange-600 hover:bg-orange-700 shadow-orange-200",
        checkbox: "data-[state=checked]:bg-orange-600",
      };
    }
    return {
      bg: "bg-primary",
      bgHover: "hover:bg-primary/90",
      text: "text-primary",
      border: "border-primary",
      borderLight: "border-primary/10",
      ring: "ring-primary",
      light: "bg-primary/5",
      button: "bg-accent hover:bg-accent/90 shadow-accent/20",
      checkbox: "data-[state=checked]:bg-primary",
    };
  }, [themeColor]);

  useEffect(() => {
    if (open && products.length > 0 && !selectedProduct) {
      setSelectedProduct(products[1]?.id || products[0].id);
    }
  }, [open, products, selectedProduct]);

  useEffect(() => {
    if (selectedProduct.includes("_1")) {
      setSelectedGift(""); 
    } else if (selectedProduct.includes("_2") && !selectedGift) {
      setSelectedGift(GIFTS[0].id); 
    }
  }, [selectedProduct, selectedGift]);

  const ciudadesDisponibles = useMemo(() => {
    return provincia ? ecuadorData[provincia].sort() : [];
  }, [provincia]);

  const handleWhatsappChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 10);
    setWhatsapp(value);
  };

  const product = useMemo(() => products.find(p => p.id === selectedProduct), [products, selectedProduct]);
  const gift = useMemo(() => GIFTS.find(g => g.id === selectedGift), [selectedGift]);
  const upsellProduct = useMemo(() => GIFTS.find(g => g.id === selectedUpsellProduct), [selectedUpsellProduct]);

  const hasGiftEnabled = selectedProduct.includes("_2");

  const totalPrice = useMemo(() => {
    return (product?.price || 0) + (wantsUpsell && selectedUpsellProduct ? 8 : 0);
  }, [product, wantsUpsell, selectedUpsellProduct]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!nombre.trim() || !apellido.trim() || !whatsapp.trim() || !direccion.trim() || !provincia || !ciudad) {
      toast({
        variant: "destructive",
        title: "DATOS FALTANTES",
        description: "Por favor complete todos los campos obligatorios para el envío."
      });
      return;
    }

    setLoading(true);

    const giftMsg = hasGiftEnabled && gift ? ` | REGALO: ${gift.name}` : " | SIN REGALO";
    const extraInfo = wantsUpsell && upsellProduct ? upsellProduct.name : "";
    const upsellMsg = extraInfo ? ` | EXTRA (+8$): ${extraInfo}` : "";

    const orderData = {
      name: `${nombre.trim()} ${apellido.trim()}`,
      email: `${whatsapp}@romistore.com`, 
      phoneNumber: whatsapp,
      message: `PRODUCTO: ${product?.name}${giftMsg}${upsellMsg} | TOTAL: $${totalPrice.toFixed(2)} | PROVINCIA: ${provincia} | CIUDAD: ${ciudad} | DIRECCIÓN: ${direccion}`,
      submissionDateTime: new Date().toISOString(),
      landingPageContentId: pathname.replace("/", "") || "bioaqua"
    };

    try {
      const leadsRef = collection(firestore, "leadSubmissions");
      await addDoc(leadsRef, orderData);
      setLoading(false);
      onOpenChange(false);
      router.push(`/gracias?nombre=${encodeURIComponent(nombre)}&provincia=${encodeURIComponent(provincia)}&ciudad=${encodeURIComponent(ciudad)}&whatsapp=${encodeURIComponent(whatsapp)}&producto=${encodeURIComponent(product?.name || "")}&regalo=${encodeURIComponent(gift?.name || "Sin regalo")}&total=${totalPrice}&extra=${encodeURIComponent(extraInfo)}&back=${encodeURIComponent(pathname)}`);
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
      <DialogContent className="w-[95vw] max-w-[480px] p-0 overflow-x-hidden rounded-[2.5rem] border-none shadow-2xl font-body bg-white mx-auto !translate-x-[-50%] !left-[50%]">
        <DialogHeader className="sr-only">
          <DialogTitle>Formulario de Compra</DialogTitle>
          <DialogDescription>Ingresa tus datos para registrar tu pedido pago contra entrega.</DialogDescription>
        </DialogHeader>

        <div className="max-h-[85vh] overflow-y-auto overflow-x-hidden w-full">
          <div className={cn("p-8 text-white text-center flex flex-col items-center gap-5", theme.bg)}>
            <h2 className="text-[22px] font-black uppercase leading-tight tracking-tight px-2">
              ESTÁS A UN PASO DE <br />TU PIEL DE PORCELANA
            </h2>
            <div className="relative w-28 h-10">
                <Image 
                  src="https://i.imgur.com/Jh61uYJ.png" 
                  alt="Sello de Confianza" 
                  fill 
                  className="object-contain" 
                  unoptimized 
                />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-10 bg-white pb-12 w-full">
            <div className="space-y-5">
              <div className={cn("flex items-center gap-3 border-b-2 pb-4", theme.text, theme.borderLight)}>
                <Package className="h-7 w-7" />
                <h3 className="font-black uppercase text-[17px] tracking-[0.15em]">ELIGE TU OFERTA</h3>
              </div>
              
              <RadioGroup value={selectedProduct} onValueChange={setSelectedProduct} className="grid gap-4">
                {products.map((p) => (
                  <Label
                    key={p.id}
                    htmlFor={p.id}
                    className={cn(
                      "flex items-center gap-4 p-5 rounded-2xl border-2 transition-all cursor-pointer",
                      selectedProduct === p.id 
                        ? cn(theme.border, theme.light) 
                        : "border-slate-100 bg-white"
                    )}
                  >
                    <RadioGroupItem value={p.id} id={p.id} className={cn("h-6 w-6", theme.text)} />
                    <div className="h-16 w-16 rounded-lg overflow-hidden bg-white border border-slate-100 shrink-0 relative">
                      <Image 
                        src={p.image} 
                        alt={p.name} 
                        fill 
                        className="object-cover" 
                        sizes="64px"
                        unoptimized
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-black text-[16px] text-slate-900 uppercase leading-tight">{p.name}</p>
                      <p className="text-[12px] text-slate-400 font-bold uppercase">{p.description}</p>
                    </div>
                    <div className="text-right">
                      <p className={cn("font-black text-[24px] leading-none", theme.text)}>${p.price.toFixed(0)}</p>
                    </div>
                  </Label>
                ))}
              </RadioGroup>
            </div>

            {hasGiftEnabled && (
              <div className="space-y-5">
                <div className={`flex items-center gap-3 text-pink-600 border-b-2 border-pink-100 pb-4`}>
                  <Gift className="h-7 w-7" />
                  <h3 className="font-black uppercase text-[17px] tracking-[0.15em]">ESCOGE TU REGALO GRATIS</h3>
                </div>
                
                <RadioGroup value={selectedGift} onValueChange={setSelectedGift} className="grid gap-4">
                  {GIFTS.map((g) => (
                    <Label
                      key={g.id}
                      htmlFor={g.id}
                      className={`flex items-center gap-4 p-4 rounded-2xl border-2 transition-all cursor-pointer ${
                        selectedGift === g.id ? "border-pink-500 bg-pink-50" : "border-slate-100 bg-white"
                      }`}
                    >
                      <RadioGroupItem value={g.id} id={g.id} className="h-5 w-5 text-pink-600" />
                      <div className="h-12 w-12 rounded-lg overflow-hidden bg-white border border-slate-100 shrink-0 relative">
                        <Image 
                          src={g.img} 
                          alt={g.name} 
                          fill 
                          className="object-cover" 
                          sizes="48px"
                          unoptimized
                        />
                      </div>
                      <p className="font-black text-[13px] text-slate-900 uppercase flex-1 leading-tight">{g.name}</p>
                      <p className="font-black text-green-600 text-[14px] uppercase">GRATIS</p>
                    </Label>
                  ))}
                </RadioGroup>
              </div>
            )}

            <div className="space-y-6">
              <div className={cn("flex items-center gap-3 border-b-2 pb-4", theme.text, theme.borderLight)}>
                <Truck className="h-7 w-7" />
                <h3 className="font-black uppercase text-[17px] tracking-[0.15em]">DATOS DE ENVÍO</h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-3">
                  <Label className="font-black text-[14px] uppercase text-slate-700">Nombre</Label>
                  <Input 
                    placeholder="Nombre" 
                    required 
                    value={nombre} 
                    onChange={(e) => setNombre(e.target.value)} 
                    className="h-16 rounded-2xl bg-slate-50 border-2 border-slate-100 font-bold" 
                  />
                </div>
                <div className="space-y-3">
                  <Label className="font-black text-[14px] uppercase text-slate-700">Apellido</Label>
                  <Input 
                    placeholder="Apellido" 
                    required 
                    value={apellido} 
                    onChange={(e) => setApellido(e.target.value)} 
                    className="h-16 rounded-2xl bg-slate-50 border-2 border-slate-100 font-bold" 
                  />
                </div>
              </div>

              <div className="space-y-3">
                <Label className="font-black text-[14px] uppercase text-slate-700">Número de WhatsApp</Label>
                <Input 
                  placeholder="099..." 
                  type="tel" 
                  required 
                  value={whatsapp} 
                  onChange={handleWhatsappChange} 
                  className="h-16 rounded-2xl bg-slate-50 border-2 border-slate-100 font-bold" 
                />
              </div>

              <div className="space-y-3">
                <Label className="font-black text-[14px] uppercase text-slate-700">Dirección Exacta</Label>
                <Input 
                  placeholder="Calle principal, secundaria y referencia" 
                  required 
                  value={direccion} 
                  onChange={(e) => setDireccion(e.target.value)} 
                  className="h-16 rounded-2xl bg-slate-50 border-2 border-slate-100 font-bold" 
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-3">
                  <Label className="font-black text-[14px] uppercase text-slate-700">Provincia</Label>
                  <Select onValueChange={(val) => { setProvincia(val); setCiudad(""); }} required value={provincia}>
                    <SelectTrigger className="h-16 rounded-2xl bg-slate-50 border-2 border-slate-100 font-bold">
                      <SelectValue placeholder="Seleccionar" />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.keys(ecuadorData).sort().map(p => (
                        <SelectItem key={p} value={p}>{p}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-3">
                  <Label className="font-black text-[14px] uppercase text-slate-700">Ciudad</Label>
                  <Select onValueChange={setCiudad} disabled={!provincia} required value={ciudad}>
                    <SelectTrigger className="h-16 rounded-2xl bg-slate-50 border-2 border-slate-100 font-bold">
                      <SelectValue placeholder="Seleccionar" />
                    </SelectTrigger>
                    <SelectContent>
                      {ciudadesDisponibles.map(c => (
                        <SelectItem key={c} value={c}>{c}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 rounded-[2rem] p-8 space-y-4 shadow-2xl">
              <div className="flex justify-between items-center">
                <span className="text-white text-[20px] font-black uppercase">TOTAL</span>
                <p className={cn("text-[36px] font-black", theme.text)}>${totalPrice.toFixed(2)}</p>
              </div>
            </div>

            <Button 
              type="submit" 
              disabled={loading} 
              className={cn("w-full h-24 text-2xl font-black uppercase rounded-3xl animate-heartbeat mt-6 border-4 border-white shadow-xl", theme.button)}
            >
              {loading ? "PROCESANDO..." : "CONFIRMAR PEDIDO"}
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
