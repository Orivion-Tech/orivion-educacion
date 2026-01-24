import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { Chart, ChartConfiguration } from 'chart.js/auto';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule, MatDividerModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('enrollmentChart')
  chartRef?: ElementRef<HTMLCanvasElement>;

  ngAfterViewInit(): void {
    if (!this.chartRef?.nativeElement) {
      return;
    }

    const config: ChartConfiguration<'line'> = {
      type: 'line',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        datasets: [
          {
            label: 'Active learners',
            data: [420, 460, 520, 610, 740],
            borderColor: '#6366f1',
            backgroundColor: 'rgba(99, 102, 241, 0.15)',
            fill: true,
            tension: 0.4
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true
          }
        }
      }
    };

    new Chart(this.chartRef.nativeElement, config);
  }
}
