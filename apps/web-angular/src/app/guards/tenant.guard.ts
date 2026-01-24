import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { SessionService } from '../services/session.service';
import { TenantFeatureService } from '../services/tenant-feature.service';

export const tenantGuard: CanActivateFn = (route) => {
  const router = inject(Router);
  const session = inject(SessionService).getSession();
  const tenantFeatureService = inject(TenantFeatureService);
  const requiredInstitutionId = route.data?.['institutionId'] as string | undefined;
  const requiredFeature = route.data?.['tenantFeature'] as string | undefined;

  if (requiredInstitutionId && requiredInstitutionId !== session.institutionId) {
    return router.createUrlTree(['/']);
  }

  if (requiredFeature && !tenantFeatureService.hasFeature(session.institutionId, requiredFeature)) {
    return router.createUrlTree(['/']);
  }

  return true;
};
