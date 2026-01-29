import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class TenantMiddleware implements NestMiddleware {
  use(req: Request & { tenantId?: string; user?: any }, res: Response, next: NextFunction) {
    // Priority: header 'x-tenant-id' -> req.user.tenantId -> query param 'tenantId'
    const header = req.headers['x-tenant-id'] as string | undefined;
    const query = (req.query && req.query['tenantId']) ? String(req.query['tenantId']) : undefined;
    req.tenantId = header || (req.user && req.user.tenantId) || query || null;
    next();
  }
}
