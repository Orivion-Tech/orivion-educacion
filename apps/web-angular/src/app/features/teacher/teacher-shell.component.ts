import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-teacher-shell',
  standalone: true,
  imports: [MatCardModule],
  template: `
    <mat-card class="p-6">
      <h2 class="text-2xl font-semibold mb-2">Teacher Portal Shell</h2>
      <p class="text-slate-600">
        This shell will host class management, grading workflows, and lesson planning.
      </p>
    </mat-card>
  `
})
export class TeacherShellComponent {}
