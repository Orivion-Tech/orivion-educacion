import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class AIFeaturesService {
  constructor(private prisma: PrismaService) {}

  async ingestBatch(features: Array<{ featureCodigo: string; valor: number; anonimo?: boolean }>) {
    return this.prisma.featureAprendizaje.createMany({ data: features.map(f => ({ featureCodigo: f.featureCodigo, valor: f.valor, anonimo: f.anonimo ?? true })) });
  }

  async list(studentId?: string) {
    // For now return all features; in future filter by student mapping
    return this.prisma.featureAprendizaje.findMany({ take: 200 });
  }
}
