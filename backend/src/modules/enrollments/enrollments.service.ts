import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class EnrollmentsService {
  constructor(private prisma: PrismaService) {}

  async create(estudianteId: string, periodoId: string, seccionId: string) {
    return this.prisma.matricula.create({
      data: {
        estudianteId,
        periodoId,
        seccionId,
        estado: 'ACTIVO'
      }
    });
  }

  async findByStudent(estudianteId: string) {
    return this.prisma.matricula.findMany({ where: { estudianteId } });
  }

  async listAll() {
    return this.prisma.matricula.findMany();
  }
}
