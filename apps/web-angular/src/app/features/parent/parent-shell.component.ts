import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-parent-shell',
  standalone: true,
  imports: [MatCardModule],
  template: `
    <mat-card class="p-6">
      <h2 class="text-2xl font-semibold mb-2">Parent Portal Shell</h2>
      <p class="text-slate-600">
        This shell anchors family communications, progress updates, and support tools.
      </p>
    </mat-card>
  `
})
export class ParentShellComponent {}
