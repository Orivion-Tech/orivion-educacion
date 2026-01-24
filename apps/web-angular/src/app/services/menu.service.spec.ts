import { TestBed } from '@angular/core/testing';
import { BehaviorSubject, firstValueFrom } from 'rxjs';
import { MenuService } from './menu.service';
import { Session, SessionService } from './session.service';
import { TenantFeatureService } from './tenant-feature.service';

class MockSessionService {
  private readonly subject = new BehaviorSubject<Session>({
    userId: 'student-1',
    role: 'student',
    permissions: ['view:student'],
    institutionId: 'north-campus',
    isPlatformAdmin: false
  });

  readonly session$ = this.subject.asObservable();

  setSession(session: Session): void {
    this.subject.next(session);
  }
}

class MockTenantFeatureService {
  hasFeature(institutionId: string, feature: string): boolean {
    if (institutionId === 'north-campus') {
      return ['analytics', 'family-portal', 'billing'].includes(feature);
    }
    if (institutionId === 'south-campus') {
      return ['family-portal'].includes(feature);
    }
    return false;
  }
}

describe('MenuService', () => {
  let menuService: MenuService;
  let sessionService: MockSessionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MenuService,
        { provide: SessionService, useClass: MockSessionService },
        { provide: TenantFeatureService, useClass: MockTenantFeatureService }
      ]
    });

    menuService = TestBed.inject(MenuService);
    sessionService = TestBed.inject(SessionService) as unknown as MockSessionService;
  });

  it('filters sidebar items when role changes', async () => {
    const studentItems = await firstValueFrom(menuService.getSidebarItems());
    expect(studentItems.some((item) => item.label === 'Student Portal')).toBe(true);
    expect(studentItems.some((item) => item.label === 'Admin Portal')).toBe(false);

    sessionService.setSession({
      userId: 'admin-1',
      role: 'admin',
      permissions: ['view:admin'],
      institutionId: 'north-campus',
      isPlatformAdmin: false
    });

    const adminItems = await firstValueFrom(menuService.getSidebarItems());
    expect(adminItems.some((item) => item.label === 'Admin Portal')).toBe(true);
  });

  it('updates topbar widgets for tenant features', async () => {
    sessionService.setSession({
      userId: 'admin-2',
      role: 'admin',
      permissions: ['view:reports', 'manage:staff'],
      institutionId: 'north-campus',
      isPlatformAdmin: false
    });

    const northWidgets = await firstValueFrom(menuService.getTopbarWidgets());
    expect(northWidgets.some((widget) => widget.label === 'Reports')).toBe(true);

    sessionService.setSession({
      userId: 'admin-2',
      role: 'admin',
      permissions: ['view:reports', 'manage:staff'],
      institutionId: 'south-campus',
      isPlatformAdmin: false
    });

    const southWidgets = await firstValueFrom(menuService.getTopbarWidgets());
    expect(southWidgets.some((widget) => widget.label === 'Reports')).toBe(false);
    expect(southWidgets.some((widget) => widget.label === 'Staff')).toBe(true);
  });
});
