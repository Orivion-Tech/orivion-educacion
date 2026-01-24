import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

export interface AppConfig {
  apiUrl: string;
  useMocks: boolean;
}

@Injectable({ providedIn: 'root' })
export class ConfigService {
  private config: AppConfig | null = null;

  constructor(private http: HttpClient) {}

  async load(): Promise<AppConfig> {
    if (this.config) {
      return this.config;
    }
    try {
      this.config = await firstValueFrom(this.http.get<AppConfig>('assets/config.json'));
    } catch {
      this.config = await firstValueFrom(this.http.get<AppConfig>('assets/config.example.json'));
    }
    return this.config;
  }

  get snapshot(): AppConfig {
    if (!this.config) {
      throw new Error('Config not loaded');
    }
    return this.config;
  }
}
