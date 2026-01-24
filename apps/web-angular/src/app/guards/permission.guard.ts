import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { SessionService } from '../services/session.service';

export const permissionGuard: CanActivateFn = (route) => {
  const router = inject(Router);
  const session = inject(SessionService).getSession();
  const requiredPermissions = route.data?.['permissions'] as string[] | undefined;

  if (!requiredPermissions || requiredPermissions.length === 0) {
    return true;
  }

  const hasPermissions = requiredPermissions.every((permission) =>
    session.permissions.includes(permission)
  );

  if (hasPermissions || session.isPlatformAdmin) {
    return true;
  }

  return router.createUrlTree(['/']);
};
