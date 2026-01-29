import { headers } from 'next/headers';
import { DEFAULT_TENANT, TENANTS, type TenantConfig } from '@/config/tenants';

export function getTenantFromHost(host?: string | null) {
  if (!host) return null;
  const hostname = host.split(':')[0].toLowerCase();
  const parts = hostname.split('.');
  if (parts.length < 3) return null;
  const subdomain = parts[0];
  if (['www', 'app', 'localhost'].includes(subdomain)) return null;
  return subdomain;
}

export function getTenantConfig(tenantSlug?: string | null): TenantConfig {
  if (!tenantSlug) return DEFAULT_TENANT;
  return TENANTS.find((tenant) => tenant.slug === tenantSlug) ?? DEFAULT_TENANT;
}

export async function getTenantFromRequest(): Promise<TenantConfig> {
  const headerList = await headers();
  const host = headerList.get('host');
  const tenantFromHost = getTenantFromHost(host);
  const fallback = headerList.get('x-tenant');
  return getTenantConfig(tenantFromHost ?? fallback);
}

export function buildTenantThemeStyle(tenant: TenantConfig) {
  const style: Record<string, string> = {};
  Object.entries(tenant.theme.brand).forEach(([key, value]) => {
    style[`--brand-${key}`] = value;
  });
  if (tenant.theme.surface) {
    Object.entries(tenant.theme.surface).forEach(([key, value]) => {
      style[`--surface-${key}`] = value;
    });
  }
  if (tenant.theme.text) {
    Object.entries(tenant.theme.text).forEach(([key, value]) => {
      style[`--text-${key}`] = value;
    });
  }
  return style;
}
