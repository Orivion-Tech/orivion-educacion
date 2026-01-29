import { PageHeader } from '@/components/ui/page-header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { ShieldCheck } from 'lucide-react';

export default function SecuritySettingsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Seguridad y privacidad"
        description="Configura politicas de acceso y visibilidad."
        actions={<Button variant="secondary">Guardar cambios</Button>}
      />
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Card>
          <CardHeader>
            <CardTitle>Politicas criticas</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-text-2">
            <label className="flex items-center gap-2">
              <Checkbox defaultChecked /> Requerir MFA para roles administrativos
            </label>
            <label className="flex items-center gap-2">
              <Checkbox defaultChecked /> Enmascarar datos de menores en reportes
            </label>
            <label className="flex items-center gap-2">
              <Checkbox /> Bloquear descargas sin aprobacion
            </label>
            <label className="flex items-center gap-2">
              <Checkbox defaultChecked /> Auditoria de accesos sensibles
            </label>
          </CardContent>
        </Card>

        <Card className="border border-brand-100/70 bg-white/95">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-brand-600" />
              Estado de cumplimiento
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-text-2">
            <p>Ultima revision: hace 3 dias</p>
            <p>Consentimientos activos: 92%</p>
            <Button size="sm">Ver auditoria</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
