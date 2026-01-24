import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {
  constructor(
    private http: HttpClient,
    private configService: ConfigService
  ) {}

  get<T>(path: string, options?: { headers?: HttpHeaders }): Observable<T> {
    const config = this.configService.getConfig();
    const url = this.buildUrl(config.apiUrl, path);
    const headers = this.withInstitutionHeader(options?.headers, config.institutionId);

    return this.http.get<T>(url, { ...options, headers });
  }

  private buildUrl(apiUrl: string, path: string): string {
    const trimmedApiUrl = apiUrl.replace(/\/$/, '');
    const trimmedPath = path.startsWith('/') ? path : `/${path}`;

    return `${trimmedApiUrl}${trimmedPath}`;
  }

  private withInstitutionHeader(existing: HttpHeaders | undefined, institutionId?: string): HttpHeaders {
    const headers = existing ?? new HttpHeaders();

    return headers.set('X-Institution-Id', institutionId ?? 'default');
  }
}
