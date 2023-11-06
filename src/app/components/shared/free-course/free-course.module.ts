import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StickyCardComponent} from './sticky-card/sticky-card.component';
import { WhatYouLearnComponent } from './what-you-learn/what-you-learn.component';
import { ProgramComponent } from './program/program.component';
import { FreeProgramForComponent } from './free-program-for/free-program-for.component';
import { QuestionsAndAnswersComponent } from './questions-and-answers/questions-and-answers.component';


@NgModule({
  declarations: [
    StickyCardComponent,
    WhatYouLearnComponent,
    ProgramComponent,
    FreeProgramForComponent,
    QuestionsAndAnswersComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StickyCardComponent,
    WhatYouLearnComponent,
    ProgramComponent,
    FreeProgramForComponent,
    QuestionsAndAnswersComponent
  ]
})
export class FreeCourseModule {
}
