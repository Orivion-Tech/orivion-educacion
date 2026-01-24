import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { appRoutes } from './app/app.routes';
import 'zone.js';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(appRoutes), provideAnimations()]
}).catch((err) => console.error(err));
