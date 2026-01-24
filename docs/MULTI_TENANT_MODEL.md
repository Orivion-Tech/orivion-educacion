# Multi-tenant Model

## Tenant identity

- **Institution ID** is the primary tenant identifier.
- The client loads configuration from `/assets/config.json` (or falls back to `config.example.json`) and stores the `institutionId` in the app config.
- Session data stores the active institution ID alongside role and permission data.

## Tenant-based configuration

- `TenantFeatureService` maps institutions to feature flags (e.g., `analytics`, `family-portal`).
- Tenants can expose branding and feature flags through `assets/tenants.json` (sample data includes branding colors, logo URLs, feature flags, and enabled modules).

## Tenant-aware routing

- **Tenant guard** blocks routes when the session institution does not match a required `institutionId` or when a tenant feature is not enabled.
- **Role guard** and **permission guard** still apply, so tenant checks are additive to authentication.

## Tenant-aware navigation

- Sidebar items and topbar widgets are filtered by role, permissions, and tenant feature flags.
- Platform-only items also require a platform admin session flag.

## Tenant-aware API calls

- All API requests include `X-Institution-Id` using the configured institution ID (defaults to `default`).
- The API base URL is derived from the app config (`apiUrl`).

## Data ownership assumptions

- Session information is treated as tenant-scoped; switching tenants should reset or reload session data.
- Feature flags are evaluated per request on the client to gate UI affordances.
