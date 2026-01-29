import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const passwordHash = await bcrypt.hash('Saa2026!', 10);

  const institucion = await prisma.institucion.upsert({
    where: { ruc_tax_id: 'SAA-0001' },
    update: {},
    create: { nombre: 'Institución Andina', ruc_tax_id: 'SAA-0001' }
  });

  const personas = [
    { username: 'admin', nombres: 'Admin', apellidos: 'SAA', role: 'ADMIN' },
    { username: 'docente', nombres: 'Docente', apellidos: 'SAA', role: 'DOCENTE' },
    { username: 'estudiante', nombres: 'Estudiante', apellidos: 'SAA', role: 'ESTUDIANTE' },
    { username: 'tutor', nombres: 'Tutor', apellidos: 'SAA', role: 'TUTOR' }
  ];

  for (const p of personas) {
    const persona = await prisma.persona.upsert({
      where: { dni_pasaporte: p.username },
      update: {},
      create: {
        dni_pasaporte: p.username,
        nombres: p.nombres,
        apellidos: p.apellidos
      }
    });

    const usuario = await prisma.usuario.upsert({
      where: { username: p.username },
      update: {},
      create: {
        personaId: persona.id,
        username: p.username,
        passwordHash
      }
    });

    const actor = await prisma.actorDominio.upsert({
      where: { id: `${persona.id}-${institucion.id}-${p.role}` },
      update: {},
      create: {
        id: `${persona.id}-${institucion.id}-${p.role}`,
        personaId: persona.id,
        institucionId: institucion.id,
        tipo: p.role,
        estado: 'ACTIVO'
      }
    });

    if (p.role === 'ESTUDIANTE') {
      await prisma.estudiante.upsert({
        where: { actorId: actor.id },
        update: {},
        create: { actorId: actor.id, codigoMatricula: 'MAT-001' }
      });
    }

    void usuario;
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
