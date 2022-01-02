import { User } from "../.././shared/utilities/user.interface";
import { Injectable } from "@angular/core";
import {
  USER,
  LOCAL_STORAGE_PREFIX,
  USER_TYPES,
} from "../.././shared/utilities/app-types";

@Injectable({ providedIn: "root" })
export class StorageService {
  /** holds current logged in user info */
  private user: User;

  //  holds current logged in user status
  public status: { isLoggedIn: boolean };

  // initiating the default values
  constructor() {
    this.status = { isLoggedIn: !!this.getStorage(USER) };
    this.user = this.getStorage(USER) || null;
  }

  /*
   * add/set item to browser localstorage
   * @param {key} the identifier for the local storage item
   * @param {value} the value of localstorage item
   * */
  public setStorage = (key: string, value: any) => {
    const newKey = `${LOCAL_STORAGE_PREFIX}.${key}`;
    // don't add incase there is no value
    if (!value) return;
    // Add to localstorage
    if (typeof value === "object") {
      localStorage.setItem(newKey, JSON.stringify(value));
    } else {
      localStorage.setItem(newKey, String(value));
    }
  };

  public setUser(user) {
    this.user = user;
  }

  public getUser() {
    return this.user;
  }

  public setUserTypes(userTypes) {
    this.setStorage(USER_TYPES, userTypes);
  }

  public getUserTypes() {
    return this.getStorage(USER_TYPES);
  }

  /*
   * read certain item from the session storage or from the cachedSession and
   * parse the item to json if the item is a stringified object.
   * @param  {key} The key of the property to be detected
   * @returns {Object} the returned object holds the value for the detected property
   * */
  public getStorage = (key: string) => {
    try {
      return JSON.parse(localStorage.getItem(`${LOCAL_STORAGE_PREFIX}.${key}`));
    } catch (error) {
      return localStorage.getItem(`${LOCAL_STORAGE_PREFIX}.${key}`);
    }
  };

  /**
   * @return {Array<string>} routes the available routes for the current logged in user
   */
  public getCurrentUserId = () => {
    const storedUser = this.getStorage(USER);
    if (storedUser && storedUser.id) {
      return storedUser.id;
    }
    // logout the user incase he doesn't have a routes list in localStorage
    this.empty();
    return true;
  };

  /**
   * @return {Array<string>} routes the available routes for the current logged in user
   */
  public getUserAvailableRoutes() {
    const storedUser = this.getStorage(USER);
    if (storedUser && storedUser.routes) {
      return storedUser.routes;
    }
    // logout the user incase he doesn't have a routes list in localStorage
    this.empty();
    return [];
  }

  /**
   * @return {Array<string>} roles the available roles for the current logged in user
   */
  public getUserAvailableRoles() {
    const storedUser = this.getStorage(USER);
    if (storedUser.roles) {
      return storedUser.roles;
    }
    // logout the user incase he doesn't have a roles list in localStorage
    this.empty();
    return [];
  }

  public updateUser() {
    this.status = { isLoggedIn: !!this.getStorage(USER) };
    this.user = this.getStorage(USER) || null;
  }

  /*
   * remove certain item from the localStorage and from the cachedSession
   * @param  {key} The key of the property to be removed
   * */
  public remove = (key: string) => {
    localStorage.removeItem(`${LOCAL_STORAGE_PREFIX}.${key}`);
  };

  /*
   * clear all the localStorage items and the cachedSession items
   */
  public empty = () => {
    localStorage.clear();
  };
}
