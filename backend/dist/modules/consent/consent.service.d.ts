import { PrismaService } from '../../prisma/prisma.service';
export declare class ConsentService {
    private prisma;
    constructor(prisma: PrismaService);
    listPolicies(institutionId?: string): Promise<{
        id: string;
        version: string;
        vigente: boolean;
    }[]>;
    createConsent(data: {
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
    listConsents(personaId?: string): Promise<{
        id: string;
        personaMenorId: string;
        actorResponsableId: string;
        otorgado: boolean;
        fechaOtorgado: Date | null;
    }[]>;
}
