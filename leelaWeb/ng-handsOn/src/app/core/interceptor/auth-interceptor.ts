import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authRequest = req.clone({
    setHeaders: {
      Authorizaation: `Bearer XXXXXXXXXXXXXXXXXXXX}`,
    },
  });
  return next(authRequest);
};
