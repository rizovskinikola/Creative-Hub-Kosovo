import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FrontEndFreeCourseComponent} from './front-end-free-course.component';
import {RouterModule, Routes} from "@angular/router";
import {NavbarModule} from "../../navbar/navbar.module";
import {FooterModule} from "../../footer/footer.module";
import {FreeCourseModule} from "../../shared/free-course/free-course.module";


const routes: Routes = [{
  path: '',
  component: FrontEndFreeCourseComponent
}]

@NgModule({
  declarations: [
    FrontEndFreeCourseComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NavbarModule,
    FooterModule,
    FreeCourseModule
  ]
})
export class FrontEndFreeCourseModule {
}
