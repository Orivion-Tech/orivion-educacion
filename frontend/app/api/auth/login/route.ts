import { NextResponse } from 'next/server';
import { apiRequest } from '@/lib/api-client';

export async function POST(request: Request) {
  const body = await request.json();
  const remember = Boolean(body.remember);
  const maxAge = remember ? 60 * 60 * 24 * 30 : 60 * 60 * 8;

  let payload;

  if (process.env.NEXT_PUBLIC_DEMO_MODE === 'true') {
    payload = {
      token: 'demo-token',
      role: body.role ?? 'student',
      tenant: body.tenant ?? 'aurora',
      userName: 'Demo User',
      userId: 'demo-001',
      isMinor: body.role === 'student',
      consentGranted: body.role !== 'student',
      expiresAt: new Date(Date.now() + maxAge * 1000).toISOString()
    };
  } else {
    payload = await apiRequest<{
      token: string;
      role: string;
      tenant: string;
      userName: string;
      userId: string;
      isMinor: boolean;
      consentGranted: boolean;
      expiresAt?: string;
    }>('/auth/login', {
      method: 'POST',
      body: JSON.stringify(body)
    });
  }

  const response = NextResponse.json({ ok: true });
  const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax' as const,
    path: '/',
    maxAge
  };

  response.cookies.set('saa_session', payload.token, cookieOptions);
  response.cookies.set('saa_role', payload.role, cookieOptions);
  response.cookies.set('saa_tenant', payload.tenant, cookieOptions);
  response.cookies.set('saa_user', payload.userName, cookieOptions);
  response.cookies.set('saa_user_id', payload.userId, cookieOptions);
  response.cookies.set('saa_minor', payload.isMinor ? '1' : '0', cookieOptions);
  response.cookies.set('saa_consent', payload.consentGranted ? '1' : '0', cookieOptions);
  if (payload.expiresAt) {
    response.cookies.set('saa_expires', payload.expiresAt, cookieOptions);
  }

  return response;
}
