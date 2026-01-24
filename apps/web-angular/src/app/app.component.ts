import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppShellComponent } from './components/app-shell.component';

@Component({
  selector: 'saa-root',
  standalone: true,
  imports: [RouterOutlet, AppShellComponent],
  template: `
    <saa-app-shell>
      <router-outlet />
    </saa-app-shell>
  `,
})
export class AppComponent {}
