import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-tenant-select',
  standalone: true,
  imports: [MatButtonModule, MatCardModule],
  template: `
    <mat-card class="max-w-xl mx-auto p-6 grid gap-4">
      <header class="space-y-1">
        <p class="text-xs uppercase tracking-[0.2em] text-slate-500">Choose campus</p>
        <h1 class="text-2xl font-semibold">Select your tenant</h1>
        <p class="text-slate-600">Pick a tenant to continue to the student experience.</p>
      </header>

      <div class="grid gap-3">
        <button
          mat-raised-button
          color="primary"
          type="button"
          data-testid="tenant-north"
          (click)="selectTenant('north-campus')"
        >
          North Campus
        </button>
        <button
          mat-stroked-button
          color="primary"
          type="button"
          data-testid="tenant-south"
          (click)="selectTenant('south-campus')"
        >
          South Campus
        </button>
      </div>
    </mat-card>
  `
})
export class TenantSelectComponent {
  constructor(
    private readonly sessionService: SessionService,
    private readonly router: Router
  ) {}

  selectTenant(institutionId: string): void {
    const session = this.sessionService.getSession();
    this.sessionService.setSession({
      ...session,
      institutionId
    });
    void this.router.navigate(['/student/home']);
  }
}
