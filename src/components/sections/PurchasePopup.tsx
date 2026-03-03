"use client";

import { useState, useMemo, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { ShoppingCart, Package, Truck, Gift, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { useFirestore } from "@/firebase";
import { collection, addDoc } from "firebase/firestore";
import { errorEmitter } from "@/firebase/error-emitter";
import { FirestorePermissionError } from "@/firebase/errors";
import { useRouter, usePathname } from "next/navigation";
import { Checkbox } from "@/components/ui/checkbox";

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
  const [selectedGift, setSelectedGift] = useState("");
  const [wantsUpsell, setWantsUpsell] = useState(false);
  const [selectedUpsellProduct, setSelectedUpsellProduct] = useState("");
  
  const { toast } = useToast();
  const firestore = useFirestore();
  const router = useRouter();
  const pathname = usePathname();

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
      setSelectedProduct(products[1]?.id || products[0].id);
    }
  }, [open, products, selectedProduct]);

  useEffect(() => {
    if (selectedProduct === "bioaqua_v7_1") {
      setSelectedGift(""); 
    } else if (selectedProduct === "bioaqua_v7_2" && !selectedGift) {
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

  const hasGiftEnabled = selectedProduct === "bioaqua_v7_2";

  const totalPrice = useMemo(() => {
    return (product?.price || 0) + (wantsUpsell && selectedUpsellProduct ? 8 : 0);
  }, [product, wantsUpsell, selectedUpsellProduct]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!nombre.trim() || !apellido.trim() || !whatsapp.trim() || !direccion.trim() || !provincia || !ciudad) {
      toast({ variant: "destructive", title: "DATOS FALTANTES", description: "Por favor complete todos los campos obligatorios." });
      return;
    }

    if (hasGiftEnabled && !selectedGift) {
      toast({ variant: "destructive", title: "ELIGE TU REGALO", description: "Esta oferta incluye un regalo, por favor selecciónalo." });
      return;
    }

    if (wantsUpsell && !selectedUpsellProduct) {
      toast({ variant: "destructive", title: "ELIGE PRODUCTO EXTRA", description: "Selecciona el producto adicional de $8." });
      return;
    }

    setLoading(true);

    const giftMsg = hasGiftEnabled && gift ? ` | REGALO: ${gift.name}` : " | SIN REGALO";
    const upsellMsg = wantsUpsell && upsellProduct ? ` | EXTRA (+8$): ${upsellProduct.name}` : "";

    const orderData = {
      name: `${nombre.trim()} ${apellido.trim()}`,
      email: `${whatsapp}@romistore.com`, 
      phoneNumber: whatsapp,
      message: `PRODUCTO: ${product?.name}${giftMsg}${upsellMsg} | TOTAL: $${totalPrice.toFixed(2)} | CIUDAD: ${ciudad} | DIRECCIÓN: ${direccion}`,
      submissionDateTime: new Date().toISOString(),
      landingPageContentId: pathname.replace("/", "") || "bioaqua"
    };

    try {
      const leadsRef = collection(firestore, "leadSubmissions");
      await addDoc(leadsRef, orderData);
      setLoading(false);
      onOpenChange(false);
      router.push(`/gracias?nombre=${encodeURIComponent(nombre)}&ciudad=${encodeURIComponent(ciudad)}&whatsapp=${encodeURIComponent(whatsapp)}&producto=${encodeURIComponent(product?.name || "")}&regalo=${encodeURIComponent(gift?.name || "Sin regalo")}&total=${totalPrice}&back=${encodeURIComponent(pathname)}`);
    } catch (err) {
      setLoading(false);
      errorEmitter.emit("permission-error", new FirestorePermissionError({
        path: "leadSubmissions", operation: "create", requestResourceData: orderData
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
          <div className={`${colors.bg} p-8 text-white text-center`}>
            <h2 className="text-[20px] font-black uppercase leading-tight tracking-tight px-2">
              ESTÁS A UN PASO DE <br />TU PIEL DE PORCELANA
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="p-5 space-y-8 bg-white pb-10 w-full">
            {/* SELECCIÓN DE PRODUCTO */}
            <div className="space-y-4">
              <div className={`flex items-center gap-2 ${colors.text} border-b-2 ${colors.borderLight} pb-3`}>
                <Package className="h-6 w-6" />
                <h3 className="font-black uppercase text-[15px] tracking-[0.15em]">ELIGE TU OFERTA</h3>
              </div>
              
              <RadioGroup value={selectedProduct} onValueChange={setSelectedProduct} className="grid gap-3">
                {products.map((p) => (
                  <Label
                    key={p.id}
                    htmlFor={p.id}
                    className={`flex items-center gap-3 p-4 rounded-2xl border-2 transition-all cursor-pointer ${
                      selectedProduct === p.id ? `border-orange-500 bg-orange-50` : "border-slate-100 bg-white"
                    }`}
                  >
                    <RadioGroupItem value={p.id} id={p.id} className="h-5 w-5 text-orange-600" />
                    <div className="flex-1 min-w-0">
                      <p className="font-black text-[14px] text-slate-900 uppercase leading-tight">{p.name}</p>
                      <p className="text-[10px] text-slate-400 font-bold uppercase">{p.description}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-black text-orange-600 text-[20px] leading-none">${p.price.toFixed(0)}</p>
                    </div>
                  </Label>
                ))}
              </RadioGroup>
            </div>

            {/* SELECCIÓN DE REGALO (Solo si elige 2 cremas) */}
            {hasGiftEnabled && (
              <div className="space-y-4 animate-in fade-in slide-in-from-top-4 duration-500">
                <div className={`flex items-center gap-2 text-pink-600 border-b-2 border-pink-100 pb-3`}>
                  <Gift className="h-6 w-6" />
                  <h3 className="font-black uppercase text-[15px] tracking-[0.15em]">ESCOGE TU REGALO GRATIS</h3>
                </div>
                
                <RadioGroup value={selectedGift} onValueChange={setSelectedGift} className="grid gap-3">
                  {GIFTS.map((g) => (
                    <Label
                      key={g.id}
                      htmlFor={g.id}
                      className={`flex items-center gap-3 p-3 rounded-2xl border-2 transition-all cursor-pointer ${
                        selectedGift === g.id ? "border-pink-500 bg-pink-50" : "border-slate-100 bg-white"
                      }`}
                    >
                      <RadioGroupItem value={g.id} id={g.id} className="h-4 w-4 text-pink-600" />
                      <div className="h-10 w-10 rounded-lg overflow-hidden bg-white border border-slate-100 shrink-0 relative">
                        <Image src={g.img} alt={g.name} fill className="object-cover" sizes="40px" unoptimized />
                      </div>
                      <p className="font-black text-[11px] text-slate-900 uppercase flex-1 leading-tight">{g.name}</p>
                      <p className="font-black text-green-600 text-[12px] uppercase">GRATIS</p>
                    </Label>
                  ))}
                </RadioGroup>
              </div>
            )}

            {/* OFERTA EXTRA (UPSELL) */}
            <div className="space-y-4">
              <div className="bg-slate-900 p-6 rounded-[2.5rem] border-2 border-orange-500 shadow-xl space-y-4">
                <div className="flex items-center gap-3">
                  <Checkbox 
                    id="upsell" checked={wantsUpsell} onCheckedChange={(checked) => setWantsUpsell(!!checked)}
                    className="h-6 w-6 border-2 border-orange-500 data-[state=checked]:bg-orange-500"
                  />
                  <Label htmlFor="upsell" className="cursor-pointer">
                    <p className="text-orange-500 font-black text-[11px] uppercase tracking-widest animate-pulse">💥 OFERTA EXTRA EXCLUSIVA</p>
                    <p className="text-white font-black text-[14px] uppercase leading-tight">¿QUIERES OTRO PRODUCTO ADICIONAL?</p>
                    <p className="text-white font-black text-[16px] uppercase italic mt-1 text-orange-500">POR SOLO +$8</p>
                  </Label>
                </div>

                {wantsUpsell && (
                  <div className="pt-4 border-t border-white/10 space-y-3">
                    <RadioGroup value={selectedUpsellProduct} onValueChange={setSelectedUpsellProduct} className="grid gap-2">
                      {GIFTS.filter(g => g.id !== selectedGift).map((g) => (
                        <Label
                          key={`upsell_${g.id}`} htmlFor={`upsell_${g.id}`}
                          className={`flex items-center gap-3 p-3 rounded-xl border-2 transition-all cursor-pointer ${
                            selectedUpsellProduct === g.id ? "border-orange-500 bg-orange-500/10" : "border-white/5 bg-white/5"
                          }`}
                        >
                          <RadioGroupItem value={g.id} id={`upsell_${g.id}`} className="h-4 w-4 border-orange-500 text-orange-500" />
                          <div className="h-10 w-10 rounded-lg overflow-hidden shrink-0 relative">
                            <Image src={g.img} alt={g.name} fill className="object-cover" sizes="40px" unoptimized />
                          </div>
                          <p className="font-black text-[10px] text-white uppercase flex-1 leading-tight">{g.name}</p>
                          <p className="font-black text-orange-500 text-[12px]">+$8</p>
                        </Label>
                      ))}
                    </RadioGroup>
                  </div>
                )}
              </div>
            </div>

            {/* DATOS DE ENVÍO */}
            <div className="space-y-5">
              <div className={`flex items-center gap-2 ${colors.text} border-b-2 ${colors.borderLight} pb-3`}>
                <Truck className="h-6 w-6" />
                <h3 className="font-black uppercase text-[15px] tracking-[0.15em]">DATOS DE ENVÍO</h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="Nombre" required value={nombre} onChange={(e) => setNombre(e.target.value)} className="h-14 rounded-2xl bg-slate-50 border-2 border-slate-50 font-bold" />
                <Input placeholder="Apellido" required value={apellido} onChange={(e) => setApellido(e.target.value)} className="h-14 rounded-2xl bg-slate-50 border-2 border-slate-50 font-bold" />
              </div>

              <Input placeholder="WhatsApp" type="tel" required value={whatsapp} onChange={handleWhatsappChange} className="h-14 rounded-2xl bg-slate-50 border-2 border-slate-50 font-bold" />
              <Input placeholder="Dirección Exacta" required value={direccion} onChange={(e) => setDireccion(e.target.value)} className="h-14 rounded-2xl bg-slate-50 border-2 border-slate-50 font-bold" />

              <div className="grid grid-cols-2 gap-4">
                <Select onValueChange={(val) => { setProvincia(val); setCiudad(""); }} required value={provincia}>
                  <SelectTrigger className="h-14 rounded-2xl bg-slate-50 border-2 border-slate-50 font-bold"><SelectValue placeholder="Provincia" /></SelectTrigger>
                  <SelectContent className="max-h-[200px]">{Object.keys(ecuadorData).sort().map(p => <SelectItem key={p} value={p}>{p}</SelectItem>)}</SelectContent>
                </Select>
                <Select onValueChange={setCiudad} disabled={!provincia} required value={ciudad}>
                  <SelectTrigger className="h-14 rounded-2xl bg-slate-50 border-2 border-slate-50 font-bold"><SelectValue placeholder="Ciudad" /></SelectTrigger>
                  <SelectContent className="max-h-[200px]">{ciudadesDisponibles.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}</SelectContent>
                </Select>
              </div>
            </div>

            {/* RESUMEN DE TOTAL */}
            <div className="bg-slate-900 rounded-[2rem] p-6 space-y-4 shadow-2xl border-b-4 border-orange-500">
              <div className="flex justify-between items-center border-b border-white/10 pb-3">
                <span className="text-white/60 text-[10px] font-bold uppercase tracking-widest leading-tight pr-2">
                  SUBTOTAL: {product?.name?.toUpperCase()}
                </span>
                <span className="text-white font-black shrink-0">${product?.price.toFixed(2)}</span>
              </div>
              
              {hasGiftEnabled && (
                <div className="flex justify-between items-center border-b border-white/10 pb-3">
                  <span className="text-white/60 text-[10px] font-bold uppercase tracking-widest">REGALO SELECCIONADO</span>
                  <span className="text-green-400 font-black text-[12px] uppercase">GRATIS</span>
                </div>
              )}

              {wantsUpsell && upsellProduct && (
                <div className="flex justify-between items-center border-b border-white/10 pb-3">
                  <span className="text-white/60 text-[10px] font-bold uppercase tracking-widest">PRODUCTO EXTRA</span>
                  <span className="text-orange-500 font-black text-[12px]">+$8.00</span>
                </div>
              )}

              <div className="flex justify-between items-center pt-2">
                <span className="text-white text-[16px] font-black uppercase tracking-tighter">TOTAL A PAGAR</span>
                <p className="text-orange-500 text-[32px] font-black leading-none">${totalPrice.toFixed(2)}</p>
              </div>
            </div>

            <Button type="submit" disabled={loading} className={`w-full h-20 text-xl font-black uppercase rounded-3xl animate-heartbeat mt-4 border-4 border-white shadow-xl ${colors.button}`}>
              {loading ? "PROCESANDO..." : "CONFIRMAR PEDIDO"}
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
