import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { SessionService } from './session.service';
import { TenantFeatureService } from './tenant-feature.service';

export interface MenuItem {
  label: string;
  route: string;
  roles?: string[];
  permissions?: string[];
  featureFlag?: string;
  platformOnly?: boolean;
}

export interface MenuWidget {
  label: string;
  route: string;
  roles?: string[];
  permissions?: string[];
  featureFlag?: string;
}

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private readonly sidebarItems: MenuItem[] = [
    { label: 'Home', route: '/' },
    { label: 'Student Portal', route: '/student', roles: ['student', 'teacher', 'admin'] },
    { label: 'Parent Portal', route: '/parent', roles: ['parent', 'admin'], featureFlag: 'family-portal' },
    { label: 'Teacher Portal', route: '/teacher', roles: ['teacher', 'admin'] },
    {
      label: 'Admin Portal',
      route: '/admin',
      roles: ['admin'],
      permissions: ['view:admin']
    },
    {
      label: 'Platform',
      route: '/platform',
      platformOnly: true
    }
  ];

  private readonly topbarWidgets: MenuWidget[] = [
    {
      label: 'Reports',
      route: '/admin',
      permissions: ['view:reports'],
      featureFlag: 'analytics'
    },
    {
      label: 'Billing',
      route: '/admin',
      permissions: ['manage:billing'],
      featureFlag: 'billing'
    },
    {
      label: 'Staff',
      route: '/admin',
      permissions: ['manage:staff']
    }
  ];

  constructor(
    private readonly sessionService: SessionService,
    private readonly tenantFeatureService: TenantFeatureService
  ) {}

  getSidebarItems(): Observable<MenuItem[]> {
    return this.sessionService.session$.pipe(
      map((session) =>
        this.sidebarItems.filter((item) => this.isAllowed(item, session))
      )
    );
  }

  getTopbarWidgets(): Observable<MenuWidget[]> {
    return this.sessionService.session$.pipe(
      map((session) =>
        this.topbarWidgets.filter((widget) => this.isAllowed(widget, session))
      )
    );
  }

  private isAllowed(item: MenuItem | MenuWidget, session: { role: string; permissions: string[]; institutionId: string; isPlatformAdmin: boolean }): boolean {
    if (item.platformOnly && !session.isPlatformAdmin) {
      return false;
    }

    if (item.roles && !item.roles.includes(session.role) && !session.isPlatformAdmin) {
      return false;
    }

    if (item.permissions && !item.permissions.every((permission) => session.permissions.includes(permission))) {
      return false;
    }

    if (item.featureFlag && !this.tenantFeatureService.hasFeature(session.institutionId, item.featureFlag)) {
      return false;
    }

    return true;
  }
}
