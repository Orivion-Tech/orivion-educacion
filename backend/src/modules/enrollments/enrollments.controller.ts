import { Controller, Post, Body, Get, Query, Param, Put, Delete, UseGuards } from '@nestjs/common';
import { EnrollmentsService } from './enrollments.service';
import { JwtAuthGuard } from '../auth/jwt.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';

@Controller('enrollments')
@UseGuards(JwtAuthGuard, RolesGuard)
export class EnrollmentsController {
  constructor(private svc: EnrollmentsService) {}

  @Post()
  @Roles('ADMIN', 'INSTITUTION_ADMIN', 'DOCENTE')
  async create(@Body() body: { estudianteId: string; periodoId: string; seccionId: string }) {
    return this.svc.create(body.estudianteId, body.periodoId, body.seccionId);
  }

  @Get()
  @Roles('ADMIN', 'INSTITUTION_ADMIN', 'DOCENTE')
  async list(@Query('estudianteId') estudianteId?: string) {
    if (estudianteId) {
      return this.svc.findByStudent(estudianteId);
    }
    return this.svc.listAll();
  }

  @Put(':id')
  @Roles('ADMIN', 'INSTITUTION_ADMIN', 'DOCENTE')
  async update(@Param('id') id: string, @Body() body: { estado?: string }) {
    return this.svc.update(id, body);
  }

  @Delete(':id')
  @Roles('ADMIN', 'INSTITUTION_ADMIN')
  async remove(@Param('id') id: string) {
    return this.svc.remove(id);
  }
}
