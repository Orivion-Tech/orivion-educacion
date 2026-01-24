import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-student-shell',
  standalone: true,
  imports: [MatCardModule],
  template: `
    <mat-card class="p-6">
      <h2 class="text-2xl font-semibold mb-2">Student Portal Shell</h2>
      <p class="text-slate-600">
        This is the entry point for student dashboards, assignments, and learning resources.
      </p>
    </mat-card>
  `
})
export class StudentShellComponent {}
