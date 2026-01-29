import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from '../decorators/roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext) {
    const requiredRoles = this.reflector.getAllAndOverride<string[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!requiredRoles) return true; // no roles required

    const req = context.switchToHttp().getRequest();
    const user = req.user;
    if (!user || !user.roles) return false;

    // user.roles expected as array of role codes
    return requiredRoles.some((r) => user.roles.includes(r));
  }
}
