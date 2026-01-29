import { PageHeader } from '@/components/ui/page-header';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const sessions = [
  {
    id: 's-1',
    device: 'Chrome on Windows',
    location: 'Caracas',
    status: 'Active'
  },
  {
    id: 's-2',
    device: 'iPad Safari',
    location: 'Maracay',
    status: 'Revoked'
  }
];

export default function SessionsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Sesiones activas"
        description="Controla multiples sesiones por usuario."
        actions={<Button variant="secondary">Cerrar todas</Button>}
      />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Dispositivo</TableHead>
            <TableHead>Ubicacion</TableHead>
            <TableHead>Estado</TableHead>
            <TableHead>Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sessions.map((session) => (
            <TableRow key={session.id}>
              <TableCell>{session.device}</TableCell>
              <TableCell>{session.location}</TableCell>
              <TableCell>
                <Badge variant={session.status === 'Active' ? 'success' : 'neutral'}>
                  {session.status}
                </Badge>
              </TableCell>
              <TableCell>
                <Button size="sm" variant="ghost" className="text-text-2">
                  Revocar
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
