# SAA Frontend (Next.js)

Frontend moderno para un Sistema de Aprendizaje Adaptativo (SAA) multi-tenant y seguro.

## Stack
- Next.js (App Router, SSR + SSG + ISR)
- TypeScript
- Tailwind CSS
- UI accesible (componentes estilo shadcn)
- React Query

## Arquitectura
- **App Router** con layouts por tenant y rol.
- **Frontend desacoplado** del backend. Toda logica critica vive en APIs REST seguras.
- **Middleware** para autenticacion, roles, multi-tenant y consentimiento.
- **SSR/SSG/ISR** para rendimiento y SEO educativo.

## Estructura de carpetas (principal)
- `app/` rutas, layouts y paginas
  - `app/(tenant)/[tenant]/layout.tsx` aplica branding y contexto de tenant
  - `app/(tenant)/[tenant]/[role]/layout.tsx` aplica shell por rol
  - `app/api/auth/*` endpoints proxy de autenticacion
- `components/` UI, layout, secciones y bloques
- `config/` definiciones de roles, navegacion y tenants
- `hooks/` hooks para sesion, tenant y consentimiento
- `lib/` utilidades y cliente API
- `public/brand/` branding por institucion
- `middleware.ts` seguridad de rutas

## Flujos principales
### Autenticacion y sesiones
1. Login (`/login`) envia credenciales a `/api/auth/login`.
2. El endpoint setea cookies seguras (HttpOnly, SameSite Lax).
3. Middleware valida cookies y redirige a `/{tenant}/{role}/dashboard`.
4. Logout limpia cookies desde `/api/auth/logout`.

### Multi-tenant
- Tenant determinado por subdominio o primer segmento de ruta.
- `TenantLayout` aplica variables CSS de branding.
- `TenantProvider` mantiene contexto de configuracion.
- Middleware puede reescribir rutas cuando el tenant viene por subdominio.

### Roles
- Roles definidos en `config/roles.ts`.
- Navegacion dinamica en `config/navigation.ts`.
- `RoleGate` asegura vistas criticas solo para roles permitidos.

### Privacidad y menores
- Cookies `saa_minor` y `saa_consent` determinan flujo.
- Middleware bloquea funcionalidades si falta consentimiento.
- UI con paginas de consentimiento y alertas de sesion.

## Buenas practicas aplicadas
- No se exponen secretos ni llaves en el frontend.
- Uso de headers de seguridad y CSP base.
- Render hibrido optimizado y caching en React Query.
- Componentes accesibles y responsive.

## Variables de entorno
- `NEXT_PUBLIC_API_BASE_URL` - base URL del backend.
- `NEXT_PUBLIC_DEMO_MODE` - habilita login demo (true/false).

## Scripts
```bash
npm install
npm run dev
npm run build
```

## Notas
- El backend debe exponer APIs REST seguras.
- Ajusta CSP y dominios permitidos segun infraestructura.
