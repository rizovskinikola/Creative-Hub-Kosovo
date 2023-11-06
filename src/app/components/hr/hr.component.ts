import { Component, OnInit, AfterViewInit, Renderer2, Inject, ViewChild, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { registerForm, blackFridayForm } from './early-bird';
import { ViewportScroller } from "@angular/common";
import { Pricing } from '../ReUsable/pricing/pricing.model';

@Component({
  selector: 'app-hr',
  templateUrl: './hr.component.html',
  styleUrls: ['./hr.component.css']
})
export class HRComponent implements AfterViewInit {

  @ViewChild('myModal') myModal!: ElementRef;

  closeModal() {
    this.myModal.nativeElement.classList.add("hide");
  }



  goDown() {
    this.scroller.scrollToAnchor("form");
  }

  borderGradient: string = "rgba(163, 199, 255, 1)";
  innerBg: string = "white"

  careerText: string = "Are you tired of feeling stressed because you don’t know how to survive the month?";
  careerTopBg: string = "linear-gradient(257.81deg, #74B3FF -40.45%, #3667C0 85.59%)";
  thickColor: string = "assets/hr/white-thick.svg";
  careerBg: string = "#A3C7FF";
  ulColor: string = "white";

  firstStepText: string = ' <b class="font-weight-bold">Get the skills </b> <br> <br> ' +
    '<h6 class="font-weight-light">Learn all the processes that are necessary for an HR career: Recruitment & Selection, Performance Management, Financials and Legal Aspects. </h6>';
  secondStepText: string = '<b class="font-weight-bold"> Create practical training presentations <br> <br> </b>' +
    " <h6> Our goal is when you go to the next HR interview to be ready with materials created by you. <br>" +
    " At the Academy you will get templates but also you will create training presentations on Coaching, Women in Leadership, Leadership training 1 & 2. </h6> ";
  thirdStepText: string = '<b class="font-weight-bold"> Get ready to work  <br> <br> </b>' +
    " <h6> We can always connect you with companies, help you find internship. </h6> "

  mainBorderColor: string = "#A3C7FF"
  euCertifiedBg: string = "#A3C7FF"
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
      "✓ Access to all classess +50 hours of practical deep dive program for HR entrepreneurs or dedicated HR professionals ",
      "✓ Creative Hub Certificate ",
      "✓ EU Diploma with ECTS credits",
      "✓ SHRM Certification -US Diploma",
      "✓ Hiring Platform Access",
      "✓ Facebook community",
      "✓ Events invitation",
      "✓ Hackathons",
      "✓ Free tools",
      "✓ Guaranteed job placement",
      "✓ Office desk in Creative Hub Pristina",
      "✓ One on one mentoring"
    ]

  arrayPricing: Array<Pricing> = [
    { hours: '88 hours', ects: "", price: 1299 },
    { hours: '88 hours', ects: "assets/hr/eu-ects.png", price: 1699 },
    { hours: '140 hours', ects: "assets/hr/fast-ects.png", price: 3099 },
  ]

  currentAcademy: string = "Just accademy";
  currentInstallments: any = 24;
  currentMonthPrice = 1299 / this.currentInstallments;
  currentAcademyPrice: any = "1299";

  arrayOfAccademy: Array<chooseAcademy> = [
    { name: "Just accademy", price: 1299 },
    { name: "EU Certfied", price: 1699 },
    { name: "Fast Track", price: 3099 },
  ];
  arrayOfInstallments: Array<chooseInstallments> = [
    { month: 15 },
    { month: 24 },
    { month: 36 }
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


  secondOwlOptions2: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
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
        items: 4
      }
    },
    nav: false
  }
  thirdOwlOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
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
        items: 3
      }
    },
    nav: false
  }
  constructor(
    private renderer2: Renderer2,
    private scroller: ViewportScroller,
    @Inject(DOCUMENT) private _document: Document
  ) { }

  ngOnInit() {
    // const s = this.renderer2.createElement('script');
    // s.type = 'text/javascript';
    // s.src = 'https://akoskarova.activehosted.com/f/embed.php?id=197';
    // s.text = ``;
    // this.renderer2.appendChild(this._document.body, s);
  }
  ngAfterViewInit() {
    // initHRFreeCourseForm();
    // earlyBirdForm();
    blackFridayForm();
    registerForm();
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
