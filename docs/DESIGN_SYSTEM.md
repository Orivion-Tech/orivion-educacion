# Design System

## Foundations

### Typography
- **Primary font**: `Roboto, "Helvetica Neue", sans-serif` (global body font).
- **Scale**: Headings use Tailwind utilities such as `text-lg` and `text-3xl` for hierarchy.

### Color & theme
- **Angular Material theme**: `indigo-pink` prebuilt theme is imported globally.
- **Utility colors**: Tailwind utility classes (e.g., `text-slate-500`, `border-slate-200`) are used for neutral UI states.

### Spacing & layout
- **Spacing scale**: Tailwind spacing utilities (`px-6`, `py-6`, `gap-6`).
- **Layout shell**: The app uses an `app-shell` flex column layout with a fixed sidenav and a toolbar + main + footer stack.

## Components

### Layout components
- **Sidenav**: `mat-sidenav-container` with an always-open `mat-sidenav` for navigation.
- **Top bar**: `mat-toolbar` with primary color and inline navigation widgets.
- **Content area**: `main` section with consistent padding.
- **Footer**: A subtle, bordered footer for platform metadata.

### Navigation
- **Sidebar menu**: `mat-nav-list` with `mat-list-item` links.
- **Topbar actions**: `mat-stroked-button` links for quick admin actions.

### Cards & data visualization
- **Cards**: `mat-card` used for dashboard tiles and content grouping.
- **Dividers**: `mat-divider` for separating card sections.
- **Charts**: Chart.js is used in the home dashboard for engagement visuals.

## Utility framework

- **TailwindCSS** augments Angular Material to control spacing, typography, and layout rapidly.
- **Angular Material** provides core UI primitives (sidenav, toolbar, buttons, cards).

## Usage guidelines

- Prefer Angular Material components for structure and accessibility.
- Use Tailwind utilities for spacing and typographic polish without overriding component styles.
- Keep layouts responsive by leveraging `grid`, `flex`, and breakpoint utilities (e.g., `lg:grid-cols-2`).
