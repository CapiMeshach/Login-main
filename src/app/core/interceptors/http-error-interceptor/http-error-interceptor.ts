import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';
import { NotificationService } from 'capiter-ui-components';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private notificationService: NotificationService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.error.errors && error.error.errors.length) {
          this.notificationService.displayErrorToastr(error.error.errors[0].defaultMessage);
        } else {
          this.notificationService.displayErrorToastr(error.error.message);
        }
        return throwError(() => error);
      }),
    );
  }
}
