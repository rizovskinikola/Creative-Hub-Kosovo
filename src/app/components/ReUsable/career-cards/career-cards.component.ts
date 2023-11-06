import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-career-cards',
  templateUrl: './career-cards.component.html',
  styleUrls: ['./career-cards.component.css']
})
export class CareerCardsComponent implements OnInit {

  @Input() careerText!: string; 
  @Input() careerTopBg!: string;
  @Input() thickColor!: string;
  @Input() careerBg!: string;
  @Input() ulColor!: string;
  

  constructor() { }

  ngOnInit(): void {
  }

}
