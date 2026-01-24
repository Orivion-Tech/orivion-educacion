import { Component, Input } from '@angular/core';

@Component({
  selector: 'saa-mastery-bar',
  standalone: true,
  template: `
    <div class="w-full">
      <div class="mb-1 text-xs text-slate-500">Dominio</div>
      <div class="h-2 w-full rounded-full bg-slate-200">
        <div
          class="h-2 rounded-full bg-emerald-500"
          [style.width.%]="value * 100"
        ></div>
      </div>
    </div>
  `,
})
export class MasteryBarComponent {
  @Input() value = 0;
}
