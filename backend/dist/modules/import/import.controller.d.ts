import { ImportService } from './import.service';
export declare class ImportController {
    private svc;
    constructor(svc: ImportService);
    upload(body: {
        filename: string;
    }): Promise<{
        id: string;
        estado: string;
        datos_crudos: {
            filename: string;
        };
    }>;
    status(id: string): Promise<{
        id: string;
        estado: string;
    }>;
}
