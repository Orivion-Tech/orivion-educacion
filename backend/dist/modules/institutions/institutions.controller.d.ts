import { InstitutionsService } from './institutions.service';
export declare class InstitutionsController {
    private svc;
    constructor(svc: InstitutionsService);
    list(): Promise<{
        id: string;
        nombre: string;
        ruc_tax_id: string | null;
    }[]>;
    get(id: string): Promise<{
        id: string;
        nombre: string;
        ruc_tax_id: string | null;
        configuracion: import("@prisma/client/runtime/library").JsonValue | null;
    } | null>;
}
