import {AfterViewInit, Component} from '@angular/core';
import {AcademyInfo} from "../../shared/free-course/sticky-card/sticky-card.component";
import { ViewportScroller } from "@angular/common";
import {Lecturer} from "../../shared/free-course/program/program.component";
import {Question} from "../../shared/free-course/questions-and-answers/questions-and-answers.component";
import {dataScienceFreeCourseForm} from "./free-course-form";

@Component({
  selector: 'app-data-science-free-course',
  templateUrl: './data-science-free-course.component.html',
  styleUrls: ['./data-science-free-course.component.css']
})
export class DataScienceFreeCourseComponent implements AfterViewInit {
  constructor(private scroller: ViewportScroller) {}
  
  goDown1() {
    this.scroller.scrollToAnchor("form");
  }

  freeCourseImg: string = 'assets/data-science/free-course/course_img.png';
  borderColor: string = 'linear-gradient(232.45deg, #A3C7FF -17.71%, #2388FF 133.24%)';
  mainColor: string = '#068BE9';
  innerBackgroundColor: string = 'linear-gradient(179.5deg, #FFFFFF 0.43%, #C4C4C4 99.57%)';
  iconsColor: string = 'rgba(155, 155, 155, 1)';
  academyInfo: AcademyInfo = {
    weeks: '1 week',
    hours: '6 hours'
  };
  titleColor: string = 'white'
  whatYouLearn: string = 'In the introductory Data Science course you will learn what data science covers and how data is analyzed. ' +
    'You will understand why Data Science is for everyone. You will see the possibilities for applying Data Science skills.' +
    ' And to best prove it, you yourself will apply Data Science techniques to real-life problems such as: image object detection and network analysis of social media friends (Instagram or Facebook). \n' +
    '<br><br>' +
    'Allow yourself to start in one of the most creative and promising professions today!'
  whatYourLearnBorder: string = 'linear-gradient(232.45deg, #A3C7FF -17.71%, #2388FF 133.24%)';
  programme: string[] = [
    'What is Data science?',
    'Why is Data Science for everyone?',
    '1 & 0: Introduction to Computer and Data Science',
    'Types and applications of Data Science',
    'Related fields - Mathematics and Statistics',
    'Introduction to Data Mining',
    'Exploratory Data Аnalysis workshop: Orange Data Mining Toolbox',
    'Opportunity for work and career in Data Science',
    'Opportunity for work and career in Data Science <br> Data Science in Research <br> Data Science in the stock exchange trade with electricity'
  ]
  lecturer: Lecturer = {
    name: 'Lion Jashari',
    description: 'Data integration specialist with 4+ years of experience.',
    background: 'rgba(40, 94, 140, 1)',
    image: 'assets/data-science/free-course/mentor_img.png',
    imageMobile: 'assets/data-science/free-course/mentor_img_mobile.png'
  }

  questions: Question[] = [{
    question: 'What is the idea behind the free trial in the "Introduction to Data Science?',
    answer: 'The Creative Hub Data Science Academy begins with a free trial. This course is for anybody interested in pursuing a data science career but isn\'t sure if it\'s the right fit for them.' +
      'It\'s also our way to get you up close and personal with the professors, who will be teaching at the Data Science Academy in Creative Hub.' +
      'You will have the opportunity to test the skills and to work independently on homeworks that you will get at the course.'
  }, {
    question: 'What is the schedule and when can I submit my application?',
    answer: 'For the Free Course you can apply on our website.' +
      'The Introductory Course is one weeks and it will be twice a week for 2 hours. The course will be held online. ' +
      '<br>The spaces for the course are limited. If you want to start your career as a data scientist, apply today.'
  }, {
    question: 'When will the Data Science Academy\'s program start, if I like the introductory course?',
    answer: 'The Academy will begin in March.The classes are held twice a week for 2 hours in the Creative Hub ' +
      'Pristina Offices.The schedule is done at the convenience of everyone in the group. The classes are usually ' +
      'from 18:00 - 20:00. All of the students are given access to the Academy\'s Classroom, which provides them' +
      ' with all of the information they\'ll need.'
  }, {
    question: 'How long will it take me to finish the Academy and start earning money?',
    answer: 'On average, students complete the program for 8 months and start working 1-6 months after graduation. ' +
      'Data Scientists, needless to say, are in high demand on the market. If you put out a lot of effort, ' +
      'you should be able to start working as a data scientist fast.'
  }, {
    question: 'What is the price of the Academy?',
    answer: 'The price of the Academy is determined by ' +
      'whether you want to join Just Academy (1199 EUR) or get EU Certified (1599 EUR) or Fast-Track (4999 EUR).<br>' +
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
    dataScienceFreeCourseForm();
  }
}

