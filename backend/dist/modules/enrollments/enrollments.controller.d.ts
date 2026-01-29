import { EnrollmentsService } from './enrollments.service';
export declare class EnrollmentsController {
    private svc;
    constructor(svc: EnrollmentsService);
    create(body: {
        estudianteId: string;
        periodoId: string;
        seccionId: string;
    }): Promise<{
        id: string;
        periodoId: string;
        seccionId: string;
        estado: string;
        estudianteId: string;
    }>;
    list(estudianteId: string): Promise<{
        id: string;
        periodoId: string;
        seccionId: string;
        estado: string;
        estudianteId: string;
    }[]>;
}
