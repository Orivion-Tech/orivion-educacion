import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/auth/login-page.component';
import { TenantSelectPageComponent } from './pages/auth/tenant-select-page.component';
import { ShellLayoutComponent } from './layouts/shell-layout/shell-layout.component';
import { StudentDashboardPageComponent } from './pages/student/student-dashboard-page.component';
import { StudentPathPageComponent } from './pages/student/student-path-page.component';
import { StudentContentPageComponent } from './pages/student/student-content-page.component';
import { StudentActivitiesPageComponent } from './pages/student/student-activities-page.component';
import { StudentAssessmentsPageComponent } from './pages/student/student-assessments-page.component';
import { StudentProgressPageComponent } from './pages/student/student-progress-page.component';
import { TeacherDashboardPageComponent } from './pages/teacher/teacher-dashboard-page.component';
import { TeacherCoursesPageComponent } from './pages/teacher/teacher-courses-page.component';
import { TeacherGroupsPageComponent } from './pages/teacher/teacher-groups-page.component';
import { TeacherContentPageComponent } from './pages/teacher/teacher-content-page.component';
import { TeacherAssessmentsPageComponent } from './pages/teacher/teacher-assessments-page.component';
import { TeacherProgressPageComponent } from './pages/teacher/teacher-progress-page.component';
import { TeacherRecommendationsPageComponent } from './pages/teacher/teacher-recommendations-page.component';
import { TeacherEnrollmentsPageComponent } from './pages/teacher/teacher-enrollments-page.component';
import { TeacherGradesPageComponent } from './pages/teacher/teacher-grades-page.component';
import { TutorSummaryPageComponent } from './pages/tutor/tutor-summary-page.component';
import { TutorAlertsPageComponent } from './pages/tutor/tutor-alerts-page.component';
import { TutorReportsPageComponent } from './pages/tutor/tutor-reports-page.component';
import { AdminTenantsPageComponent } from './pages/admin/admin-tenants-page.component';
import { AdminUsersPageComponent } from './pages/admin/admin-users-page.component';
import { AdminStudentsPageComponent } from './pages/admin/admin-students-page.component';
import { AdminEnrollmentsPageComponent } from './pages/admin/admin-enrollments-page.component';
import { AdminGradesPageComponent } from './pages/admin/admin-grades-page.component';
import { AdminRolesPageComponent } from './pages/admin/admin-roles-page.component';
import { AdminAcademicsPageComponent } from './pages/admin/admin-academics-page.component';
import { AdminContentPageComponent } from './pages/admin/admin-content-page.component';
import { AdminAssessmentsPageComponent } from './pages/admin/admin-assessments-page.component';
import { AdminReportsPageComponent } from './pages/admin/admin-reports-page.component';
import { AdminAuditPageComponent } from './pages/admin/admin-audit-page.component';
import { AdminSettingsPageComponent } from './pages/admin/admin-settings-page.component';
import { NotFoundPageComponent } from './pages/common/not-found-page.component';
import { HomeRedirectComponent } from './pages/common/home-redirect.component';
import { AuthGuard } from './core/auth.guard';
import { RoleGuard } from './core/role.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  { path: 'tenant-select', component: TenantSelectPageComponent },
  {
    path: 'app',
    component: ShellLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: HomeRedirectComponent },
      { path: 'student/dashboard', component: StudentDashboardPageComponent, canActivate: [RoleGuard], data: { roles: ['ESTUDIANTE'] } },
      { path: 'student/route', component: StudentPathPageComponent, canActivate: [RoleGuard], data: { roles: ['ESTUDIANTE'] } },
      { path: 'student/content', component: StudentContentPageComponent, canActivate: [RoleGuard], data: { roles: ['ESTUDIANTE'] } },
      { path: 'student/activities', component: StudentActivitiesPageComponent, canActivate: [RoleGuard], data: { roles: ['ESTUDIANTE'] } },
      { path: 'student/assessments', component: StudentAssessmentsPageComponent, canActivate: [RoleGuard], data: { roles: ['ESTUDIANTE'] } },
      { path: 'student/progress', component: StudentProgressPageComponent, canActivate: [RoleGuard], data: { roles: ['ESTUDIANTE'] } },

      { path: 'teacher/dashboard', component: TeacherDashboardPageComponent, canActivate: [RoleGuard], data: { roles: ['DOCENTE'] } },
      { path: 'teacher/courses', component: TeacherCoursesPageComponent, canActivate: [RoleGuard], data: { roles: ['DOCENTE'] } },
      { path: 'teacher/groups', component: TeacherGroupsPageComponent, canActivate: [RoleGuard], data: { roles: ['DOCENTE'] } },
      { path: 'teacher/content', component: TeacherContentPageComponent, canActivate: [RoleGuard], data: { roles: ['DOCENTE'] } },
      { path: 'teacher/assessments', component: TeacherAssessmentsPageComponent, canActivate: [RoleGuard], data: { roles: ['DOCENTE'] } },
      { path: 'teacher/enrollments', component: TeacherEnrollmentsPageComponent, canActivate: [RoleGuard], data: { roles: ['DOCENTE'] } },
      { path: 'teacher/grades', component: TeacherGradesPageComponent, canActivate: [RoleGuard], data: { roles: ['DOCENTE'] } },
      { path: 'teacher/progress', component: TeacherProgressPageComponent, canActivate: [RoleGuard], data: { roles: ['DOCENTE'] } },
      { path: 'teacher/recommendations', component: TeacherRecommendationsPageComponent, canActivate: [RoleGuard], data: { roles: ['DOCENTE'] } },

      { path: 'tutor/summary', component: TutorSummaryPageComponent, canActivate: [RoleGuard], data: { roles: ['TUTOR'] } },
      { path: 'tutor/alerts', component: TutorAlertsPageComponent, canActivate: [RoleGuard], data: { roles: ['TUTOR'] } },
      { path: 'tutor/reports', component: TutorReportsPageComponent, canActivate: [RoleGuard], data: { roles: ['TUTOR'] } },

      { path: 'admin/tenants', component: AdminTenantsPageComponent, canActivate: [RoleGuard], data: { roles: ['ADMIN', 'INSTITUTION_ADMIN'] } },
      { path: 'admin/users', component: AdminUsersPageComponent, canActivate: [RoleGuard], data: { roles: ['ADMIN', 'INSTITUTION_ADMIN'] } },
      { path: 'admin/students', component: AdminStudentsPageComponent, canActivate: [RoleGuard], data: { roles: ['ADMIN', 'INSTITUTION_ADMIN'] } },
      { path: 'admin/enrollments', component: AdminEnrollmentsPageComponent, canActivate: [RoleGuard], data: { roles: ['ADMIN', 'INSTITUTION_ADMIN'] } },
      { path: 'admin/grades', component: AdminGradesPageComponent, canActivate: [RoleGuard], data: { roles: ['ADMIN', 'INSTITUTION_ADMIN'] } },
      { path: 'admin/roles', component: AdminRolesPageComponent, canActivate: [RoleGuard], data: { roles: ['ADMIN', 'INSTITUTION_ADMIN'] } },
      { path: 'admin/academics', component: AdminAcademicsPageComponent, canActivate: [RoleGuard], data: { roles: ['ADMIN', 'INSTITUTION_ADMIN'] } },
      { path: 'admin/content', component: AdminContentPageComponent, canActivate: [RoleGuard], data: { roles: ['ADMIN', 'INSTITUTION_ADMIN'] } },
      { path: 'admin/assessments', component: AdminAssessmentsPageComponent, canActivate: [RoleGuard], data: { roles: ['ADMIN', 'INSTITUTION_ADMIN'] } },
      { path: 'admin/reports', component: AdminReportsPageComponent, canActivate: [RoleGuard], data: { roles: ['ADMIN', 'INSTITUTION_ADMIN'] } },
      { path: 'admin/audit', component: AdminAuditPageComponent, canActivate: [RoleGuard], data: { roles: ['ADMIN', 'INSTITUTION_ADMIN'] } },
      { path: 'admin/settings', component: AdminSettingsPageComponent, canActivate: [RoleGuard], data: { roles: ['ADMIN', 'INSTITUTION_ADMIN'] } }
    ]
  },
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
