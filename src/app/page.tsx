import { redirect } from 'next/navigation';

export default function RootPage() {
  // Redirigimos la raíz al nuevo producto estrella: Kit de Arroz Bioaqua
  redirect('/bioaqua-arroz');
}
