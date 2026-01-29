import { Controller, Post, Body, Get, Param, UseGuards } from '@nestjs/common';
import { StudentsService } from './students.service';
import { JwtAuthGuard } from '../auth/jwt.guard';

@Controller('students')
@UseGuards(JwtAuthGuard)
export class StudentsController {
  constructor(private svc: StudentsService) {}

  @Post()
  async create(@Body() body: { actorId: string; codigoMatricula?: string }) {
    return this.svc.create(body.actorId, body.codigoMatricula);
  }

  @Get()
  async list() {
    return this.svc.list();
  }

  @Get(':id')
  async get(@Param('id') id: string) {
    return this.svc.findById(id);
  }
}
