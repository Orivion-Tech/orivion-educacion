# Runbook

## Prerequisites

- Node.js (latest LTS recommended).
- npm (bundled with Node.js).

## Application location

The Angular app lives at:

```
apps/web-angular
```

## npm scripts

The following scripts are defined in `apps/web-angular/package.json`:

| Script | Command | Purpose |
| --- | --- | --- |
| `ng` | `ng` | Direct access to Angular CLI. |
| `start` | `ng serve` | Run the dev server. |
| `build` | `ng build` | Build the production bundle. |
| `test` | `ng test` | Run unit tests. |

### Typical local workflow

```bash
cd apps/web-angular
npm install
npm run start
```

### Production build

```bash
cd apps/web-angular
npm install
npm run build
```

## Configuration

- Default config lives in `apps/web-angular/src/assets/config.example.json`.
- Create `config.json` next to the example to set the API URL and institution ID.

## Docker Compose (dev/prod)

> **Current status**: No `docker-compose.yml` (or environment-specific compose files) are present in the repository.

### Recommended dev compose layout

If you add Docker Compose support, consider adding:

- `docker-compose.dev.yml` for the Angular dev server.
- `docker-compose.prod.yml` for a production build + static hosting (e.g., Nginx).

### Example commands (once compose files exist)

```bash
# Development
docker compose -f docker-compose.dev.yml up --build

# Production
docker compose -f docker-compose.prod.yml up --build -d
```

### Suggested container responsibilities

- **web**: Runs `ng serve` in development, or serves a production build in prod.
- **api** (optional): Backend service that honors `X-Institution-Id`.
