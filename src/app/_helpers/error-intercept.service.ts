import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AlertService } from '../_service';

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptService implements HttpInterceptor{

  constructor(private alertService: AlertService) { }


  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(err => {
      const error = err.error?.message || err.statusText;
      this.alertService.error(error);
      console.error(err);
      return throwError(error);
    }))
  }

}
