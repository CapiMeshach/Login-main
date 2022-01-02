import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { AppRoutingModule } from "./app.routing";

import { AppComponent } from "./app.component";
import { MatCardModule } from "@angular/material/card";
import { SharedModule } from "./shared/shared.module";
import { CoreModule } from "./core/core.module";
import { AngularFireModule } from "@angular/fire";
import { AngularFireAnalyticsModule } from "@angular/fire/analytics";
import { AuthenticationModule } from "./authentication/authentication.module";
import { environment } from "../environments/environment";

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    CoreModule,
    SharedModule,
    AuthenticationModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    ReactiveFormsModule,
    MatCardModule,
    RouterModule,
    AppRoutingModule,
  ],
  entryComponents: [],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
