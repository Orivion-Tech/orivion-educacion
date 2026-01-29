import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-surface-1 grid place-items-center px-6">
      <div className="max-w-lg text-center space-y-4">
        <p className="text-sm uppercase tracking-[0.3em] text-text-2">404</p>
        <h1 className="text-3xl font-heading font-semibold">Pagina no encontrada</h1>
        <p className="text-text-2">
          El recurso solicitado no existe o fue movido. Verifica la URL o vuelve al inicio.
        </p>
        <Button asChild>
          <Link href="/">Volver al inicio</Link>
        </Button>
      </div>
    </div>
  );
}
