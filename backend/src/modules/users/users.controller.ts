import { Controller, Post, Body, Get, Param, Put, Delete, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAuthGuard } from '../auth/jwt.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';

@Controller('users')
@UseGuards(JwtAuthGuard, RolesGuard)
export class UsersController {
  constructor(private svc: UsersService) {}

  @Post()
  @Roles('ADMIN', 'INSTITUTION_ADMIN')
  async create(@Body() body: { personaId: string; username: string; password: string }) {
    return this.svc.createUser(body);
  }

  @Get()
  @Roles('ADMIN', 'INSTITUTION_ADMIN')
  async list() {
    return this.svc.list();
  }

  @Get(':id')
  @Roles('ADMIN', 'INSTITUTION_ADMIN')
  async get(@Param('id') id: string) {
    return this.svc.findById(id);
  }

  @Put(':id')
  @Roles('ADMIN', 'INSTITUTION_ADMIN')
  async update(
    @Param('id') id: string,
    @Body() body: { personaId?: string; username?: string; password?: string }
  ) {
    return this.svc.updateUser(id, body);
  }

  @Delete(':id')
  @Roles('ADMIN', 'INSTITUTION_ADMIN')
  async remove(@Param('id') id: string) {
    return this.svc.deleteUser(id);
  }
}
