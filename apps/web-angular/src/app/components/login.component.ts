import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgFor } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SessionService } from '../services/session.service';
import { TenantService } from '../services/tenant.service';
import { Session } from '../models/session';

@Component({
  selector: 'saa-login',
  standalone: true,
  imports: [NgFor, MatButtonModule, MatSelectModule, MatFormFieldModule],
  template: `
    <div class="mx-auto max-w-md space-y-6 rounded-lg border p-6">
      <h1 class="text-xl font-semibold">Login Demo</h1>
      <mat-form-field class="w-full">
        <mat-label>Institución</mat-label>
        <mat-select [(value)]="institutionId">
          <mat-option *ngFor="let tenant of tenants" [value]="tenant.id">
            {{ tenant.name }}
          </mat-option>
        </mat-select>
      </mat-form-field>
      <mat-form-field class="w-full">
        <mat-label>Rol</mat-label>
        <mat-select [(value)]="role">
          <mat-option value="student">Estudiante</mat-option>
          <mat-option value="parent">Padre</mat-option>
          <mat-option value="teacher">Docente</mat-option>
          <mat-option value="admin">Admin institución</mat-option>
          <mat-option value="platform">Admin general</mat-option>
        </mat-select>
      </mat-form-field>
      <button mat-raised-button color="primary" class="w-full" (click)="login()">
        Ingresar
      </button>
    </div>
  `,
})
export class LoginComponent {
  tenants = this.tenantService.getTenants();
  institutionId = this.tenants[0]?.id ?? 'andina';
  role: Session['role'] = 'student';

  constructor(
    private sessionService: SessionService,
    private tenantService: TenantService,
    private router: Router,
  ) {}

  login() {
    const session: Session = {
      userId: 'demo-user',
      role: this.role,
      permissions: ['view:dashboard', 'view:students', 'manage:users'],
      institutionId: this.institutionId,
      isPlatformAdmin: this.role === 'platform',
    };
    this.sessionService.setSession(session);
    const destinations: Record<Session['role'], string> = {
      student: '/student/home',
      parent: '/parent/dashboard',
      teacher: '/teacher/courses',
      admin: '/admin/kpis',
      platform: '/platform/institutions',
    };
    this.router.navigate([destinations[this.role]]);
  }
}
