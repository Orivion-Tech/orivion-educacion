import { Component, Input } from '@angular/core';

@Component({
  selector: 'saa-activity-card',
  standalone: true,
  template: `
    <div class="rounded-lg border p-4">
      <div class="text-sm font-semibold">{{ title }}</div>
      <div class="text-xs text-slate-500">{{ description }}</div>
    </div>
  `,
})
export class ActivityCardComponent {
  @Input() title = '';
  @Input() description = '';
}
