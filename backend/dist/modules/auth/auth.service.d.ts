import { PrismaService } from '../../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private prisma;
    private jwt;
    constructor(prisma: PrismaService, jwt: JwtService);
    validateUser(username: string, password: string): Promise<{
        id: string;
        username: string;
        personaId: string;
        passwordHash: string;
        dobleFactorActivo: boolean;
    } | null>;
    login(username: string, password: string): Promise<{
        access_token: string;
        refresh_token: string;
    }>;
}
