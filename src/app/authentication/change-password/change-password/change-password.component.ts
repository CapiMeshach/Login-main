import { Component, OnChanges } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthenticationService } from "../../../core/authentication";
import { NotificationService } from "capiter-ui-components";
import { config } from "../../../shared/utilities/page-config/index";

@Component({
  selector: "app-change-password",
  templateUrl: "./change-password.component.html",
  styleUrls: ["./change-password.component.scss"],
})
export class ChangePasswordComponent implements OnChanges {
  public form: FormGroup;

  public isLoading = false;

  public notSameError = false;

  currentPassword: string;

  newPassword: string;

  constructor(
    private router: Router,
    public authenticationService: AuthenticationService,
    private formBuilder: FormBuilder,
    private notificationService: NotificationService
  ) {
    this.form = this.formBuilder.group(
      {
        oldPassword: "",
        newPasswordField: [""],
        reTypeNewPasswordField: [""],
      },
      { validator: this.checkPasswords }
    );
  }

  ngOnChanges() {
    this.notSameError = this.form.hasError("notSame");
  }

  submit() {
    this.notSameError = false;
    if (this.form.valid) {
      const { controls } = this.form;
      this.isLoading = true;
      this.currentPassword = controls.oldPassword.value;
      this.newPassword = controls.newPasswordField.value;
      this.authenticationService
        .changePassword(this.currentPassword, this.newPassword)
        .subscribe({
          next: () => {
            this.notificationService.displaySuccessMessage(
              "Password Changed Successfully"
            );
            //this.router.navigate([config.home.route]);
            console.log("redirect to home");
            this.isLoading = false;
          },
          error: () => {
            this.isLoading = false;
          },
        });
    }
  }

  checkPasswords = (group: FormGroup) => {
    const pass = group.get("newPasswordField").value;
    const confirmPass = group.get("reTypeNewPasswordField").value;
    return pass === confirmPass ? null : { notSame: true };
  };
}
