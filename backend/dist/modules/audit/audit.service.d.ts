import { PrismaService } from '../../prisma/prisma.service';
export declare class AuditService {
    private prisma;
    constructor(prisma: PrismaService);
    record(action: string, valorAnterior: any, valorNuevo: any): Promise<{
        id: string;
        accion: string;
        valorAnterior: import("@prisma/client/runtime/library").JsonValue | null;
        valorNuevo: import("@prisma/client/runtime/library").JsonValue | null;
        creadoEn: Date;
    }>;
    query(filters: {
        entity?: string;
        institutionId?: string;
        since?: string;
    }): Promise<{
        id: string;
        accion: string;
        valorAnterior: import("@prisma/client/runtime/library").JsonValue | null;
        valorNuevo: import("@prisma/client/runtime/library").JsonValue | null;
        creadoEn: Date;
    }[]>;
}
