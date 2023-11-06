import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FrontEndComponent} from './components/front-end/front-end.component';
import {DataScienceComponent} from './components/data-science/data-science.component';
import {DigitalMarketingComponent} from './components/digital-marketing/digital-marketing.component';
import {HRComponent} from './components/hr/hr.component';
import {HomepageComponent} from './components/homepage/homepage.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LayoutModule} from '@angular/cdk/layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {HiringPartnersComponent} from './components/ReUsable/hiring-partners/hiring-partners.component';
import {CommunityComponent} from './components/ReUsable/community/community.component';
import {MeetandgreetComponent} from './components/ReUsable/meetandgreet/meetandgreet.component';
import {WhyStudyComponent} from './components/ReUsable/why-study/why-study.component';
import {NavbarModule} from "./components/navbar/navbar.module";
import {FooterModule} from "./components/footer/footer.module";
import {CalculatorModule} from "./components/ReUsable/calculator/calculator.module";
import {FormModule} from "./components/ReUsable/form/form.module";
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './components/cart/cart.component';
import { PayComponent } from './components/pay/pay.component';
import { CalendlyModule } from './components/ReUsable/calendly/calendly.module';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { MyAccNavigationComponent } from './components/ReUsable/my-acc-navigation/my-acc-navigation.component';
import { MyPasswordComponent } from './components/my-password/my-password.component';
import { ProgramsAndBootcampsComponent } from './components/programs-and-bootcamps/programs-and-bootcamps.component';
import { TagInputModule } from 'ngx-chips';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { ModaltestComponent } from './components/modaltest/modaltest.component';
import { PopUpHrFormComponent } from './components/ReUsable/pop-up-hr-form/pop-up-hr-form.component';
import { PopUpHrFormModule } from './components/ReUsable/pop-up-hr-form/pop-up-hr-form.module';
import { PopUpDigitalFormComponent } from './components/ReUsable/pop-up-digital-form/pop-up-digital-form.component';
import { PopUpCodeCampComponent } from './components/ReUsable/pop-up-code-camp/pop-up-code-camp.component';
import { WheelHrComponent } from './components/ReUsable/wheel-hr/wheel-hr.component';
import { WheelDigitalComponent } from './components/ReUsable/wheel-digital/wheel-digital.component';
import { GraphicPopUpModule } from './components/ReUsable/graphic-pop-up/graphic-pop-up.module';
import { HeaderCardsComponent } from './components/ReUsable/header-cards/header-cards.component';
import { CareerCardsComponent } from './components/ReUsable/career-cards/career-cards.component';
import { StepsToSuccessComponent } from './components/ReUsable/steps-to-success/steps-to-success.component';
import { WhyCreativeTableComponent } from './components/ReUsable/why-creative-table/why-creative-table.component';
import { FeaturedInComponent } from './components/ReUsable/featured-in/featured-in.component';
import { PricingComponent } from './components/ReUsable/pricing/pricing.component';
import { StudentCardComponent } from './components/ReUsable/student-card/student-card.component';
import { WheelFrontEndComponent } from './components/ReUsable/wheel-front-end/wheel-front-end.component';
import { TestemonialsComponent } from './components/ReUsable/testemonials/testemonials.component';
import { DardaniaVideoCompaniesComponent } from './components/ReUsable/dardania-video-companies/dardania-video-companies.component';
import { GettingHiredComponent } from './components/getting-hired/getting-hired.component';
import { EnvironmentalComponent } from './components/ReUsable/environmental/environmental.component';
import { WheelDataComponent } from './components/ReUsable/wheel-data/wheel-data.component';








@NgModule({
  declarations: [
    AppComponent,
    FrontEndComponent,
    DataScienceComponent,
    DigitalMarketingComponent,
    HRComponent,
    HomepageComponent,
    NotFoundComponent,
    HiringPartnersComponent,
    CommunityComponent,
    MeetandgreetComponent,
    WhyStudyComponent,
    CartComponent,
    PayComponent,
    MyProfileComponent,
    MyAccNavigationComponent,
    MyPasswordComponent,
    ProgramsAndBootcampsComponent,
    ModaltestComponent,
    PopUpDigitalFormComponent,
    PopUpCodeCampComponent,
    WheelHrComponent,
    WheelDigitalComponent,
    HeaderCardsComponent,
    CareerCardsComponent,
    StepsToSuccessComponent,
    WhyCreativeTableComponent,
    FeaturedInComponent,
    PricingComponent,
    StudentCardComponent,
    WheelFrontEndComponent,
    TestemonialsComponent,
    DardaniaVideoCompaniesComponent,
    GettingHiredComponent,
    EnvironmentalComponent,
    WheelDataComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    CarouselModule,
    NavbarModule,
    FooterModule,
    CalculatorModule,
    FormModule,
    ReactiveFormsModule,
    HttpClientModule,
    CalendlyModule,
    TagInputModule, 
    FormsModule,
    MatSlideToggleModule,
    PopUpHrFormModule,
    GraphicPopUpModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
