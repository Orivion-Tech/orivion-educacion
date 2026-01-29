import { Controller, Post, Body, Get, Query, UseGuards } from '@nestjs/common';
import { EnrollmentsService } from './enrollments.service';
import { JwtAuthGuard } from '../auth/jwt.guard';

@Controller('enrollments')
@UseGuards(JwtAuthGuard)
export class EnrollmentsController {
  constructor(private svc: EnrollmentsService) {}

  @Post()
  async create(@Body() body: { estudianteId: string; periodoId: string; seccionId: string }) {
    return this.svc.create(body.estudianteId, body.periodoId, body.seccionId);
  }

  @Get()
  async list(@Query('estudianteId') estudianteId?: string) {
    if (estudianteId) {
      return this.svc.findByStudent(estudianteId);
    }
    return this.svc.listAll();
  }
}
