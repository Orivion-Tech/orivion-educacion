import { UsersService } from './users.service';
export declare class UsersController {
    private svc;
    constructor(svc: UsersService);
    create(body: any): Promise<{
        id: string;
        username: string;
        personaId: string;
        passwordHash: string;
        dobleFactorActivo: boolean;
    }>;
    get(id: string): Promise<{
        id: string;
        username: string;
        personaId: string;
        passwordHash: string;
        dobleFactorActivo: boolean;
    } | null>;
}
