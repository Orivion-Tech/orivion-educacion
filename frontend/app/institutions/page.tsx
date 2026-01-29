import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TENANTS } from '@/config/tenants';
import { Button } from '@/components/ui/button';

export const revalidate = 600;

export default function InstitutionsPage() {
  return (
    <div className="min-h-screen bg-surface-1">
      <div className="container py-16 space-y-6">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.3em] text-text-2">Multi-tenant</p>
          <h1 className="text-3xl font-semibold">Instituciones</h1>
          <p className="text-text-2">Acceso segmentado por institucion educativa.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {TENANTS.map((tenant) => (
            <Card key={tenant.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{tenant.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-text-2">Modulos: {tenant.modules.join(', ')}</p>
                <div className="flex flex-wrap gap-2">
                  <Button asChild size="sm">
                    <Link href={`/login?tenant=${tenant.slug}`}>Acceder</Link>
                  </Button>
                  <Button asChild size="sm" variant="secondary">
                    <Link href="/register">Solicitar acceso</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
