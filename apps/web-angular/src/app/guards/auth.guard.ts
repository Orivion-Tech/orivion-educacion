import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { SessionService } from '../services/session.service';

export const authGuard: CanActivateFn = () => {
  const session = inject(SessionService).getSession();
  if (!session) {
    return inject(Router).createUrlTree(['/login']);
  }
  return true;
};
