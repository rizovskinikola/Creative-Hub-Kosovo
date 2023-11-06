import { AfterViewInit, Component, OnInit, Renderer2, Inject, ViewChild, ElementRef } from '@angular/core';

import * as AOS from 'aos';
import { ViewportScroller } from "@angular/common";
import { initFrontendFreeCourseForm } from './front-end-free-course/free-course-form';
import { DOCUMENT } from '@angular/common';
import {  registerForm } from './early-bird';
import { Pricing } from '../ReUsable/pricing/pricing.model';
// import { blackFridayForm } from './early-bird';

@Component({
  selector: 'app-front-end',
  templateUrl: './front-end.component.html',
  styleUrls: ['./front-end.component.css'],
})
export class FrontEndComponent implements OnInit, AfterViewInit {
  @ViewChild('myModal') myModal!: ElementRef;

  closeModal() {
    this.myModal.nativeElement.classList.add("hide");
  }

  constructor(
    private scroller: ViewportScroller ,
    private renderer2: Renderer2,
    @Inject(DOCUMENT) private _document: Document
    ) {}
  FR: string = "</>";
  LN: string = "<lecturer_name>";
  break: string = "<break>";
  SB: string = "<short_bio>"
  goDown1() {
    this.scroller.scrollToAnchor("form");
  }

  borderGradient: string = "linear-gradient(257.81deg, #74b3ff -40.45%, #3667c0 85.59%)";
  innerBg: string = "#222625"

  careerText: string = "Do you feel insecure because you think only “smart people” can learn Data Science?";
  careerTopBg: string = "linear-gradient(232.45deg, #4F9FF1 -17.71%, #001F49 133.24%)";
  thickColor: string = "assets/front-end/white-thick.svg";
  careerBg: string = "#141236";
  ulColor: string = "white";

  firstStepText: string = ' <b class="font-weight-bold">Lay the foundation for knowledge and skills in front-end development </b> <br> <br> ' +
    '<h6 class="font-weight-light">First step towards a successful career is to get the skills. Here you will learn the skills you need in ' +
    " order to be able to apply for digital marketer or start as a freelancer. </h6>";
  secondStepText: string = '<b class="font-weight-bold"> Practice it. <br> <br> </b>' +
    " <h6>You will start with building static websites with HTML & CSS and you will end up with knowledge on the most in-demand programming language - React. <br>" +
    " Did you know that developers that know React are paid 20% higher than regular front-end developers? </h6> ";
  thirdStepText: string = '<b class="font-weight-bold"> Be ready <br> to apply for jobs <br> <br> </b>' +
    " <h6> With the portfolio that you will build you will be ready to apply for jobs even" +
    "   if you are without experience. We are here to help you! </h6>"
    
  mainBorderColor: string = "linear-gradient(232.45deg, #4F9FF1 -17.71%, #001F49 133.24%)"
  euCertifiedBg: string = "#068BE9"
  justAcademyInfo: Array<string> =
    [
      "✓ Web Fundamentals Pre-program",
      "✓ Access to all classess",
      "✓ Creative Hub Certificate",
      "✓ Hiring Platform Access",
      "✓ Facebook community",
      "✓ Events invitation",
      "✓ Hackathons",
      "✓ Guaranteed job placement"
    ];
  euCertifiedInfo: Array<string> =
    [
      "✓ Web Fundamentals Pre-program",
      "✓ Access to all classess",
      "✓ Creative Hub Certificate",
      "✓ EU Diploma with ECTS credits",
      "✓ Hiring Platform Access",
      "✓ Facebook community",
      "✓ Events invitation",
      "✓ Hackathons",
      "✓ Guaranteed job placement"
    ];
    arrayPricing: Array<Pricing> = [
      { hours: '150 hours',ects:"",  price: 1499},
      { hours: '150 hours',ects:"assets/front-end/eu-ects.png",  price: 1899 },
      { hours: '140 hours',ects:"assets/hr/fast-ects.png",  price: 3099 },
    ]

  ngOnInit() {
    // const s = this.renderer2.createElement('script');
    // s.type = 'text/javascript';
    // s.src = 'https://akoskarova.activehosted.com/f/embed.php?id=223';
    // s.text = ``;
    // this.renderer2.appendChild(this._document.body, s);

    AOS.init();
  }

  ngAfterViewInit() {
    // initFrontendFreeCourseForm();
    registerForm();
    // blackFridayForm();
  }
}



