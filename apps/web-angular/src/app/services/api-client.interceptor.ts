import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { SessionService } from './session.service';

export const apiClientInterceptor: HttpInterceptorFn = (req, next) => {
  const session = inject(SessionService).getSession();
  const institutionId = session?.institutionId ?? 'andina';
  const cloned = req.clone({
    setHeaders: {
      'X-Institution-Id': institutionId,
    },
  });
  return next(cloned);
};
