import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { authGuard } from './guards/auth.guard';
import { permissionGuard } from './guards/permission.guard';
import { roleGuard } from './guards/role.guard';
import { tenantGuard } from './guards/tenant.guard';

export const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Orivion Educación'
  },
  {
    path: 'student',
    loadComponent: () =>
      import('./features/student/student-shell.component').then(
        (m) => m.StudentShellComponent
      ),
    title: 'Student Portal',
    canActivate: [authGuard, roleGuard],
    data: {
      roles: ['student', 'teacher', 'admin']
    }
  },
  {
    path: 'parent',
    loadComponent: () =>
      import('./features/parent/parent-shell.component').then(
        (m) => m.ParentShellComponent
      ),
    title: 'Parent Portal',
    canActivate: [authGuard, roleGuard, tenantGuard],
    data: {
      roles: ['parent', 'admin'],
      tenantFeature: 'family-portal'
    }
  },
  {
    path: 'teacher',
    loadComponent: () =>
      import('./features/teacher/teacher-shell.component').then(
        (m) => m.TeacherShellComponent
      ),
    title: 'Teacher Portal',
    canActivate: [authGuard, roleGuard],
    data: {
      roles: ['teacher', 'admin']
    }
  },
  {
    path: 'admin',
    loadComponent: () =>
      import('./features/admin/admin-shell.component').then(
        (m) => m.AdminShellComponent
      ),
    title: 'Admin Portal',
    canActivate: [authGuard, roleGuard, permissionGuard, tenantGuard],
    data: {
      roles: ['admin'],
      permissions: ['view:admin'],
      tenantFeature: 'analytics'
    }
  },
  {
    path: 'platform',
    loadComponent: () =>
      import('./features/platform/platform-shell.component').then(
        (m) => m.PlatformShellComponent
      ),
    title: 'Platform',
    canActivate: [authGuard, roleGuard],
    data: {
      roles: ['platform']
    }
  },
  {
    path: '**',
    redirectTo: ''
  }
];
