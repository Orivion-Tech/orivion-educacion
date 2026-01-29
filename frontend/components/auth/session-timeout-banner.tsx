'use client';

import * as React from 'react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';

export function SessionTimeoutBanner({ expiresAt }: { expiresAt?: string }) {
  const [isNearExpiry, setIsNearExpiry] = React.useState(false);

  React.useEffect(() => {
    if (!expiresAt) return;
    const expiry = new Date(expiresAt).getTime();
    const interval = setInterval(() => {
      const now = Date.now();
      setIsNearExpiry(expiry - now < 10 * 60 * 1000);
    }, 30 * 1000);
    return () => clearInterval(interval);
  }, [expiresAt]);

  if (!isNearExpiry) return null;

  return (
    <Alert className="border-amber-200 bg-amber-50">
      <div className="flex-1">
        <AlertTitle>Sesion por expirar</AlertTitle>
        <AlertDescription>
          Guarda tu progreso o renueva la sesion para evitar interrupciones.
        </AlertDescription>
      </div>
      <Button size="sm" variant="secondary">
        Renovar sesion
      </Button>
    </Alert>
  );
}
