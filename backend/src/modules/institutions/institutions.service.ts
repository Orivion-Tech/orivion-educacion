import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class InstitutionsService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.institucion.findMany({ select: { id: true, nombre: true, ruc_tax_id: true } });
  }

  async findOne(id: string) {
    return this.prisma.institucion.findUnique({ where: { id } });
  }

  async create(data: { nombre: string; ruc_tax_id?: string }) {
    return this.prisma.institucion.create({ data });
  }
}
