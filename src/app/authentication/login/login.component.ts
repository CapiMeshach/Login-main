import { config, MenuItemService } from "../../shared/utilities";
import { NotificationService } from "capiter-ui-components";
import { AuthenticationService } from "../../core/authentication";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["../authentication.module.scss"],
})
export class LoginComponent implements OnInit {
  public form: FormGroup;

  public isLoading = false;

  constructor(
    private router: Router,
    public authenticationService: AuthenticationService,
    private formBuilder: FormBuilder,
    private notificationService: NotificationService,
    private menuItems: MenuItemService
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      mobileEmailField: "",
      passwordField: "",
    });
  }

  redirectUser(passwordChanged: any) {
    if (passwordChanged) {
      this.notificationService.displaySuccessMessage("Welcome To Capiter");
      this.menuItems.preparePermitedLinks();
      const route = this.menuItems.getInitialRoute();
      if (route) {
        this.router.navigate([route]);
      } else {
        //this.router.navigate([config.home.route]);
        console.log("redirect to home");
      }
    } else {
      this.router.navigate([config.create_password.route]);
    }
  }

  submit() {
    if (this.form.valid) {
      this.isLoading = true;
      this.authenticationService
        .authenticateUser(
          this.form.controls.mobileEmailField.value,
          this.form.controls.passwordField.value
        )
        .subscribe({
          next: (res) => {
            this.isLoading = false;
            this.authenticationService.storeUser(res);
            this.redirectUser(res.passwordChanged);
          },
          error: () => {
            this.isLoading = false;
          },
        });
    }
  }
}
