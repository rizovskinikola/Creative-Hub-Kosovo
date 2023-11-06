import {AfterViewInit, Component, OnInit, Renderer2, Inject, ViewChild, ElementRef} from '@angular/core';
import {OwlOptions} from 'ngx-owl-carousel-o';
import { ViewportScroller } from "@angular/common";
import {dataScienceFreeCourseForm} from './data-science-free-course/free-course-form';
import { registerForm, blackFridayForm} from './early-bird';
import { DOCUMENT } from '@angular/common';
import { Pricing } from '../ReUsable/pricing/pricing.model';

@Component({
  selector: 'app-data-science',
  templateUrl: './data-science.component.html',
  styleUrls: ['./data-science.component.css']
})
export class DataScienceComponent implements AfterViewInit, OnInit {
  @ViewChild('myModal') myModal!: ElementRef;

  closeModal() {
    this.myModal.nativeElement.classList.add("hide");
  }
  goDown() {
    this.scroller.scrollToAnchor("form");
  }
  borderGradient: string = "linear-gradient(257.81deg, #74b3ff -40.45%, #3667c0 85.59%)";

  careerText: string = "Do you feel insecure because you have no prior knowledge in programming?";
  careerTopBg: string = "linear-gradient(232.45deg, #4F9FF1 -17.71%, #001F49 133.24%)";
  thickColor: string = "assets/front-end/white-thick.svg";
  careerBg: string = "#141236"
  ulColor: string = "white";

  
  firstStepText: string = ' <b class="font-weight-bold">Lay the foundation for knowledge and skills in data science </b> <br> <br> ' +
    '<h6 class="font-weight-light">Upgrade your basic knowledge with basic knowledge and skills in the field of data science. </h6>' ;
  secondStepText: string = '<b class="font-weight-bold"> Specialize with an advanced program.  <br> <br> </b>' +
    " <h6>Continue with the training and enter the advanced modules of the Academy, gain the necessary skills and knowledge to start working as data scientist.<br> </h6> ";
  thirdStepText: string = '<b class="font-weight-bold"> Career achievement and graduation <br> <br> </b>' +
    " <h6> Complete the Academy program successfully, start the hiring process with our " +
    "   Student Success Manager from the Career Center and get hired in one of our partner companies or in a company of your choice. </h6>"

  mainBorderColor: string = "linear-gradient(232.45deg, #4F9FF1 -17.71%, #001F49 133.24%)"
  euCertifiedBg: string = "#068BE9"
  justAcademyInfo: Array<string> =
    [
      "✓ Access to all classess",
      "✓ Creative Hub Certificate",
      "✓ Hiring Platform Access",
      "✓ Facebook community",
      "✓ Events invitation",
      "✓ Hackathons",
      "✓ Guaranteed job placement",
      "✓ Office desk in Creative Hub Pristina"
    ];
  euCertifiedInfo: Array<string> =
    [
      "✓ Access to all classess",
      "✓ Creative Hub Certificate",
      "✓ EU Diploma with ECTS credits",
      "✓ Hiring Platform Access",
      "✓ Facebook community",
      "✓ Events invitation",
      "✓ Hackathons",
      "✓ Free tools",
      "✓ Guaranteed job placement",
      "✓ Office desk in Creative Hub Pristina"
    ]
    arrayPricing: Array<Pricing> = [
      { hours: '152 hours',ects:"",  price: 1499},
      { hours: '152 hours',ects:"assets/front-end/eu-ects.png",  price: 1899 },
      { hours: '140 hours',ects:"assets/hr/fast-ects.png",  price: 3099 },
    ]
  currentAcademy: string = "Just accademy";
  currentInstallments: any = 24;
  currentMonthPrice = 1499 / this.currentInstallments;
  currentAcademyPrice: any = "1499";

  arrayOfAccademy: Array<chooseAcademy> = [
    {name: "Just accademy", price: 1499},
    {name: "EU Certfied", price: 1899},
    // {name: "Fast Track", price: 4999},
  ];
  arrayOfInstallments: Array<chooseInstallments> = [
    {month: 15},
    {month: 24},
    {month: 36}
  ];


  calcAcademy(academy: any) {
    this.currentAcademy = academy.name;
    this.currentAcademyPrice = academy.price;
    this.currentMonthPrice = academy.price / this.currentInstallments

  }

  calcInstallment(installments: any) {
    this.currentInstallments = installments.month;
    this.currentMonthPrice = this.currentAcademyPrice / this.currentInstallments
  }

  ngAfterViewInit() {
    // dataScienceFreeCourseForm();
    // earlyBirdForm();
    registerForm();
    blackFridayForm();
  }
  constructor(
    private scroller: ViewportScroller ,
    private renderer2: Renderer2,
    @Inject(DOCUMENT) private _document : Document
  ) {}

  ngOnInit() {
    // const s = this.renderer2.createElement('script');
    // s.type = 'text/javascript';
    // s.src = 'https://akoskarova.activehosted.com/f/embed.php?id=191';
    // s.text = ``;
    // this.renderer2.appendChild(this._document.body, s);
 }


  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 2700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: false
  }


}

class chooseAcademy {
  constructor(
    public name?: string,
    public price?: number
  ) {
  }
}

class chooseInstallments {
  constructor(
    public month?: any
  ) {
  }
}
