import { PrismaService } from '../../prisma/prisma.service';
export declare class ImportService {
    private prisma;
    constructor(prisma: PrismaService);
    createJob(data: {
        filename: string;
        status?: string;
        errors?: any;
    }): Promise<{
        id: string;
        estado: string;
        datos_crudos: {
            filename: string;
        };
    }>;
    getJob(id: string): Promise<{
        id: string;
        estado: string;
    }>;
}
