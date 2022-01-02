import { config } from "./shared/utilities";

import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AuthorizationGuard, AuthenticationGuard } from "./core/guards";
import { CreatePasswordComponent } from "./authentication/create-password/create-password.component";
import { LoginComponent } from "./authentication/login/login.component";

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        {
          path: "",
          redirectTo: config.superadmin_authentication.name,
          pathMatch: "full",
        },
        {
          path: config.superadmin_authentication.name,
          data: { route: config.superadmin_authentication.route },
          component: LoginComponent,
          canActivate: [AuthenticationGuard],
          runGuardsAndResolvers: "always",
        },
        {
          path: config.create_password.name,
          data: { route: config.create_password.route },
          component: CreatePasswordComponent,
          canActivate: [AuthenticationGuard],
          runGuardsAndResolvers: "always",
        },
      ],
      {
        useHash: false,
        onSameUrlNavigation: "reload",
        relativeLinkResolution: "legacy",
      }
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
