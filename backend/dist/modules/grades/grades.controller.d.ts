import { GradesService } from './grades.service';
export declare class GradesController {
    private svc;
    constructor(svc: GradesService);
    create(body: {
        matriculaId: string;
        valor: number;
        rubrica?: any;
        feedback?: string;
    }): Promise<{
        id: string;
        valor: number;
        rubrica: import("@prisma/client/runtime/library").JsonValue | null;
        feedback: string | null;
        matriculaId: string;
    }>;
    list(matriculaId: string): Promise<{
        id: string;
        valor: number;
        rubrica: import("@prisma/client/runtime/library").JsonValue | null;
        feedback: string | null;
        matriculaId: string;
    }[]>;
}
