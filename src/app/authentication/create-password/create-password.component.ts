import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthenticationService } from "../../core/authentication";
import { NotificationService } from "capiter-ui-components";
import { StorageService } from "../../core/services";
import { config, MenuItemService } from "../../shared/utilities";

@Component({
  selector: "app-create-password",
  templateUrl: "./create-password.component.html",
  styleUrls: ["../authentication.module.scss"],
})
export class CreatePasswordComponent implements OnInit {
  public form: FormGroup;

  public isLoading = false;

  constructor(
    private router: Router,
    public authenticationService: AuthenticationService,
    public storageService: StorageService,
    private formBuilder: FormBuilder,
    private notificationService: NotificationService,
    private menuItems: MenuItemService
  ) {}

  ngOnInit() {
    const user = this.storageService.getUser();
    this.form = this.formBuilder.group({
      mobileEmailField: user.mobileNo || user.email,
      passwordField: "",
      confirmPasswordField: "",
    });
  }

  passwordIsMatching(): boolean {
    const isMatching =
      this.form.controls.passwordField.value ===
      this.form.controls.confirmPasswordField.value;
    if (!isMatching) {
      this.notificationService.displayErrorToastr("passwords should match");
    }
    return isMatching;
  }

  redirectUser() {
    const route = this.menuItems.getInitialRoute();
    if (route) {
      this.router.navigate([route]);
    } else {
      //this.router.navigate([config.home.route]);
      console.log("redirect to hom");
    }
  }

  submit() {
    if (this.form.valid && this.passwordIsMatching()) {
      this.isLoading = true;
      this.authenticationService
        .firstTimeLogin(this.form.controls.passwordField.value)
        .subscribe({
          next: () => {
            this.notificationService.displaySuccessMessage(
              "Welcome To Capiter"
            );
            this.isLoading = false;
            this.menuItems.preparePermitedLinks();
            this.redirectUser();
          },
          error: () => {
            this.isLoading = false;
          },
        });
    }
  }
}
