import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function CtaSection() {
  return (
    <section className="bg-brand-600">
      <div className="container py-14 text-white">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-3xl font-semibold">Listos para una migracion segura.</h2>
            <p className="mt-2 text-white/80">
              Activa tu entorno multi-institucion y conecta el backend de forma segura.
            </p>
          </div>
          <Button asChild variant="secondary" size="lg">
            <Link href="/login">Solicitar acceso</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
