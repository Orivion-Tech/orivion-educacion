import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type UserRole = 'student' | 'parent' | 'teacher' | 'admin' | 'platform';

export interface Session {
  userId: string;
  role: UserRole;
  permissions: string[];
  institutionId: string;
  isPlatformAdmin: boolean;
}

const SESSION_STORAGE_KEY = 'mockSession';

const DEFAULT_SESSION: Session = {
  userId: 'demo-user',
  role: 'admin',
  permissions: [
    'view:student',
    'view:parent',
    'view:teacher',
    'view:admin',
    'manage:staff',
    'manage:billing',
    'view:reports'
  ],
  institutionId: 'north-campus',
  isPlatformAdmin: false
};

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private readonly sessionSubject = new BehaviorSubject<Session>(this.loadSession());
  readonly session$ = this.sessionSubject.asObservable();

  getSession(): Session {
    return this.sessionSubject.value;
  }

  setSession(session: Session): void {
    localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(session));
    this.sessionSubject.next(session);
  }

  private loadSession(): Session {
    const stored = localStorage.getItem(SESSION_STORAGE_KEY);
    if (stored) {
      try {
        return JSON.parse(stored) as Session;
      } catch {
        localStorage.removeItem(SESSION_STORAGE_KEY);
      }
    }

    localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(DEFAULT_SESSION));
    return DEFAULT_SESSION;
  }
}
