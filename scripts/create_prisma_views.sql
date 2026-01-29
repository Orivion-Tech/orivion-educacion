CREATE OR REPLACE VIEW "Usuario" AS
SELECT id::text AS id,
       persona_id::text AS "personaId",
       username,
       password_hash AS "passwordHash",
       doble_factor_activo AS "dobleFactorActivo"
FROM usuarios;

CREATE OR REPLACE VIEW "Persona" AS
SELECT id::text AS id,
       dni_pasaporte AS "dni_pasaporte",
       nombres,
       apellidos,
       fecha_nacimiento AS "fecha_nacimiento",
       genero,
       metadata
FROM personas;

CREATE OR REPLACE VIEW "ActorDominio" AS
SELECT id::text AS id,
       persona_id::text AS "personaId",
       institucion_id::text AS "institucionId",
       tipo,
       estado,
       metadata
FROM actores_dominio;
