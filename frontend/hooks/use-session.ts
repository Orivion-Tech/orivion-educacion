'use client';

import { useQuery } from '@tanstack/react-query';
import { fetcher } from '@/lib/fetcher';
import type { Session } from '@/lib/auth';

export function useSession() {
  return useQuery({
    queryKey: ['session'],
    queryFn: () => fetcher<Session | null>('/api/auth/session')
  });
}
