import { HttpInterceptorFn } from '@angular/common/http';

export const globalHttpErrorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
