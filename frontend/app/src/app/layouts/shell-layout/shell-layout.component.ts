import { Component } from '@angular/core';
import { AuthStateService } from '../../core/auth-state.service';

@Component({
  selector: 'app-shell-layout',
  templateUrl: './shell-layout.component.html',
  styleUrls: ['./shell-layout.component.scss']
})
export class ShellLayoutComponent {
  constructor(private authState: AuthStateService) {}

  navSections = [
    {
      title: 'Estudiante',
      roles: ['ESTUDIANTE'],
      items: [
        { label: 'Inicio', route: '/app/student/dashboard' },
        { label: 'Mi ruta', route: '/app/student/route' },
        { label: 'Contenidos', route: '/app/student/content' },
        { label: 'Actividades', route: '/app/student/activities' },
        { label: 'Evaluaciones', route: '/app/student/assessments' },
        { label: 'Progreso', route: '/app/student/progress' }
      ]
    },
    {
      title: 'Docente',
      roles: ['DOCENTE'],
      items: [
        { label: 'Dashboard', route: '/app/teacher/dashboard' },
        { label: 'Cursos', route: '/app/teacher/courses' },
        { label: 'Grupos', route: '/app/teacher/groups' },
        { label: 'Contenidos', route: '/app/teacher/content' },
        { label: 'Evaluaciones', route: '/app/teacher/assessments' },
        { label: 'Matrículas', route: '/app/teacher/enrollments' },
        { label: 'Calificaciones', route: '/app/teacher/grades' },
        { label: 'Progreso', route: '/app/teacher/progress' },
        { label: 'Recomendaciones', route: '/app/teacher/recommendations' }
      ]
    },
    {
      title: 'Tutor',
      roles: ['TUTOR'],
      items: [
        { label: 'Resumen', route: '/app/tutor/summary' },
        { label: 'Alertas', route: '/app/tutor/alerts' },
        { label: 'Reportes', route: '/app/tutor/reports' }
      ]
    },
    {
      title: 'Administrador',
      roles: ['ADMIN', 'INSTITUTION_ADMIN'],
      items: [
        { label: 'Tenants', route: '/app/admin/tenants' },
        { label: 'Usuarios', route: '/app/admin/users' },
        { label: 'Estudiantes', route: '/app/admin/students' },
        { label: 'Matrículas', route: '/app/admin/enrollments' },
        { label: 'Calificaciones', route: '/app/admin/grades' },
        { label: 'Roles y permisos', route: '/app/admin/roles' },
        { label: 'Académico', route: '/app/admin/academics' },
        { label: 'Contenidos', route: '/app/admin/content' },
        { label: 'Evaluaciones', route: '/app/admin/assessments' },
        { label: 'Reportes', route: '/app/admin/reports' },
        { label: 'Auditoría', route: '/app/admin/audit' },
        { label: 'Configuración', route: '/app/admin/settings' }
      ]
    }
  ];

  isSectionVisible(sectionRoles: string[]): boolean {
    return this.authState.hasRole(sectionRoles);
  }
}
