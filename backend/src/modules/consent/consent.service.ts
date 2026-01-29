import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class ConsentService {
  constructor(private prisma: PrismaService) {}

  async listPolicies(institutionId?: string) {
    return this.prisma.politicaPrivacidad.findMany({ where: institutionId ? { /* placeholder if institution relation exists */ } : {} });
  }

  async createConsent(data: { personaMenorId: string; actorResponsableId: string; otorgado: boolean }) {
    return this.prisma.consentimiento.create({ data: { ...data, fechaOtorgado: new Date() } });
  }

  async listConsents(personaId?: string) {
    return this.prisma.consentimiento.findMany({ where: personaId ? { personaMenorId: personaId } : {} });
  }
}
