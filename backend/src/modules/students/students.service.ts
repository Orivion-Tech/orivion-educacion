import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class StudentsService {
  constructor(private prisma: PrismaService) {}

  async create(actorId: string, codigoMatricula?: string) {
    return this.prisma.estudiante.create({
      data: { actorId, codigoMatricula }
    });
  }

  async update(id: string, data: { codigoMatricula?: string }) {
    return this.prisma.estudiante.update({ where: { id }, data });
  }

  async remove(id: string) {
    return this.prisma.estudiante.delete({ where: { id } });
  }

  async findById(id: string) {
    return this.prisma.estudiante.findUnique({ where: { id } });
  }

  async list() {
    return this.prisma.estudiante.findMany({
      include: { actor: { include: { persona: true, institucion: true } } }
    });
  }
}
