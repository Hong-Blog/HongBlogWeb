import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const request = req.clone({
      headers: req.headers.set('Authorization', `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MTAwMjc2MjYsImlkIjoicm9vdCIsIm9yaWdfaWF0IjoxNjEwMDI0MDI2fQ.MfrezsFIcx6XqDru5vWQF_y-p6iYJzk_hwrgyZZpcds`)
    });

    return next.handle(request);
  }
}
