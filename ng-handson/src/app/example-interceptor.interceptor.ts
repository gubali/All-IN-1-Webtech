import {
  HttpEvent,
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

export const exampleInterceptorInterceptor: HttpInterceptorFn = (
  req: HttpRequest<any>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> => {
  const localToken = localStorage.getItem('token');
  // const modifierReq = req.clone({
  //   headers: req.headers.append('Authorization', this.localToken),
  // });
  const modifiedReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${localToken}`,
    },
  });
  console.log(modifiedReq);
  return next(modifiedReq);
};
