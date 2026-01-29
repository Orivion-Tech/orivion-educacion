# Propuesta de Interfaces (SAA)

Documento generado: 29 Jan 2026

## 1) Visión general

El SAA es una plataforma educativa multi-tenant con UI dinámica por rol. La propuesta de interfaz cubre el sistema completo (MVP + rutas de expansión), con un shell común y módulos visibles según permisos.

Principios:
- Claridad pedagógica: el aprendizaje y el progreso primero.
- Data-driven: KPIs y reportes accesibles sin fricción.
- Multi-tenant real: selector de institución, branding y configuración por tenant.
- Escalabilidad: componentes reutilizables y navegación consistente.

## 2) Mapa de navegación global

Shell común:
- Sidebar colapsable
- Topbar: selector de tenant, buscador, notificaciones, perfil
- Breadcrumbs
- Área de contenido

Menú por rol:

Estudiante
- Inicio
- Mi ruta
- Contenidos
- Actividades
- Evaluaciones
- Progreso
- Mensajes
- Perfil

Docente
- Dashboard docente
- Cursos
- Grupos
- Contenidos
- Actividades
- Evaluaciones
- Progreso estudiantes
- Recomendaciones
- Mensajes

Tutor/Representante
- Resumen estudiante
- Alertas
- Reportes
- Mensajes

Administrador
- Instituciones (Tenants)
- Usuarios
- Roles y permisos
- Estructura académica
- Contenidos
- Evaluaciones
- Reportes
- Auditoría
- Configuración

## 3) Pantallas por módulo

### 3.1 Acceso y tenencia
- Login
- Recuperación de contraseña
- Selector de tenant
- Error 403 / 404 / 500
- Mantenimiento

### 3.2 Estudiante
- Dashboard
  - Card principal: “Siguiente recomendación”
  - Progreso por skills
  - Próximas evaluaciones
  - Historial reciente
- Mi ruta
  - Timeline por unidad/skill
  - Estados: recomendado, en curso, completado, bloqueado
- Contenidos
  - Lista con filtros
  - Detalle de unidad (objetivos, recursos, skills)
- Actividades
  - Lista por curso
  - Ejecutar actividad (feedback inmediato)
- Evaluaciones
  - Lista y detalle
  - Iniciar intento (timer, navegación por ítems)
- Progreso
  - Radar de habilidades
  - Progreso histórico
- Perfil
  - Preferencias, idioma, accesibilidad

### 3.3 Docente
- Dashboard docente
  - KPIs por curso
  - Alertas tempranas
  - Recomendaciones pendientes
- Cursos
  - Lista + detalle
  - Tabs: Grupos, Contenido, Evaluaciones, Progreso
- Grupos
  - Roster
  - Matriculación
- Contenidos
  - CRUD + versionado
  - Mapeo content ? skills
- Evaluaciones
  - Banco de ítems
  - Configuración de quiz/examen
- Progreso estudiantes
  - Vista por estudiante
  - Vista por skill
- Recomendaciones
  - Ajustes de reglas
  - Override manual

### 3.4 Tutor/Representante
- Resumen estudiante
  - Progreso general
  - Alertas tempranas
- Reportes
  - Rendimiento
  - Participación
- Mensajes

### 3.5 Administrador
- Tenants
  - Configuración y branding
  - Políticas por institución
- Usuarios
  - CRUD
  - Asignación de roles
- Roles y permisos
  - Matriz de permisos
  - Plantillas
- Estructura académica
  - Niveles ? grados ? cursos ? grupos
- Contenidos
  - Repositorio institucional
- Reportes
  - Progreso global
  - Engagement
- Auditoría
  - Eventos y trazas
- Configuración
  - Seguridad
  - MFA
  - Retención de datos

## 4) Flujos críticos

1) Login ? Selección tenant ? Dashboard por rol
2) Estudiante: Recomendación ? Actividad ? Feedback ? Progreso
3) Docente: Curso ? Estudiante ? Progreso ? Ajuste ruta
4) Admin: Roles ? Permisos ? Auditoría

## 5) Componentes base

- Sidebar / Topbar
- Card KPI
- Card recomendación
- Progress bar / ring
- Skill chip
- Timeline / Stepper
- Tabla con filtros
- Drawer lateral (edición)
- Modal confirmación
- Toast notifications

## 6) Estilo visual recomendado

- Tipografía: Public Sans (legible, institucional)
- Paleta base:
  - Primario: #1D4E89
  - Secundario: #2B7A78
  - Acento: #F2B441
  - Neutros: #0F172A, #334155, #E2E8F0, #F8FAFC
- Radius: 12 / 16
- Spacing: 4, 8, 12, 16, 24, 32
- Sombras suaves para cards

## 7) Estados UI

- Loading: skeletons
- Empty state: ilustración + CTA
- Error state: mensaje + reintento
- Permisos: ocultar acciones no autorizadas

## 8) Entregables para Figma (listo para replicar)

Frames sugeridos:
- 1440 Desktop
- 1024 Tablet
- 390 Mobile

Component library:
- Buttons (primary, secondary, text)
- Inputs (text, select, search, date)
- Cards (KPI, progreso, recomendación)
- Tables + filters
- Badges + tags

## 9) Roadmap visual

Fase 1 (MVP UI): Login, selector tenant, dashboards, cursos, contenidos, evaluaciones, progreso.
Fase 2: Analítica avanzada y alertas tempranas.
Fase 3: Panel de experimentación adaptativa.

---

Si quieres, puedo generar:
- Wireframes detallados por pantalla
- Design tokens en JSON
- Especificación de componentes con estados
