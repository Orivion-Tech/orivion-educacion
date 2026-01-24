import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-admin-shell',
  standalone: true,
  imports: [MatCardModule],
  template: `
    <mat-card class="p-6">
      <h2 class="text-2xl font-semibold mb-2">Admin Portal Shell</h2>
      <p class="text-slate-600">
        This shell covers analytics, permissions, and operational settings for admins.
      </p>
    </mat-card>
  `
})
export class AdminShellComponent {}
