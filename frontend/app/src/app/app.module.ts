import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShellLayoutComponent } from './layouts/shell-layout/shell-layout.component';
import { LoginPageComponent } from './pages/auth/login-page.component';
import { TenantSelectPageComponent } from './pages/auth/tenant-select-page.component';
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

@NgModule({
  declarations: [
    AppComponent,
    ShellLayoutComponent,
    LoginPageComponent,
    TenantSelectPageComponent,
    StudentDashboardPageComponent,
    StudentPathPageComponent,
    StudentContentPageComponent,
    StudentActivitiesPageComponent,
    StudentAssessmentsPageComponent,
    StudentProgressPageComponent,
    TeacherDashboardPageComponent,
    TeacherCoursesPageComponent,
    TeacherGroupsPageComponent,
    TeacherContentPageComponent,
    TeacherAssessmentsPageComponent,
    TeacherEnrollmentsPageComponent,
    TeacherGradesPageComponent,
    TeacherProgressPageComponent,
    TeacherRecommendationsPageComponent,
    TutorSummaryPageComponent,
    TutorAlertsPageComponent,
    TutorReportsPageComponent,
    AdminTenantsPageComponent,
    AdminUsersPageComponent,
    AdminStudentsPageComponent,
    AdminEnrollmentsPageComponent,
    AdminGradesPageComponent,
    AdminRolesPageComponent,
    AdminAcademicsPageComponent,
    AdminContentPageComponent,
    AdminAssessmentsPageComponent,
    AdminReportsPageComponent,
    AdminAuditPageComponent,
    AdminSettingsPageComponent,
    NotFoundPageComponent,
    HomeRedirectComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
