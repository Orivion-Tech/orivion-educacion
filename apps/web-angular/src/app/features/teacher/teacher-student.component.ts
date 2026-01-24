import { Component } from '@angular/core';
import { RiskBadgeComponent } from '../../components/risk-badge.component';

@Component({
  selector: 'saa-teacher-student',
  standalone: true,
  imports: [RiskBadgeComponent],
  template: `
    <h2 class="text-2xl font-semibold mb-4">Estudiante</h2>
    <div class="flex items-center gap-3">
      <span>Estudiante demo</span>
      <saa-risk-badge risk="high"></saa-risk-badge>
    </div>
  `,
})
export class TeacherStudentComponent {}
