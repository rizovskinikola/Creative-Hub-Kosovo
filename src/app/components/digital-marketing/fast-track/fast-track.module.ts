import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FastTrackComponent } from './fast-track.component';
import {RouterModule, Routes} from "@angular/router";
import {NavbarModule} from "../../navbar/navbar.module";
import {FooterModule} from "../../footer/footer.module";



const routes: Routes = [{
  path: '',
  component: FastTrackComponent
}]

@NgModule({
  declarations: [
    FastTrackComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NavbarModule,
    FooterModule,
  ]
})
export class FastTrackModule { }

