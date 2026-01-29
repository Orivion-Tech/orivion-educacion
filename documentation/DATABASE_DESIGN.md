# Database Design Documentation - Education System

## Overview
This database schema is designed following **Domain-Driven Design (DDD)** principles, optimized for **Multi-Tenancy** (SaaS support) and **High Scalability**.

## Key Design Decisions

### 1. Separation of Identity vs. Role (The "Person" Pattern)
**Design:**
We split human data (`PERSONAS`) from role data (`ESTUDIANTES`, `PROFESORES`).

**Why?**
-   **Scenario**: A Teacher at School A is also a Parent at School B.
-   **Without Separation**: You would have two records (one in `TeacherTable`, one in `ParentTable`), duplicating name, DNI, and DOB. If they change their phone number, you have to update it in multiple places.
-   **With Separation**: There is **one** `PERSONA` record. The `ESTUDIANTES` table just links `PersonID` + `InstitutionID`. This ensures **Single Source of Truth** for personal data.

### 2. Multi-Tenancy Strategy
**Design:**
The `INSTITUCIONES` table is the root of the hierarchy. Most operational tables (`AULAS`, `PERIODOS`, `ESTUDIANTES`) have a Foreign Key to `INSTITUCIONES`.

**Why?**
-   Allows the software to run multiple schools (Tenants) on a single database instance.
-   Data isolation is enforced by always querying `WHERE institution_id = ?`.

### 3. Academic Lifecycle (Enrollment History)
**Design:**
The `ESTUDIANTES` table represents the "status of being a student" (Active/Alumni). The `MATRICULAS` table represents "activity in a specific year/semester".

**Why?**
-   If you put `grade_id` directly on the `ESTUDIANT` table, you lose history. When a student moves from Grade 1 to Grade 2, you overwrite the record.
-   By using `MATRICULAS` linked to `PERIODOS_ACADEMICOS`, we preserve the full history:
    -   2023: Grade 1 (Matricula A) -> Passed
    -   2024: Grade 2 (Matricula B) -> Current
    -   This is critical for transcripts and academic reports.

### 4. Security Module (RBAC & Sessions)
**Design:**
-   **RBAC**: We use `USUARIO_ROLES` with an `institucion_id`. A user can be an Admin in one school and a Viewer in another.
-   **Sessions**: `SESIONES` table tracks active tokens and device fingerprints.

**Why?**
-   **Audit**: We can revoke specific sessions (e.g., "Log out all devices").
-   **Concurrency**: We can limit account sharing by checking active sessions per user.

### 5. Data Loading & Onboarding (JSONB)
**Design:**
Tables like `SOLICITUDES_INGRESO` and `AUDITORIA_LOGS` use `JSONB` columns.

**Why?**
-   **Flexibility**: Onboarding forms change often. We don't want to alter the database schema every time a school asks for an extra field in the admission form. We store the raw form in JSONB and only promote validated data to the strict `PERSONAS` columns.
-   **Performance**: PostgreSQL JSONB allows indexing specific keys if needed later.

## Schema Map
-   **Identity**: `personas`, `usuarios`, `direcciones`, `contactos`
-   **Access**: `roles`, `permisos`, `usuario_roles`, `sesiones`
-   **Tenancy**: `instituciones`
-   **Core**: `estudiantes`, `profesores`, `relacion_familiar`
-   **Academic**: `periodos_academicos`, `grados`, `secciones`, `asignaturas`, `calificaciones`
-   **Operations**: `solicitudes_ingreso`, `trabajos_importacion`, `auditoria_logs`
