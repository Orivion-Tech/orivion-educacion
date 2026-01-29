import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { ROLES } from './config/roles';

const PUBLIC_PATHS = [
  '/',
  '/login',
  '/register',
  '/privacy',
  '/terms',
  '/institutions'
];

function getTenantFromHost(host?: string | null) {
  if (!host) return null;
  const hostname = host.split(':')[0].toLowerCase();
  const parts = hostname.split('.');
  if (parts.length < 3) return null;
  const subdomain = parts[0];
  if (['www', 'app', 'localhost'].includes(subdomain)) return null;
  return subdomain;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/favicon') ||
    pathname.startsWith('/api/auth')
  ) {
    return NextResponse.next();
  }

  if (PUBLIC_PATHS.includes(pathname)) {
    return NextResponse.next();
  }

  const hostTenant = getTenantFromHost(request.headers.get('host'));
  const segments = pathname.split('/').filter(Boolean);
  const pathTenant = segments[0];
  const pathRole = segments[1];

  if (hostTenant && pathTenant && pathTenant !== hostTenant && ROLES.includes(pathTenant as typeof ROLES[number])) {
    const rewriteUrl = request.nextUrl.clone();
    rewriteUrl.pathname = `/${hostTenant}${pathname}`;
    return NextResponse.rewrite(rewriteUrl);
  }

  const tenant = hostTenant ?? pathTenant;

  const session = request.cookies.get('saa_session')?.value;
  const role = request.cookies.get('saa_role')?.value;
  const consentGranted = request.cookies.get('saa_consent')?.value === '1';
  const isMinor = request.cookies.get('saa_minor')?.value === '1';

  if (!session) {
    const loginUrl = request.nextUrl.clone();
    loginUrl.pathname = '/login';
    if (tenant) loginUrl.searchParams.set('tenant', tenant);
    if (pathRole) loginUrl.searchParams.set('role', pathRole);
    return NextResponse.redirect(loginUrl);
  }

  if (tenant && request.cookies.get('saa_tenant')?.value && request.cookies.get('saa_tenant')?.value !== tenant) {
    const loginUrl = request.nextUrl.clone();
    loginUrl.pathname = '/login';
    loginUrl.searchParams.set('tenant', tenant);
    return NextResponse.redirect(loginUrl);
  }

  if (pathRole && role && pathRole !== role) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = `/${tenant}/${role}/dashboard`;
    return NextResponse.redirect(redirectUrl);
  }

  if (pathRole && !ROLES.includes(pathRole as typeof ROLES[number])) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = `/${tenant}/${role ?? 'student'}/dashboard`;
    return NextResponse.redirect(redirectUrl);
  }

  if (isMinor && !consentGranted && tenant && pathRole) {
    const consentPath = `/${tenant}/${pathRole}/consent`;
    if (!pathname.startsWith(consentPath)) {
      const redirectUrl = request.nextUrl.clone();
      redirectUrl.pathname = consentPath;
      return NextResponse.redirect(redirectUrl);
    }
  }

  const requestHeaders = new Headers(request.headers);
  if (tenant) {
    requestHeaders.set('x-tenant', tenant);
  }
  const response = NextResponse.next({ request: { headers: requestHeaders } });
  if (tenant) {
    response.headers.set('x-tenant', tenant);
  }
  return response;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)']
};
