import { Optional, SkipSelf, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserTypesService } from "../core/services";
import { throwIfAlreadyLoaded } from "../core/guards";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { AppHttpInterceptor, HttpErrorInterceptor } from "../core/interceptors";
import { NotificationService } from "capiter-ui-components";

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [
    UserTypesService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppHttpInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      deps: [NotificationService],
      multi: true,
    },
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, "CoreModule");
  }
}
