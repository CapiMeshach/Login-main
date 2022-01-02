// Angular Modules
import { RouterModule } from "@angular/router";
import { FlexLayoutModule } from "@angular/flex-layout";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

// Custom modules
import { UiComponentsModule } from "capiter-ui-components";

// other
import { CptDebounceClickDirective } from "./directives/debounce/cpt-debounce.directive";

const directives = [CptDebounceClickDirective];

const imports = [
  UiComponentsModule,
  FlexLayoutModule,
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule,
];

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [...directives],
  imports: [...imports],
  exports: [...directives, ...imports],
})
export class SharedModule {}
