"use client";

import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useFirestore } from "@/firebase";
import { collection, addDoc } from "firebase/firestore";
import { useRouter, usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { AlertTriangle, ShieldCheck, ShoppingBag, Heart, ShoppingCart } from "lucide-react";

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  badge: string | null;
  description: string;
}

const ecuadorData: Record<string, string[]> = {
  "AZUAY": ["CUENCA", "GUALACEO", "PAUTE", "CAMILO PONCE ENRIQUEZ", "SIGSIG", "CHORDELEG", "GIRON", "SANTA ISABEL", "NABON", "PUCARA", "OÑA", "GUACHAPALA", "EL PAN"],
  "BOLIVAR": ["GUARANDA", "SAN MIGUEL", "CHILLANES", "ECHEANDIA", "CALUMA", "CHIMBO", "LAS NAVES"],
  "CAÑAR": ["AZOGUES", "CAÑAR", "LA TRONCAL", "BIBLIAN", "DELEG", "EL TAMBO", "SUSCAL"],
  "CARCHI": ["TULCAN", "MONTUFAR", "ESPEJO", "BOLIVAR", "MIRA", "HUACA"],
  "CHIMBORAZO": ["RIOBAMBA", "GUANO", "COLTA", "ALAUSI", "CHAMBO", "CUMANDA", "GUAMOTE", "PALLATANGA", "PENIPE", "CHUNCHI"],
  "COTOPAXI": ["LATACUNGA", "PUJILI", "SALCEDO", "LA MANA", "SAQUISILI", "SIGCHOS", "PANGUA"],
  "EL ORO": ["MACHALA", "PASAJE", "HUAQUILLAS", "SANTA ROSA", "ARENILLAS", "BALSAS", "CHILLA", "EL GUABO", "LAS LAJAS", "MARCABELI", "PIÑAS", "PORTOVELO", "ZARUMA", "ATAHUALPA"],
  "ESMERALDAS": ["ESMERALDAS", "QUININDE", "ATACAMES", "SAN LORENZO", "ELOY ALFARO", "MUISNE", "RIO VERDE"],
  "GUAYAS": ["GUAYAQUIL", "SAMBORONDON", "DAULE", "DURAN", "MILAGRO", "PLAYAS", "NARANJAL", "EL EMPALME", "BALZAR", "BALAO", "COLIMES", "EL TRIUNFO", "ISIDRO AYORA", "LOMAS DE SARGENTILLO", "NARANJITO", "NOBOL", "PALESTINA", "SANTA LUCIA", "SIMON BOLIVAR", "YAGUACHI", "SALITRE"],
  "IMBABURA": ["IBARRA", "OTAVALO", "COTACACHI", "ANTONIO ANTE", "PIMAMPIRO", "URCUQUI"],
  "LOJA": ["LOJA", "CATAMAYO", "CALVAS", "SARAGURO", "MACARA", "CELICA", "CHAGUARPAMBA", "ESPINDOLA", "GONZANAMA", "PALTAS", "PUYANGO", "QUILANGA", "PINDAL", "SOZORANGA", "ZAPOTILLO", "OLMEDO"],
  "LOS RIOS": ["BABAHOYO", "QUEVEDO", "BABA", "VINCES", "VENTANAS", "MOCACHE", "BUENA FE", "PALENQUE", "PUEBLOVIEJO", "URDANETA", "VALENCIA", "QUINSALOMA", "MONTALVO"],
  "MANABI": ["PORTOVIEJO", "MANTA", "CHONE", "MONTECRISTI", "JIPIJAPA", "BOLIVAR", "EL CARMEN", "FLAVIO ALFARO", "JAMA", "JARAMIJO", "JUNIN", "OLMEDO", "PAJAN", "PEDERNALES", "PICHINCHA", "ROCAFUERTE", "SANTA ANA", "SUCRE", "TOSAGUA", "24 DE MAYO", "PUERTO LOPEZ"],
  "PICHINCHA": ["QUITO", "SANGOLQUI", "MACHACHI", "CAYAMBE", "TABACUNDO", "PEDRO MONCAYO", "PEDRO VICENTE MALDONADO", "PUERTO QUITO", "SAN MIGUEL DE LOS BANCOS"],
  "SANTA ELENA": ["SANTA ELENA", "SALINAS", "LA LIBERTAD"],
  "SANTO DOMINGO DE LOS TSACHILAS": ["SANTO DOMINGO", "LA CONCORDIA"],
  "TUNGURAHUA": ["AMBATO", "BAÑOS", "PELILEO", "PILLARO", "CEVALLOS", "MOCHA", "QUERO", "TISALEO", "PATATE"],
};

interface PurchasePopupProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  products: Product[];
  themeColor?: "gold" | "orange";
  redirectPath?: string;
  landingId?: string;
}

export function PurchasePopup({ open, onOpenChange, products, themeColor = "gold", redirectPath = "/gracias", landingId = "general" }: PurchasePopupProps) {
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
  const isOrange = themeColor === "orange"; // Shilajit uses orange color as placeholder for Gold

  const styles = useMemo(() => ({
    header: isGold ? "bg-yellow-600" : (isOrange ? "bg-black" : "bg-orange-600"),
    borderActive: isGold ? "border-yellow-600 bg-yellow-50" : (isOrange ? "border-[#DAA520] bg-zinc-900" : "border-orange-600 bg-orange-50"),
    textActive: isGold ? "text-yellow-700" : (isOrange ? "text-[#DAA520]" : "text-orange-700"),
    button: isGold ? "bg-yellow-600 hover:bg-yellow-700" : (isOrange ? "bg-[#DAA520] hover:bg-black hover:text-[#DAA520] transition-all border-2 border-transparent hover:border-[#DAA520]" : "bg-orange-600 hover:bg-orange-700"),
    buttonText: isOrange ? "text-black group-hover:text-[#DAA520]" : "text-white",
    ring: isGold ? "focus:border-yellow-600" : (isOrange ? "focus:border-[#DAA520]" : "focus:border-orange-600"),
    label: "text-[11px] font-black uppercase text-slate-500 tracking-widest mb-1.5 block ml-1",
    modalBg: isOrange ? "bg-zinc-950" : "bg-white",
    inputBg: isOrange ? "bg-zinc-900 border-zinc-800 text-white" : "bg-slate-50 border-slate-100",
    sectionTitle: isOrange ? "text-white" : "text-slate-900"
  }), [isGold, isOrange]);

  useEffect(() => {
    if (open && products.length > 0 && !selectedProduct) {
      setSelectedProduct(products[1]?.id || products[0].id);
    }
  }, [open, products, selectedProduct]);

  const ciudadesDisponibles = useMemo(() => {
    return provincia ? (ecuadorData[provincia] || []).sort() : [];
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
      landingPageContentId: landingId
    };
    try {
      await addDoc(collection(firestore, "leadSubmissions"), orderData);
      setLoading(false);
      onOpenChange(false);
      router.push(`${redirectPath}?nombre=${encodeURIComponent(nombre)}&provincia=${encodeURIComponent(provincia)}&ciudad=${encodeURIComponent(ciudad)}&whatsapp=${encodeURIComponent(whatsapp)}&producto=${encodeURIComponent(product?.name || "")}&back=${encodeURIComponent(pathname)}`);
    } catch {
      setLoading(false);
      toast({ variant: "destructive", title: "ERROR", description: "No se pudo procesar el pedido. Intente más tarde." });
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className={cn("w-[98vw] max-w-[480px] p-0 overflow-hidden rounded-[2.5rem] mx-auto !translate-x-[-50%] !left-[50%] !translate-y-[-50%] !top-[50%] border-none shadow-2xl", styles.modalBg)}>
        <div className="max-h-[90vh] overflow-y-auto w-full scrollbar-hide">
          <div className={cn("p-6 pb-6 text-white text-center flex flex-col items-center gap-4 relative", styles.header)}>
            <DialogTitle className="text-[22px] font-black uppercase leading-tight tracking-tighter">
              ¡SÍ, QUIERO MI PEDIDO!
            </DialogTitle>
            <div className="w-full flex justify-center py-1">
              <Image 
                src="https://i.imgur.com/Jh61uYJ.png" 
                alt="Confianza Ecuador" 
                width={80} 
                height={80} 
                className="h-20 w-auto object-contain drop-shadow-xl"
              />
            </div>
          </div>

          <form onSubmit={handleSubmit} className={cn("p-5 space-y-6 pb-10", styles.modalBg)}>
            <div className="space-y-4">
              <p className={cn("text-[14px] font-black uppercase border-l-4 border-[#DAA520] pl-3", styles.sectionTitle)}>1. Selecciona tu oferta:</p>
              <RadioGroup value={selectedProduct} onValueChange={setSelectedProduct} className="grid gap-3">
                {products.map((p) => (
                  <Label key={p.id} htmlFor={p.id} className={cn("flex items-center gap-3 p-3 rounded-2xl border-2 cursor-pointer transition-all", selectedProduct === p.id ? styles.borderActive : (isOrange ? "border-zinc-800 bg-black hover:border-[#DAA520]/30" : "border-slate-100 bg-white hover:border-slate-200"))}>
                    <RadioGroupItem value={p.id} id={p.id} className="h-5 w-5 border-[#DAA520] text-[#DAA520]" />
                    <div className="h-12 w-12 rounded-xl overflow-hidden border border-zinc-800 shrink-0 bg-white relative">
                      <Image src={p.image} alt={p.name} fill className="object-cover" sizes="48px" />
                    </div>
                    <div className="flex-1 min-w-0 text-left">
                      <p className={cn("font-black text-[14px] uppercase leading-none mb-1", isOrange ? "text-white" : "text-slate-900")}>{p.name}</p>
                      <p className="text-[10px] text-slate-500 font-bold uppercase leading-tight">{p.description}</p>
                    </div>
                    <p className={cn("font-black text-[20px] tracking-tighter", styles.textActive)}>${p.price.toFixed(2)}</p>
                  </Label>
                ))}
              </RadioGroup>
            </div>

            <div className="space-y-5">
              <p className={cn("text-[14px] font-black uppercase border-l-4 border-[#DAA520] pl-3", styles.sectionTitle)}>2. Datos de Envío (Pago Contra Entrega):</p>
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <span className={styles.label}>Nombre</span>
                  <Input placeholder="Ej. Ana" required value={nombre} onChange={(e) => setNombre(e.target.value)} className={cn("h-14 rounded-xl font-bold", styles.inputBg, styles.ring)} />
                </div>
                <div className="space-y-1">
                  <span className={styles.label}>Apellido</span>
                  <Input placeholder="Ej. Pérez" required value={apellido} onChange={(e) => setApellido(e.target.value)} className={cn("h-14 rounded-xl font-bold", styles.inputBg, styles.ring)} />
                </div>
              </div>
              <div className="space-y-1">
                <span className={styles.label}>Número de WhatsApp (10 dígitos)</span>
                <Input placeholder="09XXXXXXXX" type="tel" required value={whatsapp} onChange={handleWhatsappChange} className={cn("h-14 rounded-xl font-bold", styles.inputBg, styles.ring)} />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <span className={styles.label}>Provincia</span>
                  <Select onValueChange={(val) => { setProvincia(val); setCiudad(""); }} required value={provincia}>
                    <SelectTrigger className={cn("h-14 rounded-xl font-bold", styles.inputBg)}><SelectValue placeholder="Seleccione" /></SelectTrigger>
                    <SelectContent className="z-[110]">{Object.keys(ecuadorData).sort().map(p => <SelectItem key={p} value={p}>{p}</SelectItem>)}</SelectContent>
                  </Select>
                </div>
                <div className="space-y-1">
                  <span className={styles.label}>Ciudad</span>
                  <Select onValueChange={setCiudad} disabled={!provincia} required value={ciudad}>
                    <SelectTrigger className={cn("h-14 rounded-xl font-bold", styles.inputBg)}><SelectValue placeholder="Seleccione" /></SelectTrigger>
                    <SelectContent className="z-[110]">{ciudadesDisponibles.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}</SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-1">
                <span className={styles.label}>Dirección (Calle 1, Calle 2 y Referencia)</span>
                <Input placeholder="Ej. Av. Amazonas y Villarroel..." required value={direccion} onChange={(e) => setDireccion(e.target.value)} className={cn("h-14 rounded-xl font-bold", styles.inputBg, styles.ring)} />
              </div>
            </div>

            <div className={cn("p-6 rounded-[2rem] flex flex-col items-center gap-3 shadow-md text-center", isOrange ? "bg-red-950/30 border-2 border-red-900/30" : "bg-red-50 border-2 border-red-100")}>
              <AlertTriangle className="h-10 w-10 text-red-600 animate-pulse" />
              <div className="space-y-2">
                <p className="text-[20px] font-black text-red-600 uppercase leading-none">¡Aviso Importante!</p>
                <p className={cn("text-[14px] font-bold leading-snug", isOrange ? "text-slate-300" : "text-red-600")}>
                  Tu pedido únicamente será despachado si tus datos están completos. Verifica tu dirección antes de confirmar.
                </p>
              </div>
            </div>

            <Button type="submit" disabled={loading} className={cn("w-full h-20 text-xl font-black uppercase rounded-3xl animate-heartbeat shadow-xl mt-4 group", styles.button)}>
              {loading ? "PROCESANDO..." : (
                <span className={cn("flex items-center", styles.buttonText)}>
                  <ShoppingCart className="h-6 w-6 mr-3" />
                  CONFIRMAR PEDIDO
                </span>
              )}
            </Button>
            
            <p className="text-[10px] text-center font-bold text-slate-500 uppercase tracking-widest mt-2 flex items-center justify-center gap-1">
              <ShieldCheck className="h-3 w-3" />
              Compra protegida en Ecuador
            </p>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}