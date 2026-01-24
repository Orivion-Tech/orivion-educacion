# Multi-tenant Model

## Fuente de verdad
- `apps/web-angular/src/assets/tenants.json`.

## Estructura
```json
{
  "id": "andina",
  "name": "Colegio Andino",
  "theme": { "primary": "#1d4ed8", "logo": "assets/images/andino-logo.svg" },
  "featureFlags": ["kpis", "risk"],
  "enabledModules": ["student", "teacher", "parent", "admin"]
}
```

## Sesión mock
Se guarda en `localStorage` con la forma:
```json
{ "userId": "demo", "role": "student", "permissions": ["view:dashboard"], "institutionId": "andina", "isPlatformAdmin": false }
```

## Resolución
- `TenantService` lee `tenants.json`.
- `MenuService` filtra por rol y feature flags.
