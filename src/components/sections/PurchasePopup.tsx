
"use client";

import { useState, useMemo, useEffect } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useFirestore } from "@/firebase";
import { collection, addDoc } from "firebase/firestore";
import { errorEmitter } from "@/firebase/error-emitter";
import { FirestorePermissionError } from "@/firebase/errors";
import { useRouter, usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { AlertTriangle, ShieldCheck, ShoppingBag, Heart } from "lucide-react";

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
    ring: isGold ? "focus:border-yellow-600" : "focus:border-orange-600",
    label: "text-[11px] font-black uppercase text-slate-500 tracking-widest mb-1.5 block ml-1"
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
      landingPageContentId: "bioaqua-arroz"
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
        <div className="max-h-[90vh] overflow-y-auto w-full scrollbar-hide">
          <div className={cn("p-6 pb-6 text-white text-center flex flex-col items-center gap-4", styles.header)}>
            <DialogTitle className="text-[22px] font-black uppercase leading-tight tracking-tighter">
              ¡SÍ, QUIERO MI PIEL DE PORCELANA!
            </DialogTitle>
            <div className="w-full flex justify-center py-1">
              <img 
                src="https://i.imgur.com/Jh61uYJ.png" 
                alt="Confianza Ecuador" 
                className="h-20 w-auto object-contain drop-shadow-xl"
              />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-5 space-y-6 bg-white pb-10">
            <div className="space-y-4">
              <p className="text-[14px] font-black text-slate-900 uppercase border-l-4 border-primary pl-3">1. Selecciona tu oferta:</p>
              <RadioGroup value={selectedProduct} onValueChange={setSelectedProduct} className="grid gap-3">
                {products.map((p) => (
                  <Label key={p.id} htmlFor={p.id} className={cn("flex items-center gap-3 p-3 rounded-2xl border-2 cursor-pointer transition-all", selectedProduct === p.id ? styles.borderActive : "border-slate-100 bg-white hover:border-slate-200")}>
                    <RadioGroupItem value={p.id} id={p.id} className="h-5 w-5" />
                    <div className="h-12 w-12 rounded-xl overflow-hidden border border-slate-200 shrink-0 bg-white">
                      <img src="https://i.imgur.com/aSjVyM2.png" alt="Logo" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0 text-left">
                      <p className="font-black text-[14px] text-slate-900 uppercase leading-none mb-1">{p.name}</p>
                      <p className="text-[10px] text-slate-400 font-bold uppercase leading-tight">{p.description}</p>
                    </div>
                    <p className={cn("font-black text-[20px] tracking-tighter", styles.textActive)}>${p.price.toFixed(0)}</p>
                  </Label>
                ))}
              </RadioGroup>
            </div>

            <div className="space-y-5">
              <p className="text-[14px] font-black text-slate-900 uppercase border-l-4 border-primary pl-3">2. Datos de Envío (Pago Contra Entrega):</p>
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <span className={styles.label}>Nombre</span>
                  <Input placeholder="Ej. Ana" required value={nombre} onChange={(e) => setNombre(e.target.value)} className={cn("h-14 rounded-xl bg-slate-50 border-2 border-slate-100 font-bold", styles.ring)} />
                </div>
                <div className="space-y-1">
                  <span className={styles.label}>Apellido</span>
                  <Input placeholder="Ej. Pérez" required value={apellido} onChange={(e) => setApellido(e.target.value)} className={cn("h-14 rounded-xl bg-slate-50 border-2 border-slate-100 font-bold", styles.ring)} />
                </div>
              </div>
              <div className="space-y-1">
                <span className={styles.label}>Número de WhatsApp (notificaciones)</span>
                <Input placeholder="09XXXXXXXX" type="tel" required value={whatsapp} onChange={handleWhatsappChange} className={cn("h-14 rounded-xl bg-slate-50 border-2 border-slate-100 font-bold", styles.ring)} />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <span className={styles.label}>Provincia</span>
                  <Select onValueChange={(val) => { setProvincia(val); setCiudad(""); }} required value={provincia}>
                    <SelectTrigger className="h-14 rounded-xl bg-slate-50 border-2 border-slate-100 font-bold"><SelectValue placeholder="Seleccione" /></SelectTrigger>
                    <SelectContent className="z-[110]">{Object.keys(ecuadorData).sort().map(p => <SelectItem key={p} value={p}>{p}</SelectItem>)}</SelectContent>
                  </Select>
                </div>
                <div className="space-y-1">
                  <span className={styles.label}>Ciudad</span>
                  <Select onValueChange={setCiudad} disabled={!provincia} required value={ciudad}>
                    <SelectTrigger className="h-14 rounded-xl bg-slate-50 border-2 border-slate-100 font-bold"><SelectValue placeholder="Seleccione" /></SelectTrigger>
                    <SelectContent className="z-[110]">{ciudadesDisponibles.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}</SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-1">
                <span className={styles.label}>Dirección Entrega: (2 calles y referencia)</span>
                <Input placeholder="Calle Principal y Secundaria" required value={direccion} onChange={(e) => setDireccion(e.target.value)} className={cn("h-14 rounded-xl bg-slate-50 border-2 border-slate-100 font-bold", styles.ring)} />
                <p className="text-[10px] text-slate-400 font-medium leading-tight mt-1 px-1 italic">
                  Ej: Av. Vicente y Jose Albaca al frente del supermaxi casa de 2 pisos, # 23-3, blanca, barrio La Pradera...
                </p>
              </div>
            </div>

            <div className="bg-red-50 border-2 border-red-100 p-6 rounded-[2rem] flex flex-col items-center gap-3 shadow-md text-center">
              <AlertTriangle className="h-10 w-10 text-red-600 animate-pulse" />
              <div className="space-y-3">
                <p className="text-[20px] font-black text-red-700 uppercase leading-none">⚠️ ATENCIÓN ⚠️</p>
                <p className="text-[16px] font-bold text-red-600 leading-snug">
                  Tu pedido únicamente podrá salir de la bodega si tus datos están completos. Por favor, verifica tu dirección antes de confirmar.
                </p>
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-[2rem] border-2 border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
                <ShoppingBag className={cn("h-5 w-5", styles.textActive)} />
                <p className="text-[14px] font-black text-slate-900 uppercase tracking-tighter">Resumen de tu pedido:</p>
              </div>
              <div className="flex justify-between items-center">
                <div className="space-y-1 max-w-[70%] text-left">
                  <p className="text-[13px] font-black text-slate-800 uppercase leading-none">{product?.name}</p>
                  <p className="text-[10px] font-bold text-slate-500 uppercase">Envío a domicilio incluido</p>
                </div>
                <div className="text-right">
                  <p className={cn("text-[26px] font-black tracking-tighter leading-none", styles.textActive)}>${product?.price.toFixed(0)}</p>
                  <p className="text-[10px] font-black text-green-600 uppercase">Total a pagar</p>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 p-6 rounded-[2rem] border-2 border-primary/10 text-center space-y-3 shadow-inner">
              <div className="flex justify-center">
                <Heart className={cn("h-6 w-6 animate-pulse", styles.textActive)} />
              </div>
              <p className="text-[14px] font-medium text-slate-700 leading-relaxed italic">
                ✨ Recuerda: Cubrimos el costo del envío para que tu pedido llegue a tu puerta sin cargos adicionales. 🙌
              </p>
              <p className={cn("text-[14px] font-black uppercase leading-tight", styles.textActive)}>
                Al confirmar tu compra, te comprometes a recibir y cancelar tu pedido con total confianza. 💖
              </p>
            </div>

            <Button type="submit" disabled={loading} className={cn("w-full h-20 text-xl font-black uppercase rounded-3xl animate-heartbeat text-white shadow-xl mt-4", styles.button)}>
              {loading ? "PROCESANDO..." : "¡CONFIRMAR PEDIDO!"}
            </Button>
            
            <p className="text-[10px] text-center font-bold text-slate-400 uppercase tracking-widest mt-2 flex items-center justify-center gap-1">
              <ShieldCheck className="h-3 w-3" />
              🔒 Envío 100% Seguro en Ecuador
            </p>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
