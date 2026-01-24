# API Contract (Frontend Expectations)

## Base URL

- The base API URL is configured via `assets/config.json` (with a fallback to `assets/config.example.json`).
- All paths are resolved relative to the configured `apiUrl`.

## Required headers

| Header | Description | Required |
| --- | --- | --- |
| `X-Institution-Id` | Institution/tenant identifier propagated from app config. Defaults to `default` when not set. | Yes |

## Authentication & identity

- The current frontend implementation relies on session data stored in local storage.
- No authentication header is currently injected by the `ApiClientService`.

## Supported methods

- `GET` is currently implemented via `ApiClientService.get<T>()`.
- Additional HTTP verbs (POST/PUT/PATCH/DELETE) are not yet implemented in the client service.

## Expected response shape

- Responses are typed per call site using Angular `HttpClient` generics.
- No shared response envelope has been defined yet; consumers should specify explicit types as APIs are introduced.

## Example request

```
GET {apiUrl}/students
X-Institution-Id: north-campus
```

## Contract gaps to resolve

- Endpoint catalog (students, parents, teachers, admin analytics) is still TBD.
- Auth tokens and refresh semantics are not yet specified.
