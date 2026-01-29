import { PrismaService } from '../../prisma/prisma.service';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    createUser(data: {
        personaId: string;
        username: string;
        passwordHash: string;
    }): Promise<{
        id: string;
        username: string;
        personaId: string;
        passwordHash: string;
        dobleFactorActivo: boolean;
    }>;
    findById(id: string): Promise<{
        id: string;
        username: string;
        personaId: string;
        passwordHash: string;
        dobleFactorActivo: boolean;
    } | null>;
}
