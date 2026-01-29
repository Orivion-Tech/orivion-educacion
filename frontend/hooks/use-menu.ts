import { useMemo } from 'react';
import { NAV_ITEMS } from '@/config/navigation';
import type { RoleKey } from '@/config/roles';

export function useMenu(role: RoleKey, tenant: string) {
  return useMemo(() => {
    return NAV_ITEMS[role].map((item) => ({
      ...item,
      href: `/${tenant}/${role}${item.href}`
    }));
  }, [role, tenant]);
}
