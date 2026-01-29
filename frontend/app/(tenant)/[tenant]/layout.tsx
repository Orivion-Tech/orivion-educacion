import type { ReactNode } from 'react';
import { TenantProvider } from '@/components/tenant/tenant-provider';
import { buildTenantThemeStyle, getTenantConfig } from '@/lib/tenant';

export default async function TenantLayout({
  children,
  params
}: {
  children: ReactNode;
  params: Promise<{ tenant: string }>;
}) {
  const { tenant: tenantSlug } = await params;
  const tenant = getTenantConfig(tenantSlug);
  const themeStyle = buildTenantThemeStyle(tenant);

  return (
    <div style={themeStyle}>
      <TenantProvider tenant={tenant}>{children}</TenantProvider>
    </div>
  );
}
