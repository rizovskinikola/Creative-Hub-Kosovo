import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {GraphicDesignComponent} from "./graphic-design.component";
import {NgxGlideModule} from "ngx-glide";
import {CalculatorModule} from "../ReUsable/calculator/calculator.module";
import {FooterModule} from "../footer/footer.module";
import {FormModule} from "../ReUsable/form/form.module";
import {NavbarModule} from "../navbar/navbar.module";
import {CalendlyModule} from "../ReUsable/calendly/calendly.module";
// import { GraphicPopUpComponent } from '../ReUsable/graphic-pop-up/graphic-pop-up.component';
import { WheelGraphicComponent } from '../ReUsable/wheel-graphic/wheel-graphic.component';
import { GraphicPopUpModule } from '../ReUsable/graphic-pop-up/graphic-pop-up.module';


const routes: Routes = [{
  path: '',
  component: GraphicDesignComponent,
}, {
  path: 'free-course',
  loadChildren: () => import('./graphic-design-free-course/graphic-design-free-course.module')
    .then(m => m.GraphicDesignFreeCourseModule)
}]

@NgModule({
  declarations: [
    GraphicDesignComponent,
    // GraphicPopUpComponent,
    WheelGraphicComponent
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgxGlideModule,
    CalculatorModule,
    FooterModule,
    FormModule,
    NavbarModule,
    CalendlyModule,
    GraphicPopUpModule
  ]
})
export class GraphicDesignModule {
}
