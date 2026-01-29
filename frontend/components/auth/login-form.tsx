'use client';

import * as React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { TENANTS } from '@/config/tenants';
import { ROLES, ROLE_LABELS } from '@/config/roles';

export function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [tenant, setTenant] = React.useState(searchParams.get('tenant') ?? TENANTS[0].slug);
  const [role, setRole] = React.useState(searchParams.get('role') ?? 'student');
  const [remember, setRemember] = React.useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError(null);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      username: formData.get('username'),
      password: formData.get('password'),
      tenant,
      role,
      remember
    };

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (!response.ok) {
        throw new Error('Credenciales invalidas');
      }
      router.replace(`/${tenant}/${role}/dashboard`);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error inesperado');
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card className="w-full max-w-md border-brand-100/60 bg-white/95 shadow-2xl">
      <CardHeader className="space-y-3">
        <Badge variant="default" className="w-fit">
          Acceso seguro
        </Badge>
        <div>
          <CardTitle>Ingreso institucional</CardTitle>
          <CardDescription>
            Accede al entorno adaptativo con tu institucion y rol asignado.
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label htmlFor="tenant" className="text-sm font-medium">
              Institucion
            </label>
            <Select id="tenant" value={tenant} onChange={(event) => setTenant(event.target.value)}>
              {TENANTS.map((item) => (
                <option key={item.id} value={item.slug}>
                  {item.name}
                </option>
              ))}
            </Select>
          </div>
          <div className="space-y-2">
            <label htmlFor="role" className="text-sm font-medium">
              Rol
            </label>
            <Select id="role" value={role} onChange={(event) => setRole(event.target.value)}>
              {ROLES.map((item) => (
                <option key={item} value={item}>
                  {ROLE_LABELS[item]}
                </option>
              ))}
            </Select>
          </div>
          <div className="space-y-2">
            <label htmlFor="username" className="text-sm font-medium">
              Usuario
            </label>
            <Input id="username" name="username" placeholder="admin" required type="text" />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium">
              Contrasena
            </label>
            <Input id="password" name="password" placeholder="********" required type="password" />
          </div>
          <label className="flex items-center gap-2 text-sm text-text-2">
            <Checkbox checked={remember} onChange={(event) => setRemember(event.target.checked)} />
            Recordar sesion en este dispositivo
          </label>
          {error ? <p className="text-sm text-red-600">{error}</p> : null}
          <Button className="w-full" type="submit" disabled={loading}>
            {loading ? 'Ingresando...' : 'Entrar'}
          </Button>
          <div className="text-center text-xs text-text-2">
            No tienes acceso? Contacta al administrador institucional.
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
