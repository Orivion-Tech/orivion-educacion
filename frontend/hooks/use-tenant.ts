import { useTenantContext } from '@/components/tenant/tenant-provider';

export function useTenant() {
  return useTenantContext();
}
