import { NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
export declare class TenantMiddleware implements NestMiddleware {
    use(req: Request & {
        tenantId?: string;
        user?: any;
    }, res: Response, next: NextFunction): void;
}
