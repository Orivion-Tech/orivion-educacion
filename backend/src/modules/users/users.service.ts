import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async createUser(data: { personaId: string; username: string; password: string }) {
    const passwordHash = await bcrypt.hash(data.password, 10);
    return this.prisma.usuario.create({
      data: {
        personaId: data.personaId,
        username: data.username,
        passwordHash
      }
    });
  }

  async updateUser(id: string, data: { personaId?: string; username?: string; password?: string }) {
    const updateData: { personaId?: string; username?: string; passwordHash?: string } = {
      personaId: data.personaId,
      username: data.username
    };
    if (data.password) {
      updateData.passwordHash = await bcrypt.hash(data.password, 10);
    }
    return this.prisma.usuario.update({ where: { id }, data: updateData });
  }

  async deleteUser(id: string) {
    return this.prisma.usuario.delete({ where: { id } });
  }

  async findById(id: string) {
    return this.prisma.usuario.findUnique({ where: { id } });
  }

  async list() {
    return this.prisma.usuario.findMany({
      select: { id: true, username: true, personaId: true }
    });
  }
}
