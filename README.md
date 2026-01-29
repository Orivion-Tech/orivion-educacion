# Sistema de Aprendizaje Adaptativo (SAA)

Plataforma educativa multi-tenant para gestión académica y aprendizaje adaptativo. Incluye backend en NestJS, frontend en Angular y base de datos PostgreSQL. Se diseñó para soportar roles (estudiante, docente, tutor y administrador), trazas de aprendizaje, auditoría y escalabilidad.

## Stack

- Backend: NestJS + Prisma + JWT
- Frontend: Angular (SSR) + TypeScript
- DB: PostgreSQL
- Infra: Docker Compose

## Arquitectura (alto nivel)

- **Frontend (Angular)**: SPA con UI dinámica por rol, guards, y consumo de APIs REST.
- **Backend (NestJS)**: módulos por dominio (auth, users, institutions, students, enrollments, grades, audit, etc.).
- **DB (PostgreSQL)**: esquema inicial en `database/01_init.sql` y modelo Prisma en `backend/prisma/schema.prisma`.

## Funcionalidades principales

- Multi-tenant (instituciones)
- Autenticación JWT
- Gestión de usuarios
- Gestión de estudiantes y matrícula
- Gestión de calificaciones
- Auditoría y trazabilidad
- Paneles por rol (estudiante, docente, tutor, administrador)

## Requisitos

- Docker Desktop
- Node.js 18+
- npm 9+

## Configuración de entorno

Archivos incluidos:
- `.env` (local)
- `backend/.env`
- `backend/.env.example`

Variables clave:
- `DATABASE_URL`
- `JWT_SECRET`
- `BACKEND_PORT`
- `FRONTEND_PORT`

## Comandos principales

### Docker (recomendado)

```
docker-compose up -d --build
```

```
docker-compose down
```

```
docker-compose logs -f
```

### Backend

```
cd backend
npm install
npm run seed
npm run start:dev
```

```
npm run build
npm run start
```

```
npm run prisma:generate
npm run migrate:dev
```

### Frontend

```
cd frontend/app
npm install
npm run start:dev
```

```
npm run build
npm run serve:ssr
```

## Levantar con Docker (recomendado)

```
docker-compose up -d --build
```

Servicios:
- Postgres: `localhost:5432`
- Backend: `localhost:3000`
- Frontend: `localhost:4000`

Healthchecks:
- Backend: `GET /health`

## Levantar manualmente

### Backend

```
cd backend
npm install
npm run seed
npm run start:dev
```

### Frontend

```
cd frontend/app
npm install
npm run start:dev
```

## Base de datos

### Conexión

- Host: `localhost`
- Puerto: `5432`
- Usuario: `admin`
- Password: `securepassword123`
- DB: `education_system`

### Inicialización

La primera vez que se levanta Postgres, ejecuta:
- `database/01_init.sql`

## Credenciales (ambiente local)

Todas las cuentas usan la misma contraseña:

- Password: `Saa2026!`

Usuarios por rol:
- `admin` (ADMIN)
- `docente` (DOCENTE)
- `estudiante` (ESTUDIANTE)
- `tutor` (TUTOR)

Se crean ejecutando:

```
cd backend
npm run seed
```

## Endpoints principales

Auth
- `POST /auth/login`
- `GET /auth/me`

Users
- `POST /users`
- `GET /users`
- `GET /users/:id`

Institutions
- `GET /institutions`
- `GET /institutions/:id`
- `POST /institutions`

Students
- `POST /students`
- `GET /students`
- `GET /students/:id`

Enrollments
- `POST /enrollments`
- `GET /enrollments`
- `GET /enrollments?estudianteId={id}`

Grades
- `POST /grades`
- `GET /grades`
- `GET /grades?matriculaId={id}`

## UI por rol

- **ADMIN**: Tenants, usuarios, roles, académico, contenidos, evaluaciones, reportes, auditoría, configuración.
- **DOCENTE**: Cursos, grupos, contenidos, evaluaciones, progreso y recomendaciones.
- **ESTUDIANTE**: Ruta, contenidos, actividades, evaluaciones, progreso.
- **TUTOR**: Resumen, alertas y reportes.

## Notas

- Las credenciales y secretos son solo para entorno local.
- Para producción, cambia claves y desactiva `.env` en el repositorio.
