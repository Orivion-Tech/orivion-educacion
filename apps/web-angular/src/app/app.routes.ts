import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

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
    title: 'Student Portal'
  },
  {
    path: 'parent',
    loadComponent: () =>
      import('./features/parent/parent-shell.component').then(
        (m) => m.ParentShellComponent
      ),
    title: 'Parent Portal'
  },
  {
    path: 'teacher',
    loadComponent: () =>
      import('./features/teacher/teacher-shell.component').then(
        (m) => m.TeacherShellComponent
      ),
    title: 'Teacher Portal'
  },
  {
    path: 'admin',
    loadComponent: () =>
      import('./features/admin/admin-shell.component').then(
        (m) => m.AdminShellComponent
      ),
    title: 'Admin Portal'
  },
  {
    path: 'platform',
    loadComponent: () =>
      import('./features/platform/platform-shell.component').then(
        (m) => m.PlatformShellComponent
      ),
    title: 'Platform'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
