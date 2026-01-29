import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class AuditService {
  constructor(private prisma: PrismaService) {}

  async record(action: string, valorAnterior: any, valorNuevo: any) {
    return this.prisma.auditoriaLog.create({ data: { accion: action, valorAnterior, valorNuevo } });
  }

  async query(filters: { entity?: string; institutionId?: string; since?: string }) {
    // Simple filtering example
    const where: any = {};
    if (filters.since) where.creadoEn = { gte: new Date(filters.since) };
    return this.prisma.auditoriaLog.findMany({ where, orderBy: { creadoEn: 'desc' }, take: 100 });
  }
}
