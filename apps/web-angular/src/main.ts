import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { inject, provideAppInitializer } from '@angular/core';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { apiClientInterceptor } from './app/services/api-client.interceptor';
import { ConfigService } from './app/services/config.service';

bootstrapApplication(AppComponent, {
  providers: [
    provideAppInitializer(async () => {
      const configService = inject(ConfigService);
      await configService.load();
    }),
    provideAnimations(),
    provideHttpClient(withInterceptors([apiClientInterceptor])),
    provideRouter(routes),
  ],
}).catch((error) => console.error(error));
