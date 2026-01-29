import { NextResponse } from 'next/server';
import { getTenantConfig } from '@/lib/tenant';

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ tenant: string }> }
) {
  const { tenant: tenantSlug } = await params;
  const tenant = getTenantConfig(tenantSlug);
  return NextResponse.json(tenant);
}
