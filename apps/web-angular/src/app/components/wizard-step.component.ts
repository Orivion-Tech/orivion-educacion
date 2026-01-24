import { Component, Input } from '@angular/core';

@Component({
  selector: 'saa-wizard-step',
  standalone: true,
  template: `
    <div class="flex items-center gap-3">
      <div class="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white">
        {{ step }}
      </div>
      <div>
        <div class="font-semibold">{{ title }}</div>
        <div class="text-sm text-slate-500">{{ description }}</div>
      </div>
    </div>
  `,
})
export class WizardStepComponent {
  @Input() step = 1;
  @Input() title = '';
  @Input() description = '';
}
