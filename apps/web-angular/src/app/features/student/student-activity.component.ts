import { Component } from '@angular/core';
import { MasteryBarComponent } from '../../components/mastery-bar.component';

@Component({
  selector: 'saa-student-activity',
  standalone: true,
  imports: [MasteryBarComponent],
  template: `
    <h2 class="text-2xl font-semibold mb-4">Detalle de actividad</h2>
    <p class="text-slate-500 mb-4">Actividad de práctica adaptativa.</p>
    <saa-mastery-bar [value]="0.72"></saa-mastery-bar>
  `,
})
export class StudentActivityComponent {}
