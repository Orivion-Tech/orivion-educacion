import { AuditService } from './audit.service';
export declare class AuditController {
    private svc;
    constructor(svc: AuditService);
    event(body: {
        tipo_evento: string;
        payload: any;
    }): Promise<{
        id: string;
        accion: string;
        valorAnterior: import("@prisma/client/runtime/library").JsonValue | null;
        valorNuevo: import("@prisma/client/runtime/library").JsonValue | null;
        creadoEn: Date;
    }>;
    query(since: string): Promise<{
        id: string;
        accion: string;
        valorAnterior: import("@prisma/client/runtime/library").JsonValue | null;
        valorNuevo: import("@prisma/client/runtime/library").JsonValue | null;
        creadoEn: Date;
    }[]>;
}
