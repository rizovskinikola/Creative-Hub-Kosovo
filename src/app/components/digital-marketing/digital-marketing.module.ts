import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {DigitalMarketingComponent} from "./digital-marketing.component";
import { NgxGlideModule } from 'ngx-glide';
import { FastTrackComponent } from './fast-track/fast-track.component';


const routes: Routes = [{
  path: '',
  component: DigitalMarketingComponent,
}, {
  path: 'free-course',
  loadChildren: () => import('./digital-marketing-free-course/digital-marketing-free-course.module')
    .then(m => m.DigitalMarketingFreeCourseModule)
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
export class DigitalMarketingModule {
}
