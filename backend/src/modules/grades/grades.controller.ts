import { Controller, Post, Body, Get, Query, UseGuards } from '@nestjs/common';
import { GradesService } from './grades.service';
import { JwtAuthGuard } from '../auth/jwt.guard';

@Controller('grades')
@UseGuards(JwtAuthGuard)
export class GradesController {
  constructor(private svc: GradesService) {}

  @Post()
  async create(@Body() body: { matriculaId: string; valor: number; rubrica?: any; feedback?: string }) {
    return this.svc.create(body.matriculaId, body.valor, body.rubrica, body.feedback);
  }

  @Get()
  async list(@Query('matriculaId') matriculaId?: string) {
    if (matriculaId) {
      return this.svc.listByMatricula(matriculaId);
    }
    return this.svc.listAll();
  }
}
