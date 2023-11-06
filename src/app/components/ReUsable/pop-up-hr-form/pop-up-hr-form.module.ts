import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopUpHrFormComponent } from './pop-up-hr-form.component';



@NgModule({
  declarations: [PopUpHrFormComponent],
  imports: [
    CommonModule
  ], 
  exports:
  [
    PopUpHrFormComponent
  ]
})
export class PopUpHrFormModule { }
