import { PrismaService } from '../../prisma/prisma.service';
export declare class StudentsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(actorId: string, codigoMatricula?: string): Promise<{
        id: string;
        codigoMatricula: string | null;
        actorId: string;
    }>;
    findById(id: string): Promise<({
        actor: {
            id: string;
            personaId: string;
            estado: string | null;
            institucionId: string;
            tipo: string;
            metadata: import("@prisma/client/runtime/library").JsonValue | null;
        };
        matriculas: {
            id: string;
            periodoId: string;
            seccionId: string;
            estado: string;
            estudianteId: string;
        }[];
    } & {
        id: string;
        codigoMatricula: string | null;
        actorId: string;
    }) | null>;
}
