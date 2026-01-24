import { Injectable } from '@angular/core';
import { Session } from '../models/session';

const STORAGE_KEY = 'saa-session';

@Injectable({ providedIn: 'root' })
export class SessionService {
  getSession(): Session | null {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Session) : null;
  }

  setSession(session: Session): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
  }

  clear(): void {
    localStorage.removeItem(STORAGE_KEY);
  }
}
