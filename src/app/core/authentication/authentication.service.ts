import { config, API_URLS, USER, USER_TYPE } from "../../shared/utilities";
import { User } from "../.././shared/utilities/user.interface";
import { Observable, Subject, BehaviorSubject } from "rxjs";
import { Injectable, OnDestroy } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Router } from "@angular/router";
import { AngularFireAnalytics } from "@angular/fire/analytics";
import { StorageService } from "../.././core/services";

@Injectable({ providedIn: "root" })
export class AuthenticationService implements OnDestroy {
  /* to hold cached data */
  public userData: any = {
    mobileOrEmail: "",
    password: "",
  };

  /** Behavior Subject for authentication status */
  public authentication = new BehaviorSubject<boolean>(false);

  /** Subject for token status */
  public tokenExpire = new Subject<boolean>();

  public tokenExpired$ = this.tokenExpire.asObservable();

  /** Current User Type */
  get userType(): string {
    return this.storageService.getStorage(USER_TYPE);
  }

  /**
   * Check if the user already have tokens and userProfile
   * @return Observable<boolean> indicated if the user Authenticated or not
   */
  get isAuthenticated(): Observable<boolean> {
    return this.authentication.asObservable();
  }

  constructor(
    private storageService: StorageService,
    private httpClient: HttpClient,
    private router: Router,
    private firebaseAnalytics: AngularFireAnalytics
  ) {
    const isCurrentUser = !!this.storageService.getStorage(USER);
    this.authentication.next(isCurrentUser);
  }

  /**
   * Set token is expired
   */
  public setTokenExpire() {
    this.tokenExpire.next(true);
  }

  /**
   * @param  {string} token
   * @description parses the jwt token and only extracts the role and routes fields
   * and returns them
   */
  public parseJwt = (token) => {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map((c) => {
          return `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`;
        })
        .join("")
    );
    const { role, routes } = JSON.parse(jsonPayload);
    this.resolveEdgeCase(routes);
    return { role, routes };
  };

  /** resolve edge case */
  // eslint-disable-next-line
  private resolveEdgeCase(routes: any) {
    // edge case of /product-bundles-home route
    // TODO: remove when BE is updated
    const index = routes.indexOf("/product-bundles-home");
    if (index !== -1) {
      // eslint-disable-next-line
      routes[index] = "/products";
    }
  }

  /**
   * Super admin authenticate (login)
   * @param email
   * @param password
   */
  public authenticateUser(mobileOrEmail: string, password: string) {
    this.userData.mobileOrEmail = mobileOrEmail;
    return this.httpClient
      .post(API_URLS.LOGIN, { mobileOrEmail, password })
      .pipe(
        map((response: User) => {
          return response;
        })
      );
  }

  public storeUser(loggedInUser) {
    const {
      id,
      mobileNo,
      firstName,
      lastName,
      companyId,
      userType,
      verified,
      authToken,
      passwordChanged,
    } = loggedInUser;
    const trackedUser = {
      id,
      mobileNo,
      firstName,
      lastName,
      companyId,
      userType: userType ? userType.userType : undefined,
      passwordChanged,
      verified,
    };
    const user = {
      ...trackedUser,
      authToken,
      userType,
      ...this.parseJwt(authToken),
    };
    this.firebaseAnalytics.logEvent("user_login", trackedUser);
    this.storageService.setUser(user);
    this.storageService.setStorage(USER, user);
    this.authentication.next(true);
  }

  public unAuthenticateUser() {
    this.authentication.next(false);
    this.storageService.setUser(null);
    this.storageService.setUserTypes(null);
    this.storageService.empty();
  }

  changePassword(currentPassword: string, newPassword: string) {
    return this.httpClient.post(
      API_URLS.CHANGE_PASSWORD(this.storageService.getCurrentUserId()),
      {
        currentPassword,
        newPassword,
      }
    );
  }

  firstTimeLogin(password: string) {
    return this.httpClient.post(
      API_URLS.FIRST_TIME_PASSWORD(this.storageService.getCurrentUserId()),
      { password }
    );
  }

  logout() {
    const userId = this.storageService.getCurrentUserId();
    this.firebaseAnalytics.logEvent("user_logout", { userId });
    this.unAuthenticateUser();
    this.router.navigate([config.superadmin_authentication.route]);
  }

  ngOnDestroy() {
    this.authentication.complete();
  }
}
