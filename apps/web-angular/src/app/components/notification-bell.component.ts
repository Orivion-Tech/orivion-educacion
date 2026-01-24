import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'saa-notification-bell',
  standalone: true,
  imports: [MatIconModule],
  template: `
    <button class="relative">
      <mat-icon>notifications</mat-icon>
      <span class="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-red-500"></span>
    </button>
  `,
})
export class NotificationBellComponent {}
