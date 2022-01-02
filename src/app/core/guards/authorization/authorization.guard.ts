import { config } from "../../../shared/utilities";
import { Injectable } from "@angular/core";
import {
  CanActivate,
  CanLoad,
  Route,
  ActivatedRouteSnapshot,
  Router,
} from "@angular/router";
import { Observable } from "rxjs";
import { StorageService } from "../../../core/services";
import { AuthenticationService } from "../../../core/authentication/authentication.service";

@Injectable({
  providedIn: "root",
})
export class AuthorizationGuard implements CanActivate, CanLoad {
  constructor(
    private router: Router,
    private storageService: StorageService,
    private authenticationService: AuthenticationService
  ) {}

  checkRoute(route: Route | ActivatedRouteSnapshot) {
    const userAvailableRoutes = this.storageService.getUserAvailableRoutes();
    if (userAvailableRoutes && userAvailableRoutes.length) {
      if (
        userAvailableRoutes.includes("/*") ||
        userAvailableRoutes.includes(route.data.route)
      ) {
        return true;
      }
      //this.router.navigate([config.home.route]);
      console.log("redirect to home");
      return false;
    }
    this.authenticationService.logout();
    return false;
  }

  canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {
    if (!route.data) {
      return false;
    }
    return this.checkRoute(route);
  }

  canActivate(
    route: ActivatedRouteSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    if (!route.data) {
      return false;
    }
    return this.checkRoute(route);
  }
}
