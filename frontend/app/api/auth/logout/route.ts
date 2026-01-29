import { NextResponse } from 'next/server';

export async function POST() {
  const response = NextResponse.json({ ok: true });
  const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax' as const,
    path: '/',
    maxAge: 0
  };

  response.cookies.set('saa_session', '', cookieOptions);
  response.cookies.set('saa_role', '', cookieOptions);
  response.cookies.set('saa_tenant', '', cookieOptions);
  response.cookies.set('saa_user', '', cookieOptions);
  response.cookies.set('saa_user_id', '', cookieOptions);
  response.cookies.set('saa_minor', '', cookieOptions);
  response.cookies.set('saa_consent', '', cookieOptions);
  response.cookies.set('saa_expires', '', cookieOptions);

  return response;
}
