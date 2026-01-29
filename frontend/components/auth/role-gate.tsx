'use client';

import type { RoleKey } from '@/config/roles';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export function RoleGate({
  allowed,
  role,
  children
}: {
  allowed: RoleKey[];
  role: RoleKey;
  children: React.ReactNode;
}) {
  if (!allowed.includes(role)) {
    return (
      <Alert className="border-amber-200 bg-amber-50">
        <div>
          <AlertTitle>Acceso restringido</AlertTitle>
          <AlertDescription>
            Tu rol actual no tiene permisos para esta seccion. Contacta al administrador.
          </AlertDescription>
        </div>
      </Alert>
    );
  }
  return <>{children}</>;
}
