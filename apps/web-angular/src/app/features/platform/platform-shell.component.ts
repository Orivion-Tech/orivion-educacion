import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-platform-shell',
  standalone: true,
  imports: [MatCardModule],
  template: `
    <mat-card class="p-6">
      <h2 class="text-2xl font-semibold mb-2">Platform Shell</h2>
      <p class="text-slate-600">
        This shell is reserved for platform-wide capabilities, integrations, and tooling.
      </p>
    </mat-card>
  `
})
export class PlatformShellComponent {}
