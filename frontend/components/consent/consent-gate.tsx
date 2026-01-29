'use client';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { useConsentGate } from '@/hooks/use-consent';

export function ConsentGate({ actionLabel }: { actionLabel?: string }) {
  const { needsConsent, isMinor } = useConsentGate();

  if (!needsConsent) return null;

  return (
    <Alert className="border-red-200 bg-red-50">
      <div className="flex-1">
        <AlertTitle>Consentimiento pendiente</AlertTitle>
        <AlertDescription>
          {isMinor
            ? 'Este perfil es de un menor. Se requiere consentimiento del guardian para continuar.'
            : 'Se requiere consentimiento antes de continuar.'}
        </AlertDescription>
      </div>
      <Button size="sm" variant="secondary">
        {actionLabel ?? 'Solicitar consentimiento'}
      </Button>
    </Alert>
  );
}
