import { APP_INITIALIZER } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { appRoutes } from './app/app.routes';
import { ConfigService } from './app/services/config.service';
import 'zone.js';

const initializeConfig = (configService: ConfigService) => () => configService.load();

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes),
    provideAnimations(),
    provideHttpClient(),
    {
      provide: APP_INITIALIZER,
      useFactory: initializeConfig,
      deps: [ConfigService],
      multi: true
    }
  ]
}).catch((err) => console.error(err));
