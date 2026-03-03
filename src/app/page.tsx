import { redirect } from 'next/navigation';

export default function RootPage() {
  // Redirigimos la raíz al producto Bioaqua V7 que es el actual
  redirect('/bioaqua-v7');
}
