import { PageHeader } from '@/components/ui/page-header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { LineChart, Medal } from 'lucide-react';

const progressData = [
  {
    area: 'Matematicas',
    value: 72
  },
  {
    area: 'Lenguaje',
    value: 84
  },
  {
    area: 'Ciencias',
    value: 63
  }
];

const studentsNeedingSupport = [
  { name: 'Estudiante A-102', area: 'Matematicas', status: 'Refuerzo' },
  { name: 'Estudiante B-209', area: 'Lectura', status: 'Seguimiento' },
  { name: 'Estudiante C-113', area: 'Ciencias', status: 'Refuerzo' }
];

export default function ProgressPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Progreso del estudiante"
        description="Seguimiento adaptativo con indicadores claros."
        actions={
          <div className="flex gap-2">
            <Button variant="secondary">Descargar reporte</Button>
            <Button>Enviar resumen</Button>
          </div>
        }
      />

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <LineChart className="h-4 w-4 text-brand-600" />
              Ritmo semanal
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-3xl font-semibold">+12%</p>
            <p className="text-sm text-text-2">Mejora respecto a la semana anterior</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Meta de dominio</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-3xl font-semibold">78%</p>
            <Progress value={78} />
            <p className="text-xs text-text-2">Objetivo: 85%</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Medal className="h-4 w-4 text-brand-600" />
              Estudiante destacado
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-semibold">Andrea P.</p>
            <p className="text-sm text-text-2">95% dominio en lectura</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Card>
          <CardHeader>
            <CardTitle>Dominio por area</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-2">
            {progressData.map((item) => (
              <div key={item.area} className="rounded-2xl border border-surface-3 bg-surface-1 p-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">{item.area}</p>
                  <Badge variant={item.value > 75 ? 'success' : 'warning'}>{item.value}%</Badge>
                </div>
                <Progress value={item.value} className="mt-3" />
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Atencion prioritaria</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {studentsNeedingSupport.map((student) => (
              <div key={student.name} className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-medium">{student.name}</p>
                  <p className="text-xs text-text-2">{student.area}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="warning">{student.status}</Badge>
                  <Button size="sm" variant="ghost" className="text-text-2">
                    Ver
                  </Button>
                </div>
              </div>
            ))}
            <Button size="sm" variant="secondary" className="w-full">
              Ver todos los casos
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
