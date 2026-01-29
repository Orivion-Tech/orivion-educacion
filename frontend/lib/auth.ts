import { cookies } from 'next/headers';
import type { RoleKey } from '@/config/roles';

export type Session = {
  token: string;
  role: RoleKey;
  tenant: string;
  userName: string;
  userId: string;
  isMinor: boolean;
  consentGranted: boolean;
  expiresAt?: string;
};

export async function getSession(): Promise<Session | null> {
  const store = await cookies();
  const token = store.get('saa_session')?.value;
  if (!token) return null;
  const role = (store.get('saa_role')?.value as RoleKey) ?? 'student';
  const tenant = store.get('saa_tenant')?.value ?? 'default';
  const userName = store.get('saa_user')?.value ?? 'Usuario';
  const userId = store.get('saa_user_id')?.value ?? 'unknown';
  const isMinor = store.get('saa_minor')?.value === '1';
  const consentGranted = store.get('saa_consent')?.value === '1';
  const expiresAt = store.get('saa_expires')?.value;

  return {
    token,
    role,
    tenant,
    userName,
    userId,
    isMinor,
    consentGranted,
    expiresAt
  };
}
