import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwt: JwtService) {}

  async validateUser(username: string, password: string) {
    const user = await this.prisma.usuario.findUnique({ where: { username } });
    if (!user) return null;
    const match = await bcrypt.compare(password, user.passwordHash);
    if (!match) return null;
    return user;
  }

  async login(username: string, password: string) {
    const user = await this.validateUser(username, password);
    if (!user) throw new UnauthorizedException('Invalid credentials');

    const roles = await this.prisma.actorDominio.findMany({
      where: { personaId: user.personaId },
      select: { tipo: true, institucionId: true }
    });

    const payload = {
      sub: user.id,
      username: user.username,
      roles: roles.map((r) => r.tipo),
      institutions: roles.map((r) => r.institucionId)
    };
    const access_token = this.jwt.sign(payload);
    const refresh_token = this.jwt.sign({ sub: user.id, type: 'refresh' }, { expiresIn: '7d' });
    return { access_token, refresh_token, user: payload };
  }

  async me(userId: string) {
    return this.prisma.usuario.findUnique({ where: { id: userId } });
  }
}
