import { PageHeader } from '@/components/ui/page-header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';

export default function ProfilesPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Perfil institucional"
        description="Configura datos de contacto, branding y comunicacion."
        actions={<Button variant="secondary">Guardar cambios</Button>}
      />
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Datos de institucion</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-medium">Nombre</label>
                <Input defaultValue="Instituto Aurora" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Correo institucional</label>
                <Input defaultValue="contacto@instituto.edu" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Telefono</label>
                <Input defaultValue="+58 212 555 1122" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Ciudad</label>
                <Input defaultValue="Caracas" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-medium">Mensaje institucional</label>
                <Textarea defaultValue="Bienvenidos a una experiencia educativa adaptativa y segura." />
              </div>
            </CardContent>
          </Card>

          <Card className="border border-brand-100/70 bg-white/95">
            <CardHeader>
              <CardTitle>Branding y estilo</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-2xl bg-brand-600" />
                <div>
                  <p className="text-sm font-medium">Logo institucional</p>
                  <p className="text-xs text-text-2">PNG o SVG - 512px</p>
                </div>
                <Button size="sm" variant="secondary">
                  Subir logo
                </Button>
              </div>
              <div className="grid gap-3 md:grid-cols-3">
                {['Primario', 'Secundario', 'Neutro'].map((token) => (
                  <div key={token} className="rounded-xl border border-surface-3 bg-surface-1 p-3 text-sm">
                    <p className="font-medium">{token}</p>
                    <p className="text-xs text-text-2">#1D4ED8</p>
                  </div>
                ))}
              </div>
              <Button>Guardar branding</Button>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Vista previa</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-2xl border border-surface-3 bg-surface-1 p-4">
              <p className="text-xs uppercase tracking-[0.3em] text-text-2">Identidad</p>
              <h3 className="text-xl font-semibold">Instituto Aurora</h3>
              <p className="text-sm text-text-2">Aprendizaje adaptativo para todos.</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge>Multi-tenant</Badge>
              <Badge variant="neutral">Seguridad</Badge>
              <Badge variant="success">IA activa</Badge>
            </div>
            <Button variant="secondary" className="w-full">
              Ver landing institucional
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

