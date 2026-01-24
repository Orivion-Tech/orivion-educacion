import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { tenantGuard } from './tenant.guard';
import { SessionService } from '../services/session.service';
import { TenantService } from '../services/tenant.service';

describe('TenantGuard', () => {
  it('allows navigation with valid tenant', () => {
    TestBed.configureTestingModule({
      providers: [
        TenantService,
        SessionService,
        { provide: Router, useValue: { createUrlTree: jest.fn() } },
      ],
    });
    const session = TestBed.inject(SessionService);
    session.setSession({
      userId: 'demo',
      role: 'student',
      permissions: [],
      institutionId: 'andina',
      isPlatformAdmin: false,
    });

    const result = TestBed.runInInjectionContext(() => tenantGuard({} as any, {} as any));
    expect(result).toBe(true);
  });
});
