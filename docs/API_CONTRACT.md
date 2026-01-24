# API Contract (UI -> NestJS)

Base URL: `config.json` -> `apiUrl`.

## Headers
- `X-Institution-Id`: ID del tenant activo.

## Endpoints previstos
- `GET /students`
- `GET /courses`
- `GET /kpis`
- `GET /notifications`

## Fallback
Si `useMocks=true` o falla HTTP, `ApiClientService` usa `assets/mocks/{tenantId}/...`.
