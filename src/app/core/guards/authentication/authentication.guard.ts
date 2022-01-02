import { config } from "../../../shared/utilities";
import { Injectable } from "@angular/core";
import {
  CanActivate,
  CanLoad,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from "@angular/router";
import { Observable } from "rxjs";
import { take, map } from "rxjs/operators";
import { AuthenticationService } from "../../../core/authentication";

@Injectable({
  providedIn: "root",
})
export class AuthenticationGuard implements CanLoad, CanActivate {
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  canLoad(): boolean | Observable<boolean> | Promise<boolean> {
    return this.authenticationService.isAuthenticated.pipe(
      take(1),
      map((isAuthenticated: boolean) => {
        if (!isAuthenticated) {
          //   this.router.navigate([config.superadmin_authentication.route], {
          //     queryParams: {
          //       // eslint-disable-next-line no-restricted-globals
          //       targetURL: location.pathname + location.search,
          //     },
          //   });
          return false;
        }
        return true;
      })
    );
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    return this.authenticationService.isAuthenticated.pipe(
      take(1),
      map((isAuthenticated: boolean) => {
        const url =
          state.url.indexOf("?") > 0 ? state.url.split("?")[0] : state.url;
        if (url === config.superadmin_authentication.route) {
          if (isAuthenticated) {
            //this.router.navigate([config.home.route]);
            console.log("isAuthenticated", isAuthenticated);
            return false;
          }
        } else {
          return isAuthenticated;
        }
        return true;
      })
    );
  }
}
