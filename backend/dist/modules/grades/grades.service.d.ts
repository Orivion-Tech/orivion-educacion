import { PrismaService } from '../../prisma/prisma.service';
export declare class GradesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(matriculaId: string, valor: number, rubrica?: any, feedback?: string): Promise<{
        id: string;
        valor: number;
        rubrica: import("@prisma/client/runtime/library").JsonValue | null;
        feedback: string | null;
        matriculaId: string;
    }>;
    listByMatricula(matriculaId: string): Promise<{
        id: string;
        valor: number;
        rubrica: import("@prisma/client/runtime/library").JsonValue | null;
        feedback: string | null;
        matriculaId: string;
    }[]>;
}
