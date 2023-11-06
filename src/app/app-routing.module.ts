import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomepageComponent} from './components/homepage/homepage.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {CartComponent } from './components/cart/cart.component';
import {PayComponent } from './components/pay/pay.component';
import {MyProfileComponent } from './components/my-profile/my-profile.component';
import { MyPasswordComponent } from './components/my-password/my-password.component';
import { ProgramsAndBootcampsComponent } from './components/programs-and-bootcamps/programs-and-bootcamps.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {
  path: 'front-end', 
  loadChildren: () => import('./components/front-end/front-end.module').then(m => m.FrontEndModule)
  },
  {
    path: 'data-science',
    loadChildren: () => import('./components/data-science/data-science.module').then(m => m.DataScienceModule)
  },
  
  {path: 'digital-marketing',
  loadChildren: () => import('./components/digital-marketing/digital-marketing.module').then(m => m.DigitalMarketingModule)
  },
  {
    path: 'graphic-design',
    loadChildren: () => import('./components/graphic-design/graphic-design.module').then(m => m.GraphicDesignModule)
  },
  {
    path: 'hr',
    loadChildren: () => import('./components/hr/hr.module').then(m => m.HrModule)
  },
  {
    path: 'getting-hired',
    loadChildren: () => import('./components/getting-hired/getting-hired.module').then(m => m.GettingHiredModule)
  },
  { path: 'cart', component: CartComponent},
  { path: 'pay', component: PayComponent},
  { path: 'my-profile', component: MyProfileComponent},
  { path: 'password', component: MyPasswordComponent},
  { path: 'programs-and-bootcamps', component: ProgramsAndBootcampsComponent},
  {path: '**', component: NotFoundComponent},

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      initialNavigation: 'enabled',
      scrollOffset: [0, 0],
      anchorScrolling: "enabled",
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
