import { Component } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { StatCardComponent } from '../../components/stat-card.component';

@Component({
  selector: 'saa-admin-kpis',
  standalone: true,
  imports: [NgxChartsModule, StatCardComponent],
  template: `
    <h2 class="text-2xl font-semibold mb-4">KPIs Institución</h2>
    <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
      <saa-stat-card label="Usuarios activos" [value]="1280"></saa-stat-card>
      <saa-stat-card label="Completitud" [value]="74%"></saa-stat-card>
      <saa-stat-card label="Promedio" [value]="82"></saa-stat-card>
    </div>
    <div class="mt-6 h-64">
      <ngx-charts-bar-vertical
        [results]="kpiTrend"
        [xAxis]="true"
        [yAxis]="true"
      ></ngx-charts-bar-vertical>
    </div>
  `,
})
export class AdminKpisComponent {
  kpiTrend = [
    { name: 'Ene', value: 62 },
    { name: 'Feb', value: 68 },
    { name: 'Mar', value: 74 },
    { name: 'Abr', value: 79 },
  ];
}
