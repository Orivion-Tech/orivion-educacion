import { Component } from '@angular/core';
import { MasteryBarComponent } from '../../components/mastery-bar.component';

@Component({
  selector: 'saa-parent-student-topic',
  standalone: true,
  imports: [MasteryBarComponent],
  template: `
    <h2 class="text-2xl font-semibold mb-4">Tema específico</h2>
    <saa-mastery-bar [value]="0.64"></saa-mastery-bar>
  `,
})
export class ParentStudentTopicComponent {}
