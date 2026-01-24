import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { SessionService } from '../services/session.service';

export const roleGuard: CanActivateFn = (route) => {
  const session = inject(SessionService).getSession();
  const roles = route.data?.['roles'] as string[] | undefined;
  if (!session || !roles) {
    return false;
  }
  return roles.includes(session.role);
};
