import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-surface-1">
      <div className="absolute inset-0 grid-ambient opacity-60" />
      <div className="container relative py-20 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.4em] text-text-2">
              Sistema de Aprendizaje Adaptativo
            </p>
            <h1 className="text-4xl font-semibold leading-tight lg:text-5xl">
              Aprendizaje seguro, personalizado y listo para multi-institucion.
            </h1>
            <p className="text-lg text-text-2">
              Plataforma educativa moderna con IA aplicada, privacidad para menores, y
              analitica accionable para cada rol.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="/login">Acceder</Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="/institutions">Ver instituciones</Link>
              </Button>
            </div>
            <div className="flex items-center gap-6 text-xs text-text-2">
              <span>SSR + SSG + ISR</span>
              <span>Multi-tenant</span>
              <span>Seguridad avanzada</span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="rounded-3xl border border-white/60 bg-white/80 p-6 shadow-lg">
              <p className="text-xs uppercase tracking-[0.3em] text-text-2">Panel IA</p>
              <h3 className="text-xl font-semibold">Tutor virtual activo</h3>
              <p className="text-sm text-text-2">
                Recomendaciones de contenido y ajustes de ruta en tiempo real.
              </p>
              <div className="mt-4 grid gap-3">
                <div className="h-2 w-full rounded-full bg-surface-2">
                  <div className="h-2 w-2/3 rounded-full bg-brand-500" />
                </div>
                <div className="flex justify-between text-xs text-text-2">
                  <span>Dominio matematicas</span>
                  <span>67%</span>
                </div>
              </div>
            </div>
            <div className="rounded-3xl border border-white/60 bg-white/80 p-6 shadow-lg">
              <p className="text-xs uppercase tracking-[0.3em] text-text-2">Consentimiento</p>
              <h3 className="text-xl font-semibold">Guardian informado</h3>
              <p className="text-sm text-text-2">
                Flujos auditables y control total de datos de menores.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
