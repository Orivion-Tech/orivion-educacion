import { Controller, Get, Param, Post, Body, Put, Delete, UseGuards } from '@nestjs/common';
import { InstitutionsService } from './institutions.service';
import { JwtAuthGuard } from '../auth/jwt.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';

@Controller('institutions')
@UseGuards(JwtAuthGuard, RolesGuard)
export class InstitutionsController {
  constructor(private svc: InstitutionsService) {}

  @Get()
  @Roles('ADMIN','INSTITUTION_ADMIN')
  async list() {
    return this.svc.findAll();
  }

  @Get(':id')
  @Roles('ADMIN','INSTITUTION_ADMIN')
  async get(@Param('id') id: string) {
    return this.svc.findOne(id);
  }

  @Post()
  @Roles('ADMIN','INSTITUTION_ADMIN')
  async create(@Body() body: { nombre: string; ruc_tax_id?: string }) {
    return this.svc.create(body);
  }

  @Put(':id')
  @Roles('ADMIN','INSTITUTION_ADMIN')
  async update(@Param('id') id: string, @Body() body: { nombre?: string; ruc_tax_id?: string }) {
    return this.svc.update(id, body);
  }

  @Delete(':id')
  @Roles('ADMIN','INSTITUTION_ADMIN')
  async remove(@Param('id') id: string) {
    return this.svc.remove(id);
  }
}
