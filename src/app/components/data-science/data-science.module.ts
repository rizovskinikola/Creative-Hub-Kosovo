import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {DataScienceComponent} from "./data-science.component";
import { NgxGlideModule } from 'ngx-glide';


const routes: Routes = [{
  path: '',
  component: DataScienceComponent,
}, {
  path: 'free-course',
  loadChildren: () => import('./data-science-free-course/data-science-free-course.module')
    .then(m => m.DataScienceFreeCourseModule)
}]

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    NgxGlideModule,
    RouterModule.forChild(routes)
  ]
})
export class DataScienceModule {
}
