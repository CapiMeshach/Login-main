/* eslint-disable no-empty */
/* eslint-disable @typescript-eslint/no-shadow */
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpSentEvent,
  HttpHeaderResponse,
  HttpProgressEvent,
  HttpResponse,
  HttpUserEvent,
  HttpHeaders,
} from "@angular/common/http";
import { tap } from "rxjs/operators";
import { USER } from "../../../shared/utilities";
import { AuthenticationService } from "../../../core/authentication";
import { StorageService } from "../../../core/services";
import { NotificationService } from "capiter-ui-components";

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {
  constructor(
    private storageService: StorageService,
    private notificationService: NotificationService,
    private authenticationService: AuthenticationService
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<
    | HttpSentEvent
    | HttpHeaderResponse
    | HttpProgressEvent
    | HttpResponse<any>
    | HttpUserEvent<any>
  > {
    const data = this.storageService.getStorage(USER);
    let headers: HttpHeaders = new HttpHeaders();

    if (data) {
      if (!data.authToken) {
        return;
      }
      if (!headers.get("Authorization")) {
        headers = headers.append("Authorization", `Bearer ${data.authToken}`);
      }
    }
    if (!Object.prototype.toString.call(req.body).indexOf("FormData")) {
      headers = headers.append("Content-Type", "application/json");
    }

    const newRequest = req.clone({ headers });
    // eslint-disable-next-line consistent-return
    return next.handle(newRequest).pipe(
      tap(
        () => {},
        (error) => {
          let message;
          const err =
            typeof error.error === "string"
              ? JSON.parse(error.error)
              : error.error;
          try {
            message = err.message;
            if (error.status === 401) {
              this.authenticationService.logout();
              this.notificationService.displayErrorToastr(message);
            }
          } catch (error) {}
        }
      )
    );
  }
}
