import { Routes } from '@angular/router';
import { LoginComponent } from './components/login.component';
import { authGuard } from './guards/auth.guard';
import { tenantGuard } from './guards/tenant.guard';
import { roleGuard } from './guards/role.guard';
import { permissionGuard } from './guards/permission.guard';
import { StudentHomeComponent } from './features/student/student-home.component';
import { StudentSubjectsComponent } from './features/student/student-subjects.component';
import { StudentActivityComponent } from './features/student/student-activity.component';
import { StudentProgressComponent } from './features/student/student-progress.component';
import { StudentOnboardingComponent } from './features/student/student-onboarding.component';
import { ParentDashboardComponent } from './features/parent/parent-dashboard.component';
import { ParentStudentComponent } from './features/parent/parent-student.component';
import { ParentStudentTopicComponent } from './features/parent/parent-student-topic.component';
import { TeacherCoursesComponent } from './features/teacher/teacher-courses.component';
import { TeacherCourseDashboardComponent } from './features/teacher/teacher-course-dashboard.component';
import { TeacherStudentComponent } from './features/teacher/teacher-student.component';
import { TeacherLibraryComponent } from './features/teacher/teacher-library.component';
import { AdminKpisComponent } from './features/admin/admin-kpis.component';
import { AdminUsersComponent } from './features/admin/admin-users.component';
import { AdminCoursesComponent } from './features/admin/admin-courses.component';
import { PlatformInstitutionsComponent } from './features/platform/platform-institutions.component';
import { PlatformInstitutionsNewComponent } from './features/platform/platform-institutions-new.component';
import { PlatformImpersonateComponent } from './features/platform/platform-impersonate.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'student',
    canActivate: [authGuard, tenantGuard, roleGuard],
    data: { roles: ['student'] },
    children: [
      { path: 'home', component: StudentHomeComponent },
      { path: 'subjects', component: StudentSubjectsComponent },
      { path: 'activity/:id', component: StudentActivityComponent },
      { path: 'progress', component: StudentProgressComponent },
      { path: 'onboarding', component: StudentOnboardingComponent },
    ],
  },
  {
    path: 'parent',
    canActivate: [authGuard, tenantGuard, roleGuard],
    data: { roles: ['parent'] },
    children: [
      { path: 'dashboard', component: ParentDashboardComponent },
      { path: 'student/:id', component: ParentStudentComponent },
      { path: 'student/:id/topic/:topicId', component: ParentStudentTopicComponent },
    ],
  },
  {
    path: 'teacher',
    canActivate: [authGuard, tenantGuard, roleGuard],
    data: { roles: ['teacher'] },
    children: [
      { path: 'courses', component: TeacherCoursesComponent },
      { path: 'course/:id/dashboard', component: TeacherCourseDashboardComponent },
      { path: 'student/:id', component: TeacherStudentComponent },
      { path: 'library', component: TeacherLibraryComponent },
    ],
  },
  {
    path: 'admin',
    canActivate: [authGuard, tenantGuard, roleGuard, permissionGuard],
    data: { roles: ['admin'], permissions: ['manage:users'] },
    children: [
      { path: 'kpis', component: AdminKpisComponent },
      { path: 'users', component: AdminUsersComponent },
      { path: 'courses', component: AdminCoursesComponent },
    ],
  },
  {
    path: 'platform',
    canActivate: [authGuard, roleGuard],
    data: { roles: ['platform'] },
    children: [
      { path: 'institutions', component: PlatformInstitutionsComponent },
      { path: 'institutions/new', component: PlatformInstitutionsNewComponent },
      { path: 'impersonate/:tenantId', component: PlatformImpersonateComponent },
    ],
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];
