import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RegisterComponent} from "./register.component";
import {ReactiveFormsModule} from "@angular/forms";
import {NavbarService} from "../../../components/navbar/navbar.service";


@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    RegisterComponent
  ],
  providers: [
    NavbarService
  ]
})
export class RegisterModule {
}
