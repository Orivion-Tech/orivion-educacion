import { TestBed } from '@angular/core/testing';
import { Router, UrlTree } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { tenantGuard } from './tenant.guard';
import { Session, SessionService } from '../services/session.service';
import { TenantFeatureService } from '../services/tenant-feature.service';

class MockSessionService {
  session: Session = {
    userId: 'demo-user',
    role: 'admin',
    permissions: ['view:admin'],
    institutionId: 'north-campus',
    isPlatformAdmin: false
  };

  getSession(): Session {
    return this.session;
  }
}

class MockTenantFeatureService {
  hasFeature(institutionId: string, feature: string): boolean {
    return institutionId === 'north-campus' && feature === 'analytics';
  }
}

describe('tenantGuard', () => {
  let router: Router;
  let sessionService: MockSessionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        { provide: SessionService, useClass: MockSessionService },
        { provide: TenantFeatureService, useClass: MockTenantFeatureService }
      ]
    });

    router = TestBed.inject(Router);
    sessionService = TestBed.inject(SessionService) as unknown as MockSessionService;
  });

  it('redirects when institution does not match', () => {
    const result = TestBed.runInInjectionContext(() =>
      tenantGuard({ data: { institutionId: 'south-campus' } } as any)
    );

    expect(result).toBeInstanceOf(UrlTree);
  });

  it('redirects when tenant feature is missing', () => {
    sessionService.session = { ...sessionService.session, institutionId: 'north-campus' };

    const result = TestBed.runInInjectionContext(() =>
      tenantGuard({ data: { tenantFeature: 'billing' } } as any)
    );

    expect(result).toBeInstanceOf(UrlTree);
  });

  it('allows navigation when requirements are satisfied', () => {
    const result = TestBed.runInInjectionContext(() =>
      tenantGuard({ data: { tenantFeature: 'analytics' } } as any)
    );

    expect(result).toBe(true);
    expect(router).toBeTruthy();
  });
});
