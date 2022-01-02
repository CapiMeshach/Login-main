/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import { Injectable } from "@angular/core";
import * as moment from "moment";
import * as _ from "lodash";
import { UserTypes } from "../../../shared/utilities/user-types.interface";
import { ConfigLoaderService, UserTypesService } from "../../../core/services";
import { AuthenticationService } from "../../../core/authentication";

@Injectable({
  providedIn: "root",
})
export class HelperService {
  public regexList: any[] = [];

  public usersList: Array<UserTypes> = [];

  constructor(
    private configLoaderService: ConfigLoaderService,
    private authenticationService: AuthenticationService,
    private userTypesService: UserTypesService
  ) {
    if (this.configLoaderService.getRegex) {
      this.configLoaderService.getRegex().subscribe((res) => {
        this.regexList = res;
      });
    }
    this.authenticationService.authentication.subscribe((res) => {
      if (this.configLoaderService.getUserTypes && res) {
        this.configLoaderService.getUserTypes().subscribe((userTypes) => {
          this.userTypesService.setUserTypes(userTypes);
        });
      }
    });
  }

  getRegexByKey(key: string): string {
    return decodeURI(this.regexList[key] || "");
  }

  convertDateToTimestamp = (value) => {
    if (value) {
      return Date.parse(moment(value).format("LL"));
    }
    return true;
  };

  removeUnderScoreFromString = (value) => {
    if (value && /_|-/g.test(value)) {
      return (value = value.replace(/_|-/g, " "));
    }
    return value;
  };

  /**
   *
   * @param url
   * @param params
   * @description we only disregard the value if it's not an empty/null/undefined object/array  or an empty string
   */
  generateUrl = (url, params) => {
    let newUrl = url;
    if (params) {
      Object.keys(params).forEach((key) => {
        if (
          (_.isObject(params[key]) && _.isEmpty(params[key])) ||
          params[key] === undefined ||
          params[key] === null ||
          params[key] === ""
        ) {
          return "";
        }
        newUrl += newUrl.includes("?")
          ? `&${key}=${params[key]}`
          : `?${key}=${params[key]}`;
        return true;
      });
    }
    return newUrl;
  };

  formatBytes = (bytes, decimals?) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals || 2;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${parseFloat((bytes / k ** i).toFixed(dm))} ${sizes[i]}`;
  };
}
