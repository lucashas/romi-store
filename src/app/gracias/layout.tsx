
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "¡Gracias por tu compra! | Romi Store EC",
  description: "Tu pedido ha sido registrado con éxito en Romi Store Ecuador. Pronto nos pondremos en contacto contigo para coordinar la entrega.",
  alternates: {
    canonical: "/gracias",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function GraciasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
