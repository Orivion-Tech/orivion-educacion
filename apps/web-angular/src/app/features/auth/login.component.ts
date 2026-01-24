import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Session, SessionService } from '../../services/session.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, RouterLink],
  template: `
    <mat-card class="max-w-xl mx-auto p-6 grid gap-4">
      <header class="space-y-1">
        <p class="text-xs uppercase tracking-[0.2em] text-slate-500">Orivion Educación</p>
        <h1 class="text-2xl font-semibold">Sign in</h1>
        <p class="text-slate-600">Choose a role to preview the platform experience.</p>
      </header>

      <section class="grid gap-3">
        <button
          mat-raised-button
          color="primary"
          type="button"
          data-testid="demo-login"
          (click)="loginAsDemo()"
        >
          Demo student login
        </button>
        <button
          mat-stroked-button
          color="primary"
          type="button"
          data-testid="teacher-login"
          (click)="loginAsTeacher()"
        >
          Teacher login
        </button>
      </section>

      <a class="text-sm text-slate-500 underline" routerLink="/">Return to overview</a>
    </mat-card>
  `
})
export class LoginComponent {
  constructor(
    private readonly sessionService: SessionService,
    private readonly router: Router
  ) {}

  loginAsDemo(): void {
    this.sessionService.setSession(this.buildSession('student', 'north-campus'));
    void this.router.navigate(['/tenant-select']);
  }

  loginAsTeacher(): void {
    this.sessionService.setSession(this.buildSession('teacher', 'north-campus'));
    void this.router.navigate(['/teacher/course/101/dashboard']);
  }

  private buildSession(role: Session['role'], institutionId: string): Session {
    const permissions: Session['permissions'] = role === 'teacher'
      ? ['view:teacher', 'view:student']
      : ['view:student'];

    return {
      userId: `${role}-demo`,
      role,
      permissions,
      institutionId,
      isPlatformAdmin: false
    };
  }
}
