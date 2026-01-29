-- =========================================================
-- SISTEMA EDUCATIVO ENTERPRISE
-- Arquitectura DDD + Seguridad + Protección de Menores
-- Motor: PostgreSQL
-- =========================================================

-- ========== EXTENSIONES ==========
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- =========================================================
-- SHARED KERNEL – IDENTIDAD
-- =========================================================

CREATE TABLE personas (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    dni_pasaporte VARCHAR(50) UNIQUE NOT NULL,
    nombres VARCHAR(100) NOT NULL,
    apellidos VARCHAR(100) NOT NULL,
    fecha_nacimiento DATE NOT NULL,
    genero VARCHAR(20),
    metadata JSONB DEFAULT '{}',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE usuarios (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    persona_id UUID NOT NULL REFERENCES personas(id),
    username VARCHAR(50) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    doble_factor_activo BOOLEAN DEFAULT FALSE,
    estado VARCHAR(20) DEFAULT 'ACTIVO',
    ultimo_acceso TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =========================================================
-- TENANT
-- =========================================================

CREATE TABLE instituciones (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    nombre VARCHAR(150) NOT NULL,
    ruc_tax_id VARCHAR(50) UNIQUE NOT NULL,
    configuracion JSONB DEFAULT '{}',
    activo BOOLEAN DEFAULT TRUE,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =========================================================
-- ACTORES DEL DOMINIO
-- =========================================================

CREATE TABLE actores_dominio (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    persona_id UUID NOT NULL REFERENCES personas(id),
    institucion_id UUID NOT NULL REFERENCES instituciones(id),
    tipo VARCHAR(30) NOT NULL,
    estado VARCHAR(20) DEFAULT 'ACTIVO',
    metadata JSONB DEFAULT '{}',
    UNIQUE (persona_id, institucion_id, tipo)
);

-- =========================================================
-- ROLES, PERMISOS Y PERFILES
-- =========================================================

CREATE TABLE roles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    codigo VARCHAR(50) UNIQUE NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT,
    es_sistema BOOLEAN DEFAULT FALSE
);

CREATE TABLE permisos (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    codigo VARCHAR(100) UNIQUE NOT NULL,
    recurso VARCHAR(50) NOT NULL,
    accion VARCHAR(50) NOT NULL,
    descripcion TEXT
);

CREATE TABLE rol_permisos (
    rol_id UUID REFERENCES roles(id),
    permiso_id UUID REFERENCES permisos(id),
    PRIMARY KEY (rol_id, permiso_id)
);

CREATE TABLE perfiles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    institucion_id UUID REFERENCES instituciones(id),
    rol_id UUID REFERENCES roles(id),
    nombre VARCHAR(100),
    descripcion TEXT,
    es_default BOOLEAN DEFAULT FALSE
);

CREATE TABLE perfil_permisos (
    perfil_id UUID REFERENCES perfiles(id),
    permiso_id UUID REFERENCES permisos(id),
    permitido BOOLEAN DEFAULT TRUE,
    PRIMARY KEY (perfil_id, permiso_id)
);

CREATE TABLE usuario_perfiles (
    usuario_id UUID REFERENCES usuarios(id),
    perfil_id UUID REFERENCES perfiles(id),
    institucion_id UUID REFERENCES instituciones(id),
    activo BOOLEAN DEFAULT TRUE,
    PRIMARY KEY (usuario_id, perfil_id, institucion_id)
);

CREATE TABLE perfil_seccion (
    perfil_id UUID REFERENCES perfiles(id),
    seccion_id UUID,
    PRIMARY KEY (perfil_id, seccion_id)
);

-- =========================================================
-- ESTRUCTURA ACADÉMICA
-- =========================================================

CREATE TABLE periodos_academicos (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    institucion_id UUID REFERENCES instituciones(id),
    nombre VARCHAR(50),
    fecha_inicio DATE,
    fecha_fin DATE,
    activo BOOLEAN DEFAULT TRUE
);

CREATE TABLE niveles_educativos (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    institucion_id UUID REFERENCES instituciones(id),
    nombre VARCHAR(50),
    UNIQUE (institucion_id, nombre)
);

CREATE TABLE grados (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    institucion_id UUID REFERENCES instituciones(id),
    nivel_id UUID REFERENCES niveles_educativos(id),
    nombre VARCHAR(50),
    UNIQUE (institucion_id, nivel_id, nombre)
);

CREATE TABLE aulas (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    institucion_id UUID REFERENCES instituciones(id),
    codigo VARCHAR(20),
    capacidad INT DEFAULT 30
);

CREATE TABLE secciones (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    institucion_id UUID REFERENCES instituciones(id),
    grado_id UUID REFERENCES grados(id),
    aula_id UUID REFERENCES aulas(id),
    nombre VARCHAR(20),
    UNIQUE (institucion_id, grado_id, nombre)
);

CREATE TABLE asignaturas (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    institucion_id UUID REFERENCES instituciones(id),
    seccion_id UUID REFERENCES secciones(id),
    profesor_id UUID,
    nombre VARCHAR(100)
);

-- =========================================================
-- ROLES ACADÉMICOS
-- =========================================================

CREATE TABLE estudiantes (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    actor_id UUID REFERENCES actores_dominio(id),
    institucion_id UUID REFERENCES instituciones(id),
    codigo_matricula VARCHAR(50),
    estado VARCHAR(20),
    fecha_ingreso DATE,
    origen_importacion UUID
);

CREATE TABLE profesores (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    actor_id UUID REFERENCES actores_dominio(id),
    institucion_id UUID REFERENCES instituciones(id),
    codigo_empleado VARCHAR(50),
    especialidad_principal VARCHAR(100),
    estado VARCHAR(20),
    cualificaciones JSONB,
    origen_importacion UUID
);

-- =========================================================
-- CICLO ACADÉMICO
-- =========================================================

CREATE TABLE matriculas (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    estudiante_id UUID REFERENCES estudiantes(id),
    periodo_id UUID REFERENCES periodos_academicos(id),
    seccion_id UUID REFERENCES secciones(id),
    estado VARCHAR(20),
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE (estudiante_id, periodo_id)
);

CREATE TABLE calificaciones (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    matricula_id UUID REFERENCES matriculas(id),
    asignatura_id UUID REFERENCES asignaturas(id),
    tipo_evaluacion VARCHAR(50),
    valor DECIMAL(5,2),
    ponderacion DECIMAL(5,2),
    rubrica JSONB,
    feedback TEXT,
    usuario_auditoria UUID,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =========================================================
-- FAMILIA
-- =========================================================

CREATE TABLE relacion_familiar (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    estudiante_id UUID REFERENCES estudiantes(id),
    actor_familiar_id UUID REFERENCES actores_dominio(id),
    parentezco VARCHAR(50),
    nivel_autorizacion VARCHAR(30),
    es_apoderado_financiero BOOLEAN DEFAULT FALSE,
    autorizado_recojo BOOLEAN DEFAULT FALSE
);

-- =========================================================
-- PRIVACIDAD Y CONSENTIMIENTO
-- =========================================================

CREATE TABLE politicas_privacidad (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    institucion_id UUID REFERENCES instituciones(id),
    version VARCHAR(20),
    contenido TEXT,
    vigente BOOLEAN DEFAULT TRUE,
    fecha_publicacion TIMESTAMP,
    fecha_vigencia TIMESTAMP
);

CREATE TABLE clasificacion_datos (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    codigo VARCHAR(50) UNIQUE,
    nivel VARCHAR(20),
    descripcion TEXT
);

CREATE TABLE metadatos_privacidad (
    entidad VARCHAR(50),
    campo VARCHAR(50),
    clasificacion_id UUID REFERENCES clasificacion_datos(id),
    requiere_consentimiento BOOLEAN,
    PRIMARY KEY (entidad, campo)
);

CREATE TABLE consentimientos (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    persona_menor_id UUID REFERENCES personas(id),
    actor_responsable_id UUID REFERENCES actores_dominio(id),
    politica_id UUID REFERENCES politicas_privacidad(id),
    tipo VARCHAR(50),
    otorgado BOOLEAN,
    fecha_otorgado TIMESTAMP,
    fecha_revocado TIMESTAMP,
    version_documento VARCHAR(20)
);

-- =========================================================
-- AUDITORÍA Y EVENTOS
-- =========================================================

CREATE TABLE auditoria_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    usuario_id UUID,
    accion VARCHAR(50),
    entidad VARCHAR(50),
    entidad_id UUID,
    valor_anterior JSONB,
    valor_nuevo JSONB,
    ip_address VARCHAR(45),
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE eventos_dominio (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tipo_evento VARCHAR(100),
    entidad VARCHAR(50),
    entidad_id UUID,
    payload JSONB,
    institucion_id UUID REFERENCES instituciones(id),
    ocurrido_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE eventos_acceso_datos (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    usuario_id UUID,
    entidad VARCHAR(50),
    entidad_id UUID,
    campo VARCHAR(50),
    accion VARCHAR(20),
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =========================================================
-- ONBOARDING Y CARGA MASIVA
-- =========================================================

CREATE TABLE solicitudes_ingreso (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    institucion_id UUID REFERENCES instituciones(id),
    tipo VARCHAR(50),
    estado VARCHAR(20),
    datos_crudos JSONB,
    fecha_solicitud TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE documentos_adjuntos (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    solicitud_id UUID REFERENCES solicitudes_ingreso(id),
    tipo_documento VARCHAR(50),
    url_archivo TEXT,
    uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE trabajos_importacion (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    origen VARCHAR(50),
    estado VARCHAR(20),
    registros_totales INT,
    errores INT,
    reporte_errores JSONB,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =========================================================
-- IA – FEATURE STORE (OPCIONAL)
-- =========================================================

CREATE TABLE features_aprendizaje (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    institucion_id UUID REFERENCES instituciones(id),
    estudiante_id UUID REFERENCES estudiantes(id),
    feature_codigo VARCHAR(50),
    valor NUMERIC,
    periodo_id UUID REFERENCES periodos_academicos(id),
    anonimo BOOLEAN DEFAULT TRUE
);

-- =========================================================
-- FIN DEL SCRIPT
-- =========================================================
