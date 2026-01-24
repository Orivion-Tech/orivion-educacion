import { Component } from '@angular/core';
import { RiskBadgeComponent } from '../../components/risk-badge.component';

@Component({
  selector: 'saa-parent-student',
  standalone: true,
  imports: [RiskBadgeComponent],
  template: `
    <h2 class="text-2xl font-semibold mb-4">Detalle estudiante</h2>
    <div class="flex items-center gap-3">
      <span class="text-lg">Ana Torres</span>
      <saa-risk-badge risk="medium"></saa-risk-badge>
    </div>
  `,
})
export class ParentStudentComponent {}
