-- CreateTable
CREATE TABLE "Persona" (
    "id" TEXT NOT NULL,
    "dni_pasaporte" TEXT,
    "nombres" TEXT NOT NULL,
    "apellidos" TEXT NOT NULL,
    "fecha_nacimiento" TIMESTAMP(3),
    "genero" TEXT,
    "metadata" JSONB,

    CONSTRAINT "Persona_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Usuario" (
    "id" TEXT NOT NULL,
    "personaId" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "dobleFactorActivo" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Institucion" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "ruc_tax_id" TEXT,
    "configuracion" JSONB,

    CONSTRAINT "Institucion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ActorDominio" (
    "id" TEXT NOT NULL,
    "personaId" TEXT NOT NULL,
    "institucionId" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "estado" TEXT,
    "metadata" JSONB,

    CONSTRAINT "ActorDominio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Estudiante" (
    "id" TEXT NOT NULL,
    "actorId" TEXT NOT NULL,
    "codigoMatricula" TEXT,

    CONSTRAINT "Estudiante_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Matricula" (
    "id" TEXT NOT NULL,
    "estudianteId" TEXT NOT NULL,
    "periodoId" TEXT NOT NULL,
    "seccionId" TEXT NOT NULL,
    "estado" TEXT NOT NULL,

    CONSTRAINT "Matricula_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Calificacion" (
    "id" TEXT NOT NULL,
    "matriculaId" TEXT NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,
    "rubrica" JSONB,
    "feedback" TEXT,

    CONSTRAINT "Calificacion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PoliticaPrivacidad" (
    "id" TEXT NOT NULL,
    "version" TEXT NOT NULL,
    "vigente" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "PoliticaPrivacidad_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Consentimiento" (
    "id" TEXT NOT NULL,
    "personaMenorId" TEXT NOT NULL,
    "actorResponsableId" TEXT NOT NULL,
    "otorgado" BOOLEAN NOT NULL,
    "fechaOtorgado" TIMESTAMP(3),

    CONSTRAINT "Consentimiento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AuditoriaLog" (
    "id" TEXT NOT NULL,
    "accion" TEXT NOT NULL,
    "valorAnterior" JSONB,
    "valorNuevo" JSONB,
    "creadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AuditoriaLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FeatureAprendizaje" (
    "id" TEXT NOT NULL,
    "featureCodigo" TEXT NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,
    "anonimo" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "FeatureAprendizaje_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Persona_dni_pasaporte_key" ON "Persona"("dni_pasaporte");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_username_key" ON "Usuario"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Institucion_ruc_tax_id_key" ON "Institucion"("ruc_tax_id");

-- CreateIndex
CREATE UNIQUE INDEX "Estudiante_actorId_key" ON "Estudiante"("actorId");

-- AddForeignKey
ALTER TABLE "Usuario" ADD CONSTRAINT "Usuario_personaId_fkey" FOREIGN KEY ("personaId") REFERENCES "Persona"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActorDominio" ADD CONSTRAINT "ActorDominio_personaId_fkey" FOREIGN KEY ("personaId") REFERENCES "Persona"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActorDominio" ADD CONSTRAINT "ActorDominio_institucionId_fkey" FOREIGN KEY ("institucionId") REFERENCES "Institucion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Estudiante" ADD CONSTRAINT "Estudiante_actorId_fkey" FOREIGN KEY ("actorId") REFERENCES "ActorDominio"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Matricula" ADD CONSTRAINT "Matricula_estudianteId_fkey" FOREIGN KEY ("estudianteId") REFERENCES "Estudiante"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Calificacion" ADD CONSTRAINT "Calificacion_matriculaId_fkey" FOREIGN KEY ("matriculaId") REFERENCES "Matricula"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
