import { SharedModule } from "../../shared/shared.module";
import { NgModule } from "@angular/core";
import { ChangePasswordComponent } from "./change-password/change-password.component";
import { RouterModule } from "@angular/router";
import { ChangePasswordRoutingModule } from "./change-password.routing.module";

@NgModule({
  declarations: [ChangePasswordComponent],
  imports: [SharedModule, RouterModule, ChangePasswordRoutingModule],
})
export class ChangePasswordModule {}
