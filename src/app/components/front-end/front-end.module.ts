import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {FrontEndComponent} from "./front-end.component";
import { NgxGlideModule } from 'ngx-glide';


const routes: Routes = [{
  path: '',
  component: FrontEndComponent,
}, {
  path: 'free-course',
  loadChildren: () => import('./front-end-free-course/front-end-free-course.module')
    .then(m => m.FrontEndFreeCourseModule)
}]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxGlideModule,
    RouterModule.forChild(routes)
  ]
})
export class FrontEndModule {
}
