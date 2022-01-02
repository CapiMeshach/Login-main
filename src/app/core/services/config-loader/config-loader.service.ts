import { tap } from "rxjs/operators";
import { API_URLS } from "../../../shared/utilities";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { Injectable } from "@angular/core";
import { UserTypes } from "../../../shared/utilities";
import { StorageService } from "../../../core/services";

@Injectable({
  providedIn: "root",
})
export class ConfigLoaderService {
  private regex: any;

  private userTypes: Array<UserTypes>;

  constructor(
    private httpClient: HttpClient,
    private storageService: StorageService
  ) {}

  /** get all regex after application initialized */
  public getRegex(): Observable<any> {
    if (this.regex) {
      return of(this.regex);
    }
    return this.httpClient.get(API_URLS.REGEX).pipe(
      tap((response) => {
        this.regex = response;
      })
    );
  }

  /** get all user types after application initialized */
  public getUserTypes(): Observable<any> {
    if (this.storageService.getUserTypes()) {
      return of(this.storageService.getUserTypes());
    }
    return this.httpClient.get(API_URLS.ALL_USER_TYPES).pipe(
      tap((response) => {
        this.storageService.setUserTypes(response);
        return response;
      })
    );
  }
}
