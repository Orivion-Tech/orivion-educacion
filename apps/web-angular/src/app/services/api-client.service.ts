import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, of } from 'rxjs';
import { ConfigService } from './config.service';
import { SessionService } from './session.service';

@Injectable({ providedIn: 'root' })
export class ApiClientService {
  constructor(
    private http: HttpClient,
    private configService: ConfigService,
    private session: SessionService,
  ) {}

  get<T>(path: string, mockFile: string) {
    const config = this.configService.snapshot;
    const tenantId = this.session.getSession()?.institutionId ?? 'andina';
    const url = `${config.apiUrl}${path}`;

    if (config.useMocks) {
      return this.http.get<T>(`assets/mocks/${tenantId}/${mockFile}`);
    }

    return this.http.get<T>(url).pipe(
      catchError(() => this.http.get<T>(`assets/mocks/${tenantId}/${mockFile}`)),
    );
  }

  getTenantData<T>(mockFile: string) {
    const tenantId = this.session.getSession()?.institutionId ?? 'andina';
    return this.http.get<T>(`assets/mocks/${tenantId}/${mockFile}`).pipe(map((data) => data));
  }
}
