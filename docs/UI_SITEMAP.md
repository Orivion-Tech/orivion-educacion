# UI Sitemap

## Primary navigation

| Route | Title | Guarding rules | Entry points | Notes |
| --- | --- | --- | --- | --- |
| `/` | Orivion Educación | Public | Sidebar: Home | Landing dashboard with overview widgets. |
| `/student` | Student Portal | `authGuard`, `roleGuard` (`student`, `teacher`, `admin`) | Sidebar: Student Portal | Lazy-loaded student shell. |
| `/parent` | Parent Portal | `authGuard`, `roleGuard` (`parent`, `admin`), `tenantGuard` (`family-portal`) | Sidebar: Parent Portal | Requires tenant feature flag `family-portal`. |
| `/teacher` | Teacher Portal | `authGuard`, `roleGuard` (`teacher`, `admin`) | Sidebar: Teacher Portal | Lazy-loaded teacher shell. |
| `/admin` | Admin Portal | `authGuard`, `roleGuard` (`admin`), `permissionGuard` (`view:admin`), `tenantGuard` (`analytics`) | Sidebar: Admin Portal, Topbar widgets (Reports/Billing/Staff) | Feature-gated analytics view for tenants. |
| `/platform` | Platform | `authGuard`, `roleGuard` (`platform`) | Sidebar: Platform (platform admin only) | Platform shell for internal admins. |
| `**` | Redirect | — | — | Fallback redirects to `/`. |

## Shell components

Each portal route lazy-loads a shell component to host portal-specific layouts and feature modules.

- Student: `StudentShellComponent`
- Parent: `ParentShellComponent`
- Teacher: `TeacherShellComponent`
- Admin: `AdminShellComponent`
- Platform: `PlatformShellComponent`

## Navigation surfaces

- **Sidebar (sidenav)**: Uses `MenuService` to show portal entries based on role, permissions, and tenant features.
- **Topbar widgets**: Uses `MenuService` widgets (Reports/Billing/Staff) tied to permissions and tenant feature flags.
- **Router outlet**: All pages render inside the main content area of `AppComponent`.

## Guarding and personalization signals

- **Role-based access**: `roleGuard` ensures the session role matches route data.
- **Permission gating**: `permissionGuard` enforces required permissions (admin portal).
- **Tenant gating**: `tenantGuard` checks the session institution and tenant feature flags.
- **Tenant features**: `TenantFeatureService` provides available features per institution ID.
