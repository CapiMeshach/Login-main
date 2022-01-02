/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import { Injectable } from "@angular/core";
import { UserTypes } from "../../../shared/utilities/user-types.interface";
import { AuthenticationService } from "../../../core/authentication";
import { ConfigLoaderService } from "../../../core/services";
import { NotificationService } from "capiter-ui-components";

@Injectable()
export class UserTypesService {
  private USER_TYPES: { [name: string]: string } = {};

  constructor(
    private authenticationService: AuthenticationService,
    private configLoaderService: ConfigLoaderService,
    private notificationService: NotificationService
  ) {}

  setUserTypes(userTypes: UserTypes[]) {
    userTypes.map((userType) => {
      this.USER_TYPES[userType.userType] = userType.userType;
      return this.USER_TYPES;
    });
  }

  emptyUserTypes() {
    this.USER_TYPES = undefined;
  }

  getUserTypes() {
    if (!this.USER_TYPES) {
      this.retrieveUserTypes();
    } else {
      return this.USER_TYPES;
    }
  }

  retrieveUserTypes() {
    this.authenticationService.authentication.subscribe((res) => {
      if (this.configLoaderService.getUserTypes && res) {
        this.configLoaderService.getUserTypes().subscribe({
          next: (userTypes) => {
            this.setUserTypes(userTypes);
            return this.USER_TYPES;
          },
          error: () => {
            this.notificationService.displayErrorToastr(
              "An error has occured during user types retrieval."
            );
          },
        });
      } else if (!res) {
        this.emptyUserTypes();
      }
    });
  }
}
