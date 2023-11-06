import {AfterViewInit, Component} from '@angular/core';
import { ViewportScroller } from "@angular/common";
import {AcademyInfo, scrollTo} from "../../shared/free-course/sticky-card/sticky-card.component";
import {Lecturer} from "../../shared/free-course/program/program.component";
import {Question} from "../../shared/free-course/questions-and-answers/questions-and-answers.component";
import {initDigitalMarketingFreeCourseForm} from "./free-course-form";

@Component({
  selector: 'app-digital-marketing-free-course',
  templateUrl: './digital-marketing-free-course.component.html',
  styleUrls: ['./digital-marketing-free-course.component.css']
})
export class DigitalMarketingFreeCourseComponent implements AfterViewInit {
  
  constructor(private scroller: ViewportScroller) {}
  
  goDown1() {
    this.scroller.scrollToAnchor("form");
  }

  freeCourseImg: string = 'assets/digital-marketing/free-course/course_img.png';
  borderColor: string = 'linear-gradient(232.45deg, #008183 -17.71%, #014497 133.24%)';
  innerBackgroundColor: string = 'linear-gradient(179.5deg, #FFFFFF 0.43%, #C4C4C4 99.57%)';
  mainColor: string = 'rgba(40, 94, 140, 1)';
  iconsColor: string = 'black';
  academyInfo: AcademyInfo = {
    weeks: '1 week',
    hours: '6 hours'
  };
  titleColor: string = 'white'
  whatYouLearn: string = 'Students will have the chance to "enter" the marketing business and gain a genuine understanding and affection for it.' +
    ' They\'ll hear real-life situations from professionals and be inspired to go through the material on their own through a variety of actual circumstances. ' +
    'They will work on homeworks and complete a small digital marketing strategy project.';
  whatYourLearnBorder: string = 'linear-gradient(232.45deg, #A3C7FF -17.71%, #2388FF 133.24%)';
  programme: string[] = [
    'What is marketing & digital marketing?',
    'What does digital marketer do?',
    'The marketing team, who is doing what?',
    'Digital marketing as part of overall strategy',
    'Performance marketing introduction',
    'Positioning'
  ]
  lecturer: Lecturer = {
    name: ' Valon Ibraimi',
    description: 'Experienced marketing professional with 10 years of experience in the field of marketing and PR.',
    background: 'linear-gradient(232.45deg, #014497 -17.71%, #008183 133.24%)',
    image: 'assets/digital-marketing/free-course/mentor_img.png',
    imageMobile: 'assets/digital-marketing/free-course/mentor_img_mobile.png'
  }

  questions: Question[] = [{
    question: 'What is the idea behind the free trial in the "Introduction to Digital Marketing"?',
    answer: 'The Creative Hub Digital Marketing Academy begins with a free trial.' +
      'This course is for anybody interested in pursuing a digital marketing career but isn\'t sure if it\'s the right fit for them.' +
      'It\'s also our way to get you up close and personal with the professors, who will be teaching at the Digital Marketing Academy in Creative Hub.' +
      'You will have the opportunity to test the skills and to work independently on homeworks that you will get at the free trial.'
  }, {
    question: 'What is the schedule and when can I submit my application?',
    answer: 'For the Free Trial you can apply on our website.' +
      'The Introductory Course is one week and it will be twice a week for 2 hours. The course will be held online. ' +
      '<br>The spaces for the course are limited. If you want to start your career as a designer, apply today.'
  }, {
    question: 'When will the  Digital Marketing Academy\'s program start, if I like the introductory course?',
    answer: 'The Academy will begin in March.The classes are held twice a week for 2 hours in the Creative Hub ' +
      'Pristina Offices.The schedule is done at the convenience of everyone in the group. The classes are usually ' +
      'from 18:00 - 20:00. All of the students are given access to the Academy\'s Classroom, which provides them' +
      ' with all of the information they\'ll need.'
  }, {
    question: 'How long will it take me to finish the Academy and start earning money?',
    answer: 'On average, students complete the program for 8 months and start working 1-6 months after graduation. ' +
      'Digital Marketers, needless to say, are in high demand on the market. If you put out a lot of effort, ' +
      'you should be able to start working in a creative agency or as a freelancer fast.'
  }, {
    question: 'What is the price of the Academy?',
    answer: 'The price of the Academy is determined by ' +
      'whether you want to join Just Academy (999 EUR) or get EU Certified (1599 EUR) or Fast-Track (2999 EUR).<br>' +
      'The Academies may all be paid for in 36 monthly payments of Raiffeisen Bank, NLB Bank, or TEB. You can also pay ' +
      'in 15 monthly installments through Creative Hub.'
  }, {
    question: 'What kind of career options are open to me if I complete the Academy?',
    answer: 'During the Academy, our mentors will track your progress and provide feedback on your initiatives.If ' +
      'you are really dedicated and you have high points prior to graduating, our coordinator Edonisa will match you ' +
      'with companies that have open positions for hiring.You\'ll be able to display your designer portfolio in front ' +
      'of marketing agencies or companies and obtain an internship or a job.'
  }]

  ngAfterViewInit() {
    initDigitalMarketingFreeCourseForm();
  }
}
