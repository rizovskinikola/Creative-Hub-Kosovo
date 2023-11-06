import {Component, Input} from '@angular/core';

export interface Question {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-questions-and-answers',
  templateUrl: './questions-and-answers.component.html',
  styleUrls: ['./questions-and-answers.component.css']
})
export class QuestionsAndAnswersComponent {
  @Input() questions!: Question[];
  @Input() borderColor!: string;

  toggleAccordion(elIndex: any): void {
    const accordion = document.getElementById(elIndex);
    accordion?.classList.toggle('active');

    if (accordion?.nextElementSibling) {
      const panel: any = accordion.nextElementSibling;
      if (panel && panel.style.maxHeight) {
        panel.style.maxHeight = '';
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    }
  }
}
