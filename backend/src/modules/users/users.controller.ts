import { Controller, Post, Body, Get, Param, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAuthGuard } from '../auth/jwt.guard';

@Controller('users')
@UseGuards(JwtAuthGuard)
export class UsersController {
  constructor(private svc: UsersService) {}

  @Post()
  async create(@Body() body: { personaId: string; username: string; password: string }) {
    return this.svc.createUser(body);
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
