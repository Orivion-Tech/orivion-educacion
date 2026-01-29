import { PrismaService } from '../../prisma/prisma.service';
export declare class AIFeaturesService {
    private prisma;
    constructor(prisma: PrismaService);
    ingestBatch(features: Array<{
        featureCodigo: string;
        valor: number;
        anonimo?: boolean;
    }>): Promise<import(".prisma/client").Prisma.BatchPayload>;
    list(studentId?: string): Promise<{
        id: string;
        valor: number;
        featureCodigo: string;
        anonimo: boolean;
    }[]>;
}
