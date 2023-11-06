import {AfterViewInit, Component, OnInit, Renderer2, Inject, ViewChild, ElementRef } from '@angular/core';
import {OwlOptions} from 'ngx-owl-carousel-o';
import {initDigitalMarketingFreeCourseForm} from './digital-marketing-free-course/free-course-form';
import { DOCUMENT } from '@angular/common';
import { Pricing } from '../ReUsable/pricing/pricing.model';
import { registerForm, freeVideo } from './register-form';
import { ViewportScroller } from "@angular/common";
// import { blackFridayForm } from './register-form';

@Component({
  selector: 'app-digital-marketing',
  templateUrl: './digital-marketing.component.html',
  styleUrls: ['./digital-marketing.component.css']
})
export class DigitalMarketingComponent implements OnInit, AfterViewInit {
  @ViewChild('myModal') myModal!: ElementRef;

  closeModal() {
    this.myModal.nativeElement.classList.add("hide");
  }

  goDown() {
    this.scroller.scrollToAnchor("form");
  }

  borderGradient: string = "#FA9600";
  innerBg: string = "#F8F8F8";

  careerText: string = "Do you feel insecure because you have no prior knowledge in marketing?";
  careerTopBg: string = "linear-gradient(232.45deg, #FF820F -17.71%, #FFC85C 133.24%)";
  thickColor: string = "assets/digital-marketing/yellow-check.svg";
  careerBg: string = "#F8F8F8";
  ulColor: string = "black";


  firstStepText: string = ' <b class="font-weight-bold">Lay the foundation for knowledge and skills in digital marketing </b> <br> <br> ' +
  '<h6 class="font-weight-light">First step towards a successful career is to get the skills. Here you will learn the skills you need in order to be able to apply for digital marketer or start as a freelancer. </h6>';
secondStepText: string = '<b class="font-weight-bold">  Be ready to apply for jobs <br> <br> </b>' +
  " <h6>You will start with a 360 digital marketing strategy following content writing, social media advertising, paid ads, email marketing, SEO, landing pages and retargeting strategy. <br> </h6> ";
thirdStepText: string = '<b class="font-weight-bold"> Get ready to work  <br> <br> </b>' +
  " <h6> You will get free access to the advertising tools that Creative Hub uses so that you can practice and be ready once you start working. <br> <br>" +
  "You will also complete individual project after the modules and a final project which will be delivery of a conversion-ready digital marketing strategy for a company.  </h6> " ;


  mainBorderColor: string = "#FA9600"
  euCertifiedBg: string = "#FA9600"
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
    ];
    fastTrackInfo: Array<string> =
    [
      "✓ Access to all classess + 70 hours of work with mentor",
      "✓ Creative Hub Certificate ",
      "✓ EU Diploma with ECTS credits",
      "✓ CPD Certification - UK Diploma",
      "✓ Hiring Platform Access",
      "✓ Facebook community",
      "✓ Events invitation",
      "✓ Hackathons",
      "✓ Free tools",
      "✓ Guaranteed job placement",
      "✓ Office desk in Creative Hub Pristina"
    ]

    arrayPricing: Array<Pricing> = [
      { hours: '90 hours',ects:"",  price: 1299},
      { hours: '90 hours',ects:"assets/digital-marketing/eu-ects.png",  price: 1699 },
      { hours: '160 hours',ects:"assets/digital-marketing/fast-ects.png",  price: 3099 },
    ]

  currentAcademy: string = "Just accademy";
  currentInstallments: any = 24;
  currentMonthPrice = 1299 / this.currentInstallments;
  currentAcademyPrice: any = "1299";

  arrayOfAccademy: Array<chooseAcademy> = [
    {name: "Just accademy", price: 1299},
    {name: "EU Certfied", price: 1699},
    {name: "Fast Track", price: 3099},
  ];
  arrayOfInstallments: Array<chooseInstallments> = [
    {month: 15},
    {month: 24},
    {month: 36}
  ];

  ngAfterViewInit() {
    // initDigitalMarketingFreeCourseForm();
    // blackFridayForm();
    // registerForm();
    // freeVideo();
  }


  calcAcademy(academy: any) {
    this.currentAcademy = academy.name;
    this.currentAcademyPrice = academy.price;
    this.currentMonthPrice = academy.price / this.currentInstallments

  }

  calcInstallment(installments: any) {
    this.currentInstallments = installments.month;
    this.currentMonthPrice = this.currentAcademyPrice / this.currentInstallments


  }

  customOptionsClasses: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    autoplay: true,
    navSpeed: 5700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: false
  }
  constructor(
    private renderer2: Renderer2,
    private scroller: ViewportScroller ,
    @Inject(DOCUMENT) private _document : Document
  ) {}

  ngOnInit() {
    // const s = this.renderer2.createElement('script');
    // s.type = 'text/javascript';
    // s.src = 'https://akoskarova.activehosted.com/f/embed.php?id=181';
    // s.text = ``;
    // this.renderer2.appendChild(this._document.body, s);
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


