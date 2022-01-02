import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { config } from "../../shared/utilities/page-config/index";
import { ChangePasswordComponent } from "./change-password/change-password.component";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        redirectTo: config.change_password.name,
        pathMatch: "full",
      },
      {
        path: "",
        component: ChangePasswordComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChangePasswordRoutingModule {}
