
"use client";

import { useState, useMemo, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import Image from "next/image";
import { useFirestore } from "@/firebase";
import { collection, addDoc } from "firebase/firestore";
import { errorEmitter } from "@/firebase/error-emitter";
import { FirestorePermissionError } from "@/firebase/errors";
import { useRouter, usePathname } from "next/navigation";
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
  
  const { toast } = useToast();
  const firestore = useFirestore();
  const router = useRouter();
  const pathname = usePathname();

  const theme = useMemo(() => {
    if (themeColor === "amber") {
      return {
        bg: "bg-amber-600",
        text: "text-amber-600",
        border: "border-amber-600",
        light: "bg-amber-50",
        button: "bg-amber-600 hover:bg-amber-700",
      };
    }
    if (themeColor === "orange") {
      return {
        bg: "bg-orange-600",
        text: "text-orange-600",
        border: "border-orange-600",
        light: "bg-orange-50",
        button: "bg-orange-600 hover:bg-orange-700",
      };
    }
    return {
      bg: "bg-primary",
      text: "text-primary",
      border: "border-primary",
      light: "bg-primary/5",
      button: "bg-accent hover:bg-accent/90",
    };
  }, [themeColor]);

  useEffect(() => {
    if (open && products.length > 0 && !selectedProduct) {
      setSelectedProduct(products[1]?.id || products[0].id);
    }
  }, [open, products, selectedProduct]);

  useEffect(() => {
    if (selectedProduct.includes("_2") && !selectedGift) {
      setSelectedGift(GIFTS[0].id);
    } else if (selectedProduct.includes("_1")) {
      setSelectedGift("");
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!nombre.trim() || !apellido.trim() || !whatsapp.trim() || !direccion.trim() || !provincia || !ciudad) {
      toast({ variant: "destructive", title: "DATOS FALTANTES", description: "Complete todos los campos obligatorios." });
      return;
    }
    setLoading(true);
    const orderData = {
      name: `${nombre.trim()} ${apellido.trim()}`,
      email: `${whatsapp}@romistore.com`,
      phoneNumber: whatsapp,
      message: `PRODUCTO: ${product?.name} | REGALO: ${gift?.name || "N/A"} | TOTAL: $${product?.price} | PROVINCIA: ${provincia} | CIUDAD: ${ciudad} | DIRECCIÓN: ${direccion}`,
      submissionDateTime: new Date().toISOString(),
      landingPageContentId: pathname.replace("/", "") || "bioaqua"
    };
    try {
      await addDoc(collection(firestore, "leadSubmissions"), orderData);
      setLoading(false);
      onOpenChange(false);
      router.push(`/gracias?nombre=${encodeURIComponent(nombre)}&provincia=${encodeURIComponent(provincia)}&ciudad=${encodeURIComponent(ciudad)}&whatsapp=${encodeURIComponent(whatsapp)}&producto=${encodeURIComponent(product?.name || "")}&back=${encodeURIComponent(pathname)}`);
    } catch (err) {
      setLoading(false);
      errorEmitter.emit("permission-error", new FirestorePermissionError({ path: "leadSubmissions", operation: "create", requestResourceData: orderData }));
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[95vw] max-w-[480px] p-0 overflow-hidden rounded-[2.5rem] bg-white mx-auto !translate-x-[-50%] !left-[50%]">
        <div className="max-h-[85vh] overflow-y-auto w-full">
          <div className={cn("p-8 text-white text-center flex flex-col items-center gap-5", theme.bg)}>
            <h2 className="text-[22px] font-black uppercase leading-tight tracking-tight">PIEL DE PORCELANA</h2>
            <div className="relative w-28 h-10">
                <Image src="https://i.imgur.com/Jh61uYJ.png" alt="Sello" fill className="object-contain" unoptimized />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-8 bg-white pb-12">
            <RadioGroup value={selectedProduct} onValueChange={setSelectedProduct} className="grid gap-4">
              {products.map((p) => (
                <Label key={p.id} htmlFor={p.id} className={cn("flex items-center gap-4 p-5 rounded-2xl border-2 cursor-pointer", selectedProduct === p.id ? cn(theme.border, theme.light) : "border-slate-100 bg-white")}>
                  <RadioGroupItem value={p.id} id={p.id} className={cn("h-6 w-6", theme.text)} />
                  <div className="flex-1 min-w-0">
                    <p className="font-black text-[16px] text-slate-900 uppercase leading-tight">{p.name}</p>
                    <p className="text-[12px] text-slate-400 font-bold uppercase">{p.description}</p>
                  </div>
                  <p className={cn("font-black text-[24px]", theme.text)}>${p.price.toFixed(0)}</p>
                </Label>
              ))}
            </RadioGroup>

            <div className="grid grid-cols-2 gap-4">
              <Input placeholder="Nombre" required value={nombre} onChange={(e) => setNombre(e.target.value)} className="h-16 rounded-2xl bg-slate-50 border-2 border-slate-100 font-bold" />
              <Input placeholder="Apellido" required value={apellido} onChange={(e) => setApellido(e.target.value)} className="h-16 rounded-2xl bg-slate-50 border-2 border-slate-100 font-bold" />
            </div>

            <Input placeholder="099..." type="tel" required value={whatsapp} onChange={handleWhatsappChange} className="h-16 rounded-2xl bg-slate-50 border-2 border-slate-100 font-bold" />
            <Input placeholder="Dirección Exacta" required value={direccion} onChange={(e) => setDireccion(e.target.value)} className="h-16 rounded-2xl bg-slate-50 border-2 border-slate-100 font-bold" />

            <div className="grid grid-cols-2 gap-4">
              <Select onValueChange={(val) => { setProvincia(val); setCiudad(""); }} required value={provincia}>
                <SelectTrigger className="h-16 rounded-2xl bg-slate-50 border-2 border-slate-100 font-bold"><SelectValue placeholder="Provincia" /></SelectTrigger>
                <SelectContent>{Object.keys(ecuadorData).sort().map(p => <SelectItem key={p} value={p}>{p}</SelectItem>)}</SelectContent>
              </Select>
              <Select onValueChange={setCiudad} disabled={!provincia} required value={ciudad}>
                <SelectTrigger className="h-16 rounded-2xl bg-slate-50 border-2 border-slate-100 font-bold"><SelectValue placeholder="Ciudad" /></SelectTrigger>
                <SelectContent>{ciudadesDisponibles.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}</SelectContent>
              </Select>
            </div>

            <Button type="submit" disabled={loading} className={cn("w-full h-20 text-xl font-black uppercase rounded-3xl animate-heartbeat text-white", theme.button)}>
              {loading ? "PROCESANDO..." : "CONFIRMAR PEDIDO"}
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
