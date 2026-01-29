# Credenciales y acceso por rol (SAA)

Fecha: 29 Jan 2026

## 1) Credenciales por rol (ambiente local)

> Todas las cuentas usan la contraseña: `Saa2026!`

- ADMIN
  - Usuario: `admin`
- DOCENTE
  - Usuario: `docente`
- ESTUDIANTE
  - Usuario: `estudiante`
- TUTOR
  - Usuario: `tutor`

## 2) Cómo crear las cuentas (seed)

En backend:

```
cd backend
npm install
npm run seed
```

Esto crea:
- Institución por defecto: “Institución Andina”
- 4 usuarios con roles (ADMIN, DOCENTE, ESTUDIANTE, TUTOR)
- ActorDominio vinculado a la institución
- Estudiante base con matrícula

## 3) API base

- URL base: `http://localhost:3000`
- Login: `POST /auth/login`

## 4) Endpoints principales

Auth
- POST `/auth/login`
- GET `/auth/me`

Usuarios
- POST `/users`
- GET `/users`
- GET `/users/:id`

Instituciones
- GET `/institutions`
- GET `/institutions/:id`
- POST `/institutions`

Estudiantes
- POST `/students`
- GET `/students`
- GET `/students/:id`

Matrículas
- POST `/enrollments`
- GET `/enrollments`
- GET `/enrollments?estudianteId={id}`

Calificaciones
- POST `/grades`
- GET `/grades`
- GET `/grades?matriculaId={id}`

## 5) Roles y navegación

- ADMIN / INSTITUTION_ADMIN: módulos administrativos completos.
- DOCENTE: cursos, grupos, contenidos, evaluaciones, progreso.
- ESTUDIANTE: ruta, actividades, evaluaciones y progreso.
- TUTOR: resumen, alertas, reportes.

## 6) Uso básico en frontend

- Login en `/login` con cualquiera de los usuarios
- Navega al dashboard en `/app`

---
Si necesitas credenciales por institución o más roles, lo agrego al seed.
