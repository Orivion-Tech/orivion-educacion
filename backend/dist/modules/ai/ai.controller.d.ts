import { AIFeaturesService } from './ai.service';
export declare class AIController {
    private svc;
    constructor(svc: AIFeaturesService);
    ingest(body: Array<{
        featureCodigo: string;
        valor: number;
        anonimo?: boolean;
    }>): Promise<import(".prisma/client").Prisma.BatchPayload>;
    list(studentId: string): Promise<{
        id: string;
        valor: number;
        featureCodigo: string;
        anonimo: boolean;
    }[]>;
}
