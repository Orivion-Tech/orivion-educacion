DO $$
DECLARE
 v_institucion uuid;
 v_persona uuid;
 v_usuario uuid;
 v_actor uuid;
BEGIN
 -- Upsert institucion
 INSERT INTO instituciones (nombre, ruc_tax_id) VALUES ('Institucion Andina','SAA-0001') ON CONFLICT (ruc_tax_id) DO UPDATE SET nombre=EXCLUDED.nombre RETURNING id INTO v_institucion;
 -- Admin
 INSERT INTO personas (dni_pasaporte, nombres, apellidos, fecha_nacimiento) VALUES ('admin','Admin','SAA','2000-01-01') ON CONFLICT (dni_pasaporte) DO UPDATE SET nombres=EXCLUDED.nombres, apellidos=EXCLUDED.apellidos RETURNING id INTO v_persona;
 INSERT INTO usuarios (persona_id, username, password_hash) VALUES (v_persona, 'admin', '$2a$10$siHejC5CISVvAhM7wL2ODOP96hbDs9ms.DQwfHLHXXMiYkAw187DK') ON CONFLICT (username) DO UPDATE SET password_hash=EXCLUDED.password_hash RETURNING id INTO v_usuario;
 INSERT INTO actores_dominio (persona_id, institucion_id, tipo) VALUES (v_persona, v_institucion, 'ADMIN') ON CONFLICT (persona_id, institucion_id, tipo) DO NOTHING RETURNING id INTO v_actor;
 -- Docente
 INSERT INTO personas (dni_pasaporte, nombres, apellidos, fecha_nacimiento) VALUES ('docente','Docente','SAA','1980-01-01') ON CONFLICT (dni_pasaporte) DO UPDATE SET nombres=EXCLUDED.nombres, apellidos=EXCLUDED.apellidos RETURNING id INTO v_persona;
 INSERT INTO usuarios (persona_id, username, password_hash) VALUES (v_persona, 'docente', '$2a$10$siHejC5CISVvAhM7wL2ODOP96hbDs9ms.DQwfHLHXXMiYkAw187DK') ON CONFLICT (username) DO UPDATE SET password_hash=EXCLUDED.password_hash RETURNING id INTO v_usuario;
 INSERT INTO actores_dominio (persona_id, institucion_id, tipo) VALUES (v_persona, v_institucion, 'DOCENTE') ON CONFLICT (persona_id, institucion_id, tipo) DO NOTHING RETURNING id INTO v_actor;
 -- Estudiante
 INSERT INTO personas (dni_pasaporte, nombres, apellidos, fecha_nacimiento) VALUES ('estudiante','Estudiante','SAA','2010-01-01') ON CONFLICT (dni_pasaporte) DO UPDATE SET nombres=EXCLUDED.nombres, apellidos=EXCLUDED.apellidos RETURNING id INTO v_persona;
 INSERT INTO usuarios (persona_id, username, password_hash) VALUES (v_persona, 'estudiante', '$2a$10$siHejC5CISVvAhM7wL2ODOP96hbDs9ms.DQwfHLHXXMiYkAw187DK') ON CONFLICT (username) DO UPDATE SET password_hash=EXCLUDED.password_hash RETURNING id INTO v_usuario;
 INSERT INTO actores_dominio (persona_id, institucion_id, tipo) VALUES (v_persona, v_institucion, 'ESTUDIANTE') ON CONFLICT (persona_id, institucion_id, tipo) DO NOTHING RETURNING id INTO v_actor;
 IF NOT EXISTS (SELECT 1 FROM estudiantes WHERE actor_id = v_actor) THEN
	 INSERT INTO estudiantes (actor_id, institucion_id, codigo_matricula) VALUES (v_actor, v_institucion, 'MAT-001');
 END IF;
 -- Tutor
 INSERT INTO personas (dni_pasaporte, nombres, apellidos, fecha_nacimiento) VALUES ('tutor','Tutor','SAA','1975-01-01') ON CONFLICT (dni_pasaporte) DO UPDATE SET nombres=EXCLUDED.nombres, apellidos=EXCLUDED.apellidos RETURNING id INTO v_persona;
 INSERT INTO usuarios (persona_id, username, password_hash) VALUES (v_persona, 'tutor', '$2a$10$siHejC5CISVvAhM7wL2ODOP96hbDs9ms.DQwfHLHXXMiYkAw187DK') ON CONFLICT (username) DO UPDATE SET password_hash=EXCLUDED.password_hash RETURNING id INTO v_usuario;
 INSERT INTO actores_dominio (persona_id, institucion_id, tipo) VALUES (v_persona, v_institucion, 'TUTOR') ON CONFLICT (persona_id, institucion_id, tipo) DO NOTHING RETURNING id INTO v_actor;
END$$;
