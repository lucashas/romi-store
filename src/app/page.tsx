
import { redirect } from 'next/navigation';

export default function RootPage() {
  // Redirigimos la raíz al producto principal por ahora
  redirect('/mary-ruth');
}
