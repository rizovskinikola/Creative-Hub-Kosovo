import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import { GraphicPopUpComponent } from './graphic-pop-up.component';

@NgModule({
  declarations: [GraphicPopUpComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    GraphicPopUpComponent
  ]
})
export class GraphicPopUpModule { }
