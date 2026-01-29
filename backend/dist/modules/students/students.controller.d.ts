import { StudentsService } from './students.service';
export declare class StudentsController {
    private svc;
    constructor(svc: StudentsService);
    create(body: {
        actorId: string;
        codigoMatricula?: string;
    }): Promise<{
        id: string;
        codigoMatricula: string | null;
        actorId: string;
    }>;
    get(id: string): Promise<({
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
