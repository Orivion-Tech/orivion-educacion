import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class GradesService {
  constructor(private prisma: PrismaService) {}

  async create(matriculaId: string, valor: number, rubrica?: any, feedback?: string) {
    return this.prisma.calificacion.create({
      data: { matriculaId, valor, rubrica, feedback }
    });
  }

  async listByMatricula(matriculaId: string) {
    return this.prisma.calificacion.findMany({ where: { matriculaId } });
  }

  async listAll() {
    return this.prisma.calificacion.findMany();
  }
}
