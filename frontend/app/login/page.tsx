import { Suspense } from 'react';
import { LoginForm } from '@/components/auth/login-form';

export const dynamic = 'force-dynamic';

export default function LoginPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-brand-50 via-white to-surface-1">
      <div className="absolute inset-0 grid-ambient opacity-70" />
      <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-brand-100/60 blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-brand-200/40 blur-3xl animate-float-slow" />
      <div className="container relative grid min-h-screen items-center gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6 animate-fade-up">
          <p className="text-xs uppercase tracking-[0.4em] text-text-2">Sistema adaptativo</p>
          <h1 className="text-4xl font-semibold leading-tight lg:text-5xl">
            Aprendizaje seguro y personalizado para cada institucion.
          </h1>
          <p className="text-lg text-text-2">
            Gestiona rutas educativas, monitorea progreso y habilita IA responsable con controles de privacidad.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              'Cumplimiento y privacidad para menores',
              'Acceso multi-tenant con branding',
              'Analitica educativa en tiempo real',
              'IA supervisada y auditada'
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-surface-3 bg-white/70 p-4 text-sm">
                {item}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-6 text-xs text-text-2">
            <span>SSR + ISR</span>
            <span>Sesiones seguras</span>
            <span>Acceso por rol</span>
          </div>
        </div>
        <Suspense
          fallback={
            <div className="min-h-[420px] rounded-3xl border border-surface-3 bg-white/80 p-8 text-sm text-text-2 shadow-lg">
              Cargando acceso seguro...
            </div>
          }
        >
          <LoginForm />
        </Suspense>
      </div>
    </div>
  );
}
