import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { SessionService } from '../services/session.service';

export const roleGuard: CanActivateFn = (route) => {
  const router = inject(Router);
  const session = inject(SessionService).getSession();
  const allowedRoles = route.data?.['roles'] as string[] | undefined;

  if (!allowedRoles || allowedRoles.length === 0) {
    return true;
  }

  if (allowedRoles.includes(session.role) || session.isPlatformAdmin) {
    return true;
  }

  return router.createUrlTree(['/']);
};
