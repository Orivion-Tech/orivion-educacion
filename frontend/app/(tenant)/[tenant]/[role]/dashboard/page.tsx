import { PageHeader } from '@/components/ui/page-header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { ProgressRing } from '@/components/charts/progress-ring';
import { ROLE_LABELS, type RoleKey } from '@/config/roles';
import { CalendarClock, Sparkles, ShieldCheck, ArrowUpRight, BookOpenCheck } from 'lucide-react';

const recommendations = [
  {
    title: 'Matematicas - Adaptacion nivel 2',
    status: 'En curso',
    progress: 62
  },
  {
    title: 'Lectura comprensiva - Ruta avanzada',
    status: 'Listo',
    progress: 85
  }
];

const quickActions = [
  {
    title: 'Crear actividad',
    description: 'Planifica una sesion adaptativa para un grupo.',
    action: 'Nueva actividad'
  },
  {
    title: 'Programar evaluacion',
    description: 'Define un diagnostico rapido por nivel.',
    action: 'Crear evaluacion'
  },
  {
    title: 'Enviar aviso',
    description: 'Notifica a estudiantes o guardianes.',
    action: 'Crear comunicado'
  },
  {
    title: 'Generar reporte',
    description: 'Descarga analitica de aprendizaje.',
    action: 'Descargar'
  }
];

const schedule = [
  { time: '08:30', title: 'Diagnostico Matematicas', meta: '7A - Aula 3' },
  { time: '10:00', title: 'Sesion IA - Lectura guiada', meta: '8B - Laboratorio' },
  { time: '13:15', title: 'Seguimiento individual', meta: 'Estudiante A-102' }
];

export default async function DashboardPage({
  params
}: {
  params: Promise<{ role: string }>;
}) {
  const { role } = await params;
  const roleKey = role as RoleKey;

  return (
    <div className="space-y-8">
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 via-brand-600 to-brand-500 p-6 text-white shadow-2xl lg:p-8">
        <div className="absolute -right-10 top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
        <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
        <div className="relative grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-white/70">Panel adaptativo</p>
            <h2 className="text-3xl font-semibold">{`Bienvenido ${ROLE_LABELS[roleKey] ?? ''}`}</h2>
            <p className="text-white/80">
              Visualiza el estado del aprendizaje, recomendaciones de IA y tareas prioritarias en un solo lugar.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button className="bg-white text-brand-700 hover:bg-white/90">Crear ruta</Button>
              <Button
                variant="ghost"
                className="border border-white/30 text-white hover:bg-white/10"
              >
                Ver IA
              </Button>
            </div>
          </div>
          <div className="grid gap-4">
            <div className="rounded-2xl border border-white/20 bg-white/10 p-4">
              <p className="text-xs uppercase tracking-[0.3em] text-white/70">Meta semanal</p>
              <p className="text-2xl font-semibold">78% completado</p>
              <Progress value={78} className="mt-3 bg-white/20" />
            </div>
            <div className="rounded-2xl border border-white/20 bg-white/10 p-4">
              <p className="text-xs uppercase tracking-[0.3em] text-white/70">Alertas criticas</p>
              <p className="text-2xl font-semibold">3 pendientes</p>
              <p className="text-sm text-white/70">2 consentimientos por validar</p>
            </div>
          </div>
        </div>
      </section>

      <PageHeader
        title="Resumen operativo"
        description="Alertas, avances y acciones inmediatas del sistema."
        actions={<Button variant="secondary">Exportar</Button>}
      />

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="bg-white/90">
          <CardHeader>
            <CardTitle>Aprendices activos</CardTitle>
            <CardDescription>Ultimas 24 horas</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-semibold">1,284</p>
            <p className="text-sm text-text-2">+8% vs semana anterior</p>
          </CardContent>
        </Card>
        <Card className="bg-white/90">
          <CardHeader>
            <CardTitle>Dominio promedio</CardTitle>
            <CardDescription>Basado en IA</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-3xl font-semibold">78%</p>
            <Progress value={78} />
          </CardContent>
        </Card>
        <Card className="bg-white/90">
          <CardHeader>
            <CardTitle>Alertas de seguridad</CardTitle>
            <CardDescription>Ultimas 12 horas</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-3xl font-semibold">3</p>
            <div className="flex items-center justify-between rounded-xl border border-surface-3 bg-surface-1 px-3 py-2 text-xs text-text-2">
              <span>Consentimientos</span>
              <Badge variant="warning">2 pendientes</Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Acciones rapidas</CardTitle>
              <CardDescription>Inicia tareas clave con un solo clic.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 md:grid-cols-2">
              {quickActions.map((item) => (
                <div key={item.title} className="rounded-2xl border border-surface-3 bg-surface-1 p-4">
                  <p className="text-sm font-semibold">{item.title}</p>
                  <p className="mt-1 text-xs text-text-2">{item.description}</p>
                  <Button size="sm" className="mt-3">
                    {item.action}
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recomendaciones prioritarias</CardTitle>
              <CardDescription>IA adaptativa en tiempo real</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {recommendations.map((item) => (
                <div key={item.title} className="rounded-xl border border-surface-3 bg-surface-1 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="font-medium">{item.title}</p>
                      <p className="text-xs text-text-2">Ruta sugerida por IA</p>
                    </div>
                    <Badge variant={item.status === 'Listo' ? 'success' : 'warning'}>
                      {item.status}
                    </Badge>
                  </div>
                  <Progress value={item.progress} className="mt-3" />
                  <div className="mt-3 flex gap-2">
                    <Button size="sm" variant="secondary">
                      Revisar
                    </Button>
                    <Button size="sm" variant="ghost" className="text-text-2">
                      Ver detalles
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="border border-brand-100/80 bg-white/95">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-brand-600" />
                IA en accion
              </CardTitle>
              <CardDescription>Insights generados para tu institucion.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-text-2">
              <div className="flex items-start gap-3 rounded-xl border border-surface-3 bg-surface-1 p-3">
                <BookOpenCheck className="mt-0.5 h-4 w-4 text-brand-600" />
                <span>Nuevo micro-curso recomendado para estudiantes con bajo dominio en algebra.</span>
              </div>
              <div className="flex items-start gap-3 rounded-xl border border-surface-3 bg-surface-1 p-3">
                <ShieldCheck className="mt-0.5 h-4 w-4 text-brand-600" />
                <span>IA detecto patrones de fatiga. Sugiere pausas activas en sesiones largas.</span>
              </div>
              <Button size="sm" variant="secondary" className="w-full">
                Ver tablero IA
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CalendarClock className="h-4 w-4 text-brand-600" />
                Agenda de hoy
              </CardTitle>
              <CardDescription>Actividades programadas</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {schedule.map((item) => (
                <div key={item.title} className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-medium">{item.time}</p>
                    <p className="text-sm">{item.title}</p>
                    <p className="text-xs text-text-2">{item.meta}</p>
                  </div>
                  <Button size="sm" variant="ghost" className="text-text-2">
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </div>
              ))}
              <Button size="sm" className="w-full">
                Ver calendario completo
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Dominio por area</CardTitle>
              <CardDescription>Ultima semana</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-4">
              <ProgressRing value={82} label="Matematicas" />
              <ProgressRing value={74} label="Lenguaje" />
              <ProgressRing value={65} label="Ciencias" />
              <ProgressRing value={91} label="Tecnologia" />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

