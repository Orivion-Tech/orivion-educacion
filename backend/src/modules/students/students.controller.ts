import { Controller, Post, Body, Get, Param, Put, Delete, UseGuards } from '@nestjs/common';
import { StudentsService } from './students.service';
import { JwtAuthGuard } from '../auth/jwt.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';

@Controller('students')
@UseGuards(JwtAuthGuard, RolesGuard)
export class StudentsController {
  constructor(private svc: StudentsService) {}

  @Post()
  @Roles('ADMIN', 'INSTITUTION_ADMIN', 'DOCENTE')
  async create(@Body() body: { actorId: string; codigoMatricula?: string }) {
    return this.svc.create(body.actorId, body.codigoMatricula);
  }

  @Get()
  @Roles('ADMIN', 'INSTITUTION_ADMIN', 'DOCENTE')
  async list() {
    return this.svc.list();
  }

  @Get(':id')
  @Roles('ADMIN', 'INSTITUTION_ADMIN', 'DOCENTE')
  async get(@Param('id') id: string) {
    return this.svc.findById(id);
  }

  @Put(':id')
  @Roles('ADMIN', 'INSTITUTION_ADMIN', 'DOCENTE')
  async update(@Param('id') id: string, @Body() body: { codigoMatricula?: string }) {
    return this.svc.update(id, body);
  }

  @Delete(':id')
  @Roles('ADMIN', 'INSTITUTION_ADMIN')
  async remove(@Param('id') id: string) {
    return this.svc.remove(id);
  }
}
