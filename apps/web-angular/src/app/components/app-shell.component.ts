import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AsyncPipe, NgFor } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MenuService } from '../services/menu.service';
import { NotificationBellComponent } from './notification-bell.component';

@Component({
  selector: 'saa-app-shell',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    RouterLink,
    RouterLinkActive,
    AsyncPipe,
    NgFor,
    NotificationBellComponent,
  ],
  template: `
    <mat-sidenav-container class="min-h-screen">
      <mat-sidenav mode="side" opened class="w-64 bg-white">
        <div class="p-4 text-lg font-semibold">SAA</div>
        <mat-nav-list>
          <a
            mat-list-item
            *ngFor="let item of menuService.menu$ | async"
            [routerLink]="item.route"
            routerLinkActive="bg-slate-100"
          >
            {{ item.label }}
          </a>
        </mat-nav-list>
      </mat-sidenav>
      <mat-sidenav-content>
        <mat-toolbar color="primary" class="flex justify-between">
          <span>Adaptative Learning</span>
          <saa-notification-bell />
        </mat-toolbar>
        <div class="p-6">
          <ng-content></ng-content>
        </div>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
})
export class AppShellComponent {
  constructor(public menuService: MenuService) {}
}
