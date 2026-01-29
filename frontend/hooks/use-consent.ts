'use client';

import { useMemo } from 'react';
import { useSession } from './use-session';

export function useConsentGate() {
  const { data: session } = useSession();

  return useMemo(() => {
    if (!session) return { needsConsent: false, isMinor: false };
    const isMinor = session.isMinor;
    const needsConsent = isMinor && !session.consentGranted;
    return { needsConsent, isMinor };
  }, [session]);
}
