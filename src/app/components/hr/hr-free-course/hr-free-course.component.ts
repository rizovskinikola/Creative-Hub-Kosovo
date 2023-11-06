import {AfterViewInit, Component} from '@angular/core';
import { ViewportScroller } from "@angular/common";
import {AcademyInfo} from "../../shared/free-course/sticky-card/sticky-card.component";
import {Lecturer} from "../../shared/free-course/program/program.component";
import {Question} from "../../shared/free-course/questions-and-answers/questions-and-answers.component";
import {initHRFreeCourseForm} from "./free-course-form";

@Component({
  selector: 'app-hr-free-course',
  templateUrl: './hr-free-course.component.html',
  styleUrls: ['./hr-free-course.component.css']
})
export class HrFreeCourseComponent implements AfterViewInit {

  constructor(private scroller: ViewportScroller) {}
  
  goDown1() {
    this.scroller.scrollToAnchor("form");
  }
  freeCourseImg: string = 'assets/Images/HrImages/free-course/course_img.png';
  borderColor: string = 'rgba(18, 61, 126, 1)';
  mainColor: string = 'rgba(184, 30, 255, 1)';
  iconsColor: string = 'black';
  innerBackgroundColor: string = 'linear-gradient(201.7deg, #D6E7FF -6.52%, #7DCBE8 116.52%)';
  academyInfo: AcademyInfo = {
    weeks: '1 week',
    hours: '6 hours'
  };

  titleColor: string = 'white'
  whatYouLearn: string = 'On the sessions we’ll talk about HR’s role in a company,  HR topics and terms will be demystified. ' +
    '<br><br>' +
    'Listeners will have the opportunity to enter the profession, to understand and love it. They will hear examples from real experiences and will be motivated to dive into the material themselves through a number of case studies and case studies. They will work on homeworks and develop a project for the future of HR teams.';
  whatYourLearnBorder: string = 'rgba(18, 61, 126, 1)';
  programme: string[] = [
    'What is human resources management? ',
    'Strategies and managing human resoources',
    'Performance management process',
    'Working relations',
    'Recruitment and selection',
    'Compensation and benefits'
  ]
  lecturer: Lecturer = {
    name: 'Arta Koka Grubi',
    description: 'Head of Human Resources and Development at IPKO Telecommunications with 15 years of experience.',
    background: 'linear-gradient(257.81deg, #74B3FF -40.45%, #3667C0 85.59%)',
    image: 'assets/Images/HrImages/free-course/mentor_img.png',
    imageMobile: 'assets/Images/HrImages/free-course/mentor_img_mobile.png'
  }

  questions: Question[] = [{
    question: 'What is the idea behind the free trial in the "Introduction to Human Resources"?',
    answer: 'The Creative Hub HR Academy begins with a free trial. This course is for anybody interested in pursuing a career in human resources but isn\'t sure if it\'s the right fit for them.' +
      'It\'s also our way to get you up close and personal with the professors, who will be teaching at the HR Academy in Creative Hub.' +
      'You will have the opportunity to test the skills and to work independently on homeworks that you will get at the course.'
  }, {
    question: 'What is the schedule and when can I submit my application?',
    answer: 'For the Free Trial you can apply on our website.' +
      'The Introductory Course is one week and it will be twice a week for 2 hours. The course will be held online. ' +
      '<br>The spaces for the course are limited. If you want to start your career as a HR, apply today.'
  }, {
    question: 'When will the HR Academy\'s program start, if I like the introductory course?',
    answer: 'The Academy will begin in March.The classes are held twice a week for 2 hours in the Creative Hub ' +
      'Pristina Offices.The schedule is done at the convenience of everyone in the group. The classes are usually ' +
      'from 18:00 - 20:00. All of the students are given access to the Academy\'s Classroom, which provides them' +
      ' with all of the information they\'ll need.'
  }, {
    question: 'How long will it take me to finish the Academy and start earning money?',
    answer: 'On average, students complete the program for 6 months and start working 1-6 months after graduation.' +
      ' HR associates, needless to say, are in high demand on the market. If you put out a lot of effort, you should be able to start working as a HR fast.'
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
    initHRFreeCourseForm();
  }
}
