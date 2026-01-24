import { Component, Input } from '@angular/core';

@Component({
  selector: 'saa-risk-badge',
  standalone: true,
  template: `
    <span
      class="rounded-full px-3 py-1 text-xs font-semibold"
      [class.bg-green-100]="risk === 'low'"
      [class.bg-amber-100]="risk === 'medium'"
      [class.bg-red-100]="risk === 'high'"
    >
      {{ risk | uppercase }}
    </span>
  `,
})
export class RiskBadgeComponent {
  @Input() risk: 'low' | 'medium' | 'high' = 'low';
}
