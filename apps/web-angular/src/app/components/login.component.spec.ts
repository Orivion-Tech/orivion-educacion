import { TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { Router } from '@angular/router';
import { TenantService } from '../services/tenant.service';
import { SessionService } from '../services/session.service';

describe('LoginComponent', () => {
  it('renders login demo title', async () => {
    await TestBed.configureTestingModule({
      imports: [LoginComponent],
      providers: [
        { provide: Router, useValue: { navigate: jest.fn() } },
        TenantService,
        SessionService,
      ],
    }).compileComponents();

    const fixture = TestBed.createComponent(LoginComponent);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Login Demo');
  });
});
