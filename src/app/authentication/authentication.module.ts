import { NgModule } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { RouterModule } from "@angular/router";
import { SharedModule } from "./.././shared/shared.module";
import { CreatePasswordComponent } from "./create-password/create-password.component";

@NgModule({
  imports: [SharedModule, RouterModule],
  declarations: [LoginComponent, CreatePasswordComponent],
})
export class AuthenticationModule {}
