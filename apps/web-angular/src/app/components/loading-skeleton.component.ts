import { Component } from '@angular/core';

@Component({
  selector: 'saa-loading-skeleton',
  standalone: true,
  template: `
    <div class="animate-pulse space-y-3">
      <div class="h-4 w-1/2 rounded bg-slate-200"></div>
      <div class="h-4 w-3/4 rounded bg-slate-200"></div>
      <div class="h-4 w-full rounded bg-slate-200"></div>
    </div>
  `,
})
export class LoadingSkeletonComponent {}
