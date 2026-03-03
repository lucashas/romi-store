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

  const productImg = PlaceHolderImages.find(img => img.id === "bioaqua-product-v7")?.imageUrl;
  const checkoutLogo = PlaceHolderImages.find(img => img.id === "checkout-logo")?.imageUrl;

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

  useEffect(() => {
    if (wantsUpsell && !selectedUpsellProduct) {
      const available = GIFTS.filter(g => g.id !== selectedGift);
      if (available.length > 0) {
        setSelectedUpsellProduct(available[0].id);
      }
    }
  }, [wantsUpsell, selectedGift, selectedUpsellProduct]);

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
      toast({
        variant: "destructive",
        title: "DATOS FALTANTES",
        description: "Por favor complete todos los campos obligatorios para el envío."
      });
      return;
    }

    if (hasGiftEnabled && !selectedGift) {
      toast({
        variant: "destructive",
        title: "ELIGE TU REGALO",
        description: "Esta oferta incluye un regalo, por favor selecciónalo."
      });
      return;
    }

    if (wantsUpsell && !selectedUpsellProduct) {
      toast({
        variant: "destructive",
        title: "ELIGE PRODUCTO EXTRA",
        description: "Has marcado la oferta extra, por favor selecciona el producto adicional."
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
      message: `PRODUCTO: ${product?.name}${giftMsg}${upsellMsg} | TOTAL: $${totalPrice.toFixed(2)} | CIUDAD: ${ciudad} | DIRECCIÓN: ${direccion}`,
      submissionDateTime: new Date().toISOString(),
      landingPageContentId: pathname.replace("/", "") || "bioaqua"
    };

    try {
      const leadsRef = collection(firestore, "leadSubmissions");
      await addDoc(leadsRef, orderData);
      setLoading(false);
      onOpenChange(false);
      router.push(`/gracias?nombre=${encodeURIComponent(nombre)}&ciudad=${encodeURIComponent(ciudad)}&whatsapp=${encodeURIComponent(whatsapp)}&producto=${encodeURIComponent(product?.name || "")}&regalo=${encodeURIComponent(gift?.name || "Sin regalo")}&total=${totalPrice}&extra=${encodeURIComponent(extraInfo)}&back=${encodeURIComponent(pathname)}`);
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
          <div className={`${colors.bg} p-8 text-white text-center flex flex-col items-center gap-5`}>
            <h2 className="text-[22px] font-black uppercase leading-tight tracking-tight px-2">
              ESTÁS A UN PASO DE <br />TU PIEL DE PORCELANA
            </h2>
            {checkoutLogo && (
              <div className="relative w-28 h-10">
                <Image 
                  src={checkoutLogo} 
                  alt="Sello de Confianza" 
                  fill 
                  className="object-contain" 
                  unoptimized 
                />
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-10 bg-white pb-12 w-full">
            <div className="space-y-5">
              <div className={`flex items-center gap-3 ${colors.text} border-b-2 ${colors.borderLight} pb-4`}>
                <Package className="h-7 w-7" />
                <h3 className="font-black uppercase text-[17px] tracking-[0.15em]">ELIGE TU OFERTA</h3>
              </div>
              
              <RadioGroup value={selectedProduct} onValueChange={setSelectedProduct} className="grid gap-4">
                {products.map((p) => (
                  <Label
                    key={p.id}
                    htmlFor={p.id}
                    className={`flex items-center gap-4 p-5 rounded-2xl border-2 transition-all cursor-pointer ${
                      selectedProduct === p.id 
                        ? `border-orange-500 bg-orange-50` 
                        : "border-slate-100 bg-white"
                    }`}
                  >
                    <RadioGroupItem value={p.id} id={p.id} className="h-6 w-6 text-orange-600" />
                    <div className="h-16 w-16 rounded-lg overflow-hidden bg-white border border-slate-100 shrink-0 relative">
                      <Image 
                        src={productImg || p.image} 
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
                      <p className="font-black text-orange-600 text-[24px] leading-none">${p.price.toFixed(0)}</p>
                    </div>
                  </Label>
                ))}
              </RadioGroup>
            </div>

            {hasGiftEnabled && (
              <div className="space-y-5 animate-in fade-in slide-in-from-top-4 duration-500">
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

            <div className="space-y-5">
              <div className="bg-slate-900 p-8 rounded-[2.5rem] border-2 border-orange-500 shadow-xl space-y-6">
                <div className="flex items-center gap-4">
                  <Checkbox 
                    id="upsell" 
                    checked={wantsUpsell} 
                    onCheckedChange={(checked) => setWantsUpsell(!!checked)}
                    className="h-7 w-7 border-2 border-orange-500 data-[state=checked]:bg-orange-500"
                  />
                  <Label htmlFor="upsell" className="cursor-pointer">
                    <p className="text-orange-500 font-black text-[12px] uppercase tracking-widest animate-pulse">💥 OFERTA EXTRA EXCLUSIVA</p>
                    <p className="text-white font-black text-[15px] uppercase leading-tight">¿QUIERES OTRO PRODUCTO ADICIONAL?</p>
                    <p className="text-white font-black text-[18px] uppercase italic mt-1 text-orange-500">POR SOLO +$8</p>
                  </Label>
                </div>

                {wantsUpsell && (
                  <div className="pt-6 border-t border-white/10 space-y-4">
                    <RadioGroup value={selectedUpsellProduct} onValueChange={setSelectedUpsellProduct} className="grid gap-3">
                      {GIFTS.filter(g => g.id !== selectedGift).map((g) => (
                        <Label
                          key={`upsell_${g.id}`}
                          htmlFor={`upsell_${g.id}`}
                          className={`flex items-center gap-4 p-4 rounded-xl border-2 transition-all cursor-pointer ${
                            selectedUpsellProduct === g.id 
                              ? "border-orange-500 bg-orange-500/10" 
                              : "border-white/5 bg-white/5"
                          }`}
                        >
                          <RadioGroupItem value={g.id} id={`upsell_${g.id}`} className="h-5 w-5 border-orange-500 text-orange-500" />
                          <div className="h-12 w-12 rounded-lg overflow-hidden shrink-0 relative">
                            <Image src={g.img} alt={g.name} fill className="object-cover" sizes="48px" unoptimized />
                          </div>
                          <p className="font-black text-[12px] text-white uppercase flex-1 leading-tight">{g.name}</p>
                          <p className="font-black text-orange-500 text-[14px]">+$8</p>
                        </Label>
                      ))}
                    </RadioGroup>
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-6">
              <div className={`flex items-center gap-3 ${colors.text} border-b-2 ${colors.borderLight} pb-4`}>
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
                    className="h-16 rounded-2xl bg-slate-50 border-2 border-slate-100 font-bold text-base" 
                  />
                </div>
                <div className="space-y-3">
                  <Label className="font-black text-[14px] uppercase text-slate-700">Apellido</Label>
                  <Input 
                    placeholder="Apellido" 
                    required 
                    value={apellido} 
                    onChange={(e) => setApellido(e.target.value)} 
                    className="h-16 rounded-2xl bg-slate-50 border-2 border-slate-100 font-bold text-base" 
                  />
                </div>
              </div>

              <div className="space-y-3">
                <Label className="font-black text-[14px] uppercase text-slate-700">Número de WhatsApp (para notificaciones de envío)</Label>
                <Input 
                  placeholder="ingresa tu celular" 
                  type="tel" 
                  required 
                  value={whatsapp} 
                  onChange={handleWhatsappChange} 
                  className="h-16 rounded-2xl bg-slate-50 border-2 border-slate-100 font-bold text-base" 
                />
              </div>

              <div className="space-y-3">
                <Label className="font-black text-[14px] uppercase text-slate-700">Dirección Entrega: (2 calles y una referencia)</Label>
                <Input 
                  placeholder="calle principal y secundaria referencia domicilio" 
                  required 
                  value={direccion} 
                  onChange={(e) => setDireccion(e.target.value)} 
                  className="h-16 rounded-2xl bg-slate-50 border-2 border-slate-100 font-bold text-base" 
                />
                <p className="text-[12px] text-slate-500 font-medium italic pl-1 leading-tight">
                  Ejemplo: Av. Vicente y Jose Albaca al frente del supermaxi casa de 2 pisos, color.. , # casa
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-3">
                  <Label className="font-black text-[14px] uppercase text-slate-700">Provincia</Label>
                  <Select onValueChange={(val) => { setProvincia(val); setCiudad(""); }} required value={provincia}>
                    <SelectTrigger className="h-16 rounded-2xl bg-slate-50 border-2 border-slate-100 font-bold">
                      <SelectValue placeholder="Seleccionar" />
                    </SelectTrigger>
                    <SelectContent className="max-h-[250px]">
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
                    <SelectContent className="max-h-[250px]">
                      {ciudadesDisponibles.map(c => (
                        <SelectItem key={c} value={c}>{c}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-3">
                <Label className="font-black text-[14px] uppercase text-slate-700">País</Label>
                <Input 
                  value="Ecuador" 
                  readOnly 
                  className="h-16 rounded-2xl bg-slate-200 border-2 border-slate-200 font-bold text-slate-600" 
                />
              </div>

              <div className="bg-orange-50 border-2 border-orange-200 p-8 rounded-[2.5rem] text-center space-y-3 shadow-sm">
                <div className="flex justify-center">
                  <AlertTriangle className="h-10 w-10 text-orange-600" />
                </div>
                <p className="font-black text-orange-700 text-[16px] uppercase tracking-tighter">⚠️ ATENCIÓN ⚠️</p>
                <p className="text-[14px] font-bold text-orange-900 leading-relaxed italic px-2">
                  Tu pedido únicamente podrá salir de la bodega si tus datos están completos. Por favor, verifica que tu dirección esté correcta antes de continuar.
                </p>
              </div>
            </div>

            <div className="bg-slate-900 rounded-[2rem] p-8 space-y-6 shadow-2xl border-b-4 border-orange-500">
              <div className="flex justify-between items-start border-b border-white/10 pb-4 gap-2">
                <span className="text-white/60 text-[12px] font-bold uppercase tracking-widest leading-tight">
                  SUBTOTAL: {product?.name?.toUpperCase()}
                </span>
                <span className="text-white font-black shrink-0 text-base">${product?.price.toFixed(2)}</span>
              </div>
              
              {hasGiftEnabled && gift && (
                <div className="flex justify-between items-start border-b border-white/10 pb-4 gap-2">
                  <div className="flex flex-col">
                    <span className="text-white/60 text-[12px] font-bold uppercase tracking-widest">REGALO SELECCIONADO:</span>
                    <span className="text-pink-400 text-[13px] font-black uppercase leading-tight mt-1">{gift.name}</span>
                  </div>
                  <span className="text-green-400 font-black text-[14px] uppercase shrink-0">GRATIS</span>
                </div>
              )}

              {wantsUpsell && upsellProduct && (
                <div className="flex justify-between items-start border-b border-white/10 pb-4 gap-2">
                  <div className="flex flex-col">
                    <span className="text-white/60 text-[12px] font-bold uppercase tracking-widest">PRODUCTO ADICIONAL:</span>
                    <span className="text-orange-400 text-[13px] font-black uppercase leading-tight mt-1">{upsellProduct.name}</span>
                  </div>
                  <span className="text-orange-500 font-black text-[14px] shrink-0">+$8.00</span>
                </div>
              )}

              <div className="flex justify-between items-center pt-3">
                <span className="text-white text-[20px] font-black uppercase tracking-tighter">TOTAL A PAGAR</span>
                <p className="text-orange-500 text-[36px] font-black leading-none">${totalPrice.toFixed(2)}</p>
              </div>
            </div>

            <Button 
              type="submit" 
              disabled={loading} 
              className={`w-full h-24 text-2xl font-black uppercase rounded-3xl animate-heartbeat mt-6 border-4 border-white shadow-xl ${colors.button}`}
            >
              {loading ? "PROCESANDO..." : "CONFIRMAR PEDIDO"}
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
