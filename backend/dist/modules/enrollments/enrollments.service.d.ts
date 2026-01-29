import { PrismaService } from '../../prisma/prisma.service';
export declare class EnrollmentsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(estudianteId: string, periodoId: string, seccionId: string, estado?: string): Promise<{
        id: string;
        periodoId: string;
        seccionId: string;
        estado: string;
        estudianteId: string;
    }>;
    findByStudent(estudianteId: string): Promise<{
        id: string;
        periodoId: string;
        seccionId: string;
        estado: string;
        estudianteId: string;
    }[]>;
}
