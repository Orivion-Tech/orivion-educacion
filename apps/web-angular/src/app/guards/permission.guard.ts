import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { SessionService } from '../services/session.service';

export const permissionGuard: CanActivateFn = (route) => {
  const session = inject(SessionService).getSession();
  const permissions = route.data?.['permissions'] as string[] | undefined;
  if (!session || !permissions) {
    return false;
  }
  return permissions.every((permission) => session.permissions.includes(permission));
};
