import {AfterViewInit, Component, OnInit} from '@angular/core';
import { ViewportScroller } from "@angular/common";
import {AcademyInfo} from "../../shared/free-course/sticky-card/sticky-card.component";
import {Lecturer} from "../../shared/free-course/program/program.component";
import {Question} from "../../shared/free-course/questions-and-answers/questions-and-answers.component";
import {initFrontendFreeCourseForm} from "./free-course-form";

@Component({
  selector: 'app-front-end-free-course',
  templateUrl: './front-end-free-course.component.html',
  styleUrls: ['./front-end-free-course.component.css']
})
export class FrontEndFreeCourseComponent implements AfterViewInit {
  constructor(private scroller: ViewportScroller) {}
  
  goDown1() {
    this.scroller.scrollToAnchor("form");
  }

  freeCourseImg: string = 'assets/front-end/free-course/course_img.png';
  borderColor: string = 'linear-gradient(232.45deg, #A3C7FF -17.71%, rgba(6, 139, 233, 1) 133.24%)';
  mainColor: string = 'rgba(6, 139, 233, 1)';
  iconsColor: string = 'rgba(155, 155, 155, 1)';
  innerBackgroundColor: string = 'linear-gradient(259.59deg, #D2E4FB -34.45%, #FFFFFF 105.46%)';
  academyInfo: AcademyInfo = {
    weeks: '3 weeks',
    hours: '10 hours'
  };


  titleColor: string = 'white'
  whatYouLearn: string = ' In the introductory Front End course, you will learn what coding is and how it works.' +
    'You will see real projects and use the Front-end skills that you have gained' +
    'In the end, you will get a task to code a simple website and see if this is really a career for you.' +
    '<br><br>' +
    'Allow yourself to begin your journey in one of today\'s most fast-growing and exciting professions!'
  whatYourLearnBorder: string = 'linear-gradient(232.45deg, #A3C7FF -17.71%, #2388FF 133.24%)';
  programme: string[] = [
    'Introduction to code editors ',
    'Introduction to HTML',
    'HTML structure, basic tags and attributes',
    'Use of tables, forms, div and lists',
    'Work with images, image maps and videos',
    'Introduction to CSS',
    'Seletors and attributes',
    'The position property',
    'Typography and colors',
    'Building your first webpage'
  ]
  lecturer: Lecturer = {
    name: 'Fitim Krasniqi',
    description: 'Senior Front-end developer at Prime.Experienced Web Developer with a demonstrated history of working in the computer software industry. Skilled in JavaScript, jQuery & Mobile Applications.',
    background: 'rgba(40, 94, 140, 1)',
    image: 'assets/front-end/free-course/mentor_img.png',
    imageMobile: 'assets/front-end/free-course/mentor_img_mobile.png'
  }

  questions: Question[] = [{
    question: 'What is the idea behind the free trial in the “Introduction to Front-end Programming Course”? ',
    answer: 'The Creative Hub Front-end Academy begins with a free trial.' +
      ' This course is for anybody interested in pursuing a front-end career but isn\'t sure if it\'s the right fit for them.' +
      'It\'s also our way to get you up close and personal with the professors, who will be teaching at the Front-end Academy in Creative Hub.' +
      'You will have the opportunity to test the skills and to work independently on homeworks that you will get at the course.'
  }, {
    question: 'What is the schedule and when can I submit my application?',
    answer: 'For the Free Trial you can apply on our website.' +
      'The Introductory Course is three weeks and it will be twice a week for 2 hours. The course will be held online. ' +
      '<br>The spaces for the course are limited. If you want to start your IT career, apply today.'
  }, {
    question: 'When will the Front-end Academy\'s program start, if I like the introductory course?',
    answer: 'The Academy will begin in March.The classes are held twice a week for 2 hours in the Creative Hub ' +
      'Pristina Offices.The schedule is done at the convenience of everyone in the group. The classes are usually ' +
      'from 18:00 - 20:00. All of the students are given access to the Academy\'s Classroom, which provides them' +
      ' with all of the information they\'ll need.'
  }, {
    question: 'How long will it take me to finish the Academy and start earning money?',
    answer: 'On average, students complete the program for 8 months and start working 1-6 months after graduation. ' +
      'Front-end developers, needless to say, are in high demand on the market.' +
      ' If you put out a lot of effort, you should be able to locate a junior front-end developer position fast.'
  }, {
    question: 'What is the price of the Academy?',
    answer: 'The price of the Academy is determined by ' +
      'whether you want to join Just Academy (1199 EUR) or get EU Certified (1499 EUR) .<br>' +
      'The Academies may all be paid for in 36 monthly payments of Raiffeisen Bank, NLB Bank, or TEB. You can also pay ' +
      'in 15 monthly installments through Creative Hub.'
  }, {
    question: 'What kind of career options are open to me if I complete the Academy?',
    answer: 'During the Academy, our mentors will track your progress and provide feedback on your initiatives.' +
      'If you are really dedicated and you have high points prior to graduating, our coordinator Edonisa will match you with companies that have open positions for hiring.' +
      'You\'ll be able to display your GIt portfolio in front of software companies and obtain an internship or a job.'
  }]

  ngAfterViewInit() {
    initFrontendFreeCourseForm();
  }
}
