import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

export interface AppConfig {
  apiUrl: string;
  useMocks: boolean;
  institutionId?: string;
}

const DEFAULT_CONFIG: AppConfig = {
  apiUrl: '',
  useMocks: false,
  institutionId: 'default'
};

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private config: AppConfig | null = null;

  constructor(private http: HttpClient) {}

  load(): Promise<void> {
    return firstValueFrom(
      this.http.get<AppConfig>('/assets/config.json').pipe(
        catchError(() => this.http.get<AppConfig>('/assets/config.example.json')),
        map((config) => ({
          ...DEFAULT_CONFIG,
          ...config,
          institutionId: config.institutionId ?? DEFAULT_CONFIG.institutionId
        }))
      )
    ).then((config) => {
      this.config = config;
    });
  }

  getConfig(): AppConfig {
    if (!this.config) {
      throw new Error('Config has not been loaded yet.');
    }

    return this.config;
  }
}
