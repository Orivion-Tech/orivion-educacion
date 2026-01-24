import { TestBed } from '@angular/core/testing';
import { MenuService } from './menu.service';
import { SessionService } from './session.service';
import { TenantService } from './tenant.service';

describe('MenuService', () => {
  it('updates menu based on role and feature flags', () => {
    const sessionService = new SessionService();
    sessionService.setSession({
      userId: 'demo',
      role: 'admin',
      permissions: ['manage:users'],
      institutionId: 'pacifico',
      isPlatformAdmin: false,
    });

    const service = new MenuService(sessionService, new TenantService());
    service.refresh();

    service.menu$.subscribe((items) => {
      const labels = items.map((item) => item.label);
      expect(labels).toContain('KPIs');
      expect(labels).not.toContain('Instituciones');
    });
  });
});
