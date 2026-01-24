import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { SessionService } from '../services/session.service';

export const authGuard: CanActivateFn = () => {
  const sessionService = inject(SessionService);
  const router = inject(Router);
  const session = sessionService.getSession();

  if (!session?.userId) {
    return router.createUrlTree(['/']);
  }

  return true;
};
