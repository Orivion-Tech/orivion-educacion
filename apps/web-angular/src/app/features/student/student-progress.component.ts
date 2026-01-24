import { Component } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'saa-student-progress',
  standalone: true,
  imports: [NgxChartsModule],
  template: `
    <h2 class="text-2xl font-semibold mb-4">Progreso</h2>
    <div class="h-64">
      <ngx-charts-bar-vertical
        [results]="mastery"
        [xAxis]="true"
        [yAxis]="true"
      ></ngx-charts-bar-vertical>
    </div>
  `,
})
export class StudentProgressComponent {
  mastery = [
    { name: 'Álgebra', value: 78 },
    { name: 'Geometría', value: 64 },
    { name: 'Lectura', value: 82 },
  ];
}
