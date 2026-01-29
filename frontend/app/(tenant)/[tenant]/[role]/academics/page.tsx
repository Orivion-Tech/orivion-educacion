import { PageHeader } from '@/components/ui/page-header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { CalendarCheck2, Sparkles } from 'lucide-react';

const modules = [
  {
    title: 'Ruta adaptativa',
    description: 'Secuencias dinamicas por dominio y ritmo de aprendizaje.',
    level: 'Basico'
  },
  {
    title: 'Evaluaciones inteligentes',
    description: 'Medicion continua con micro-diagnosticos.',
    level: 'Intermedio'
  },
  {
    title: 'Biblioteca curada',
    description: 'Contenido alineado a competencias por nivel.',
    level: 'Avanzado'
  }
];

const upcoming = [
  { date: 'Lun 03', title: 'Diagnostico inicial - 7A', status: 'Programado' },
  { date: 'Mie 05', title: 'Cierre de modulo - Lectura', status: 'Pendiente' },
  { date: 'Vie 07', title: 'Revision formativa', status: 'En curso' }
];

export default function AcademicsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Modulo academico"
        description="Visualiza rutas, contenidos y adaptaciones."
        actions={
          <div className="flex gap-2">
            <Button variant="secondary">Programar evaluacion</Button>
            <Button>Crear ruta</Button>
          </div>
        }
      />

      <Card className="border border-brand-100/70 bg-white/95">
        <CardHeader>
          <CardTitle>Filtros rapidos</CardTitle>
          <CardDescription>Encuentra contenidos por nivel, curso o area.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-[1.6fr_1fr_1fr_auto]">
          <Input placeholder="Buscar contenido o ruta..." />
          <Select defaultValue="todos">
            <option value="todos">Todos los niveles</option>
            <option value="basico">Basico</option>
            <option value="intermedio">Intermedio</option>
            <option value="avanzado">Avanzado</option>
          </Select>
          <Select defaultValue="matematicas">
            <option value="matematicas">Matematicas</option>
            <option value="lenguaje">Lenguaje</option>
            <option value="ciencias">Ciencias</option>
          </Select>
          <Button variant="secondary">Filtrar</Button>
        </CardContent>
      </Card>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="grid gap-6 md:grid-cols-2">
          {modules.map((module) => (
            <Card key={module.title} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{module.title}</CardTitle>
                <CardDescription>{module.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-xs text-text-2">
                  <span>Nivel: {module.level}</span>
                  <span>12 recursos</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button size="sm">Abrir</Button>
                  <Button size="sm" variant="secondary">
                    Asignar
                  </Button>
                  <Button size="sm" variant="ghost" className="text-text-2">
                    Vista previa
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CalendarCheck2 className="h-4 w-4 text-brand-600" />
                Agenda academica
              </CardTitle>
              <CardDescription>Proximas actividades clave.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {upcoming.map((item) => (
                <div key={item.title} className="rounded-xl border border-surface-3 bg-surface-1 p-3">
                  <p className="text-xs uppercase tracking-[0.2em] text-text-2">{item.date}</p>
                  <p className="text-sm font-medium">{item.title}</p>
                  <p className="text-xs text-text-2">{item.status}</p>
                </div>
              ))}
              <Button size="sm" variant="secondary" className="w-full">
                Ver calendario
              </Button>
            </CardContent>
          </Card>

          <Card className="border border-brand-100/70 bg-white/95">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-brand-600" />
                IA educativa
              </CardTitle>
              <CardDescription>Recomendaciones para reforzar contenidos.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-text-2">
              <p>- Sugerir micro-evaluacion de lectura en 8 minutos.</p>
              <p>- Ajustar ruta de algebra con practicas guiadas.</p>
              <Button size="sm">Aplicar recomendaciones</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
