# orivion-educacion

MVP UI del Sistema de Aprendizaje Adaptativo (SAA) en Angular, multi-tenant y basado en roles.

## Estructura
- `apps/web-angular`: Frontend Angular (standalone + router).
- `docs`: Documentación de la UI y del modelo multi-tenant.

## Requisitos
- Node.js 20+
- npm

## Configuración
1. Copia `apps/web-angular/src/assets/config.example.json` como `apps/web-angular/src/assets/config.json`.
2. Ajusta `apiUrl` si necesitas apuntar a un backend futuro.

## Desarrollo
```bash
cd apps/web-angular
npm install
npm run dev
```

## Build
```bash
cd apps/web-angular
npm run build
```

## Lint
```bash
cd apps/web-angular
npm run lint
```

## Tests
```bash
cd apps/web-angular
npm run test
```

## E2E
```bash
cd apps/web-angular
npm run e2e
```

## Docker
```bash
docker compose up web-dev
```

```bash
docker compose up web
```

## Documentación
Revisa `/docs` para sitemap, diseño, multi-tenant, contrato API y runbook.
