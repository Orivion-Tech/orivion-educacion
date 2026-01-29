import { PageHeader } from '@/components/ui/page-header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { FileDown, CalendarRange } from 'lucide-react';

const reports = [
  {
    title: 'Rendimiento global',
    description: 'Comparativo por grado y periodo.'
  },
  {
    title: 'Alertas de bienestar',
    description: 'Eventos criticos y seguimiento.'
  },
  {
    title: 'Uso de plataforma',
    description: 'Actividad por modulo e institucion.'
  }
];

export const revalidate = 120;

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Reportes"
        description="Visualiza analitica educativa en tiempo real."
        actions={<Button variant="secondary">Exportar PDF</Button>}
      />

      <Card className="border border-brand-100/70 bg-white/95">
        <CardHeader>
          <CardTitle>Filtros de reporte</CardTitle>
          <CardDescription>Selecciona periodo, grado o institucion.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-[1.2fr_1fr_1fr_auto]">
          <Input placeholder="Buscar reporte..." />
          <Select defaultValue="ultimo-mes">
            <option value="ultima-semana">Ultima semana</option>
            <option value="ultimo-mes">Ultimo mes</option>
            <option value="ultimo-trimestre">Ultimo trimestre</option>
          </Select>
          <Select defaultValue="todos">
            <option value="todos">Todos los grados</option>
            <option value="primaria">Primaria</option>
            <option value="secundaria">Secundaria</option>
          </Select>
          <Button variant="secondary">Aplicar</Button>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-3">
        {reports.map((report) => (
          <Card key={report.title} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>{report.title}</CardTitle>
              <CardDescription>{report.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2 text-xs text-text-2">
                <CalendarRange className="h-4 w-4" />
                Actualizado hace 2 horas
              </div>
              <div className="flex flex-wrap gap-2">
                <Button size="sm">Ver reporte</Button>
                <Button size="sm" variant="secondary">
                  Programar
                </Button>
                <Button size="sm" variant="ghost" className="text-text-2">
                  <FileDown className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

