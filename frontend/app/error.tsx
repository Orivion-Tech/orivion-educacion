'use client';

import { Button } from '@/components/ui/button';

export default function GlobalError({
  error,
  reset
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="min-h-screen grid place-items-center px-6 bg-surface-1">
      <div className="max-w-lg text-center space-y-4">
        <h1 className="text-3xl font-heading font-semibold">Ocurrio un problema</h1>
        <p className="text-text-2">{error.message || 'Intenta nuevamente en unos instantes.'}</p>
        <Button onClick={reset}>Reintentar</Button>
      </div>
    </div>
  );
}
