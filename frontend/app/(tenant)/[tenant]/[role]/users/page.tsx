import { PageHeader } from '@/components/ui/page-header';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { RoleGate } from '@/components/auth/role-gate';
import type { RoleKey } from '@/config/roles';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';

const users = [
  {
    id: 'u-102',
    name: 'Laura Vega',
    role: 'Teacher',
    status: 'Active'
  },
  {
    id: 'u-204',
    name: 'Mario Paredes',
    role: 'Student',
    status: 'Pending consent'
  },
  {
    id: 'u-342',
    name: 'Rosa Diaz',
    role: 'Guardian',
    status: 'Active'
  }
];

export default async function UsersPage({
  params
}: {
  params: Promise<{ role: string }>;
}) {
  const { role } = await params;
  const roleKey = role as RoleKey;

  return (
    <RoleGate allowed={['system_admin', 'institution_admin']} role={roleKey}>
      <div className="space-y-6">
        <PageHeader
          title="Gestion de usuarios"
          description="Control de accesos, perfiles y consentimiento."
          actions={
            <div className="flex gap-2">
              <Button variant="secondary">Importar</Button>
              <Button>Nuevo usuario</Button>
            </div>
          }
        />

        <Card className="border border-brand-100/70 bg-white/95">
          <CardContent className="grid gap-4 md:grid-cols-[1.6fr_1fr_1fr_auto]">
            <Input placeholder="Buscar por nombre o ID..." />
            <Select defaultValue="todos">
              <option value="todos">Todos los roles</option>
              <option value="teacher">Docente</option>
              <option value="student">Estudiante</option>
              <option value="guardian">Guardian</option>
            </Select>
            <Select defaultValue="todos">
              <option value="todos">Todos los estados</option>
              <option value="active">Activos</option>
              <option value="pending">Pendientes</option>
            </Select>
            <Button variant="secondary">Filtrar</Button>
          </CardContent>
        </Card>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Nombre</TableHead>
              <TableHead>Rol</TableHead>
              <TableHead>Estado</TableHead>
              <TableHead>Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>{user.status}</TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button size="sm" variant="secondary">
                      Ver
                    </Button>
                    <Button size="sm" variant="ghost" className="text-text-2">
                      Editar
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </RoleGate>
  );
}
