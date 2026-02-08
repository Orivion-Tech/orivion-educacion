import { Controller, Post, Body, Get, Query, Param, Put, Delete, UseGuards } from '@nestjs/common';
import { GradesService } from './grades.service';
import { JwtAuthGuard } from '../auth/jwt.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';

@Controller('grades')
@UseGuards(JwtAuthGuard, RolesGuard)
export class GradesController {
  constructor(private svc: GradesService) {}

  @Post()
  @Roles('ADMIN', 'INSTITUTION_ADMIN', 'DOCENTE')
  async create(@Body() body: { matriculaId: string; valor: number; rubrica?: any; feedback?: string }) {
    return this.svc.create(body.matriculaId, body.valor, body.rubrica, body.feedback);
  }

  @Get()
  @Roles('ADMIN', 'INSTITUTION_ADMIN', 'DOCENTE')
  async list(@Query('matriculaId') matriculaId?: string) {
    if (matriculaId) {
      return this.svc.listByMatricula(matriculaId);
    }
    return this.svc.listAll();
  }

  @Put(':id')
  @Roles('ADMIN', 'INSTITUTION_ADMIN', 'DOCENTE')
  async update(@Param('id') id: string, @Body() body: { valor?: number; feedback?: string; rubrica?: any }) {
    return this.svc.update(id, body);
  }

  @Delete(':id')
  @Roles('ADMIN', 'INSTITUTION_ADMIN')
  async remove(@Param('id') id: string) {
    return this.svc.remove(id);
  }
}
