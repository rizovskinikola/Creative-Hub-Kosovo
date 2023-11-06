import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CalendlyComponent} from "./calendly.component";


@NgModule({
  declarations: [
    CalendlyComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CalendlyComponent
  ]
})
export class CalendlyModule {
}
