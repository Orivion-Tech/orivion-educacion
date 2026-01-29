import type { ReactNode } from 'react';
import { AppShell } from '@/components/layout/app-shell';
import { SessionTimeoutBanner } from '@/components/auth/session-timeout-banner';
import { ConsentGate } from '@/components/consent/consent-gate';
import { NAV_ITEMS } from '@/config/navigation';
import { ROLE_LABELS, ROLES, type RoleKey } from '@/config/roles';
import { getSession } from '@/lib/auth';
import { getTenantConfig } from '@/lib/tenant';

export default async function RoleLayout({
  children,
  params
}: {
  children: ReactNode;
  params: Promise<{ tenant: string; role: string }>;
}) {
  const session = await getSession();
  const { tenant: tenantSlug, role: roleSlug } = await params;
  const role = ROLES.includes(roleSlug as RoleKey)
    ? (roleSlug as RoleKey)
    : 'student';
  const tenant = getTenantConfig(tenantSlug);
  const items = (NAV_ITEMS[role] ?? []).map((item) => ({
    ...item,
    href: `/${tenantSlug}/${role}${item.href}`
  }));

  return (
    <AppShell
      items={items}
      roleLabel={ROLE_LABELS[role] ?? 'Role'}
      tenantName={tenant.name}
      tenantLogo={tenant.logo}
      userName={session?.userName ?? 'Usuario'}
    >
      <div className="space-y-4">
        <SessionTimeoutBanner expiresAt={session?.expiresAt} />
        <ConsentGate />
        {children}
      </div>
    </AppShell>
  );
}
