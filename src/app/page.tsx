
import { redirect } from 'next/navigation';

export default function RootPage() {
  // Redirección directa para evitar procesos innecesarios en el servidor
  redirect('/bioaqua-arroz');
}
