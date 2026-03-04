
"use client";

import { useState, useMemo, useEffect } from "react";
import { Dialog, DialogContent, DialogTitle, DialogHeader } from "@/components/ui/dialog";
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

const ecuadorData: Record<string, string[]> = {
  "AZUAY": ["CUENCA", "GUALACEO", "PAUTE", "CAMILO PONCE ENRIQUEZ", "SIGSIG", "CHORDELEG", "GIRON", "SANTA ISABEL", "NABON", "PUCARA", "OÑA", "SEVILLA DE ORO", "GUACHAPALA", "EL PAN"],
  "BOLIVAR": ["GUARANDA", "SAN MIGUEL", "CHILLANES", "ECHEANDIA", "CALUMA", "CHIMBO", "LAS NAVES"],
  "CAÑAR": ["AZOGUES", "CAÑAR", "LA TRONCAL", "BIBLIAN", "DELEG", "EL TAMBO", "SUSCAL"],
  "CARCHI": ["TULCAN", "MONTUFAR", "ESPEJO", "BOLIVAR", "MIRA", "HUACA"],
  "CHIMBORAZO": ["RIOBAMBA", "GUANO", "COLTA", "ALAUSI", "CHAMBO", "CUMANDA", "GUAMOTE", "PALLATANGA", "PENIPE", "CHUNCHI"],
  "COTOPAXI": ["LATACUNGA", "PUJILI", "SALCEDO", "LA MANA", "SAQUISILI", "SIGCHOS", "PANGUA"],
  "EL ORO": ["MACHALA", "PASAJE", "HUAQUILLAS", "SANTA ROSA", "ARENILLAS", "BALSAS", "CHILLA", "EL GUABO", "LAS LAJAS", "MARCABELI", "PIÑAS", "PORTOVELO", "ZARUMA", "ATAHUALPA"],
  "ESMERALDAS": ["ESMERALDAS", "QUININDE", "ATACAMES", "SAN LORENZO", "ELOY ALFARO", "MUISNE", "RIO VERDE"],
  "GUAYAS": ["GUAYAQUIL", "SAMBORONDON", "DAULE", "DURAN", "MILAGRO", "PLAYAS", "NARANJAL", "EL EMPALME", "BALZAR", "BALAO", "COLIMES", "CORONEL MARCELINO MARIDUEÑA", "EL TRIUNFO", "GENERAL ANTONIO ELIZALDE", "ISIDRO AYORA", "LOMAS DE SARGENTILLO", "NARANJITO", "NOBOL", "PALESTINA", "PEDRO CHUNCHI", "SANTA LUCIA", "SIMON BOLIVAR", "YAGUACHI", "SALITRE"],
  "IMBABURA": ["IBARRA", "OTAVALO", "COTACACHI", "ANTONIO ANTE", "PIMAMPIRO", "URCUQUI"],
  "LOJA": ["LOJA", "CATAMAYO", "CALVAS", "SARAGURO", "MACARA", "CELICA", "CHAGUARPAMBA", "ESPINDOLA", "GONZANAMA", "PALTAS", "PUYANGO", "QUILANGA", "PINDAL", "SOZORANGA", "ZAPOTILLO", "OLMEDO"],
  "LOS RIOS": ["BABAHOYO", "QUEVEDO", "BABA", "VINCES", "VENTANAS", "MOCACHE", "BUENA FE", "PALENQUE", "PUEBLOVIEJO", "URDANETA", "VALENCIA", "QUINSALOMA", "MONTALVO"],
  "MANABI": ["PORTOVIEJO", "MANTA", "CHONE", "MONTECRISTI", "JIPIJAPA", "BAHIA DE CARAQUEZ", "BOLIVAR", "EL CARMEN", "FLAVIO ALFARO", "JAMA", "JARAMIJO", "JUNIN", "OLMEDO", "PAJAN", "PEDERNALES", "PICHINCHA", "ROCAFUERTE", "SANTA ANA", "SUCRE", "TOSAGUA", "24 DE MAYO", "PUERTO LOPEZ"],
  "PICHINCHA": ["QUITO", "SANGOLQUI", "MACHACHI", "CAYAMBE", "TABACUNDO", "PEDRO MONCAYO", "PEDRO VICENTE MALDONADO", "PUERTO QUITO", "SAN MIGUEL DE LOS BANCOS"],
  "SANTA ELENA": ["SANTA ELENA", "SALINAS", "LA LIBERTAD"],
  "SANTO DOMINGO DE LOS TSACHILAS": ["SANTO DOMINGO", "LA CONCORDIA"],
  "TUNGURAHUA": ["AMBATO", "BAÑOS", "PELILEO", "PILLARO", "CEVALLOS", "MOCHA", "QUERO", "TISALEO", "PATATE"],
};

export function PurchasePopup({ open, onOpenChange, products, themeColor = "orange" }: { open: boolean, onOpenChange: (open: boolean) => void, products: Product[], themeColor?: "gold" | "orange" }) {
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

  const isGold = themeColor === "gold";

  const styles = {
    header: isGold ? "bg-yellow-600" : "bg-orange-600",
    borderActive: isGold ? "border-yellow-600 bg-yellow-50" : "border-orange-600 bg-orange-50",
    textActive: isGold ? "text-yellow-700" : "text-orange-700",
    button: isGold ? "bg-yellow-600 hover:bg-yellow-700" : "bg-orange-600 hover:bg-orange-700",
    ring: isGold ? "focus:border-yellow-600" : "focus:border-orange-600"
  };

  useEffect(() => {
    if (open && products.length > 0 && !selectedProduct) {
      setSelectedProduct(products[1]?.id || products[0].id);
    }
  }, [open, products, selectedProduct]);

  const ciudadesDisponibles = useMemo(() => {
    return provincia ? ecuadorData[provincia].sort() : [];
  }, [provincia]);

  const handleWhatsappChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 10);
    setWhatsapp(value);
  };

  const product = useMemo(() => products.find(p => p.id === selectedProduct), [products, selectedProduct]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!nombre.trim() || !apellido.trim() || !whatsapp.trim() || !direccion.trim() || !provincia || !ciudad) {
      toast({ variant: "destructive", title: "DATOS FALTANTES", description: "Por favor complete todos los campos." });
      return;
    }
    setLoading(true);
    const orderData = {
      name: `${nombre.trim()} ${apellido.trim()}`,
      email: `${whatsapp}@romistore.com`,
      phoneNumber: whatsapp,
      message: `PRODUCTO: ${product?.name} | TOTAL: $${product?.price} | PROVINCIA: ${provincia} | CIUDAD: ${ciudad} | DIRECCIÓN: ${direccion}`,
      submissionDateTime: new Date().toISOString(),
      landingPageContentId: pathname.replace("/", "") || "bioaqua-v7"
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
      <DialogContent className="w-[98vw] max-w-[480px] p-0 overflow-hidden rounded-[2.5rem] bg-white mx-auto !translate-x-[-50%] !left-[50%] !translate-y-[-50%] !top-[50%] border-none shadow-2xl">
        <DialogHeader className="p-0 m-0">
          <DialogTitle className="sr-only">Finalizar Pedido - Romi Store EC</DialogTitle>
        </DialogHeader>
        <div className="max-h-[90vh] overflow-y-auto w-full scrollbar-hide">
          <div className={cn("p-8 text-white text-center flex flex-col items-center gap-5", styles.header)}>
            <div className="text-[24px] font-black uppercase leading-none tracking-tighter">FINALIZAR PEDIDO</div>
            <div className="relative w-32 h-10">
                <Image src="https://i.imgur.com/Jh61uYJ.png" alt="Confianza" fill className="object-contain invert brightness-0" unoptimized />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-8 bg-white pb-14">
            <RadioGroup value={selectedProduct} onValueChange={setSelectedProduct} className="grid gap-4">
              {products.map((p) => (
                <Label key={p.id} htmlFor={p.id} className={cn("flex items-center gap-4 p-5 rounded-2xl border-2 cursor-pointer transition-all", selectedProduct === p.id ? styles.borderActive : "border-slate-100 bg-white hover:border-slate-200")}>
                  <RadioGroupItem value={p.id} id={p.id} className="h-6 w-6" />
                  <div className="flex-1 min-w-0 text-left">
                    <p className="font-black text-[16px] text-slate-900 uppercase leading-tight">{p.name}</p>
                    <p className="text-[12px] text-slate-400 font-bold uppercase">{p.description}</p>
                  </div>
                  <p className={cn("font-black text-[24px] tracking-tighter", styles.textActive)}>${p.price.toFixed(0)}</p>
                </Label>
              ))}
            </RadioGroup>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="Nombre" required value={nombre} onChange={(e) => setNombre(e.target.value)} className={cn("h-16 rounded-2xl bg-slate-50 border-2 border-slate-100 font-bold", styles.ring)} />
                <Input placeholder="Apellido" required value={apellido} onChange={(e) => setApellido(e.target.value)} className={cn("h-16 rounded-2xl bg-slate-50 border-2 border-slate-100 font-bold", styles.ring)} />
              </div>
              <Input placeholder="WhatsApp" type="tel" required value={whatsapp} onChange={handleWhatsappChange} className={cn("h-16 rounded-2xl bg-slate-50 border-2 border-slate-100 font-bold", styles.ring)} />
              <Input placeholder="Dirección Exacta" required value={direccion} onChange={(e) => setDireccion(e.target.value)} className={cn("h-16 rounded-2xl bg-slate-50 border-2 border-slate-100 font-bold", styles.ring)} />
              <div className="grid grid-cols-2 gap-4">
                <Select onValueChange={(val) => { setProvincia(val); setCiudad(""); }} required value={provincia}>
                  <SelectTrigger className="h-16 rounded-2xl bg-slate-50 border-2 border-slate-100 font-bold"><SelectValue placeholder="Provincia" /></SelectTrigger>
                  <SelectContent className="z-[110]">{Object.keys(ecuadorData).sort().map(p => <SelectItem key={p} value={p}>{p}</SelectItem>)}</SelectContent>
                </Select>
                <Select onValueChange={setCiudad} disabled={!provincia} required value={ciudad}>
                  <SelectTrigger className="h-16 rounded-2xl bg-slate-50 border-2 border-slate-100 font-bold"><SelectValue placeholder="Ciudad" /></SelectTrigger>
                  <SelectContent className="z-[110]">{ciudadesDisponibles.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}</SelectContent>
                </Select>
              </div>
            </div>

            <Button type="submit" disabled={loading} className={cn("w-full h-20 text-xl font-black uppercase rounded-3xl animate-heartbeat text-white shadow-xl", styles.button)}>
              {loading ? "PROCESANDO..." : "¡CONFIRMAR PEDIDO!"}
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
