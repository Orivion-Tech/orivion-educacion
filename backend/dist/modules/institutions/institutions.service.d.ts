import { PrismaService } from '../../prisma/prisma.service';
export declare class InstitutionsService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        id: string;
        nombre: string;
        ruc_tax_id: string | null;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        nombre: string;
        ruc_tax_id: string | null;
        configuracion: import("@prisma/client/runtime/library").JsonValue | null;
    } | null>;
}
