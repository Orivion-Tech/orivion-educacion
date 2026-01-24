import { Component } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'saa-teacher-course-dashboard',
  standalone: true,
  imports: [NgxChartsModule],
  template: `
    <h2 class="text-2xl font-semibold mb-4">Dashboard curso</h2>
    <div class="h-64">
      <ngx-charts-pie-chart
        [results]="riskDistribution"
        [legend]="true"
      ></ngx-charts-pie-chart>
    </div>
  `,
})
export class TeacherCourseDashboardComponent {
  riskDistribution = [
    { name: 'Bajo', value: 62 },
    { name: 'Medio', value: 28 },
    { name: 'Alto', value: 10 },
  ];
}
