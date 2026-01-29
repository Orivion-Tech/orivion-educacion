import { ShieldCheck, HeartHandshake, BookOpen, LineChart, BrainCircuit } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';

export default function ConsentPage() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-50 via-white to-surface-1 p-6 lg:p-10">
      <div className="absolute -left-20 top-10 h-56 w-56 rounded-full bg-brand-100/70 blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-brand-200/40 blur-3xl animate-float-slow" />
      <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6 animate-fade-up">
          <Badge variant="default">Consentimiento guardian</Badge>
          <div className="space-y-3">
            <h1 className="text-3xl font-semibold">Protegemos el aprendizaje y la privacidad.</h1>
            <p className="text-text-2">
              Antes de continuar, necesitamos el consentimiento del guardian para usar datos educativos y habilitar
              experiencias adaptativas con IA.
            </p>
          </div>
          <div className="grid gap-4">
            <div className="flex items-start gap-3 rounded-2xl border border-surface-3 bg-white/80 p-4 shadow-sm">
              <ShieldCheck className="h-5 w-5 text-brand-600" />
              <div>
                <p className="text-sm font-medium">Datos minimizados</p>
                <p className="text-xs text-text-2">
                  Solo mostramos informacion esencial y auditamos cada acceso.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-2xl border border-surface-3 bg-white/80 p-4 shadow-sm">
              <BookOpen className="h-5 w-5 text-brand-600" />
              <div>
                <p className="text-sm font-medium">Ruta educativa personalizada</p>
                <p className="text-xs text-text-2">
                  Recomendaciones basadas en progreso y necesidades academicas.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-2xl border border-surface-3 bg-white/80 p-4 shadow-sm">
              <LineChart className="h-5 w-5 text-brand-600" />
              <div>
                <p className="text-sm font-medium">Seguimiento transparente</p>
                <p className="text-xs text-text-2">
                  Reportes claros para guardianes y docentes.
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 text-xs text-text-2">
            <div className="flex items-center gap-2">
              <BrainCircuit className="h-4 w-4 text-brand-600" />
              IA educativa supervisada
            </div>
            <div className="h-1 w-1 rounded-full bg-text-2" />
            Consentimiento revocable
          </div>
        </div>

        <Card className="border border-brand-100/70 bg-white/95 shadow-xl animate-fade-up-delay">
          <CardHeader>
            <CardTitle>Consentimiento informado</CardTitle>
            <p className="text-xs text-text-2">Paso 1 de 2</p>
          </CardHeader>
          <CardContent className="space-y-5">
            <div className="rounded-2xl border border-surface-3 bg-surface-1 p-4 text-xs text-text-2">
              Al aceptar, autorizas el uso de datos academicos para personalizar la experiencia y recibir
              recomendaciones. Puedes revocar el consentimiento en cualquier momento.
            </div>
            <label className="flex items-start gap-3 text-sm text-text-2">
              <Checkbox />
              <span>
                Acepto el procesamiento de datos educativos para personalizacion del aprendizaje.
              </span>
            </label>
            <label className="flex items-start gap-3 text-sm text-text-2">
              <Checkbox />
              <span>
                Acepto el uso de IA para recomendaciones y feedback automatico.
              </span>
            </label>
            <label className="flex items-start gap-3 text-sm text-text-2">
              <Checkbox />
              <span>
                Confirmo que soy el guardian autorizado del estudiante.
              </span>
            </label>
            <div className="space-y-3">
              <Button className="w-full">Guardar consentimiento</Button>
              <Button variant="secondary" className="w-full">
                Descargar politica
              </Button>
              <div className="flex items-center gap-2 text-xs text-text-2">
                <HeartHandshake className="h-4 w-4 text-brand-600" />
                Este registro queda auditado para tu seguridad.
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
