import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SessionService } from './session.service';
import { TenantService } from './tenant.service';
import { MenuItem } from '../models/menu';

@Injectable({ providedIn: 'root' })
export class MenuService {
  private readonly menuItems = new BehaviorSubject<MenuItem[]>([]);
  readonly menu$ = this.menuItems.asObservable();

  constructor(private session: SessionService, private tenant: TenantService) {
    this.refresh();
  }

  refresh(): void {
    const session = this.session.getSession();
    const tenant = this.tenant.getTenant(session?.institutionId ?? '');
    if (!session || !tenant) {
      this.menuItems.next([]);
      return;
    }

    const items: MenuItem[] = [
      {
        label: 'Inicio',
        route: '/student/home',
        roles: ['student'],
      },
      {
        label: 'Progreso',
        route: '/student/progress',
        roles: ['student'],
      },
      {
        label: 'Dashboard Padre',
        route: '/parent/dashboard',
        roles: ['parent'],
      },
      {
        label: 'Cursos Docente',
        route: '/teacher/courses',
        roles: ['teacher'],
      },
      {
        label: 'KPIs',
        route: '/admin/kpis',
        roles: ['admin'],
        feature: 'kpis',
      },
      {
        label: 'Instituciones',
        route: '/platform/institutions',
        roles: ['platform'],
      },
    ];

    const filtered = items.filter((item) => {
      const roleMatch = item.roles.includes(session.role);
      const featureMatch = item.feature ? tenant.featureFlags.includes(item.feature) : true;
      return roleMatch && featureMatch;
    });

    this.menuItems.next(filtered);
  }
}
