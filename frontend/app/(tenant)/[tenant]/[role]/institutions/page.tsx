import { PageHeader } from '@/components/ui/page-header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RoleGate } from '@/components/auth/role-gate';
import type { RoleKey } from '@/config/roles';
import { Badge } from '@/components/ui/badge';

const institutions = [
  {
    name: 'Instituto Aurora',
    status: 'Active',
    plan: 'Enterprise',
    modules: ['Academico', 'IA', 'Reportes']
  },
  {
    name: 'Colegio Origen',
    status: 'Active',
    plan: 'Growth',
    modules: ['Academico', 'Reportes']
  }
];

export default async function InstitutionsAdminPage({
  params
}: {
  params: Promise<{ role: string }>;
}) {
  const { role } = await params;
  const roleKey = role as RoleKey;

  return (
    <RoleGate allowed={['system_admin']} role={roleKey}>
      <div className="space-y-6">
        <PageHeader
          title="Instituciones"
          description="Gestion multi-tenant con aislamiento seguro."
          actions={
            <div className="flex gap-2">
              <Button variant="secondary">Importar datos</Button>
              <Button>Nueva institucion</Button>
            </div>
          }
        />

        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Instituciones activas</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-semibold">12</p>
              <p className="text-xs text-text-2">+2 este mes</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Usuarios registrados</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-semibold">8,420</p>
              <p className="text-xs text-text-2">52% estudiantes</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Modulo IA activo</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-semibold">7</p>
              <p className="text-xs text-text-2">Instituciones con IA</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {institutions.map((institution) => (
            <Card key={institution.name} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{institution.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-text-2">
                <div className="flex items-center justify-between">
                  <span>Estado</span>
                  <Badge variant="success">{institution.status}</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span>Plan</span>
                  <span>{institution.plan}</span>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-text-2">Modulos</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {institution.modules.map((module) => (
                      <Badge key={module} variant="neutral">
                        {module}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm">Ver detalle</Button>
                  <Button size="sm" variant="secondary">
                    Configurar
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </RoleGate>
  );
}
