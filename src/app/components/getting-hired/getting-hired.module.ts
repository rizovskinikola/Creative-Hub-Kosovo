import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GettingHiredComponent } from './getting-hired.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [{
  path: '',
  component: GettingHiredComponent,
}]

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class GettingHiredModule { }
