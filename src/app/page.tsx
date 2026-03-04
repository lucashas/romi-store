import { redirect } from 'next/navigation';

export default function RootPage() {
  // Redirección obligatoria al Kit de Arroz como página principal definitiva
  redirect('/bioaqua-arroz');
}