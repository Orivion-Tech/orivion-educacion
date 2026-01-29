import { ConsentService } from './consent.service';
export declare class ConsentController {
    private svc;
    constructor(svc: ConsentService);
    policies(institutionId: string): Promise<{
        id: string;
        version: string;
        vigente: boolean;
    }[]>;
    create(body: {
        personaMenorId: string;
        actorResponsableId: string;
        otorgado: boolean;
    }): Promise<{
        id: string;
        personaMenorId: string;
        actorResponsableId: string;
        otorgado: boolean;
        fechaOtorgado: Date | null;
    }>;
    list(personaId: string): Promise<{
        id: string;
        personaMenorId: string;
        actorResponsableId: string;
        otorgado: boolean;
        fechaOtorgado: Date | null;
    }[]>;
}
