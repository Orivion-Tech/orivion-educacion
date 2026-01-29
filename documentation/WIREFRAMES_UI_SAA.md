# Wireframes detallados (SAA)

Documento generado: 29 Jan 2026

Objetivo: entregar wireframes textuales con layout, grid y estructura de cada pantalla clave para replicar en Figma.

## 1) Guía de layout

Breakpoints:
- Desktop: 1440px (grid 12 col, gutter 24, margins 80)
- Tablet: 1024px (grid 8 col, gutter 20, margins 48)
- Mobile: 390px (grid 4 col, gutter 16, margins 16)

Alturas clave:
- Topbar: 64px
- Sidebar: 240px (colapsable a 72px)
- Card base: 200–320px

## 2) Componentes base (wireframe)

- Topbar: logo + buscador + notificaciones + perfil + tenant
- Sidebar: icon + label
- Card KPI: título, valor, delta
- Card recomendación: título, descripción corta, CTA
- Tabla: encabezado, filtros, paginación
- Drawer: formulario lateral (480px)

## 3) Pantallas

### 3.1 Login
Layout Desktop:
- Columna izquierda: branding, frase
- Columna derecha: form (email, password, CTA)

Wireframe:
[Left 6 col] Branding + visual
[Right 6 col] Card login

### 3.2 Selector de tenant
- Lista de tarjetas (3 col desktop)
- Buscador arriba

### 3.3 Dashboard Estudiante
Layout Desktop:
- Row 1: Card recomendación (8 col) + Progreso rápido (4 col)
- Row 2: Próximas evaluaciones (6 col) + Historial reciente (6 col)
- Row 3: Progreso por skill (12 col)

### 3.4 Mi ruta
- Timeline vertical izquierda
- Cards de unidades derecha (8 col)

### 3.5 Actividad
- Zona central (8 col)
- Sidebar derecha (4 col) con progreso

### 3.6 Evaluación
- Panel central preguntas
- Barra lateral con navegación por ítems

### 3.7 Dashboard Docente
- Row 1: KPIs (4 col x3)
- Row 2: Alertas (6 col) + Rendimiento (6 col)
- Row 3: Tabla cursos (12 col)

### 3.8 Curso Detalle (Docente)
Tabs: Grupos | Contenido | Evaluaciones | Progreso
- Vista grupos: tabla + acciones
- Vista progreso: heatmap

### 3.9 Administrador: Roles y permisos
- Matriz (tabla grande)
- Panel lateral para edición

### 3.10 Administrador: Auditoría
- Tabla con filtros
- Drawer para detalle del evento

## 4) Versiones Mobile

- Sidebar ? menú hamburguesa
- Cards ? apiladas
- Tablas ? cards verticales

---

Este documento es base para construir en Figma. Si deseas, puedo extender cada pantalla con más detalle (componentes exactos, spacing y anotaciones).
