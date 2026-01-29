'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { TENANTS } from '@/config/tenants';

export default function RegisterPage() {
  const [tenant, setTenant] = React.useState(TENANTS[0].slug);
  const [sent, setSent] = React.useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <div className="min-h-screen bg-surface-1 grid place-items-center px-6">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Solicitud de acceso</CardTitle>
          <CardDescription>
            Registra tu perfil y el administrador institucional validara la cuenta.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {sent ? (
            <div className="space-y-2 text-sm text-text-2">
              <p>Solicitud enviada. Recibiras confirmacion por correo.</p>
              <Button asChild variant="secondary">
                <a href="/login">Volver al login</a>
              </Button>
            </div>
          ) : (
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
                <label htmlFor="fullName" className="text-sm font-medium">
                  Nombre completo
                </label>
                <Input id="fullName" name="fullName" placeholder="Nombre y apellido" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Correo
                </label>
                <Input id="email" name="email" placeholder="usuario@escuela.edu" required type="email" />
              </div>
              <div className="space-y-2">
                <label htmlFor="role" className="text-sm font-medium">
                  Rol solicitado
                </label>
                <Select id="role" name="role">
                  <option value="teacher">Docente</option>
                  <option value="guardian">Guardian</option>
                  <option value="student">Estudiante</option>
                </Select>
              </div>
              <Button className="w-full" type="submit">
                Enviar solicitud
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
