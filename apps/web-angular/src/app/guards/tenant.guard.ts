import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { SessionService } from '../services/session.service';
import { TenantService } from '../services/tenant.service';

export const tenantGuard: CanActivateFn = () => {
  const session = inject(SessionService).getSession();
  const tenantService = inject(TenantService);
  if (!session || !tenantService.getTenant(session.institutionId)) {
    return inject(Router).createUrlTree(['/login']);
  }
  return true;
};
