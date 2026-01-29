import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class ImportService {
  constructor(private prisma: PrismaService) {}

  async createJob(data: { filename: string; status?: string; errors?: any }) {
    // Placeholder: record import job later; return a lightweight job descriptor for now
    return { id: 'job_' + Date.now(), estado: data.status || 'PENDING', datos_crudos: { filename: data.filename } };
  }

  async getJob(id: string) {
    // Placeholder: real implementation should read job status from DB
    return { id, estado: 'PENDING' };
  }
}
