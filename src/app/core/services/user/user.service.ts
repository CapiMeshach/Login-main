import { Injectable } from "@angular/core";
import { StorageService } from "../../../core/services";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private storageService: StorageService) {}

  getUserName() {
    const user = this.storageService.getUser();
    return `${user?.firstName || ""} ${user?.lastName || ""}`;
  }

  getUserRole() {
    const user = this.storageService.getUser();
    return user?.role;
  }

  getUserId() {
    const user = this.storageService.getUser();
    return user?.id;
  }

  getUserMobileNo() {
    const user = this.storageService.getUser();
    return user?.mobileNo;
  }
}
