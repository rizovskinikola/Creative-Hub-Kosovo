import {AfterViewInit, Component} from '@angular/core';
import { ViewportScroller } from "@angular/common";
import {AcademyInfo} from "../../shared/free-course/sticky-card/sticky-card.component";
import {Lecturer} from "../../shared/free-course/program/program.component";
import {Question} from "../../shared/free-course/questions-and-answers/questions-and-answers.component";
import {initGraphicDesignFreeCourseForm} from "./free-course-form";

@Component({
  selector: 'app-graphic-design-free-course',
  templateUrl: './graphic-design-free-course.component.html',
  styleUrls: ['./graphic-design-free-course.component.css']
})
export class GraphicDesignFreeCourseComponent implements AfterViewInit {
  constructor(private scroller: ViewportScroller) {}
  
  goDown1() {
    this.scroller.scrollToAnchor("form");
  }

  freeCourseImg: string = 'assets/graphic-design/free-course/course_img.png';
  borderColor: string = 'linear-gradient(232.45deg, #E79CF3 5.09%, #9B65F2 75.06%, #2420F9 133.24%)';
  mainColor: string = '#FFC4A4';
  iconsColor: string = '#9B65F2';
  innerBackgroundColor: string = 'linear-gradient(259.59deg, #D2E4FB -34.45%, #FFFFFF 105.46%)';
  academyInfo: AcademyInfo = {
    weeks: '1 week',
    hours: '6 hours'
  };
  nextGroups: string[] = ['20 November, 2021', '20 December, 2021', '20 January, 2022'];
  titleColor: string = '#0A0A0A'
  whatYouLearn: string = 'In the introductory Design and content creation course you will learn design basics, ' +
    'how design thinking works and which skills and tools you need in order to start working as graphic designer. ' +
    'You will get an opportunity to edit images and start using Photoshop tools on your own. \n' +
    '<br><br>' +
    'Allow yourself to start in one of the most creative and promising careers today!'
  whatYourLearnBorder: string = 'linear-gradient(232.45deg, #E79CF3 5.09%, #9B65F2 75.06%, #2420F9 133.24%)';
  programme: string[] = [
    'Introduction to Graphic Design',
    'The work environment',
    'Basic image editing ',
    'Working with selections',
    'Work with layers',
    'Working with text'
  ]
  lecturer: Lecturer = {
    name: 'Kujtim Aliu',
    description: 'Experience of over 10 years in the field of Web & Graphic Design. Focused on UX / UI, Mr. Aliu has worked in various companies at home and abroad.',
    background: 'linear-gradient(180deg, #441B4B 0%, #232024 100%)',
    image: 'assets/graphic-design/free-course/mentor_img.png',
    imageMobile: 'assets/graphic-design/free-course/mentor_img.png'
  }

  questions: Question[] = [{
    question: 'What is the idea behind the free trial in the "Introduction to Graphic Design"?',
    answer: 'The Creative Hub Graphic Design Academy begins with a free trial. This course is for anybody ' +
      'interested in pursuing a graphic design job but isn\'t sure if it\'s the right fit for them.' +
      'It\'s also our way to get you up close and personal with the professors, who will be teaching at the Graphic ' +
      'Design Academy in Creative Hub.<br> You will have the opportunity to test the skills and to work independently on ' +
      'homeworks that you will get at the course.'
  }, {
    question: 'What is the schedule and when can I submit my application?',
    answer: 'For the Free Trial you can apply on our website.' +
      'The Introductory Course is one week and it will be three times a week for 2 hours. The course will be held online. ' +
      '<br>The spaces for the course are limited. If you want to start your career as a designer, apply today.'
  }, {
    question: 'When will the Graphic Design Academy\'s program start, if I like the introductory course?',
    answer: 'The Academy will begin in March.The classes are held twice a week for 2 hours in the Creative Hub ' +
      'Pristina Offices.The schedule is done at the convenience of everyone in the group. The classes are usually ' +
      'from 18:00 - 20:00. All of the students are given access to the Academy\'s Classroom, which provides them' +
      ' with all of the information they\'ll need.'
  }, {
    question: 'How long will it take me to finish the Academy and start earning money?',
    answer: 'On average, students complete the program for 8 months and start working 1-3 months after graduation. ' +
      'Graphic Designers, needless to say, are in high demand on the market. If you put out a lot of effort, ' +
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
    initGraphicDesignFreeCourseForm();
  }
}
