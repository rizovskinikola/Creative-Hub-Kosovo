import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { HRComponent } from "./hr.component";
import { NgxGlideModule } from 'ngx-glide';


const routes: Routes = [{
  path: '',
  component: HRComponent,
}, {
  path: 'free-course',
  loadChildren: () => import('./hr-free-course/hr-free-course.module')
    .then(m => m.HrFreeCourseModule)
},
{
  path: 'fast-track',
  loadChildren: () => import('./fast-track/fast-track.module')
    .then(m => m.FastTrackModule)
}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxGlideModule,
    RouterModule.forChild(routes)
  ]
})
export class HrModule {
}
