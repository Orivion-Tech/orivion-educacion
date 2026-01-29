import { PageHeader } from '@/components/ui/page-header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { BrainCircuit, ShieldCheck, Sparkles } from 'lucide-react';

const prompts = [
  'Generar retroalimentacion positiva para estudiante con bajo rendimiento.',
  'Crear micro-evaluacion de lectura de 10 minutos.',
  'Sugerir ruta de refuerzo para algebra basica.'
];

export default function AiPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Integracion IA"
        description="Tutor virtual, recomendaciones y feedback automatizado."
        actions={<Button variant="secondary">Configurar reglas</Button>}
      />
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BrainCircuit className="h-4 w-4 text-brand-600" />
              Tutor virtual
            </CardTitle>
            <CardDescription>
              Interfaz conversacional segura con trazabilidad de prompts.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Textarea placeholder="Escribe una pregunta para el tutor virtual..." />
            <div className="flex gap-2">
              <Button>Enviar a IA</Button>
              <Button variant="secondary">Guardar prompt</Button>
            </div>
            <div className="rounded-xl border border-surface-3 bg-surface-1 p-3 text-xs text-text-2">
              Respuesta sugerida: La IA ofrece orientacion pedagogica y rutas sugeridas sin exponer datos sensibles.
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-brand-600" />
                Biblioteca de prompts
              </CardTitle>
              <CardDescription>Plantillas listas para uso docente.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {prompts.map((prompt) => (
                <div key={prompt} className="rounded-xl border border-surface-3 bg-surface-1 p-3 text-sm">
                  {prompt}
                  <Button size="sm" variant="secondary" className="mt-2">
                    Usar prompt
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-brand-600" />
                Control y seguridad
              </CardTitle>
              <CardDescription>Politicas de IA responsable.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-text-2">
              <label className="flex items-start gap-2">
                <Checkbox defaultChecked />
                <span>Ocultar datos personales en prompts</span>
              </label>
              <label className="flex items-start gap-2">
                <Checkbox defaultChecked />
                <span>Requerir aprobacion humana para recomendaciones criticas</span>
              </label>
              <label className="flex items-start gap-2">
                <Checkbox />
                <span>Registrar auditoria de conversaciones</span>
              </label>
              <Button size="sm" variant="secondary">
                Guardar politicas
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
