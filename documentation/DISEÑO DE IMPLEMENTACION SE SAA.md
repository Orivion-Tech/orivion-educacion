Sistema de Aprendizaje Adaptativo (SAA)
Documento de Objetivos y Diseño Técnico
Versión 1.0 | Fecha: 28 Jan 2026

1. Resumen ejecutivo
El Sistema de Aprendizaje Adaptativo (SAA) es una plataforma educativa multi-tenant orientada a gestionar instituciones educativas, usuarios y roles, contenidos y evaluaciones, y a personalizar la experiencia de aprendizaje mediante un motor de adaptación basado en desempeño y trazas de interacción. La propuesta considera un backend en NestJS con ORM y una base de datos relacional, y un frontend en Angular con UI dinámica por rol. El sistema se despliega en contenedores (Docker) y contempla auditoría, analítica, seguridad por autenticación/autorización (guards) y observabilidad.
2. Objetivos
2.1 Objetivo general
Construir una plataforma de aprendizaje adaptativo que permita a múltiples entidades educativas gestionar su operación académica y ofrecer rutas de aprendizaje personalizadas, con control de acceso por roles, auditoría y escalabilidad.
2.2 Objetivos específicos
•	Soportar multi-tenant (múltiples entidades educativas) con aislamiento lógico de datos.
•	Administrar usuarios, roles, permisos y perfiles (estudiante, docente, tutor/representante, administrador).
•	Gestionar contenidos, cursos, lecciones, actividades y evaluaciones con versionado.
•	Implementar un motor adaptativo (recomendación de siguiente actividad/contenido) basado en desempeño y reglas.
•	Registrar trazas de aprendizaje (eventos) para analítica y mejora continua.
•	Exponer APIs estables (REST) y/o GraphQL para integración con portales y apps.
•	Asegurar despliegue reproducible (Docker) y prácticas DevOps (CI/CD, pruebas, ambientes).
3. Alcance
3.1 Incluye
•	Gestión de entidades educativas y configuración por institución.
•	Gestión académica básica: cursos, clases/grupos, matrícula, contenidos y evaluaciones.
•	Rastreo de progreso y recomendaciones adaptativas.
•	Reportes operativos (asistencia, progreso, desempeño) y analítica de aprendizaje.
•	Seguridad: autenticación, autorización, auditoría y control de sesiones.
3.2 No incluye (fase 1)
•	Marketplace de contenidos de terceros (se deja preparado para fase 2).
•	Proctoring avanzado / vigilancia de exámenes.
•	Integración nativa con pagos o facturación (se contempla vía módulos opcionales).
4. Arquitectura propuesta
La arquitectura se divide en frontend, backend, datos y plataforma de despliegue.
4.1 Frontend (Angular)
•	Aplicación SPA en Angular con enrutamiento protegido por guardias de ruta.
•	UI dinámica por rol: menú, permisos y componentes habilitados según claims.
•	Consumo de APIs por HttpClient; manejo de estado (NgRx o Signals, según decisión).
•	Diseño responsive (desktop/tablet/móvil).
4.2 Backend (NestJS + ORM)
•	API en NestJS organizada por módulos: Auth, Tenancy, Usuarios/Roles, Académico, Contenidos, Evaluación, Adaptación, Reportes.
•	ORM (TypeORM/Prisma) para persistencia y migraciones.
•	Validación y DTOs con class-validator; documentación con OpenAPI (Swagger).
•	Mensajería/eventos internos para analítica (opcional: RabbitMQ/Kafka en fase 2).
4.3 Identificadores (UUID)
Se propone usar UUID como clave primaria para la mayoría de entidades por: unicidad global, facilidad de sincronización entre ambientes, y menor acoplamiento a secuencias. En tablas de alto volumen, se recomienda UUID v7 (ordenable por tiempo) o un surrogate BIGINT adicional para optimizar índices, si el motor/ORM lo permite.
4.4 Multi-tenant
•	Estrategia recomendada: single database, shared schema, con tenant_id en tablas y políticas de filtrado.
•	Alternativa: schema por tenant (más aislamiento, mayor operación).
•	Aplicar tenant resolution en middleware/guard (por subdominio, header o token).
5. Modelo de datos (propuesta)
A continuación se describe un modelo mínimo viable (MVP) ampliable. Los nombres son referenciales.
Tabla/Entidad	Descripción
tenants	Instituciones/entidades educativas (multi-tenant).
users	Usuarios del sistema (estudiantes, docentes, administradores).
roles	Roles por tenant.
permissions	Permisos atómicos (acciones).
user_roles	Asignación de roles a usuarios.
role_permissions	Asignación de permisos a roles.
courses	Cursos (por tenant).
course_groups	Paralelos/clases/grupos asociados a un curso.
enrollments	Matrículas de estudiantes en grupos/cursos.
content_units	Unidades de contenido (tema, lección, recurso).
activities	Actividades de práctica (ejercicios, tareas).
assessments	Evaluaciones (quizzes/exámenes).
questions	Banco de preguntas (por evaluación o reutilizable).
attempts	Intentos de actividad/evaluación por estudiante.
attempt_answers	Respuestas y calificaciones por ítem.
learner_state	Estado del aprendizaje por habilidad/competencia (dominio estimado).
skills	Habilidades/competencias (mapa curricular).
content_skill_map	Relación contenido -> habilidades.
recommendations	Recomendaciones generadas por el motor adaptativo.
events	Trazas de interacción (eventos) para analítica/auditoría académica.
audit_log	Auditoría técnica (login, cambios críticos, administración).

5.1 Campos clave (convención)
•	id: UUID (PK)
•	tenant_id: UUID (FK a tenants) en tablas multi-tenant
•	created_at, updated_at: timestamps
•	created_by, updated_by: auditoría de usuario (opcional)
•	is_active / status: control de estado lógico
6. API y contratos (alto nivel)
La API se diseña orientada a recursos. Ejemplos de endpoints:
Autenticación
•	POST /auth/login
•	POST /auth/refresh
•	POST /auth/logout
Tenancy
•	GET /tenants/me
•	PUT /tenants/config
Usuarios y roles
•	GET /users
•	POST /users
•	PUT /users/{id}
•	GET /roles
•	POST /roles
•	PUT /roles/{id}/permissions
Académico
•	GET /courses
•	POST /courses
•	GET /courses/{id}/groups
•	POST /enrollments
Contenido y evaluación
•	GET /content-units
•	POST /activities
•	POST /assessments
•	POST /attempts/start
•	POST /attempts/{id}/submit
Adaptación
•	GET /recommendations/me
•	POST /adaptation/recompute (admin/docente)
Reportes
•	GET /reports/progress
•	GET /reports/engagement
7. Motor adaptativo
7.1 Señales de entrada
•	Desempeño en preguntas (correcto/incorrecto, tiempo, intentos).
•	Progreso en contenidos (completado, abandonos).
•	Nivel de dominio estimado por habilidad (learner_state).
•	Preferencias y accesibilidad (idioma, ritmo).
7.2 Estrategia MVP
En fase 1 se recomienda un enfoque híbrido reglas + puntaje: 1) mapear cada contenido/actividad a habilidades; 2) mantener un dominio estimado por habilidad; 3) recomendar el siguiente contenido que maximice ganancia esperada y cubra brechas. Se deja un punto de extensión para introducir modelos más sofisticados (p.ej., IRT, BKT, o bandits) en fases posteriores.
8. Seguridad
•	JWT + refresh tokens; rotación y revocación.
•	Guards en NestJS para: autenticación, autorización por roles/permisos y resolución de tenant.
•	Políticas CORS, rate limiting y protección de endpoints críticos.
•	Hash de contraseñas (bcrypt/argon2), MFA opcional.
•	Auditoría de acciones administrativas y cambios sensibles.
9. DevOps, despliegue y operación
9.1 Docker (MVP)
Contenerizar backend, frontend y base de datos. Incluir variables de entorno, redes, y volúmenes. Agregar un reverse proxy (Nginx) si se requiere unificar dominio.
9.2 CI/CD (referencia)
•	Pipelines: lint + pruebas unitarias + build + escaneo de vulnerabilidades.
•	Despliegue por ambientes (dev/qa/prod) con migraciones controladas.
•	Versionado semántico y notas de versión.
10. Calidad: pruebas y observabilidad
•	Pruebas unitarias (Jest) por módulo.
•	Pruebas de integración de API (Supertest).
•	Pruebas e2e UI (Cypress/Playwright).
•	Logs estructurados, métricas y trazas (OpenTelemetry opcional).
•	Tablero de salud: latencia, errores, cola de trabajos, uso de DB.
11. Roadmap sugerido
Fase	Entregables
Fase 0 - Descubrimiento	Requerimientos, mapa curricular, roles, métricas, prototipos UI.
Fase 1 - MVP	Tenancy, Auth, Usuarios/Roles, Cursos, Contenidos, Quizzes, Recomendación básica, Reportes base.
Fase 2 - Analítica avanzada	Paneles por cohortes, eventos, alertas tempranas, exportaciones.
Fase 3 - Motor avanzado	Modelos adaptativos (IRT/BKT), experimentación A/B, personalización profunda.
Fase 4 - Ecosistema	Integraciones LMS, marketplace, offline-first móvil.
 
Anexo A. Prompt maestro para generadores de código (Codex/Claude)
Copia y pega este prompt en tu herramienta de generación de código. Ajusta nombres de repositorio y variables.
Contexto: Construye el Sistema de Aprendizaje Adaptativo (SAA) multi-tenant.
Stack:
- Backend: NestJS (TypeScript) + ORM (elige Prisma o TypeORM, explica por qué).
- DB: PostgreSQL.
- Frontend: Angular (TypeScript) con UI por roles.
- Contenedores: Docker Compose para dev.

Requerimientos:
1) Multi-tenant con tenant_id en tablas y resolución de tenant por subdominio o header X-Tenant.
2) Auth: JWT + refresh token; hash argon2/bcrypt; RBAC (roles/permisos).
3) Módulos backend: auth, tenants, users, roles, permissions, courses, enrollments, content, assessments, attempts, adaptation, reports, audit.
4) IDs: UUID (preferir UUID v7 si es posible); crear migraciones.
5) API: REST con Swagger. Define DTOs, validaciones y manejo de errores.
6) Auditoría: audit_log para acciones admin y events para trazas de aprendizaje.
7) Motor adaptativo (MVP): reglas + puntaje basado en learner_state por skill y mapeo content_skill_map.
8) Frontend: layout con login, selector de tenant (si aplica), dashboard por rol, módulos académicos y panel de progreso.
9) Pruebas: Jest unit e integración; e2e básico.

Entregables solicitados:
- Estructura de carpetas (backend y frontend).
- Esquema DB + migraciones.
- Código base NestJS con guards (auth, roles, tenant) y ejemplos de endpoints.
- Código Angular con routing, guards, servicios API y componentes mínimos.
- docker-compose.yml para levantar postgres, backend y frontend.
- README con pasos: instalar, correr, migrar, probar.

Reglas:
- Código limpio, tipado fuerte, manejo de errores consistente.
- No uses datos ficticios sin dejar seeds opcionales.
- Incluye ejemplos de requests/responses.

Anexo B. Checklist de definición funcional
•	Roles y permisos por institución (matriz).
•	Estructura académica (niveles, grados, cursos, paralelos).
•	Mapa curricular: habilidades/competencias y su relación con contenidos.
•	Reglas del motor adaptativo (MVP): umbrales, prioridades, reintentos, remediales.
•	Requerimientos de reportes: indicadores y exportaciones.
•	Políticas de datos: retención, privacidad, consentimiento (menores de edad).
